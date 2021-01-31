import React from 'react'
import TwitterIcon from '../assets/twitter.svg'
import TalkIcon from '../assets/microphone.svg'

const Icon = (props) => {
    const iconType = props.type;
    if (iconType === 'twitter') {
        return <span className="w-2">
            <img src={`${TwitterIcon}`} alt="Twitter" />
        </span>
    } else if (iconType === 'talks') {
        return <span className="w-2">
            <img src={`${TalkIcon}`} alt="Podcasts and Talks" />
        </span>
    } else {
        return
    }
    
}

export default Icon
