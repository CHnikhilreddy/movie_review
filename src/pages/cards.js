import { useState } from "react";

function Cards(props) {
    const [contentEdit,SetContentEdit] = useState(false)
    function handleEditbutton(e){
        if(!contentEdit){
            SetContentEdit(!contentEdit)
        }
        else{
            var obj_2 = props.obj
            obj_2.name = e.target.parentNode.childNodes[0].childNodes[1].innerHTML
            obj_2.review = e.target.parentNode.childNodes[1].childNodes[1].innerHTML
            props.editfun(obj_2)
            SetContentEdit(!contentEdit)
        }
    }
    function handledeletebutton(e){
        props.delfun(e)
    }

  return (
        <div style={{backgroundColor:"red",margin:"20px", padding:"10px"}}>
            <div style={{backgroundColor:"plum"}}>
                <h3>movie:</h3>
                <p contentEditable={contentEdit}>{props.obj.name}</p>
            </div>
            <div style={{backgroundColor:"green"}}>
                <h3>Review:</h3>
                <p contentEditable={contentEdit}>{props.obj.review}</p>
            </div>
            <button
                style={{backgroundColor:contentEdit?"lightgreen":undefined}}  
                onClick={(e)=>{handleEditbutton(e)}}> 
                Edit 
            </button>
            <button onClick={(e)=>{handledeletebutton(props.obj.id)}}> Delete </button>
        </div>
  );
}

export default Cards;
