import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';

interface CardData {
  title: string;
  description: string;
  image: string;
  descDetalhes: string;
}

interface RecipeCardsProps {
  data: CardData[];
}

interface ExpandMoreProps {
  expand: boolean;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'expand',
})<ExpandMoreProps>(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const RecipeCards: React.FC<RecipeCardsProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Grid
      container
      spacing={4} // Adiciona espaçamento entre os cartões
      justifyContent="center"
      alignItems="flex-start"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ maxWidth: 345, border: '1px solid #ddd', borderRadius: '8px' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.title.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
              subheader={item.description}
            />
            <CardMedia
              component="img"
              height="194"
              image={item.image}
              alt={`${item.title} image`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.descDetalhes}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expandedIndex === index}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedIndex === index}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{item.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeCards;
