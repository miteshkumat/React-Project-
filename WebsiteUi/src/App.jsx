import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users =[
    {
      index:1,
      img:"https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjB3aXRoJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      intro:"Stay connected with our seamless phone service featuring superior call quality, simple setup, and friendly customer support.",
      tag:"Satisfied"
    },
    {
      index:2,
      img:"https://plus.unsplash.com/premium_photo-1669879884807-07e0d1096fed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fHww",
      intro:"Our phone service offers fast, reliable communication at affordable rates, making it easy to stay in touch with what matters most.",
      tag:"Underbanked"
    },{
      img:"https://plus.unsplash.com/premium_photo-1683134229073-2fd2eaf4e0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmUlMjB3aXRoJTIwbWFufGVufDB8fDB8fHww",
      intro:"Experience crystal-clear calls and dependable connectivity with our phone service—built to keep you connected anytime, anywhere.",
      tag:"Underserved"
    }
  ]
  return (
    <div className='h-full w-full '>
      <Section1 users ={users}/>
      <Section2 />
    </div>
  )
}

export default App
