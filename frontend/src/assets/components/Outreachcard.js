import React from 'react'
import '../sass/style.scss'
import Truck from '../images/delivery-truck.jpg';



const Outreachcard = () => {
    return (

        <div className="outreach-card">
            <img src={Truck}/>
            <div className="outreach-card-text">
                <p><b>Presse</b> | 19.12.2022</p>
                <a href="#">Logistik 2023: Drei wichtige Trends für die Transport</a>
            </div>
        </div>

    )
}


export default Outreachcard
