import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  // console.log(props);
  
  return (
    <div className='pb-15 flex gap-10 items-center px-18 h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content