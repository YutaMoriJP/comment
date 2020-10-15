import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/input';
import Text from '../components/text';
import SavedText from '../components/savedText';
import {
  mainContainer,
  inputTextContainer,
  inputStyle,
  textStyle,
  submitText,
} from '../components/styles.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      storedText: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(text) {
    this.setState({ text: text });
  }
  handleSubmit(text) {
    const { storedText } = this.state;
    storedText.push(text);
    this.setState({ storedText: storedText, text: '' });
  }
  handleClick() {
    const { storedText } = this.state;
    storedText.pop();
    this.setState({ storedText: storedText });
  }
  render() {
    const { text } = this.state;
    console.log(this.state.storedText);
    return (
      <div>
        <div style={mainContainer}>
          <Input
            handleChange={this.handleChange}
            inputTextContainer={inputTextContainer}
            inputStyle={inputStyle}
            submitText={submitText}
            handleSubmit={this.handleSubmit}
          />
          <Text
            text={text}
            textStyle={textStyle}
            inputTextContainer={inputTextContainer}
          />
        </div>
        <button onClick={this.handleClick}>Remove</button>
        <SavedText storedText={this.state.storedText} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
