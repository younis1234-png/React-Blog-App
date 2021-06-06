import { Link } from "@material-ui/core";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="long__form">
        <label>Email</label>
        <input
          className="login__input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="login__button">Login</button>
      </form>
      <button className="login__registerButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
