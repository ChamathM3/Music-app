import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// components
import ArtistCard from './artist_card.js';
import TrackCard from './track_card.js';

import axios from 'axios';
const Styles = {
  Background: {
    //backgroundimage: url("../public/audience.jpg"),
    width: "100%",
    height: "500px",
    BackgroundColor: "red",
    // marginLeft: "25%",
    // marginRight: "auto",
    // marginTop: "5%",
    // maxWidth: "1000px",
    // padding: "10px"
  },

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      tracks: [],
      viewArea: 0,
      searchValue: "",
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="bg">
          <div className="container-fluid">

            <h1 style={{ color: "white", fontWeight: "700", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", position: "relative", top: "70px" }}>Music Search</h1>
            <div className="serchBar" >
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <div id="imaginary_container">
                    <div className="input-group stylish-input-group">
                      <input type="text" className="form-control" placeholder="Track or Artists" value={this.state.searchValue}
                        onChange={e => this.handleFormEvents(e)}
                        onKeyUp={e => this.checkPressEnter(e)} />
                      <span className="input-group-addon">
                        <button type="button" onClick={e => this.searchItems()}>
                          <span className="glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {(this.state.viewArea === 0) ?
              <div>

                {(this.state.tracks.length > 0) ?
                  <div className="row">
                    <h3 style={{ color: "white", textAlign: "left", paddingLeft: "15px" }}>Tracks</h3>
                    <hr />
                    {this.state.tracks.map((track, index) =>
                      <TrackCard key={index}
                        name={track.name}
                        preview_url={track.preview_url}
                        albumName={track.albumName}
                        artist={track.artist}
                        image={track.image}
                      />

                    )}
                  </div>
                  :
                  ""
                }

                {(this.state.artists.length > 0) ?
                  <div className="row">
                    <h3 style={{ color: "white", textAlign: "left", paddingLeft: "15px" }}>Artists</h3>
                    <hr />
                    {this.state.artists.map((artist, index) =>

                      <ArtistCard key={index}
                        name={artist.name}
                        followers={artist.followers}
                        genres={artist.genres}
                        url={artist.url}
                        image={artist.image}
                      />

                    )}
                  </div>
                  :
                  ""
                }



              </div>
              :
              (this.state.viewArea === -1) ?
                <div>
                  <h2 style={{ color: "white", fontWeight: "700", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>Please login again....</h2>
                  <a href="http://localhost:8888"><button type="button" className="btn btn-danger">Go to login page</button></a>
                </div>
                :
                <div>
                  <h2 style={{ color: "white", fontWeight: "700", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>Error occur please try again later....</h2>
                </div>

            }




          </div>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.sss
        </p> */}

      </div >
    );
  }

  searchItems() {
    if (this.state.searchValue !== "") {
      var accessToken = window.location.search.split('token=')[1];
      this.setState({ artists: [], tracks: [] });
      let token = accessToken;//"BQCcyp7kbijcKKJq8VY1wThsjCMwXwE6bN083VmjqtlKmt1eAk8JfkFYdxqguRr-6QCy8tjQGgcIQL0NIE9hMl4X95yN-_EunQr2oPsEZaWiTxggoxZu0ICQFudrAcCU4NQS316kI4FJS0G2IbakK4au76S8LkjBqKWgnIieP92m6W4UPg";
      axios.get('https://api.spotify.com/v1/search?q=' + this.state.searchValue + '&type=track%2Cartist&limit=10', {
        headers: {
          Accept: "application / json",
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
          //Content-type: "application / json"
        }
      })
        .then(res => {
          console.log(res);

          if (res.status === 200) {
            // get artists
            if (res.data.artists.items.length > 0) {
              // create artists object
              var artistsArray = [];

              res.data.artists.items.map((item) =>
                artistsArray.push({ name: item.name, followers: item.followers.total, genres: item.genres.toString(), image: item.images[0], url: item.external_urls.spotify })
              )
              console.log(artistsArray);
              this.setState({ artists: artistsArray });
            } else {
              this.setState({ artists: [] });
            }
            // complete artists array

            // create track array
            if (res.data.tracks.items.length > 0) {
              // create artists object
              var trackArray = [];

              res.data.tracks.items.map((item) =>
                trackArray.push({ name: item.name, preview_url: item.preview_url, albumName: item.album.name, image: item.album.images[0], artist: item.album.artists[0].name })
              )
              console.log(trackArray);
              this.setState({ tracks: trackArray });
            } else {
              this.setState({ tracks: [] });
            }
            // complete track array
          }
        }).catch((error) => {
          // Error
          debugger
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //console.log(error.response.data);
            console.log(error.response.status);
            //console.log(error.response.headers);
            if (error.response.status) {
              this.setState({ viewArea: -1 });
            } else {
              this.setState({ viewArea: -2 });
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            if (error.response.status) {
              this.setState({ viewArea: -1 });
            } else {
              this.setState({ viewArea: -2 });
            }
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            this.setState({ viewArea: -2 });
          }
          console.log(error.config);
        });
    }
  }

  /**
  * handleFormEvents
  *
  * assign text field values to state
  *
  */
  handleFormEvents(e) {
    e.preventDefault();
    this.setState(
      { searchValue: e.target.value }
    )
  }
  /**
   * this function check in search area user have press enter key 
   * if that so call serch function
   * 
   */
  checkPressEnter(e) {

    if (e.keyCode === 13) {
      this.searchItems();
    }
  }
}

export default App;
