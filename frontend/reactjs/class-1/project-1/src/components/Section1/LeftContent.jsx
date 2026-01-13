import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div class='h-full flex flex-col justify-between w-3/10'>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent
