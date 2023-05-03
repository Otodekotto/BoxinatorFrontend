import keycloak from "../../keycloak"
import React from "react"
import { Avatar, Container, Paper, Typography } from "@mui/material"
import ProfileSkyLine from "../../img/ProfileSkyline.jpg"

const ProfileCard = () => {
  // Replace with actual user data
  const user = {
    name: keycloak.tokenParsed.name,
    email: keycloak.tokenParsed.email,
  }

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          padding: 2,
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={ProfileSkyLine}
          alt="Avatar"
          style={{ width: 100, height: 100, marginBottom: "1rem" }}
        />
        <Typography variant="h6" gutterBottom>
          Name: {user.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email: {user.email}
        </Typography>
      </Paper>
    </Container>
  )
}

export default ProfileCard
