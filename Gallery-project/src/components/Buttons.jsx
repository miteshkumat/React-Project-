import React from 'react'

const Buttons = ({index, setIndex}) => {
    
    
  return (
    <div>
        <div className="flex gap-4 justify-center align-center mt-3">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-[#6a040f] px-5  py-2 rounded text-xl cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
          className="bg-[#6a040f] px-5  py-2 rounded text-xl cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Buttons