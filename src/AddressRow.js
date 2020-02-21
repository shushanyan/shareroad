import React from 'react'

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
                </div>
        );
    }
}


export default AddressRow;