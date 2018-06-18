import React from 'react';

function ListCard(props){
    let categoryData = props.categoryData;
    let idNum = props.id;
    console.log(idNum)
    let title = props.listName;
    let wordArr = [];
    categoryData.forEach(val => {
        if(val.idNum===idNum){
            wordArr = val.list;
        }
    });
    let listName = props.listName.toUpperCase();
    let editBtn;
    let deleteBtn;
    if(idNum>6){
        editBtn = <button className="edit-delete" onClick={e => props.showEditList(e, idNum, title, wordArr)}>Edit</button>;
        deleteBtn = <button className="edit-delete" onClick={e => props.deleteList(e, idNum, title)}>Delete</button>
    }
    return (
        <div className="list-card" cardname={props.listName} onClick={() => {
            props.saveClickedCard(listName);
            props.showWord();
        }}>
            {editBtn}
            {deleteBtn}
            <p>{listName}</p>
        </div>
    )
}

export default ListCard;