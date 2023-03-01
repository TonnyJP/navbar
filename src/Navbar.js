import React from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [ showLink , setShowLinks ] = React.useState(false)
  const linksContainerRef = React.useRef(null)
  const linkRef = React.useRef(null)

  React.useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height
    if(showLink){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showLink])
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLink)}>
            < FaBars />
          </button>
        </div>
        <div className={`links-container`} ref={linksContainerRef}>
          <ul className='links' ref={linkRef}>
            {links.map((link) => {
              return <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((elt) => {
            return <li key={elt.id}>
              <a href={elt.url}> {elt.icon} </a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
