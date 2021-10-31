import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import Login from "./components/Login/Login";
import Registar from "./components/Registar/Registar";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import MyRides from "./components/MyRides/MyRides";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRouter path="/OrderPlace/:bookId">
              <OrderPlace></OrderPlace>
            </PrivateRouter >
            <Route path="/MyRids">
              <MyRides></MyRides>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registar">
              <Registar></Registar>
            </Route>
            <Route>
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
