import { Outlet } from "react-router-dom";

const FirstShowed = () => {
  return (
    <div className="login">
      <div className="left">
        <img src="../../public/logo.png" alt="" />
      </div>
      <div className="right">
        <h1>Login to your account</h1>
        <input type="email" name="" id="" placeholder="enter your email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="enter your password"
        />
        <button>Login</button>
        <p>
          Dont't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default FirstShowed;
