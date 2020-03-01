import React from 'react'
import  AddressRow from './AddressRow'

let divTable = { 
    width: '66%',
    height: '720px',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'Solid',
    marginTop: '30px',
    marginLeft: '20%',
    paddingLeft:'10px'
}

let divFilter = { 
    background: 'blue',
    width: '100%',
    height: '40px',
    margin: '0'
}

let pFilter = { 
    color: 'white',
    fontSize: '18px'
}


class Table extends React.Component{ 

    constructor(props) { 
        super(props)
    }

    render() { 
            return ( 
                    <div className= 'divTable' style = {divTable}>
                            <p>{this.props.user}</p>
                            <div className= 'Filter' style={divFilter}>
                                    <p style = {pFilter}>Filter</p>
                                    {this.props.address.map( area => { 
                                        return <AddressRow 
                                                                key = {area._id}

                                                                address1 = {area.address1}

                                                                address2 = {area.address2}

                                                                phone = {area.phone}
                                         />
                                    })}
                            </div>
                    </div>
            );
    }
}

export default Table;