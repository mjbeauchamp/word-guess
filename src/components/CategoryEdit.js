import React, {Component} from 'react';
import axios from 'axios';

class CategoryEdit extends Component {
    constructor(){
        super()
        this.state = {
            titleInput: "",
            wordInput: "",
            wordList: [],
            id: 0
        }
    }

    componentDidMount(){
        this.setState({
            titleInput: this.props.selectedTitle,
            wordList: this.props.selectedWordArr,
            id: this.props.selectedId
        })
        console.log(this.props)
    }

    updateInput = (e, inputName) => {
        let input = e.target.value;
        this.setState({
            [inputName]: input
        });
    }

    addWord = () => {
        let currentWord = this.state.wordInput.toLowerCase();
        let newWordArr = this.state.wordList.slice();
        newWordArr.push(currentWord);
        this.setState({
            wordList: newWordArr,
            wordInput: ""
        });
    }

    saveChanges = () => {
        let titleInput = this.state.titleInput.toLowerCase();
        let wordList = this.state.wordList;
        let id = this.state.id;
        axios.put("/api/list_grid/" + this.state.id, {titleInput, wordList, id}).then( res => {
            this.setState({
                titleInput: "",
                wordInput: "",
                wordList: [],
                id: 0
            }),
            this.props.showHome()
        }).catch(err => {
            console.log(err)
        });
    }

    deleteWord = (num) => {
        let newArr = this.state.wordList.filter((val, i) => i !== num);
        this.setState({
            wordList: newArr
        })
    }

    render(){
        let words = this.state.wordList.map((val, i) =>{
            return (
                <div key={i}>
                    <p>{val}</p>
                    <button onClick={() => this.deleteWord(i)}>Delete</button>
                </div>
            )
        });
        return (
            <div>
                <h1>Edit Your Category</h1>
                <div className='category-form'>
                    <div>
                        <input onChange={(e) => this.updateInput(e, "titleInput")} className="title-input" type="text" placeholder="Category Name" required value={this.state.titleInput}/>
                        <hr />
                    </div>
                    <div>
                        <input onChange={(e) => this.updateInput(e, "wordInput")} className="word-input" type="text" placeholder="Word to guess" required value={this.state.wordInput}/>
                        <button onClick={this.addWord}>Add Word</button>
                        <div className="word-container">
                            {words}
                        </div>
                        <button onClick={() => {
                            this.saveChanges();
                        }}>Save Changes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryEdit;