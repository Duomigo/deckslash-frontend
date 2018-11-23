import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DefaultNavbar from './DefaultNavbar.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts:
        [
            {
              "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
              "title": "Measure what matters"
            },
            {
              "url": "https://blowoutbuzz.files.wordpress.com/2018/01/2018-topps-tier-one-bryant.jpg?w=1400",
              "title": "Zero to One, or One to N"
            },
            {
              "url": "http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg",
              "title": "Category design at its peak"
            },
            {
              "url": "https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg",
              "title": "American Studies"
            },
            {
              "url": "https://gogts.net/wp-content/uploads/2018/05/2018-Topps-Finest-Baseball-Cards-3.jpg",
              "title": "Plato is not a philosopher, he is a plain thinker"
            },
          ]
    }
  }
  
  render() {
    const { posts } = this.state;

    return (

      <div className="container-fluid">
        <div className="App">
          <DefaultNavbar />

          <div className="content-main">

            <div className="row">
              <div className="col-8">
                <h1 className="contentHeader">Explore</h1>
                <div className="row">
                  {posts.map(function (post, i) { //map function with server data
                    return (
                      <div className="col-8 col-md-4 col-lg-3 col-xl-3" key={i}>
                        <div className="card mb-4 m-whole-card-cover rounded">
                          <img className="card-img-top m-card-cover rounded" src={post.url} alt="Card image cap" />
                          <div class="m-card-text">{post.title}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="col-4 m-browse">
                <h1 className="contentHeader">Browse</h1>
                <div className="row">
                  <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                    <div className="card mb-4 m-whole-card-cover rounded">
                      <img className="card-img-top m-card-cover rounded" src="https://i.pinimg.com/736x/e0/06/f3/e006f3de43c580458aebf3e7f20d526f--tedy-bruschi-arizona-wildcats.jpg" alt="Card image cap" />
                      <div class="m-card-text">How We Cheat</div>
                    </div>
                  </div>

                  <div className="col-4 col-md-6 col-lg-6 col-xl-6">
                    <div className="card mb-4 m-whole-card-cover rounded">
                      <img className="card-img-top m-card-cover rounded" src="http://eddiessportstreasures.com/wp-content/uploads/2018/06/18_Topps-Stadium-Club-Baseball_Cards-7-1.jpg" alt="Card image cap" />
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
