import { Box } from "@mui/material"
import React from "react"

const Children = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(255, 245, 255)",
        borderRadius: "25px",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {children}
    </Box>
  )
}

export default Children
