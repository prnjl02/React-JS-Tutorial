import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext, crseContext } from '../App';


function FetchData() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    const user = useContext(userContext);
    const crse = useContext(crseContext);
    return (
        <div>
            <ul>
                hello
                {post.map(posts => <li key={posts.id}>{posts.title}</li>)}
                <br></br>
            </ul>
            <div>
                usernmae is {user}
                course name is {crse}
            </div>
            {/* <div>
                <userContext.Consumer>
                    {
                        user => {
                            return (
                                <crseContext.Consumer>
                                    {
                                        crse =>{
                                            return  <div>
                                            user context value is the {user}
                                            <br></br>crse name is {crse}
                                        </div>
                                        }
                                    }
                                </crseContext.Consumer>
                               
                            )

                        }
                    }
                </userContext.Consumer>
            </div> */}
        </div>
    )
}

export default FetchData
