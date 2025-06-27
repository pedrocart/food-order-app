export default function Cart({
  cartItems,
  onClose,
  openCheckout,
  handlePlusItem,
  handleMinusItem,
}) {
  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.length === 0 && (
            <p className="empty-cart">Your cart is empty.</p>
          )}
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <li className="cart-item" key={item.name}>
                <p>
                  {item.name} - {item.quantity} x R${" "}
                  {item.quantity * +item.price}
                </p>
                <div className="cart-item-actions">
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => handlePlusItem(item.id)}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => handleMinusItem(item.id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <p>
          <span>
            <strong>
              Total Amount: R${" "}
              {cartItems
                .reduce((total, item) => total + item.quantity * +item.price, 0)
                .toFixed(2)}
            </strong>
          </span>
        </p>
        <div className="modal-actions">
          <button className="text-button" type="button" onClick={onClose}>
            Close
          </button>
          <button className="button" type="button" onClick={openCheckout}>
            Go To Checkout
          </button>
        </div>
      </div>
    </>
  );
}
