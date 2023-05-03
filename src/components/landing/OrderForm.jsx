import {
  Paper,
  TextField,
  Typography,
  Box,
  MenuItem,
  Button,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../redux/actions"
import { postPackage } from "../../api/Package"
import keycloak from "../../keycloak"

function OrderForm(props) {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weight: "",
    boxColor: "",
    destination: "",
  })

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries())
    }
  }, [countries.length === 0, dispatch])

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const { name, email, weight, boxColor, destination } = formData
    let updatedEmail = email // Declare a variable to store the updated email value

    if (keycloak.authenticated) {
      updatedEmail = keycloak.tokenParsed.email // Update the email value
    }
    try {
      const [error, data] = await postPackage(
        name,
        updatedEmail,
        weight,
        boxColor,
        destination
      )

      if (error) {
        console.error("Failed to submit form:", error)
        props.setErrorMessage(error)
      } else {
        console.log("Form submitted successfully:", data)
        props.setSaveMessage("Order has been saved")
      }
    } catch (error) {
      console.error("Failed to submit form:", error)
      props.setErrorMessage(error.message)
    }
  }

  const weightOptions = [1, 2, 5, 8]
  const boxColorOptions = ["Black", "Brown", "Green", "Red", "White", "Yellow"]

  return (
    <Box align="center" style={{ minHeight: "65vh" }}>
      <Paper
        align="center"
        sx={{
          p: 0.5,
          marginTop: 1,
          marginBottom: 1,
          flexGrow: 1,
          background: "#e0e1e5",
          minWidth: 350,
          width: "25%",
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
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleFormChange}
            sx={{ width: "65%", marginBottom: 1 }}
          />
          {!keycloak.authenticated && (
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleFormChange}
              sx={{ width: "65%", marginBottom: 1 }}
            />
          )}
          <TextField
            required
            id="weight"
            name="weight"
            label="Weight"
            select
            value={formData.weight}
            onChange={handleFormChange}
            SelectProps={{ MenuProps: { disablePortal: true } }}
            sx={{ width: "65%", marginBottom: 1 }}
          >
            {weightOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option + " Kg"}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="boxColor"
            name="boxColor"
            label="BoxColor"
            select
            value={formData.boxColor}
            onChange={handleFormChange}
            SelectProps={{ MenuProps: { disablePortal: true } }}
            sx={{ width: "65%", marginBottom: 1 }}
          >
            {boxColorOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="destination"
            name="destination"
            label="Destination"
            select
            value={formData.destination}
            onChange={handleFormChange}
            SelectProps={{ MenuProps: { disablePortal: true } }}
            sx={{ width: "65%", marginBottom: 1 }}
          >
            {countries.length > 0 ? (
              countries.map((country) => (
                <MenuItem key={country.name} value={country.name}>
                  {country.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Select a country</MenuItem>
            )}
          </TextField>
          <Button
            type="submit"
            variant="outlined"
            size="medium"
            sx={{ width: "65%", marginTop: -2 }}
          >
            Order
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default OrderForm
