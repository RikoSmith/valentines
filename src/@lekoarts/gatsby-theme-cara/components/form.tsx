import React from "react"

class Form extends React.Component {

    state = { 
        message: "",
        name_sender: "",
        name_recipent: "" 
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
        const maxLength = 11
        const { value } = event.target;
        const name = value.slice(0, maxLength);
    
        this.setState({
            name_sender: name
        });
      };

      handleChangeInputRecipent = event => {
        const maxLength = 11
        const { value } = event.target;
        const name = value.slice(0, maxLength);
    
        this.setState({
            name_recipent: name
        });
      };



    render() {
      return (
        <form action="/getUrl"> 
        <input name="name_target" onChange={this.handleChangeInputRecipent} value={this.state.name_recipent} maxLength={35} type="text" className="feedback-input" placeholder="Name of Recipient" />   
        <input name="name_sender" maxLength={35} type="text" className="feedback-input" placeholder="Name of Sender" />
        <textarea name="message" maxLength={140} className="feedback-input" placeholder="Message"></textarea>
        <select className="select" name="song">
          <option value="0">Adore You</option>
          <option value="1">Diamonds</option>
          <option value="2">Я Это Ты</option>
          <option value="3">Just The Two of Us</option>
        </select>
        <input type="submit" value="GET LINK"/>
      </form>
        );
    }
}


export default Form