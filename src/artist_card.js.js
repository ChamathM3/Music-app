import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';

const Styles = {
}

class ArtistCard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      followers: 0,
      genres: "",
      url: "",
      imageSet: false
    };
  }
  static propTypes = {
    name: PropTypes.string,
    followers: PropTypes.number,
    genres: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.object

  }
  componentDidMount() {
    debugger
    if (typeof (this.props.name) !== "undefined" && this.props.name != null) { //In Edit Mode
      this.setState({ name: this.props.name })
    }
    if (typeof (this.props.followers) !== "undefined" && this.props.followers != null) {
      this.setState({ followers: this.props.followers })
    }
    if (typeof (this.props.genres) !== "undefined" && this.props.genres != null) {
      this.setState({ genres: this.props.genres })
    }
    if (typeof (this.props.url) !== "undefined" && this.props.url != null) {
      this.setState({ url: this.props.url })
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
      <div className="col-md-3 col-lg-3 col-xs-12 col-sm-6">
        <div style={{ width: "99%", backgroundColor: "#9d9d9d3b", height: "380px", color: "white", marginBottom: "10px" }}>
          <img src={(this.state.imageSet) ? this.props.image.url : ""} style={{ width: "213px", height: "213px" }} alt="artist" />
          <p><span style={{ fontWeight: "700" }}>Artist Name :</span> {this.state.name}</p>
          <p><span style={{ fontWeight: "700" }}>followers :</span> {this.state.followers}</p>
          <p><span style={{ fontWeight: "700" }}>geners : </span>{this.state.genres}</p>
        </div>
      </div>
    );
  }
  //#9d9d9d3b
  //0000003b
}

export default ArtistCard;
