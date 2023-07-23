import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import { auth } from "./firebase"
import FinalCalenderRoutes from "./components/FinalCalendarRoutes";



function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged
    (userAuth =>{ 
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)

      }

    })
    return unsubscribe
  }, [])
  return (
    <div>
      {/* if signed in, show Home Page, else remain in Signin page */}
      {user ? <FinalCalenderRoutes/> : <SignIn/> } 



    </div>
  );
}

export default App;

