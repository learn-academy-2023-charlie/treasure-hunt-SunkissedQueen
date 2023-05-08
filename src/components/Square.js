import React from "react"

const Square = (props) => {
  // console.log(props) //remove any developer tools or data not being used

  return (
    <div id="grid">
      {props.board.map((value, index)=> {
        return(
          <div className="square" key={index}>
            {value}
          </div>
        )
      })}   
    </div>
  )
}
export default Square
