import React from 'react'
import '../sass/style.scss'


const Successcard = (props) => {
    const {title,subheading,para} = props;
    return (

        <div className="success-card">
            <h2>{title}</h2>
            <h4>{subheading}</h4>
            <p>{para}</p>
        </div>

    )
}


export default Successcard
