import React from 'react'

const Button = ({text, onClick, className,...props}) => {
return (
    <div>
      <button 
          className={className}
          style={{text, ...props}}
          onClick={onClick}>{text}</button>
      </div>
  )
}

export default Button;