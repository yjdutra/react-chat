import { auth, provider } from "../../services/firebase";
import * as C from "./styles";

export const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.Button onClick={handleSignin}>Login with Google account</C.Button>
    </C.Container>
  );
};
