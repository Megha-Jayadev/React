import React from 'react'


function Hello(props){
    function handleClick(e){
        e.preventDefault();
        console.log('clicked')
    }

    return (
        <div>
            <a href="https://www.google.com" onClick = {handleClick} >Click here</a>
        </div>
    );

}

export default Hello;