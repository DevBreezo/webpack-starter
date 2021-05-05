import React from "react";
import { render } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import style from "./index.scss";

const toastOptions = {
  hideProgressBar: false,
  autoClose: 1000
};

class App extends React.Component {
  render() {
    return (
      <div className={style.reactToastifyContainer}>
        <button onClick={() => toast("Hello", toastOptions)}>notify</button>

        <ToastContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
