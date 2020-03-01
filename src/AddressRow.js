import React from 'react'
import Button from './Button';

let buttonStyle = { 
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

class AddressRow extends React.Component{ 
    constructor(props){ 
        super(props);
    }
    render() { 
        return( 
                <div>
                   
                    <p> <b>from</b> {this.props.address1}  <b>to</b>  {this.props.address2}</p>
                    <p> <b>phone: </b>{this.props.phone}</p>
                    <hr/>
                    <div className="for_save_btn">
                        <Button title ="Save" style={buttonStyle}/>
                    </div>
                    
                </div>
        );
    }
}


export default AddressRow;