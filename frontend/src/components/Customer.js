import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Customer = (props) => {

  return (
    <div className="customer">
      <Card>
        <CardContent>
          <Typography>
            Name: {props.customer.firstName} {props.customer.lastName}
          </Typography>
        </CardContent>

        <CardActions>
        <ExpansionPanel style={{width:'100%', alignItems: 'flex-start'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>More details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{width:'100%', textAlign:'left', display:'inline-block'}}>
            <Typography>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </CardActions>
      </Card>
    </div>
  )
}


export default Customer;
