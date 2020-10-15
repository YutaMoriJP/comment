import React from 'react';
import PropTypes from 'prop-types';

class SavedText extends React.Component {
  render() {
    const { storedText } = this.props;
    return (
      <div>
        {storedText
          .map((text, index) => (
            <p className="savedText" key={text + index}>
              {text}
            </p>
          ))
          .reverse()}
      </div>
    );
  }
}

SavedText.propTypes = {
  storedText: PropTypes.array.isRequired,
};

export default SavedText;
