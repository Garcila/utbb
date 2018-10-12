import React from 'react'

const Header = ({ title, mantra }) => {
  return (
    <header className='header'>
      <div className='title'>
        <img src='../images/faces-white.png' alt={title} />
        <h1>{title}</h1>
      </div>
      <h2 className='mantra'>{mantra}</h2>
    </header>
  )
}

export default Header
