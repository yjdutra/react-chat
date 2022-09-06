import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../src/services/firebase";
import { Login } from "../src/components/Login";
import { Loading } from "../src/components/Loading";

import * as C from "../styles/chat";

import Sidebar from "../src/components/Sidebar";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
}
