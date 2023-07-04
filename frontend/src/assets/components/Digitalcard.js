import React from 'react'
import {Link} from 'react-router-dom';
import '../sass/style.scss'
import Manager from '../images/product-manager-primary.png';



const Digitalcard = () => {
    return (

        <div className="digital-card">
            <a href="#"><img src={Manager}/></a>
            <a href="#" className="manager-name">
                <h4>
                    Manager
                </h4>
            </a>
            <p>
                Tarife und Kunden online verwalten
            </p>
        </div>

    )
}


export default Digitalcard
