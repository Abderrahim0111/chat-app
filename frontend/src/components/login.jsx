import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [errorsField, seterrorsField] = useState("");
  const navigate = useNavigate();
  const loginHandler = async () => {
    setloading(true);
    try {
      const res = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.emailNotFound) {
        seterrorsField(data.emailNotFound);
      }
      if (data.wrongPassword) {
        seterrorsField(data.wrongPassword);
      }
      if (data._id) {
        console.log(data.name);
        navigate("/app/welcome");
      }
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };
  return (
    <div className="login">
      <div className="left">
        <img src="../../public/logo.png" alt="" />
      </div>
      <div className="right">
        <h4>{errorsField}</h4>
        <h1>Login to your account</h1>
        <input
          onChange={(eo) => {
            setname(eo.target.value);
          }}
          type="text"
          name="name"
          placeholder="Username"
        />
        <input
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          onClick={(eo) => {
            eo.preventDefault();
            loginHandler();
          }}
        >
          Login
        </button>
        <p>
          Dont't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
    </div>
  );
};

export default Login;
