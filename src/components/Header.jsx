import Logo from '../assets/logo.jpg';

export default function Header({ onType, cartItems }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
        <h1>My Food Order App</h1>
        <button className="button" type="button" onClick={() => onType('cart')}>
          Cart ({cartItems.length} Items)
        </button>
      </div>
    </header>
  );
}
