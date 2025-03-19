import { useEffect, useState } from "react";
import { app, db } from "./firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

import Router from "./components/Router";

function App() {
  
  const auth = getAuth(app);

  const [init, setInit] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
      !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  console.log("isAuthenticated:", isAuthenticated);
  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> :<Loader />}
    </>
  )
}

export default App;
