import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//export default function Album() {
export default class Album extends Component {


  state = {
    shops: []
  }


  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/tienda');
    this.setState({ shops: res.data });
    //console.log(res)
    console.log('***********')
    console.log(this.state.shops)
    console.log('***********')
    //console.log(this.state.shops)
    
  }


  render() {
  


    let useStyles = makeStyles(theme => ({
      icon: {
        marginRight: theme.spacing(2)
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      }
    }))

    return (

      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={useStyles.icon} />
            <Typography variant="h6" color="inherit" noWrap>
            T8KIT
          </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={useStyles.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Farmacias
            </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                texto...
            </Typography>
            {/**
              <div className={useStyles.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                  </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                  </Button>
                  </Grid>
                </Grid>
              </div>
              */}
            </Container>
          </div>
          <Container className={useStyles.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.shops.map(shop => (
                <Grid item key={shop._id} xs={12} sm={6} md={4}>
                  <Card className={useStyles.card}>
                    <CardMedia
                      className={useStyles.cardMedia}
                      image="https://alertasdeofertas.com/wp-content/uploads/2019/04/FARMACITY.png"
                      title={shop.shopname}
                    />
                    <CardContent className={useStyles.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {shop.shopname}
                      
                    </Typography>
                      <Typography>
                        Agreagra ubicacion.
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Ver productos
                    </Button>
                    
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={useStyles.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}