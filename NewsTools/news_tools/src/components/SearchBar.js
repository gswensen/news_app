import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <span className='search_container'>
                    <input className='search_input'></input>
                    <button className='search_button'>Get News</button>
                </span>
            </div>    
        )
    }
}

export default SearchBar;