import React from 'react'
import useFetch from './useFetch'

const Show = () => {
    const url = 'https://jsonplaceholder.typicode.com/users' ;
    const {loading, users} = useFetch(url);
    console.log(users);
    
    return (
        <div>
           <h4>{loading && 'Loading....'}</h4>
           {
               users.map((item) => <li>{item.name}</li>)
           }
        </div>
    )
}

export default Show ;
