import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (

  <nav
    style={{
      background: 'black',
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <h3 style={{
      textAlign: 'right',
      color: 'white',
      textDecoration: 'none',
      margin: 0,
      alignSelf: 'center',
    }}>
      <Link
        to="/contact-us"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Contact Us
      </Link>
    </h3>
  </nav>

)

export default Header
