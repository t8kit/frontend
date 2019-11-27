import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '../components/Typography';
//import { Link } from 'react-router-dom';


//import clsx from 'clsx';
import Link from '@material-ui/core/Link';



const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;


  const images1 = [
    {
      url:
        'https://www.hola.com/imagenes/salud/2017062795512/caidas-ancianos-y-tecnologia/0-457-64/caida-ancianos1-t.jpg',
      title: 'Farmacia',
      width: '25%',
    }
  ];
    const images2 = [
    {
      url:
        'http://blog.sistemahiper.com.br/wp-content/uploads/2016/07/x-dicas-para-seu-supermercado-atrair-mais-clientes28167.jpg',
      title: 'Supermercado',
      width: '25%',
    }
  ];
    const images3 = [
    {
      url:
        'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
      title: 'Gastronomia',
      width: '25%',
    }
  ];
    const images4 = [
    {
      url:
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
      title: 'Indumentaria',
      width: '25%',
    }
    
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Compras, pagas y retiras en el momento justo...
      </Typography>
      

      

      <div className={classes.images}>
     
         {/**Inicio botón farmacia  */}
        {images1.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                
                {image.title}
                <Link
              variant="h6"
              underline="none"
              className={classes.imageButton}
              href="/tiendas-farmacias"
             
            >
               
            </Link>
                <div className={classes.imageMarked} />
               
              </Typography>
            </div>
          </ButtonBase>

          
        ))}
      
      {/**fin Boton farmacia  */}

      {/**Inicio botón supermercado  */}
      

       
     

        {images2.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                
                {image.title}
                <Link
              variant="h6"
              underline="none"
              className={classes.imageButton}
              href="/tiendas-supermercados"
             
            >
               
            </Link>
                <div className={classes.imageMarked} />
               
              </Typography>
            </div>
          </ButtonBase>

          
        ))}
        {/**Fin botón supermercado */}

        {/**Inicio botón gastronomia  */}
        
        {images3.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                
                {image.title}
                <Link
              variant="h6"
              underline="none"
              className={classes.imageButton}
              href="/tiendas-restaurantes"
             
            >
               
            </Link>
                <div className={classes.imageMarked} />
               
              </Typography>
            </div>
          </ButtonBase>

          
        ))}
      
      {/**fin Boton Gastronomía  */}

      {/**Inicio botón tiendas*/}
 
       
     

        {images4.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                
                {image.title}
                <Link
              variant="h6"
              underline="none"
              className={classes.imageButton}
              href="/tiendas-shopping"
             
            >
               
            </Link>
                <div className={classes.imageMarked} />
               
              </Typography>
            </div>
          </ButtonBase>

          
        ))}
        {/**Fin botón tiendas */}
      </div>
       
       
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);