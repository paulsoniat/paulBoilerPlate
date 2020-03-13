import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((option, e) => (
    <li key={e}>
      {option["stringWords"]}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions