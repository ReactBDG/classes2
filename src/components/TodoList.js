import { Component } from "react";
import { CompButton } from "./CompButton";
import InputElement from "./InputElement";

export default class TodoList extends Component {
  state = {
    toDos: [{ whatToDo: "Seyak@ havaqel" }],
    inputValue: "",
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        inputValue: "",
        toDos: [...prevState.toDos, { whatToDo: this.state.inputValue }],
      };
    });
  }

  render() {
    return (
      <div>
        <InputElement
          samo={this.state.inputValue}
          onChange={(ev) => {
            this.setState({ inputValue: ev.target.value });
          }}
        />
        <CompButton onClick={this.handleClick} />
        {/* <InputElement  /> */}
        <ul>
          {this.state.toDos.map((el) => (
            <li>{el.whatToDo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
