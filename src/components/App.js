import React from 'react';
import {Well,
        FormGroup,
        FormControl,
        ControlLabel,
        HelpBlock,
        Button,
        ButtonGroup} from 'react-bootstrap';

export default  class TodoApp extends React.Component{
 constructor(props){
     super(props);
 }
 
 goToRegister (){
    this.props.history.push("/register")
 }
 
 render(){
    
        const wellStyle={
            width: 400,
            height: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 80
        }
     return (
         <div className="container">
         <Well style={wellStyle}>
            <legend>Welcome to Gemini Tech</legend>
            <form>
                <FormGroup>
                        <ControlLabel>Enter Username </ControlLabel>
                    <FormControl
                        type='text'
                        placeholder='Enter Your Username'/>
                <FormControl.Feedback/>
                    <HelpBlock> </HelpBlock>
                </FormGroup>
                <FormGroup>
                        <ControlLabel>Enter Password </ControlLabel>
                    <FormControl
                        type='password'
                        placeholder='Enter Your Password'/>
                <FormControl.Feedback/>
                    <HelpBlock> </HelpBlock>
                </FormGroup>
                <div className="button">
                    <ButtonGroup>
                        <Button  bsStyle="default" type="submit">Login</Button>
                        <Button  bsStyle="primary" type="button" onClick={this.goToRegister.bind(this)}>
                        Register</Button>
                    </ButtonGroup>    
                </div>
            </form>
         </Well>
         </div>
     );
 }
 

}