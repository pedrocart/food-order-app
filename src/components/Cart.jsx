export default function Cart({ onClose, openCheckout }) {
  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          <li className="cart-item">
            <p>Name of Food - 1 x R$ 19,99</p>
            <div className="cart-item-actions">
              <button type="button" className="text-button">
                +
              </button>
              1
              <button type="button" className="text-button">
                -
              </button>
            </div>
          </li>
          <li className="cart-item">
            <p>Name of Food - 1 x R$ 19,99</p>
            <div className="cart-item-actions">
              <button type="button" className="text-button">
                +
              </button>
              1
              <button type="button" className="text-button">
                -
              </button>
            </div>
          </li>
          <li className="cart-item">
            <p>Name of Food - 1 x R$ 19,99</p>
            <div className="cart-item-actions">
              <button type="button" className="text-button">
                +
              </button>
              1
              <button type="button" className="text-button">
                -
              </button>
            </div>
          </li>
        </ul>
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
