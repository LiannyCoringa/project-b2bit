function Login() {
  return (
    <div className="login-container">
      <h1 className="title">
        b2b
        <span id="span">It</span>
      </h1>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" placeholder="Username" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
