import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Property = (props) => {

  return (
    <div className="property">
        <Card>
          <CardMedia
            style={{height:0, paddingTop:'56.25%'}}
            image={props.property.imageUrl}
            title={props.property.address}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.property.address}
            </Typography>
            <Typography component="p">
              {props.property.rating} Star Rating
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={`http://localhost:8080/api/property/${props.property.id}`} target="_blank">
              More details
            </Button>
          </CardActions>
        </Card>
    </div>
  )

}


// const {name, capacity } = props.property
//
// return (
//   <div className="property">
//     <h2>{name}</h2>
//     <p>Capacity: {capacity}</p>
//   </div>
// )

export default Property;
