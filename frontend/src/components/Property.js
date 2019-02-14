import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Property = (props) => {

  return (
    <div className="property">
        <Card>
        <CardContent>
        </CardContent>
          <CardMedia
            style={{height:0, paddingTop:'56.25%'}}
            image={props.property.imageUrl}
            title={props.property.address}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.property.name}
            </Typography>
            <Typography component="p">
              Capacity: {props.property.capacity}
              <br/>
              Price per night: £{props.property.price}
            </Typography>
          </CardContent>
          <CardActions>
            <ExpansionPanel style={{width:'100%', alignItems: 'flex-start'}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>More details</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{width:'100%', textAlign:'left', display:'inline-block'}}>
                <Typography>
                  {props.property.address}
                  <br/>
                  <br/>
                  {props.property.rating} Star Rating
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
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
