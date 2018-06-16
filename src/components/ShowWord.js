import React, {Component} from 'react';

class ShowWord extends Component {
    constructor(){
        super()
        this.state = {
            wordArr: [],
            currentWord: ""
        }
    }

    componentDidMount(){
        let thisCategory = ""
        let newArr = this.props.categories
        this.setState({
            wordArr: newArr
        })
        this.getRandomWord()
    }

    getRandomWord = () => {
        let arrayLength = this.props.categories[this.props.clickedCard].length;
        let num = Math.floor((Math.random() * arrayLength));
        let word = this.props.categories[this.props.clickedCard][num];
        console.log(word, num)
        this.setState({
            currentWord: word
        })
    }

    render(){
        return (
            <div>
                <div className="show-word">
                    <p>{this.state.currentWord}</p>
                </div>
                <button onClick={this.getRandomWord}>NEXT</button>
            </div>
        )
    }
}

export default ShowWord;

