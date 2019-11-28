import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';


//Imagen de fondo (no se porque oscurece los colores :S)
const backgroundImage =
//'/images/imagenPrincipal1.PNG';
//'https://instagram.faep8-1.fna.fbcdn.net/vp/37baac11a7783e22a409721362ec3192/5E539832/t51.2885-15/e15/72081952_1219271301590703_5513874417721643261_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=103';
//'https://t2.pb.ltmcdn.com/es/posts/9/9/0/relajacion_guiada_para_adolescentes_99_0_orig.jpg';
//foto del perro
'https://instagram.faep8-1.fna.fbcdn.net/vp/4bae70be0540bd2dc184e46c4a20a6da/5E897C7D/t51.2885-15/e35/p1080x1080/72119047_151108586149546_7031359667364854727_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=110';
// 'https://ar.images.search.yahoo.com/search/images;_ylt=AwrJ3s9sENFdY1gAEIut9Qt.?fr=mcafee&ei=UTF-8&p=daniel+wellington&fr2=sp-qrw-corr-top&norw=1#id=510&iurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F59%2F88%2F5f%2F59885f80994279fdeaec6fc090d71e5a.jpg&action=click';

//foto color rosa 
// 'http://misimagenesde.com/wp-content/uploads/2017/05/color-rosa-1.jpg';


const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
   // backgroundColor: '#cce5e2', // Average color of the background image.
    backgroundPosition: 'center',
  },
  //button: {
  //  minWidth: 200,
  //},
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
        Es tú tiempo
      </Typography>
      {/*<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Cualquier cosa en tu tiempo.
        </Typography>*/}
    {/*  <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Supemercado
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Farmacia
      </Button>

      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Comida
      </Button>

      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    */}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
