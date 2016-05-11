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
import validation from 'react-validation-mixin'
import strategy from 'react-validatorjs-strategy'
import validtorjs from 'validatorjs'
import classnames from 'classnames'

class Register extends React.Component{
    
    constructor(props){
     super(props);
     this.state={
     movie:{}
     };
     
     this.validatorTypes = strategy.createSchema (
            {
                    firstName:'required',
                    lastName: 'required',
                    userName: 'required',
                    PassWord: 'required',
                    rwpassWord: 'same:PassWord',
                    gender: 'required',
                    location: 'required',
                    comment: 'required',
                    movie:'required|movierule'
                    
            },
            {
                    "required": "The field  :attribute is required"
            },
            (validator)=> {
                validator.setAttributeNames({
                        firstName: 'First Name',
                        lastName: 'Last Name',
                        userName: 'User Name',
                        PassWord: 'Password',
                        rwpassWord: 'Re-write Password',
                        gender: 'Gender',
                        location: 'Location',
                        comment: 'Comment'
                });
                
                validator.constructor.registerAsync('movierule',
                function(movie, attribute, req, passes){
                var counter=0
                for(var key in movie){
                        if(movie[key])
                                counter++;
                
                       }  
                        if(counter==0)
                                passes(false,'Please Select One');
                          else 
                          passes();
                });
              }
     );
     
             }
 
 getValidatorData = ()=> {
        return this.state
    };

getClasses = (field)=>{
        return classnames({
            'success': this.props.isValid(field),
            'error': !this.props.isValid(field)
        });
 };


getErrorText=(field)=>{
        var error = this.props.errors[field];
        if(!error)
            return null;
        if(Array.isArray(error)){
            var message = [];
            message = error.map((item,i)=>{
                return(
                    <span key={i}>
                        {item}
                        <br/>
                    </span>
                )
            });
            return message;
        }
        else
            return  (<span>{error || ''}</span>);
    };
    
     onFormSubmit = (event)=>{
        event.preventDefault();
        
        this.setState ({
            validated: true
        });
        
        this.props.validate(this.onValidate);
    };

     onValidate=(error)=>{
        if (error) {
            //form has errors; do not submit
        } else {
           // submit to rest here
        }
    };
    
    
     render(){
     
         const wellStyle={
            width: 500,
            height: 300,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50
          }
            
        return(
        <div classname="container">
         <Well style={wellStyle}>
         <legend>Please Register</legend>
         <form onSubmit={this.onFormSubmit}>
         <FormGroup validationState={this.getClasses('firstName')}>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            value={this.state.firstName || ''}
       
     
                    
            onChange={
                (e)=> this.setState
                ({
            firstName:e.target.value
                })
            }/>
            <FormControl.Feedback/>
            <HelpBlock>{this.getErrorText('firstName')}</HelpBlock>
            </FormGroup>
            
            <FormGroup validationState={this.getClasses('lastName')}>
            <ControlLabel>Last Name</ControlLabel>
         <FormControl
         type="text"
         name="lastname"
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
         <HelpBlock>{this.getErrorText('lastName')}</HelpBlock>
         </FormGroup>
         
          <FormGroup validationState={this.getClasses('userName')}>
         <ControlLabel>User Name</ControlLabel>
         <FormControl 
         type="text"
         name="username"
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
         <HelpBlock>{this.getErrorText('userName')}</HelpBlock>
         </FormGroup>
         
         <FormGroup validationState={this.getClasses('PassWord')}>
         <ControlLabel>Password</ControlLabel>
         <FormControl
         type="password"
         name="password"
         placeholder="Enter your Password"
         value={this.state.PassWord || ''}
         onChange ={
             (e)=> this.setState
             ({
                 PassWord:e.target.value
             })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('PassWord')}</HelpBlock>
         </FormGroup>
         
          <FormGroup validationState={this.getClasses('rwpassWord')}>
         <ControlLabel>Re-write your Password</ControlLabel>
         <FormControl
         type="password"
         name="rwpassword"
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
         <HelpBlock>{this.getErrorText('rwassWord')}</HelpBlock>
         </FormGroup>
     
      <FormGroup validationState={this.getClasses('gender')}>    
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
        
         <HelpBlock>{this.getErrorText('gender')}</HelpBlock>
        
      </FormGroup>
             <FormGroup validationState={this.getClasses('movie')}>
                    <ControlLabel>Favorite Movie</ControlLabel><br/>

      <Checkbox   inline
      checked={this.state.movie['Lihis'] === 1 }
      onClick={
         ()=>{
         var movie= this.state.movie;
            if(movie['Lihis']===1)
            movie['Lihis'] = undefined;
            else
             movie['Lihis'] = 1;
             this.setState({
             movie:movie
         });
      }}
      >Lihis</Checkbox>
      <Checkbox   inline
      checked={this.state.movie['regidon'] === 1 }
      onClick={
         ()=>{
         var movie= this.state.movie;
            if(movie['regidon']===1)
            movie['regidon']= undefined;
            else
             movie['regidon'] = 1;
             this.setState({
             movie:movie
         })
      }}
      >regidon</Checkbox>
      <Checkbox   inline
      checked={this.state.movie['Superman'] === 1 }
      onClick={
         ()=>{
         var movie= this.state.movie;
            if(movie['Superman']===1)
            movie['Superman']= undefined;
            else
             movie['Superman'] = 1;
             this.setState({
             movie:movie
         });
      }}
      >Superman</Checkbox>
              <HelpBlock>{this.getErrorText('movie')}</HelpBlock>

      </FormGroup>
      <FormGroup controlId="formControlsSelect" validationState={this.getClasses('location')}>
        <ControlLabel>Location in Bohol</ControlLabel>
        <FormControl componentClass="select" placeholder="select" name="location"
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
        <HelpBlock>{this.getErrorText('location')}</HelpBlock>
        </FormGroup>
        
         <FormGroup controlId="formControlsTextarea"  validationState={this.getClasses('comment')}>
           <ControlLabel>Comment</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Comment" name="comment"
            value={this.state.comment || ''}
            onChange ={
             (e)=> this.setState
             ({
                 comment:e.target.value
             })
           }>
           
           <HelpBlock>{this.getErrorText('comment')} </HelpBlock>
           </FormControl>
         </FormGroup>
          <div className="button">
          <ButtonGroup>          
          <br/><br/>    
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



export default validation(strategy)(Register);