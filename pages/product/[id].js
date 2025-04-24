import { useRouter } from 'next/router';
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import products from "../../components/products.json";
import { NextSeo } from "next-seo";
import { Button, Chip } from "@material-ui/core";
import ContactButton from "../../components/contactButton";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "100px",
    minHeight: "100vh",
    background: "#fff"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem"
  },
  productHeader: {
    display: "flex",
    gap: "2rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  mainImageContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    "&:hover": {
      "& $mainImageOverlay": {
        opacity: 1
      }
    }
  },
  mainImage: {
    width: "500px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "300px"
    }
  },
  mainImageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(248, 187, 134, 0.9)",
    padding: "1rem",
    color: "white",
    opacity: 0,
    transition: "opacity 0.3s ease",
    textAlign: "center",
    fontWeight: "bold"
  },
  productInfo: {
    flex: 1
  },
  title: {
    fontSize: "3rem",
    color: "#525252",
    marginBottom: "1rem"
  },
  description: {
    fontSize: "1.2rem",
    color: "grey",
    marginBottom: "2rem",
    lineHeight: 1.6
  },
  categories: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem"
  },
  category: {
    background: "#F8BB86",
    color: "white"
  },
  features: {
    marginBottom: "2rem"
  },
  featureTitle: {
    fontSize: "1.5rem",
    color: "#525252",
    marginBottom: "1rem"
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    "& li": {
      marginBottom: "0.5rem",
      color: "grey",
      "&:before": {
        content: '"•"',
        color: "#F8BB86",
        fontWeight: "bold",
        marginRight: "0.5rem"
      }
    }
  },
  gallery: {
    marginTop: "4rem",
    position: "relative"
  },
  galleryTitle: {
    fontSize: "2rem",
    color: "#525252",
    marginBottom: "2rem",
    textAlign: "center"
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem"
  },
  galleryImageContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    "&:hover": {
      "& $galleryImageOverlay": {
        opacity: 1,
        transform: "translateY(0)"
      },
      "& $galleryImage": {
        transform: "scale(1.1)"
      }
    }
  },
  galleryImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    display: "block"
  },
  galleryImageOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(248, 187, 134, 0.9)",
    padding: "1rem",
    color: "white",
    transform: "translateY(100%)",
    transition: "all 0.3s ease",
    opacity: 0,
    textAlign: "center",
    fontWeight: "bold"
  }
}));

export default function ProductDetail() {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <NextSeo
        title={`${product.name} | JambarOverseas`}
        description={product.description}
      />
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.productHeader}>
            <div className={classes.mainImageContainer}>
              <img 
                src={product.img} 
                alt={product.name}
                className={classes.mainImage}
              />
              <div className={classes.mainImageOverlay}>
                {product.name}
              </div>
            </div>
            <div className={classes.productInfo}>
              <h1 className={classes.title}>{product.name}</h1>
              <p className={classes.description}>{product.description}</p>
              
              <div className={classes.categories}>
                {product.categories.map(category => (
                  <Chip 
                    key={category}
                    label={category}
                    className={classes.category}
                  />
                ))}
              </div>

              <div className={classes.features}>
                <h3 className={classes.featureTitle}>Key Features</h3>
                <ul className={classes.featureList}>
                  {product.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <ContactButton />
            </div>
          </div>

          {product.gallery && product.gallery.length > 0 && (
            <div className={classes.gallery}>
              <h2 className={classes.galleryTitle}>Product Gallery</h2>
              <div className={classes.galleryGrid}>
                {product.gallery.map((img, index) => {
                  // Extract image name from path
                  const imageName = img.split('/').pop() // Gets filename from path
                    .split('.')[0] // Removes extension
                    .split('-') // Split by hyphens
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                    .join(' '); // Join with spaces

                  return (
                    <div key={index} className={classes.galleryImageContainer}>
                      <img 
                        src={img}
                        alt={`${product.name} - ${imageName}`}
                        className={classes.galleryImage}
                      />
                      <div className={classes.galleryImageOverlay}>
                        {imageName}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
