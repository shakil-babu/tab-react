import React, { useEffect, useState } from 'react' ;

const useFetch = (url) => {
    const [loading, setLoading]=useState(true);
    const [users, setUsers] = useState([]);

    const getUsers = async ()=> {
        const res = await fetch(url)
        const data = await res.json();
        setUsers(data);
        setLoading(false);
    }
    useEffect(() => {
        getUsers();
    }, [url])
    return{
        loading,users
    }
}

export default useFetch ;
