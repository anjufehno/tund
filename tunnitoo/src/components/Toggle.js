import { Button } from "@mui/material"
import React from "react"

const Toggle = ({ toggleShow }) => {
  return (
    <Button
      variant="contained"
      onClick={toggleShow}
    >
      Toggle
    </Button>
  )
}

export default Toggle