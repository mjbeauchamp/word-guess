import React, {Component} from 'react';
import axios from 'axios';

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            onCreateListPage: false,
            currentCategories: {}
        }
    }

    getQuote = () => {
        axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`).then(response => {
            this.setState({
                quote: response.data[0].content
            })
        }).catch();
    }

    render(){
        let createListButt;
        if(this.props.createPageBool==="false"){
            createListButt = <button onClick={this.props.showCreateList}>Create Custom List</button>
        }
        return (
            <div className="my-navbar">
                <div>
                    <button onClick={this.props.showHome}>Home</button>
                    {createListButt}
                    <button onClick={this.getQuote}>Get Inspirational Quote!</button>
                </div>
                <div className="my-quote" dangerouslySetInnerHTML={ {__html: this.state.quote} }></div>
            </div>
        )
    }
}

export default NavBar;