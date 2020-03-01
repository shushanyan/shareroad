import React from 'react'
import logo from './logo.png'
import Button from './Button'
 
let divStyle = { 
    width: '100%',
    marginBottom: '10px',
    backgroundColor:'#fff',
    maxWidth: '1300px',
    margin: '0 auto'
}
let logoStyle = {
    maxWidth: '160px',
    width: '100%',
    height: '86px',
    marginTop: '13px'
}


let aStyle = { 
    textdecoration :'none'
}

    let addStyle = { 
        float: 'right',
        marginTop: '23px',
        marginRight: '32px',
        padding: '8px 27px',
        color:'#fff',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: 'blue',
        fontSize: '16px'
    }



class Header extends React.Component { 
    render() { 
        return ( 
            <div style = {divStyle}>
                <nav>
                    <div className="logo">
                        <a style ={aStyle} href ="#"><img src={logo} alt="Logo" style={logoStyle}/></a>
                    </div>
                    <div className="menu_item">
                        <a style ={aStyle} href="#">Passengers</a>
                    </div>
                    <div className="menu_item">
                        <a style ={aStyle}  href="#">Drivers</a>
                    </div>
                    <div className ="add_btn_div">
                         <Button title ="Add New" className="btn_add"/> 
                    </div>
                    
                </nav>
                

                
            </div>
        )
    }
    
}


export default Header;