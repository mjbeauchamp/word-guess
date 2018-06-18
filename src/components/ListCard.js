import React from 'react';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';

function ListCard(props){
    let categoryData = props.categoryData;
    let idNum = props.id;
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
        editBtn = <EditBtn idNum={idNum} title={title} wordArr={wordArr} showEditList={props.showEditList} />;
        deleteBtn = <DeleteBtn idNum={idNum} title={title} deleteList={props.deleteList} />
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