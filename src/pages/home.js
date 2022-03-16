import { useEffect, useState } from "react";
import Cards from "./cards";

function Home() {
    const [review,setReview] = useState(
        [{"id":1,"name":"dune","review":"very good movie"},
        {"id":2,"name":"spiderman no way Home","review":"next level moivie"}])
    
    const [count,setCount] = useState(2)

    useEffect(()=>{
        var some = JSON.parse(localStorage.getItem('review'))
        if(some?.length === 0){
            setReview([{"id":1,"name":"dune","review":"very good movie"},
            {"id":2,"name":"spiderman no way Home","review":"next level moivie"}])
        }
        else{setReview(some)}
    },[])

    useEffect(()=>{
        localStorage.setItem('review',JSON.stringify(review))
    },[review])

    function handlesubmin(e){
        var obj = {"id":count+1,"name":e.target[0].value,"review":e.target[1].value}
        if(obj['name'].length === 0 ||  obj['review'].length === 0){
            return
        }
        setCount(count+1)
        setReview((old)=>{
            return [...old,obj]
        })
        e.preventDefault()
    }

    function handledeletefunction(id){
        setReview((old)=>{
            for(let i = 0;i<old.length;i++){
                if(old[i]["id"] === id){
                    old.splice(i,1)
                    return [...old]
                }
            }
            return old
        })
    }

    function HandleEditedreview(obj){
        setReview((old)=>{
            for(let i = 0;i<old.length;i++){
                if(obj['id'] === old[i]['id']){
                    old[i]['name'] = obj['name']
                    old[i]['review'] = obj['review']
                    return [...old]
                }
            }
            return old
        })
    }

    return (
      <>
      <form style={{textAlign:"center"}} onSubmit={(e)=>{handlesubmin(e)}}>
        <label style={{display:"block"}}>
          Movie:
          <input type="text"/>
        </label>
        <label style={{display:"block"}}>
          Review:
          <input type="text"/>
        </label>
        <input type="submit" value="ADD" />
      </form>
      {review.map((obj)=>{return (<Cards key={obj.id} obj={obj} editfun={HandleEditedreview} delfun={handledeletefunction}/>)})}
      </>
    );
  }
  
  export default Home;
  