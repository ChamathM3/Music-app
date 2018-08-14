import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';

const Styles = {
}

class TrackCard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      artist: "",
      albumName: "",
      preview_url: "",
      imageSet: false
    };
  }
  static propTypes = {
    name: PropTypes.string,
    artist: PropTypes.string,
    preview_url: PropTypes.string,
    albumName: PropTypes.string,
    image: PropTypes.object

  }
  componentDidMount() {
    debugger
    if (typeof (this.props.name) !== "undefined" && this.props.name != null) { //In Edit Mode
      this.setState({ name: this.props.name })
    }
    if (typeof (this.props.artist) !== "undefined" && this.props.artist != null) {
      this.setState({ artist: this.props.artist })
    }
    if (typeof (this.props.preview_url) !== "undefined" && this.props.preview_url != null) {
      this.setState({ preview_url: this.props.preview_url })
    }
    if (typeof (this.props.albumName) !== "undefined" && this.props.albumName != null) {
      this.setState({ albumName: this.props.albumName })
    }
    debugger
    if (typeof this.props.image !== "undefined") {
      this.setState({ imageSet: true })
    } else {
      this.setState({ imageSet: false })
    }
  }

  render() {
    return (
      <div className="col-md-3 col-lg-3 col-xs-12 col-sm-6" >
        <div style={{ width: "99%", backgroundColor: "#9d9d9d3b", height: "380px", color: "white", marginBottom: "10px" }}>
          <img src={(this.state.imageSet) ? this.props.image.url : ""} style={{ width: "213px", height: "213px" }} alt="artist" />
          <p><span style={{ fontWeight: "700" }}>Track Name :</span> {this.state.name}</p>
          <p><span style={{ fontWeight: "700" }}>Artist Name :</span> {this.state.artist}</p>
          <p><span style={{ fontWeight: "700" }}>Album :</span> {this.state.albumName}</p>
          <audio src={this.state.preview_url} controls>
            Your browser does not support the audio element.
        </audio>
        </div>
      </div>
    );
  }

}

export default TrackCard;
