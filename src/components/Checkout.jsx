import { useActionState, useContext } from "react";
import { MealsContext } from "../store/meals-context";

import Submit from "./Submit";

export default function Checkout({ onClose, cartItems }) {

  const { submitOrder } = useContext(MealsContext);

  const [formState, formAction] = useActionState(submitAction, {
    errors: null,
  });

  async function submitAction(prevFormState, formData) {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const address = formData.get("address");
    const postal = formData.get("postal");
    const city = formData.get("city");

    // Perform validation
    let errors = [];

    if (fullname.trim() === "" || fullname.length < 3) {
      errors.push("Please enter a valid name.");
    }

    if (email.trim() === "" || !email.includes("@")) {
      errors.push("Please enter a valid email address.");
    }

    if (address.trim() === "" || address.length < 5) {
      errors.push("Please enter a valid address.");
    }

    if (postal.trim() === "") {
      errors.push("Postal code must not be empty.");
    }

    if (city.trim() === "" || city.length < 2) {
      errors.push("Please enter a valid city.");
    }

    async function teste() {
      console.log("Testing function");
    }

    // If there are no errors, return the form data
    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          fullname,
          email,
          address,
          postal,
          city,
        },
      };
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    console.log("Cart Items: ", cartItems)

    // Submit the Form if no errors
    const cartItemsWithDetails = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    const checkoutData = {
      fullname,
      email,
      address,
      postal,
      city,
      cartItems: cartItemsWithDetails,
    };
    await submitOrder(checkoutData); // To only clear the form after successful submission
  
    // Reset the form State
    return { errors: null, enteredValues: null };
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * +item.price, 0
  );

  return (
    <>
      <h2>Checkout</h2>
      <p>
        Total Amount: <span>R$ {totalAmount.toFixed(2)}</span>
      </p>
      <form action={formAction}>
        <div className="control">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            defaultValue={formState.enteredValues?.fullname}
          />
        </div>
        <div className="control">
          <label htmlFor="">E-mail Address</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={formState.enteredValues?.email}
          />
        </div>
        <div className="control">
          <label htmlFor="adress">Street</label>
          <input
            type="text"
            id="address"
            name="address"
            defaultValue={formState.enteredValues?.address}
          />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id="postal"
              name="postal"
              defaultValue={formState.enteredValues?.postal}
            />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={formState.enteredValues?.city}
            />
          </div>
        </div>
        {formState.errors && (
          <div className="error">
            {formState.errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div className="modal-actions">
          <button className="text-button" type="button" onClick={onClose}>
            Close
          </button>
          <Submit />
        </div>
      </form>
    </>
  );
}
