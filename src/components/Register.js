import React from 'react';
import {Well,
        FormGroup,
        FormControl,
        ControlLabel,
        HelpBlock,
        Checkbox,
        Radio} from 'react-bootstrap';


export default  class Register extends React.Component{

     render(){
     
         const wellStyle={
            width: 700,
            height: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50
        }
            
        return(
           <div className="container">
                <Well style={wellStyle}>
                     <legend>Please Register</legend>
                     <FormGroup>
                            <ControlLabel>First Name </ControlLabel>
                            <FormControl
                            type='text'
                            placeholder='Your First Name'/>
                            <FormControl.Feedback/>
                            <HelpBlock> </HelpBlock>
                     </FormGroup>
                      <FormGroup>
                            <ControlLabel>Family Name </ControlLabel>
                            <FormControl
                            type='text'
                            placeholder='Your Family Name'/>
                            <FormControl.Feedback/>
                            <HelpBlock> </HelpBlock>
                     </FormGroup>
                     <FormGroup>
                            <ControlLabel>Gender</ControlLabel> 
                            <br/>
                            <Checkbox inline>
                                Male
                            </Checkbox>
                              {''}
                            <Checkbox inline>
                                Female
                            </Checkbox>
                              {''}
                     </FormGroup>
                     <FormGroup>
                            <ControlLabel> </ControlLabel>
                            <br/>
                            <Radio inline>
                            
                            </Radio>
                     </FormGroup
                </Well>
           </div>
            );
     }
}     