export default function Cart() {
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
      </div>
      
    </>
  );
}
