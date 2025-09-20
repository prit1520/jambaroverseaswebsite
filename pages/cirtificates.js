import React from "react";
import Layout from "../components/layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import {NextSeo} from "next-seo";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactButton from "../components/contactButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
    },
    heroSection: {
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    videoBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.6,
      zIndex: 0,
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      color: "#525252",
    },
    heroTitle: {
      fontSize: "4.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      textTransform: "uppercase",
      letterSpacing: "0.5rem",
      marginBottom: "2rem",
    },
    expandIcon: {
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "2rem",
      color: "#525252",
    },
    certificatesSection: {
      padding: "6rem 2rem",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
    },
    sectionTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      textAlign: "center",
      marginBottom: "1rem",
    },
    underline: {
      width: "100px",
      height: "3px",
      background: "#F8BB86",
      margin: "0 auto 4rem",
    },
    certificateGrid: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    certificateCard: {
      aspectRatio: "3 / 4",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.3s ease",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
      },
    },
    cardContent: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    certificateTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#525252",
      marginBottom: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    verifyIcon: {
      color: "#F8BB86",
      marginRight: "0.5rem",
    },
    certificateImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
    },
    decorativeCircle1: {
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "#F8BB86",
      opacity: 0.1,
      top: "-200px",
      left: "-200px",
      zIndex: 0,
    },
    decorativeCircle2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "#F8BB86",
      opacity: 0.1,
      bottom: "-150px",
      right: "-150px",
      zIndex: 0,
    },
    aboveFold: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      minHeight: "30rem",
      flexDirection: "column",
      background: "white",
      overflow: "hidden",
      height: "100vh",
      zIndex: 1,
    },
    aboveFoldCircle2: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "-7rem",
      bottom: "-5rem",
      zIndex: -1,
    },
    aboveFoldCircle3: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "15%",
      bottom: "27.5rem",
      left: "16rem",
      zIndex: -1,
    },
    aboveFoldText: {
      marginBottom: "7rem",
      position: "relative",
      zIndex: 1,
    },
  })
);

const certificates = [
  {
    title: "Registration Certificate",
    image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1758347011/Gemini_Generated_Image_jkp7yjjkp7yjjkp7_mzyag6.png", // Add preview image
    pdfUrl: "https://drive.google.com/file/d/1vMS2Mp0la_BZVMf8GT0JjuWlX1Wc2VZO/view?usp=sharing",
  },
  {
    title: "Udyam Registration Certificate",
    image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1758347012/Gemini_Generated_Image_ur6eacur6eacur6e_sxalh8.png", // Add preview image
    pdfUrl: "https://drive.google.com/file/d/1mlVBXqpKtEiJLnNFdepbQGdbeKZCsBgF/view?usp=sharing",
  },
  {
    title: "Importer-Exporter Code",
    image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1758347013/Gemini_Generated_Image_xcjqvexcjqvexcjq_bqzgdp.png", // Add preview image
    pdfUrl: "https://drive.google.com/file/d/19EU0gzHLH6a4LQWCu4Tz8mdjnl1AY8rw/view?usp=sharing",
  },
  {
    title: "APEDA Certificate",
    image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1758347013/Gemini_Generated_Image_exhmpwexhmpwexhm_bwrki4.png", // Add preview image
    pdfUrl: "https://drive.google.com/file/d/1AUXqfBQBMO4iAkKCx7UgEZapiVAn5RGZ/view?usp=sharing",
  },
  {
    title: "Fssai Certificate",
    image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1758347012/Gemini_Generated_Image_f6imi3f6imi3f6im_q01yjy.png", // Add preview image
    pdfUrl: "https://drive.google.com/file/d/1aNviS2io2QSFMh7gCBoM_KNi2uMsf7PY/view?usp=sharing",
  },
];

export default function Certificates() {
  const classes = useStyles();

  return (
    <Layout>
      <NextSeo
        title="Certificates | Jambar Overseas"
        description="View our company certificates including Registration Certificate, UDYAM Registration, and Importer-Exporter Code"
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldCircle2}></div>
          <div className={classes.aboveFoldCircle3}></div>
          <div className={classes.aboveFoldText}>
            <h1 className={classes.heroTitle}>
              Our Certifications
            </h1>
            <h3 className={classes.heroSubtitle}>
              VERIFIED EXCELLENCE
            </h3>
            <div>
              <ContactButton />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <ExpandMoreIcon className={classes.aboveFoldIcon} />
          </div>
        </div>

        <div className={classes.certificatesSection}>
          <div className={classes.decorativeCircle1} />
          <div className={classes.decorativeCircle2} />
          
          <Typography className={classes.sectionTitle}>
            Official Certifications
          </Typography>
          <div className={classes.underline} />
          
          <Grid container spacing={4} className={classes.certificateGrid}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={4} key={index}>
                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Card className={classes.certificateCard}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={classes.certificateImage}
                    />
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
}
