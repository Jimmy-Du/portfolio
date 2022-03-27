import React from 'react'

const Heading = (props) => {
  return (
    <h1 className="underline mb-5 text-2xl text-gray-300 3xl:text-2xl">{props.children}</h1>
  )
}

export default Heading