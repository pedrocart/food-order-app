export default function Checkout({ onClose }) {
  return (
    <>
      <h2>Checkout</h2>
      <p>
        Total Amount: <span>R$ 59,97</span>
      </p>
      <form action="">
        <div className="control">
          <label htmlFor="">Full Name</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="">E-mail Address</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="">Street</label>
          <input type="text" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="">Postal Code</label>
            <input type="text" />
          </div>
          <div className="control">
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
        </div>
        <div className="error">
          <p>
            Please enter a valid name and email address. Postal code must not be
            empty.
          </p>
        </div>
      </form>
      <div className="modal-actions">
        <button className="text-button" type="button" onClick={onClose}>
          Close
        </button>
        <button className="button" type="button">
          Submit Order
        </button>
      </div>
    </>
  );
}
