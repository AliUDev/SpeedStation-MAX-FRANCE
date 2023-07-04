import React from 'react'
import '../sass/style.scss'
import Arrow from '../images/sort.png';


const Digitalvolt = (props) => {
    const {title,subheading,para} = props;
    return (

        <div className="digital-volt-card">
            <img src={Arrow}/>
            <h4>{subheading}</h4>
            <p>{para}</p>
        </div>

    )
}


export default Digitalvolt
