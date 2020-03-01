import React from 'react'
import Button from './Button'

class Order extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="container">
                <div className="order">
                    <h1 className="order_title">About</h1>
                    <p><b>Time:</b> 19.30 </p>
                     <p><b>Address:</b></p>
                </div>
                <div class="order_buttons">
                    <Button title ="Confirm"/>
                    <Button title ="Cancel"/>
                </div>
            </div>



        )
    }
    

}

export default Order;