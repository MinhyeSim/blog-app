import { useState } from "react";
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";

import Router from "./components/Router";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenicated] = useState<boolean>(
    !!auth?.currentUser
  );
  return <Router isAuthenticated={isAuthenticated} />;
}

export default App;
