import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {rows: <p>This is my row</p>}

  }
  render() {
    return (
      <div className="container-fluid">
      <div className="App">
        <Navbar />

        <div className="content-main">

          <div className="row">
            <div className="col-8">
              <h1 className="contentHeader">Explore</h1>
              <div className="row">
                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg" alt="Card image cap" />
                    <div class="m-card-text">How We Cheat</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
                    <div className="m-card-text">Justin Kan: Start something that matters.</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg" alt="Card image cap" />
                    <div class="m-card-text">I will make it to Ycombinator</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://www.blowoutcards.com/wp/wp-content/uploads/2018/04/2018-topps-diamond-icons-MLB-shohei-ohtani.jpg" alt="Card image cap" />
                    <div class="m-card-text">thisthingpreventssomedumbuser</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://blowoutbuzz.files.wordpress.com/2018/01/2018-topps-tier-one-bryant.jpg?w=1400" alt="Card image cap" />
                    <div class="m-card-text">Pokemon Go Cards</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
                    <div className="m-card-text">Justin Kan: Start something that matters.</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg" alt="Card image cap" />
                    <div class="m-card-text">I will make it to Ycombinator</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://www.blowoutcards.com/wp/wp-content/uploads/2018/04/2018-topps-diamond-icons-MLB-shohei-ohtani.jpg" alt="Card image cap" />
                    <div class="m-card-text">thisthingpreventssomedumbuser</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
                    <div className="m-card-text">Justin Kan: Start something that matters.</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg" alt="Card image cap" />
                    <div class="m-card-text">I will make it to Ycombinator</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://www.blowoutcards.com/wp/wp-content/uploads/2018/04/2018-topps-diamond-icons-MLB-shohei-ohtani.jpg" alt="Card image cap" />
                    <div class="m-card-text">thisthingpreventssomedumbuser</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
                    <div className="m-card-text">Justin Kan: Start something that matters.</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg" alt="Card image cap" />
                    <div class="m-card-text">I will make it to Ycombinator</div>
                  </div>
                </div>

                <div className="col-8 col-md-4 col-lg-3 col-xl-3">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://www.blowoutcards.com/wp/wp-content/uploads/2018/04/2018-topps-diamond-icons-MLB-shohei-ohtani.jpg" alt="Card image cap" />
                    <div class="m-card-text">thisthingpreventssomedumbuser</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 m-browse">
              <h1 className="contentHeader">Browse</h1>
              <div className="row">
                <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg" alt="Card image cap" />
                    <div class="m-card-text">How We Cheat</div>
                  </div>
                </div>

                <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                  <div className="card mb-4 m-whole-card-cover">
                    <img className="card-img-top m-card-cover" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
                    <div className="m-card-text">Justin Kan: Start something that matters.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
