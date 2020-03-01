import React from 'react';


function Button (props){
    console.log(props);
    return(
        <button type ="button">{props.title}</button>
    )
    
 
}

export default Button;
