import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

const PackageActionCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, marginTop: "3rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="345"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PackageActionCard
