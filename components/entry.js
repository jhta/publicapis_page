import React from 'react'

const Entry = ({ API, Description }) => (
  <li>
    <div>
      <h3> { API }</h3>
      <p>{ Description }</p>
    </div>
  </li>
)

export default Entry
