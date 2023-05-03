import { Alert, Slide, Typography } from "@mui/material"
import boxinatorlandingImg from "../../img/BoxinatorLanding.gif"
import OrderForm from "./OrderForm"
import { useEffect, useState } from "react"

const Landing = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [saveMessage, setSaveMessage] = useState(null)

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null)
      }, 3000) // Delay of 3 seconds before clearing the error message
      return () => clearTimeout(timer)
    }
  }, [errorMessage])

  useEffect(() => {
    if (saveMessage) {
      const timer = setTimeout(() => {
        setSaveMessage(null)
      }, 3000) // Delay of 3 seconds before clearing the save message
      return () => clearTimeout(timer)
    }
  }, [saveMessage])

  return (
    <div
      style={{
        backgroundImage: `url(${boxinatorlandingImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {errorMessage && (
        <Slide direction="down" in appear>
          <Alert sx={{ marginTop: 2 }} severity="error">
            {errorMessage}
          </Alert>
        </Slide>
      )}
      {saveMessage && (
        <Slide direction="down" in appear>
          <Alert sx={{ marginTop: 2 }} severity="success">
            {saveMessage}
          </Alert>
        </Slide>
      )}
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{ fontFamily: "-apple-system" }}
      >
        "Delivering Dreams, One Package at a Time!"
        <OrderForm
          setSaveMessage={setSaveMessage}
          setErrorMessage={setErrorMessage}
        />
      </Typography>
      <br></br>
    </div>
  )
}

export default Landing
