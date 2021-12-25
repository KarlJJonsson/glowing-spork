import "./Signin.css"

export const Signin = (props) => {
  return (
    <div className='row' id='outer-box'>
      <div className="row" style={{padding: 10, textAlign: "center", fontSize: "xx-large", paddingTop: 20}}>
        {console.log("2")}
        <button onClick={() => props.handleLogin(!props.auth)}>
          Login
        </button>
        {/* <span>
          <p style={{textAlign: "center"}}>Please login to proceed to the accounts page</p>
          <a style={{color: "white", textDecoration: "none"}}>
          <div className='row' id='inner-box'>Login</div>
          </a>  
        </span> */}
      </div>
    </div>
  );
}
export default Signin;