import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';


//Imagen de fondo (no se porque oscurece los colores :S)
const backgroundImage =
//'/images/imagenPrincipal1.PNG';
// 'https://ar.images.search.yahoo.com/search/images;_ylt=AwrJ3s9sENFdY1gAEIut9Qt.?fr=mcafee&ei=UTF-8&p=daniel+wellington&fr2=sp-qrw-corr-top&norw=1#id=510&iurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F59%2F88%2F5f%2F59885f80994279fdeaec6fc090d71e5a.jpg&action=click';
 // 'https://www.instagram.com/p/B4cVan2CF0G/?igshid=q5n1nezmzvph';
 'http://misimagenesde.com/wp-content/uploads/2017/05/color-rosa-1.jpg';


const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
   // backgroundColor: '#cce5e2', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Cualquier cosa en tu tiempo
      </Typography>
      {/*<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Cualquier cosa en tu tiempo.
        </Typography>*/}
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
