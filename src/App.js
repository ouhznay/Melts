import { useEffect, useState } from "react";
import FinalCalender from "./components/FinalCalender";
import SignIn from "./components/SignIn";
import { auth } from "./firebase"


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
      {user ? <FinalCalender/> : <SignIn/> }


    </div>
  );
}

export default App;

