//Dependecias

//import React , { Component } from 'react';
import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../../modules/components/Typography';

import AppAppBar from '../../modules/views/AppAppBar';
import AppForm from '../../modules/views/AppForm';
//import { email, required } from '../../modules/form/validator';
//import RFTextField from '../../modules/form/RFTextField';
import FormButton from '../../modules/form/FormButton';
import FormFeedback from '../../modules/form/FormFeedback';



//export default class CreateUser extends Component {

const state = {
 username: '',
 pass: '',
 title:'',
  email: ''
}



//constructor(props) = {
//  super(props)
//  this.state = {
//    username: '',
//    pass: '',
//    title:'',
//    email: ''
//  }
//}

// async componentDidMount => {
//   const users = await axios.get('http://localhost:4000/usuario');
//   this.setState({});
//   this.getUsers();
//  }

//const getUsers = async () => {
//  const res = await axios.get('http://localhost:4000/usuario');
//  this.setState({
//    users: res.data
//  });
//}


//const onChangeUsername = e => {
//  this.setState({
//    username: e.target.value
//  })
//}




function onInputChange(e)  {
  this.setState({
      [e.target.name]: e.target.value
  })
}


const useStyles = makeStyles(theme => ({
  //useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  //SignUp() {
  const classes = useStyles();
 // const [sent, setSent] = React.useState(false);
 const [sent] = React.useState(false);
//const onSubmit = fields => {
  const onSubmitPostUser =  async (e) => {
    //Cancela el reinicio del formulario
    e.preventDefault();
    //Seteo los datos que recibí de la consola 
    const newUser = {
      username: this.state.username,
      pass: this.state.pass,
      email: this.state.email
    };
    //Envio los datos a la api definica en el backend
    axios.post('http://localhost:4000/usuario', newUser);
    console.log(state);
    console.log(newUser);
  }
  
  //const validate = values => {
 //   const errors = required(['firstName', 'email', 'password'], values);
//
//    if (!errors.email) {
//      const emailError = email(values.email, values);
//      if (emailError) {
//        errors.email = email(values.email, values);
//      }
//    }
//
//    return errors;
//  };

 // const handleSubmit = () => {
 //   setSent(true);
 // };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Registrate
            </Typography>
          <Typography variant="body2" align="center">
            <Link href="/SignIn" underline="always">
              ¿Ya tienes una cuenta?
              </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={this.onSubmitPostUser()}>
          {/** <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>*/}
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    
                   type="text"
                   className="form-control"
                   placeholder="Title"
                
                    onChange={this.onInputChange}
                    name="Usuario"
                    value={this.state.username}
                    required
                  />
                </Grid>

              </Grid>
              <Field
                onChange={this.onInputChange}
                name="Email"
                value={this.state.email}
                required
              />
              <Field
                onChange={this.onInputChange}
                name="Password"
                value={this.state.pass}
                required
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'En progreso…' : 'Sign Up'}
              </FormButton>
            </form>
            
          )}
        </Form>
      </AppForm>
      <AppAppBar />
    </React.Fragment>
  );
}

//}


export default SignUp;




