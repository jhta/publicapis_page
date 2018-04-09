import React from 'react'
import Entry from './entry'

const Entries = ({ entries = [] }) => (
  <div>
    <ul>
      { entries.map((entry, index) =>
          <Entry {...entry} key={index} />
        )
      }
    </ul>
  </div>
)

export default Entries
