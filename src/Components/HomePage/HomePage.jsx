import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/Register">Go to the register page</Link>
      <Link to="/Login">Go to the login page</Link>
    </div>
  );
}
