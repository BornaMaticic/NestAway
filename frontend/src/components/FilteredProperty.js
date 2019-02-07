import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const FilteredProperty = (props) => {

  function onSelect(event){
    event.preventDefault();
    props.sendSelectedProperty(props.property.id)
  }

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
            <Button
            type="submit"
            value={props.property.id}
            onClick={onSelect}
            // TODO check this is the correct reference for property ID
            size="small"
            color="primary">
              Select Nest
            </Button>
          </CardActions>
        </Card>
    </div>
  )

}
//   const {name, capacity } = props.property
//
//   function onSelect(event){
//     props.sendSelectedProperty(event.target.value)
//     console.log(event.target.value);
//   }
//
//   return (
//     <div className="property">
//       <h2>{name}</h2>
//       <p>Capacity: {capacity}</p>
//       <button type="submit" value={props.propertyId} onClick={onSelect}>Select nest</button>
//     </div>
//   )
// }


export default FilteredProperty;
