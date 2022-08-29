import { useState } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { AuthContext } from "./context/AuthContext";
import { Route, Switch } from "react-router-dom";
import Landin from "./components/home/Landin";
import Home from "./components/home/Home";
// import Either from "./components/either/Either";

// import FourOhFour from "./components/FourOhFour";

function App() {
  // const [user, setUser] = useState(null);

  const [auth, setAuth] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function signinCallback(email, password) {
    const route = "https://nyumbani-move.herokuapp.com/api/login";

    console.log(route);

    return await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      console.log("inside fetch");
      return r.json();
      // if (r.ok) {
      //   r.json().then((user) => setUser(user));
      // }
    });
  }

  async function signupCallback(name, email, phone, password) {
    const route = "https://nyumbani-move.herokuapp.com/api/signup";

    return await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    }).then((r) => {
      return r.json();
    });
  }

  async function signoutCallback() {
    const route = "https://nyumbani-move.herokuapp.com/api/signout";

    await fetch(route, { method: "DELETE" })
      // .then(history.push("/"));
      .then(console.log("signed out"));
  }

  // useEffect(() => {
  //   fetch("https://nyumbani-move.herokuapp.com/api/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  const authData = {
    auth,
    setAuth,
    signinCallback,
    signupCallback,
    signoutCallback,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        <div className="App">
          <main>
            {/* {user ? (
              <Switch>
                <Route path="/">
                  <Landin user={user} setUser={setUser}/>
                </Route>
              </Switch>
            ) : (
              <Switch>
                <Route path="/signup">
                  <Signup setUser={setUser} />
                </Route>
                <Route path="/signin">
                  <Signin setUser={setUser} />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
              </Switch>
            )} */}

            <Switch>
              <Route exact path="/">
                <Landin />
              </Route>
              <Route path="/signup/">
                <Signup />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
