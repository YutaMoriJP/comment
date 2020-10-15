import React from 'react';

class Text extends React.Component {
  render() {
    const { text, inputTextContainer, textStyle } = this.props;
    return (
      <div id="text" style={inputTextContainer}>
        <p style={textStyle}>
          {text.length === 0 ? 'Type something...' : text}
        </p>
      </div>
    );
  }
}

export default Text;
