import React, { useState } from "react";
// import "./styles.css";
import GoogleLogin from "react-google-login";
import ReactShare from "../../components/store/ReactShare"

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div className="App">
    <ReactShare />
      <h1>Login with google</h1>
      <h2>歡迎: {name}</h2>
      <h2>{email}</h2>

      <img src={url} alt={name} />

      <GoogleLogin
        clientId="948674925767-o40p7pthnhkp2quco9nvon70lfcu8624.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

    </div>
  );
}
