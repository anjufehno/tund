import { ThemeProvider, Typography, createTheme } from "@mui/material"
import "./App.css"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Header from "./layout/Header"
import Layout from "./layout/Layout"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(254, 217, 255)"
    }
  }
})

function App() {
  let location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <Header title="TunniToo" />
      <Layout>
        {location?.pathname === "/" && (
          <Typography
            variant="h4"
            sx={{ marginLeft: 10, marginTop: 5 }}
          >
            Welcome to my humble abode
          </Typography>
        )}
        <Outlet />
      </Layout>
    </ThemeProvider>
  )
}

export default App
