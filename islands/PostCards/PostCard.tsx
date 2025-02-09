import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function MediaCard() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 400 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            accumsan lacus. Vivamus non cursus ante, at sodales arcu. Nullam
            euismod, quam non bibendum iaculis, mauris sapien blandit diam, id
            elementum dolor nisl vitae urna. Donec vel tincidunt erat. Phasellus
            lobortis blandit justo nec fermentum. Mauris ac porttitor turpis.
            Sed vulputate neque nec blandit auctor.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
