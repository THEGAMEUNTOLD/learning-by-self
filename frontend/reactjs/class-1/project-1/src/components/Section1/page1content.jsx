import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1content = () => {
  return (
    <div class='py-10 flex items-center gap-5  h-[90vh] bg-white-900 px-18'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default page1content
