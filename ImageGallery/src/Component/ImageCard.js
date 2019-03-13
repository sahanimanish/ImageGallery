import React, { Component } from 'react';
import ImageDetail from './ImageDetail';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
      selectedImg: null,
      show: false
    };
    this.imageRef = React.createRef();

    this.handleHide = () => {
      this.setState({ show: !this.state.show });
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  onSelectImage = img => {
    this.setState({ selectedImg: img, show: true });
  };

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { photographer, src } = this.props.Images;
    return (
      <>
        <div
          style={{ gridRowEnd: `span ${this.state.spans}` }}
          onClick={() => this.onSelectImage(this.imageRef)}
        >
          <img src={src.large} alt={photographer} ref={this.imageRef} />
        </div>
        <ImageDetail
          Image={this.state.selectedImg}
          show={this.state.show}
          handleHide={this.handleHide}
        />
      </>
    );
  }
}
