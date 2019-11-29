import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TimeIcon from '@material-ui/icons/AccessTime';
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
import axios from 'axios';




 
export default class ShopsShopping extends Component {


  state = {
    shops: []
  }


  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/ShopsShopping');
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
      rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
      },

      linkSecondary: {
        color: theme.palette.secondary.main,
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
            <TimeIcon className={useStyles.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Shopping
          </Typography>
          </Toolbar>
        </AppBar>

        <div className="row"> {
          <main>

            <Container className={useStyles.cardGrid} maxWidth="md">
              {/* ** */}
              <Grid container spacing={4}>
                {this.state.shops.map(shop => (
                  <Grid item key={shop._id} xs={12} sm={6} md={4}>
                    <Card className={useStyles.card}>
                      <CardMedia
                        className={useStyles.cardMedia}
                        title={shop.shopname}
                      />
                      <div className="ejemplo">
                        <img src={shop.photo}
                          alt="tiendas" />

                      </div>
                      <CardContent className={useStyles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {shop.shopname}

                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                        {shop.adrress}
                    </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          <Link
                            className="ver productos de tienda"
                            href="/ShopProducts"

                          >
                            {'Ver productos'}
                          </Link>

                        </Button>

                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        }
        </div>

      </React.Fragment>
    );
  }
}