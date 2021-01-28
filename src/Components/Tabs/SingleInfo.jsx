import React, { useState } from 'react' ;
import data from './data';
import './Tab.css'
import { FaAngleDoubleRight} from 'react-icons/fa'
const SingleInfo = () => {
    const [users , setUsers] = useState(data);
    const [firstUser, setFirstUser] = useState(true);
    const [secondUser, setSecondUser] = useState(false)
    const [thirdUser, setThirdUser] = useState(false)

    const firstHandler = () => {
        setFirstUser(true);
        setSecondUser(false);
        setThirdUser(false);
    }
    const secondHandler = ()=>{
        setFirstUser(false);
        setSecondUser(true);
        setThirdUser(false)
    }
    const thirdHandler = ()=>{
        setFirstUser(false)
        setSecondUser(false)
        setThirdUser(true)
    }
    return (
        <>
            <section className="single__tab">
                <div className="name__area">
                    <button onClick={firstHandler} className={firstUser ? 'btn active':'btn'}>{users[0].name}</button>
                    <button onClick={secondHandler} className={secondUser ? 'btn active':'btn'}>{users[1].name}</button>
                    <button onClick={thirdHandler} className={thirdUser ? 'btn active':'btn'}>{users[2].name}</button>
                </div>
                <div className="info__area">
                    {
                        (firstUser && !secondUser && !thirdUser ) && (
                            <div className="info">
                                <h1>{users[0].title}</h1>
                                <button className='name'>{users[0].name}</button>
                                <p><small>{users[0].session}</small></p>
                                {
                                    users[0].des.map((item) => {
                                        return(
                                            <div className="d-flex">
                                                <FaAngleDoubleRight className='icon' />
                                                <p>{item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        (secondUser && !firstUser && !thirdUser ) && (
                            <div className="info">
                                <h1>{users[1].title}</h1>
                                <button className='name'>{users[1].name}</button>
                                <p><small>{users[1].session}</small></p>
                                {
                                    users[1].des.map((item) => {
                                        return(
                                            <div className="d-flex">
                                                <FaAngleDoubleRight className='icon' />
                                                <p>{item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        (thirdUser && !secondUser && !firstUser ) && (
                            <div className="info">
                                <h1>{users[2].title}</h1>
                                <button className='name'>{users[2].name}</button>
                                <p><small>{users[2].session}</small></p>
                                {
                                    users[2].des.map((item) => {
                                        return(
                                            <div className="d-flex">
                                                <FaAngleDoubleRight className='icon' />
                                                <p>{item}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default SingleInfo
