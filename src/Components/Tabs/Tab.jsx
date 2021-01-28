import React from 'react' ;
import SingleInfo from './SingleInfo';
import './Tab.css';
const Tab = () => {
    return (
        <>
            <section className="tab__area">
                <div className="tab__container">
                    <h1 className="tab__title">Expierence</h1>
                    <div className="title__underline"></div>
                </div>
                <SingleInfo/>
            </section>
        </>
    )
}

export default Tab
