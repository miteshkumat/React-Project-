import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id="right" className='h-full overflow-x-auto w-2/3 p-6 flex gap-3 flex-nowrap'>
        {props.users.map(function(elem, index){
          return <RightCard key={index} id={index} img={elem.img} intro={elem.intro} tag={elem.tag} />
        })}
        
    </div>
  )
}

export default RightContent