import React from 'react';
import {Well,
        FormGroup,
        FormControl,
        ControlLabel,
        HelpBlock,
        Checkbox,
        Radio,
        Button,
        ButtonGroup} from 'react-bootstrap';


export default  class Register extends React.Component{
    
    constructor(props){
     super(props);
     this.state={
         
     };
 }
    
     render(){
     
         const wellStyle={
            width: 700,
            height: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50
          }
            
        return(
        <div classname="container">
         <Well style={wellStyle}>
         <legend>Please Register</legend>
         {JSON.stringify (this.state)}        
         <form>
         <FormGroup>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your first name"
         value={this.state.firstName || ''}
         onChange={
             (e)=> this.setState
             ({
         firstName:e.target.value
             })
         }/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         <FormGroup>
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your last name"
         value={this.state.lastName || ''}
         onChange ={
             (e)=> this.setState
             ({
                 lastName:e.target.value
             })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
          <FormGroup>
         <ControlLabel>User Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your User Name"
          value={this.state.userName || ''}
         onChange ={
             (e)=> this.setState
             ({
                 userName:e.target.value
             })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
          <FormGroup>
         <ControlLabel>Password</ControlLabel>
         <FormControl
         type="password"
         placeholder="Enter your Password"
         value={this.state.passWord || ''}
         onChange ={
             (e)=> this.setState
             ({
                 passWord:e.target.value
             })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
          <FormGroup>
         <ControlLabel>Re-write your Password</ControlLabel>
         <FormControl
         type="text"
         placeholder="Rewrite your Password"
         value={this.state.rwpassWord || ''}
         onChange ={
             (e)=> this.setState
             ({
                 rwpassWord:e.target.value
             })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
     <ControlLabel>Gender</ControlLabel>  <br/>  
     <Radio  readOnly name="gender" inline value="Male" 
     checked={this.state.gender === 'Male'}
     onClick={
         ()=>{
             this.setState({'gender': 'Male'})
         }
     }>Male</Radio>
     
      <Radio  readOnly name="gender" inline value="Female"
      checked={this.state.gender === 'Female'}
      onClick={
         ()=>{
             this.setState({'gender': 'Female'})
         }
      }>Female</Radio>
      <br/><br/>
       <ControlLabel>Favorite Food</ControlLabel><br/>
      <Checkbox  readOnly inline
      checked={this.state.food1 === 'qwik-qwik'}
      onClick={
         ()=>{
            if(this.state.food1 === 'qwik-qwik')
            this.setState({'food1': ''})
            else
             this.setState({'food1': 'qwik-qwik'})
         }
      }
      >Qwik-Qwik</Checkbox>
      <Checkbox  readOnly inline
        checked={this.state.food2 === 'tempura'}
      onClick={
         ()=>{
             if(this.state.food2 === 'tempura')
             this.setState({'food2': ''})
             else
             this.setState({'food2': 'tempura'})
         }
      }>Tempura</Checkbox>
      <Checkbox  readOnly inline
        checked={this.state.food3 === 'isaw'}
      onClick={
         ()=>{
             if(this.state.food3 === 'isaw')
             this.setState({'food3': ''})
             else
             this.setState({'food3': 'isaw'})
         }
      }>Isaw</Checkbox>
      
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Location in Bohol</ControlLabel>
        <FormControl componentClass="select" placeholder="select" 
         value={this.state.location || ''}
         onChange ={
             (e)=> this.setState
             ({
                 location:e.target.value
             })
         }>
         <option value="">-Please select Location-</option>
         <option value="Alburquerque">Alburquerque</option>
         <option value="Alicia">Alicia</option>
         <option value="Anda">Anda</option>
         <option value="Baclayon">Baclayon</option>
        </FormControl>
        </FormGroup>
        
         <FormGroup controlId="formControlsTextarea">
           <ControlLabel>Comment</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Comment" />
           
         </FormGroup>
          <br/> 
          <div className="button">
          <ButtonGroup>               
         <Button bsStyle="success" type="submit">Submit</Button>
         <Button bsStyle="info" type="reset">Reset</Button>
         </ButtonGroup>
         </div>
         </form>
         
         </Well>
         </div>
            );
     }
}     