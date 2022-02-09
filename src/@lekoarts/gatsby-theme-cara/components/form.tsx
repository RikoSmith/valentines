import React from "react"
import styled from "@emotion/styled"
import './form.css';

const Input = styled.input``;

class Form extends React.Component {

  state = {
    message: "",
    name_sender: "",
    name_recipent: "",
    width: 0,
    height: 0
  };



  handleChangeInputMessage = event => {
    const maxLength = 140
    const { value } = event.target;
    const message = value.slice(0, maxLength);

    this.setState({
      message
    });
  };

  handleChangeInputSender = event => {
    const maxLength = 20
    const { value } = event.target;
    const name = value.slice(0, maxLength);

    this.setState({
      name_sender: name
    });
  };

  handleChangeInputRecipent = event => {
    const maxLength = 20
    const { value } = event.target;
    const name = value.slice(0, maxLength);

    this.setState({
      name_recipent: name
    });
  };



  render() {
    return (
      <form action="/getUrl">
        <p className="disclaimer" >Mobile phone users may encounter minor lags. Please, use desktop version if one occurs.</p>
        <Input name="name_target" onChange={this.handleChangeInputRecipent} value={this.state.name_recipent} maxLength={35} type="text" className="feedback-input" placeholder="Name of Recipient" />
        <Input name="name_sender" onChange={this.handleChangeInputSender} value={this.state.name_sender} maxLength={35} type="text" className="feedback-input" placeholder="Name of Sender" />
        <textarea name="message" onChange={this.handleChangeInputMessage} value={this.state.message} maxLength={140} className="feedback-input" placeholder="Message"></textarea>
        <select className="select" name="song">
          <option value="0">Beggin</option>
          <option value="1">Arcade</option>
          <option value="2">Leave the Door Open</option>
          <option value="3">Айналайын</option>
        </select>
        <Input type="submit" value="GET LINK" />
      </form>
    );
  }
}


export default Form