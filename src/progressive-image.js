import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const defaultImageStyle = { width: '100%' };
class ProgressiveImage extends Component {
  state = {
    src: this.props.placeholder,
  }

  componentDidMount() {
    // preload image
    let img = new Image();
    img.src = this.props.src;
    img.onload = () => {
      this.setState({
        src: this.props.src
      })
    }
  }

  render() {
    const style = Object.assign({},
      defaultImageStyle,
      this.props.style,
    );
    return (
      <img
          className={classNames('zvgs-image', this.props.className)}
          style={style}
          src={this.state.src}
      />
    );
  }
}

ProgressiveImage.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

ProgressiveImage.defaultProps = {
    className: '',
    style: {},
};

export default ProgressiveImage;
