import React, { useState } from 'react'

const ListRenderer = () => {

    const [list] = useState(["Slipknot (1999)", "Iowa (2001)", "Vol 3: The Subliminal Verses (2005)"]);

  return (
    <div>
        <ul>
            {list.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    </div>
  )
}

export default ListRenderer