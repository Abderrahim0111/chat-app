import { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorsField, seterrorsField] = useState("");

  const signUpHandler = async () => {
    setloading(true);
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      
      if (data.notAllFields) {
        seterrorsField(data.notAllFields)
      }
      if (data.userExist) {
        seterrorsField(data.userExist)
      }
      if (data.usernameTaken) {
        seterrorsField(data.usernameTaken)
      }
      if (data._id) {
        console.log(data.name)
        navigate("/app/welcome")
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
        <h1>Create your account</h1>
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
            setemail(eo.target.value);
          }}
          type="email"
          name="email"
          placeholder="Email"
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
        type="submit"
          onClick={(eo) => {
            eo.preventDefault();
            signUpHandler();
          }}
        >
          SIGN UP
        </button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
