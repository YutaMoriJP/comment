import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const { handleSubmit } = this.props;
    let text = e.target.querySelector('input[type="text"]').value;
    handleSubmit(text);
    e.target.querySelector('input[type="text"]').value = '';
    e.target.querySelector('input[type="text"]').focus();
  }
  eventHandler(e) {
    let text = e.target.value;
    const { handleChange } = this.props;
    handleChange(text);
  }

  render() {
    const { inputStyle, inputTextContainer, submitText } = this.props;
    return (
      <div id="input" style={inputTextContainer}>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.eventHandler} style={inputStyle} />
          <input
            type="submit"
            value="save +"
            style={{ ...submitText, cursor: 'pointer' }}
          />
        </form>
      </div>
    );
  }
}

export default Input;
