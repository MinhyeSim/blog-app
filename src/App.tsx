import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";

function App() {
  
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenicated] = useState<boolean>(
      !!auth?.currentUser
  );
  console.log("isAuthenticated:", isAuthenticated);
  return (
    <>
      <ToastContainer />
      <Router isAuthenticated={isAuthenticated} />
    </>
  )
}

export default App;
