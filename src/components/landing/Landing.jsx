import * as React from "react"
import {
  Paper,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material"
import boxinatorlandingImg from "../../img/BoxinatorLanding.gif"

function Landing() {
  const weightOption = [1, 2, 5, 8]

  return (
    <div
      style={{
        backgroundImage: `url(${boxinatorlandingImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{ fontFamily: "-apple-system" }}
      >
        "Delivering Dreams, One Package at a Time!"
        <Box align="center" style={{ minHeight: "65vh" }}>
          <Paper
            align="center"
            sx={{
              p: 0.5,
              marginTop: 1,
              marginBottom: 1,
              flexGrow: 1,
              background: "#e0e1e5",
              width: 1 / 4,
              opacity: 0.95,
            }}
          >
            <Typography
              variant="h5"
              style={{ textAlign: "center" }}
              sx={{ marginTop: 1, fontFamily: "-apple-system" }}
            >
              Order Shipping
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Name"
              sx={{ minWidth: "65%", maxWidth: "65% " }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              sx={{ minWidth: "65%", maxWidth: "65% " }}
            />
            <TextField
              required
              id="outlined-required"
              label="Weight"
              select
              flexGrow
              sx={{ minWidth: "65%", maxWidth: "65% " }}
            >
              {weightOption.map((weightOption) => (
                <MenuItem key={weightOption} value={weightOption}>
                  {weightOption}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-required"
              label="Color"
              sx={{ minWidth: "65%", maxWidth: "65% " }}
            />
            <TextField
              required
              id="outlined-required"
              label="Destination"
              sx={{ minWidth: "65%", maxWidth: "65% " }}
            />
          </Paper>
        </Box>
      </Typography>
    </div>
  )
}

export default Landing
