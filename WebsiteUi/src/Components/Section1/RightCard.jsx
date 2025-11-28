import React from 'react'
import RightCardText from './RightCardText'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 relative overflow-hidden  bg-red-900 rounded-4xl'  >
        <img className='h-full w-full object-cover' src={props.img} alt="" />
       <RightCardText id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard