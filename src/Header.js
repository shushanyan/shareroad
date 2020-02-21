import React from 'react'
 
let divStyle = { 
        backgroundColor: 'green',
        width: '100%',
        height: '50px',
        marginBottom: '10px'
}

let pStyle = { 
        color: 'white',
        fontSize: '20px'
}


class Header extends React.Component { 
    

    render() { 
        return ( 
            <div style = {divStyle}>
                    <h1 style={pStyle}>Header</h1>
            </div>
        )
    }
    
}


export default Header;