import React from 'react'

class AddressRow extends React.Component{ 
    

    render() { 
        return( 
                <div>
                    <p> <b>from: </b> {this.props.address1} </p>
                    <p> <b>to: </b>  {this.props.address2}</p>
                    <p> <b>phone: </b>{this.props.phone}</p>
                    <button>Click</button>
                    <hr/>
                    
                </div>
        );
    }
}


export default AddressRow;