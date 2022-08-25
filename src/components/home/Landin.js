import React from 'react'
import { Link } from 'react-router-dom'

const Landin = () => {
  // const history = useHistory();
  return (
    <div className="mx-auto mt-12">
      <Link to="/signin">
      Sign In
      </Link>

      <Link to ="/signup" >
      
      Sign Up

      </Link>
    </div>
  )
}

export default Landin
