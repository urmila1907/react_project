import React from 'react'

export default function About(props) {
    let myStyle = {
        backgroundColor: (props.mode==='light')?'white':'grey',
        color: (props.mode==='light')?'black':'white'
      }
  return (
    <div style={myStyle}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores possimus assumenda? Similique quasi officiis amet accusantium ullam! Fuga aliquam blanditiis voluptatibus repellat doloribus eligendi consequatur nulla repudiandae enim amet!</p>
    </div>
  )
}
