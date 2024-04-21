import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingTwo() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);    
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]) // useEffect array dependency list correction to avoid infinite loop of api call.


    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchingTwo