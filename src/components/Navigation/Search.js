import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

import { goToCard } from '../Authentication/AuthenStatus.js'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: [],
            term: ''
        }
    }

    querySearch(term) {

        const data = {
            'term': term
        }

        axios.post('http://127.0.0.1:5000/search', data)
        .then(res => {
            this.setState({ query: res.data })
        })
        .catch(err => {

        })

    }

    render() {

        const { term, query } = this.state
        const cardUrl = 'http://127.0.0.1:5000/static/CardPicture/';

        const updateByPropertyName = (propertyName, value) => () => ({
            [propertyName]: value
        });

        return(

            <div className="container-fluid">

                <div className="row text-align-center justify-content-center">
                    <div className="m-profile-container col-lg-6 col-md-10 col-sm-* col-xs-*">
                        <input
                            className="m-lm-ghost-search"
                            value={term}
                            onChange={event => {
                                this.setState(updateByPropertyName('term', event.target.value))
                                this.querySearch(event.target.value)
                            }}
                            type="text"
                            placeholder="Add A Title"
                        />
                    </div>
                </div>


                <div className="row text-align-center justify-content-center">
                    <div className="m-profile-card-container col-lg-6 col-md-10 col-sm-* col-xs-*">
                        {query.slice(0).reverse().map(function (post, i) { // reverse array map function with server data
                            return (
                            <div className="m-profile-whole-card-cover rounded" key={i}>
                                <img onClick={() => goToCard(post.id)} className="card-img-top m-profile-card-cover rounded" src={cardUrl + post.picture} alt="" />
                                <p onClick={() => goToCard(post.id)} className="m-user-card-text">{post.title}</p>
                                {/* <p className="m-user-desc-text">{post.description}</p> */}
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;