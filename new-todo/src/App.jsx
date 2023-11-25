import { Component } from "react";
import "./App.css";
import Column from "./components/Column";
import InputModal from "./components/InputModal";

class App extends Component {
  state = {
    showModal: false,
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="main-wrapper">
        <div className="task-column-wrapper">
          <Column columnName="Backlog" action={this.handleShowModal} />
          <Column columnName="In Progress" action={this.handleShowModal} />
          <Column columnName="Done" action={this.handleShowModal} />
        </div>
        <InputModal
          show={this.state.showModal}
          handleClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
