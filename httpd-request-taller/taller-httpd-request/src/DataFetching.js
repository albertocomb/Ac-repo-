import React, {useState, useEffect} from "react";
import axios from "axios";


function DataFetching(){
    const[posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/albertocomb/mockjson/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(
        
        <div>
    <h1>My Fountain Pens Collection!!!</h1>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}<p>Model/color:{post.body}</p></li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching