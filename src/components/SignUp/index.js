import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../../modules/components/Typography';
//import { Link } from 'react-router-dom';
//import { Field } from 'react-final-form';
//import Grid from '@material-ui/core/Grid';

export default class CreateNote extends Component {



  state = {
    username: '',
    email: '',
    pass: ''

  }

  
  useStyles = makeStyles(theme => ({
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




  onSubmit = async (e) => {
    e.preventDefault();


    const newUser = {
      username: this.state.username,
      pass: this.state.pass,
      email: this.state.email
    };

    console.log(e.target.value);
    
    axios.post('http://localhost:4000/usuario', newUser);



    window.location.href = '/';

  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeUsername = (e) => {

    this.setState({

      username: e.target.value

    })



  }

  onSubmit1 = async e => {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.pass);

    const res = await axios.post('http://localhost:4000/usuario', {

      username: this.state.username,
      email: this.state.email,
      pass: this.state.pass


    })
     console.log(res);
  
  }

  render() {


    return (
      <React.Fragment>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Registrate
            </Typography>
          {/** 
          <Typography variant="body2" align="center">
            <Link className "navbar-brand" to ="/SignIn" underline="always">
              ¿Ya tienes una cuenta?
              </Link>
          </Typography>  */}
        </React.Fragment>


        <div className="col-md-6 offset-md-3">
          <div className="card card-body">

            <form onSubmit={this.onSubmit1}>

              {/* Note Title */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  onChange={this.onChangeUsername}
                  name="username"
                  value={this.state.username}
                  required />

              </div>




              {/* Note Title */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.onInputChange}
                  name="email"
                  value={this.state.email}
                  required />
              </div>

              {/* Note Title */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onInputChange}
                  name="pass"
                  value={this.state.pass}
                  required />
              </div>


              {/* Note Date */}

              <button type="submit" className="btn btn-primary">
                Crear usuario
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>

    )
  }
}