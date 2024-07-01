import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RegisterContext from "./components/RegisterContext";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    topic: "Arts and Culture",
    isRegistered: false,
    showError: false,
  };
  chaneName = (name) => {
    this.setState({ name });
  };
  changeTopic = (topic) => {
    this.setState({ topic });
  };
  registername = () => {
    this.setState({ isRegistered: true });
  };
  updateError = () => {
    const { name, topic, isRegistered, showError } = this.state;
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeTopic: this.changeTopic,
          changeName: this.changeName,
          registername: this.registername,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/register" Component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    );
  };
}
export default App;
