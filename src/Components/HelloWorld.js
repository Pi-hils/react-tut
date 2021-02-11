import React from 'react'

export default function HelloWorld({ name, email, role }) {
  return (<div>
  <h3>Name: {name} </h3>
  <h3>Email: {email} </h3>
  <h3>Role: {role} </h3>
    <hr />
  </div>

  )
}
