import React from 'react'
import { Link } from 'react-router-dom'
export default function Error404() {
  return (
    <div>
      <h1>404 Error</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
