import { Button } from "antd";

export const Signin = (props) => {
  return (
    <div className="flex justify-center mt-2">
      <Button type="primary" onClick={() => props.handleLogin(!props.auth)}>Login</Button>
    </div>
  );
}
export default Signin;