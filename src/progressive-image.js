import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const defaultImageStyle = { width: '100%' };
class ProgressiveImage extends Component {
  state = {
    src: this.props.placeholder,
    placeholder: true,
  }

  componentDidMount() {
    // preload image
    const img = new Image();
    img.src = this.props.src;
    img.onload = () => {
      this.setState({
        src: this.props.src,
        placeholder: false,
      });
    };
  }

  render() {
    const clazz = classNames(
      'zvgs-image',
      { 'zvgs-placeholder':  this.state.placeholder },
      this.props.className
    );
    const style = Object.assign({},
      defaultImageStyle,
      this.props.style,
    );
    return (
      <img
        role="presentation"
        className={clazz}
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
