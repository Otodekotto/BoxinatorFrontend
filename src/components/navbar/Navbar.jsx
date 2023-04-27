import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
// import IconButton from "@mui/material/IconButton"
// import MenuIcon from "@mui/icons-material/Menu"
import keycloak from "../../keycloak"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "Black" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontFamily: "-apple-system",
            }}
          >
            Boxinator
          </Typography>
          {!keycloak.authenticated && (
            <div>
              <Button
                sx={{ fontFamily: "-apple-system" }}
                color="inherit"
                onClick={() => keycloak.login()}
              >
                Sign In
              </Button>
              <Button
                sx={{ color: "red", fontFamily: "-apple-system" }}
                onClick={() => keycloak.register()}
              >
                Sign up
              </Button>
            </div>
          )}
          {keycloak.authenticated && keycloak.tokenParsed && (
            <Button color="inherit" component={Link} to="/profile">
              {keycloak.tokenParsed.name}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar
