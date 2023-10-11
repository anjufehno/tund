import React, { useEffect } from "react"

const Show = ({ show }) => {
  const listenClicks = e => {
    console.log({ x: e.x, y: e.y })
  }

  useEffect(() => {
    document.addEventListener("click", listenClicks)

    return () => {
      document.removeEventListener("click", listenClicks)
    }
  }, [])

  return <h2>Showing importance of removing eventListener</h2>
}

export default Show
