import React from 'react'
import PortraitImage from '../assets/portrait.jpg'

const Portrait = () => {
    return <span className="m-5">
                <img src={`${PortraitImage}`} alt="Portrait Michael Geißler" />
        	</span>
}

export default Portrait
