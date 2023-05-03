import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import FastDeliveryIcon from "../../img/FastDelivery.PNG"
import ShippingBoatIcon from "../../img/ShippingBoat.PNG"
import ProtectionIcon from "../../img/Protection.PNG"

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
}

function ProductValues() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={FastDeliveryIcon}
                sx={{ height: 100 }}
              />
              <Typography
                variant="h6"
                sx={{ my: 5, fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                The Fastest Delivery
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: "-apple-system" }}>
                {
                  "Lightning-fast delivery that brings smiles. Speedy service, prompt and reliable. "
                }

                {"Get your package in a flash, our swift shipping never fails!"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={ShippingBoatIcon}
                sx={{ height: 100 }}
              />
              <Typography
                variant="h6"
                sx={{ my: 5, fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                Cargo Shipping
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: "-apple-system" }}>
                {
                  "Sail with confidence, trust in our boat shipping expertise. Smooth and secure journeys, ensuring your vessel arrives safely. "
                }

                {"Navigating seas, delivering excellence with every voyage."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src={ProtectionIcon} sx={{ height: 100 }} />
              <Typography
                variant="h6"
                sx={{ my: 5, fontFamily: "-apple-system", fontWeight: "bold" }}
              >
                Safest Delivery
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: "-apple-system" }}>
                {
                  "Your safety is our top priority. With utmost care and caution, we ensure secure delivery, protecting your items throughout the journey."
                }
                {"Trust in our commitment to safe and reliable service."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductValues
