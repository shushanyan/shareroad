import React from 'react'
import  AddressRow from './AddressRow'

let divTable = { 
    width: '66%',
    height: '1090px',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'Solid',
    marginTop: '30px',
    marginLeft: '20%',
    paddingLeft:'10px'
}




class Table extends React.Component{ 

    


    render() { 
            return ( 
                    <div className= 'divTable' style = {divTable}>
                            <button style={{backgroundColor:'blue', color: 'white', fontSize: '17px'}}>{this.props.user}</button>
                            <div>                                    
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