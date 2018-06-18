import React, {Component} from 'react';
import axios from 'axios';

class CategoryCreate extends Component {
    constructor(){
        super()
        this.state = {
            titleInput: "",
            wordInput: "",
            wordList: [],
            idNum: 0
        }
    }

    componentDidMount(){
        axios.get("/api/list_grid").then(response => {
            this.setState({
                idNum: response.data.idNum
            })
            console.log(this.state.idNum)
        }).catch(err => {
            console.log(err)
        });
    }

    updateInput = (e, inputName) => {
        let input = e.target.value;
        this.setState({
            [inputName]: input
        });
    }

    deleteWord = (num) => {
        let newArr = this.state.wordList.filter((val, i) => i !== num);
        this.setState({
            wordList: newArr
        })
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

    createCategory = () => {
        let titleInput = this.state.titleInput.toLowerCase();
        let wordList = this.state.wordList;
        let idNum = this.state.idNum
        axios.post("/api/list_grid", {titleInput, wordList, idNum}).then( res => {
            this.setState({
                titleInput: "",
                wordInput: "",
                wordList: [],
                idNum: 0
            }),
            this.props.showHome()
        }).catch(err => {
            console.log(err)
        });
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
                <h1>Create Your Category</h1>
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
                            this.createCategory();
                        }}>Create Category</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryCreate;