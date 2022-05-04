import { Component } from "react";
import { CompButton } from "./CompButton";
import InputElement from "./InputElement";
let a = 6;
export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: [{ whatToDo: "Seyak@ havaqel" }],
      inputValue: "",
    };
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick =  () => {
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
        <ul>
          {this.state.toDos.map((el) => (
            <li>{el.whatToDo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
