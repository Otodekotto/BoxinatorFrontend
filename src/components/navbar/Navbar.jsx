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
import { IconButton, Menu, MenuItem } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useState } from "react"

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
            Button
            component={Link}
            to=""
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
          {keycloak.authenticated && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>My Package</MenuItem>
                <MenuItem onClick={() => keycloak.logout()}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar
