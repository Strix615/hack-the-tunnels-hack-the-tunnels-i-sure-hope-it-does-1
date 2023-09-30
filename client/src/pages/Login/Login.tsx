import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("email")
  const [password, setPassword] = useState("password")

  const attemptLogin = async () => {
    try {
      const message = await login(email, password);
      //"admin@email.com", "password"
      setMessage(message);
    } catch (error) {
      setMessage("Inorrect login email or password")
      console.log(error);
    }
  };


  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}



export default Login;
