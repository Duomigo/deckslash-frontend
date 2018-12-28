import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/AuthenLogin.css'
import '../../styles/Home.css'
import '../../styles/User.css'

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: [],
            term: ''
        }
    }

    onClickSearch() {
        console.log(this.state.term)
    }

    render() {

        const { term } = this.state

        return(
            <div className="container">
                <div className="row col-12 justify-content-center">
                    <div className="col-lg-8 col-md-10 col-md-*">
                        <form onSubmit={this.onClickSearch}>
                            <input
                                className="m-lm-ghost-search"
                                value={term}
                                onChange={event => this.setState(updateByPropertyName('term', event.target.value))}
                                type="text"
                                placeholder="Add A Title"
                            />
                            {/* <button className="mr-sm-2 m-lm-create-card-button rounded" disabled={isInvalid} type="submit">
                                Submit Post
                            </button> */}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;