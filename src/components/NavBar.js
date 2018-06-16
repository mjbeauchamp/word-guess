import React, {Component} from 'react';

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            onCreateListPage: false,
            currentCategories: {}
        }
    }

    componentDidMount(){
        // this.setState({
        //     onCreateListPage: this.props.createPageBool
        // })
        console.log(this.props.createPageBool)
    }

    render(){
        let createListButt;
        if(this.props.createPageBool==="false"){
            createListButt = <button onClick={this.props.showCreateList}>Create Custom Word List</button>
        }
        return (
            <div className="my-navbar">
                <button onClick={this.props.showHome}>Home</button>
                {createListButt}
            </div>
        )
    }
}

export default NavBar;