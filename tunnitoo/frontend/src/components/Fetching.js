import React, { useEffect } from "react"
import { useState } from "react"

const Fetching = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=20&_end=30"
    )
    const data = await response.json()

    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Fetching</h2>
      <ul>
        {data.map(({ id, title }) => (
          <li
            key={id}
            onClick={() => setData(data.filter(element => element.id !== id))}
          >
            {id} {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fetching