import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

const ScrollToTopContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10), // Adjust the spacing value as needed
  right: theme.spacing(2),
  zIndex: theme.zIndex.tooltip,
}))

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ScrollToTopContainer>
      <Fab color="Black" onClick={handleClick}>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTopContainer>
  )
}

export default ScrollToTop
