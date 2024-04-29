import React from 'react'
import { Navbar } from 'react-bulma-components'

const Header = () => {
  return (
    <Navbar style={{padding:"20px",display:'flex',justifyContent:'space-between'}}>
        <Navbar.Brand>
            <Navbar.Item href='/'>React Shop</Navbar.Item>
        </Navbar.Brand>
        <Navbar>
            <Navbar.Item href='https://www.instagram.com/behruz_akbaraliev' target='_blank'>Instagram</Navbar.Item>
            <Navbar.Item href='https://github.com/behruzchick' target='_blank'>Github</Navbar.Item>
        </Navbar>
    </Navbar>
  )
}

export default Header