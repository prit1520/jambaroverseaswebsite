import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import { Button } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import products from "../components/products.json";
import addOn from "../components/addOnProducts.json";
import Link from "next/link";
import ContactButton from "../components/contactButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import SecurityIcon from '@material-ui/icons/Security';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import StarsIcon from '@material-ui/icons/Stars';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { NextSeo } from "next-seo";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      overflow: "hidden",
    },
    aboveFold: {
      position: "relative",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    },
    videoBackground: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      zIndex: 0
    },
    aboveFoldContent: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "80px" // Add padding equal to navbar height
    },
    ringBackground: {
      position: "absolute",
      width: "800px",
      height: "800px",
      borderRadius: "50%",
      border: "10px solid rgba(248, 187, 134, 0.3)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0
    },
    header: {
      fontSize: "7.5rem",
      lineHeight: "8rem",
      fontWeight: "bold",
      textAlign: "center",
      maxWidth: "90rem",
      [theme.breakpoints.down("1550")]: {
        fontSize: "5.5rem",
        lineHeight: "6rem",
        maxWidth: "70rem",
      },
      [theme.breakpoints.down("1050")]: {
        fontSize: "4.5rem",
        lineHeight: "5rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("800")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
        maxWidth: "45rem",
        marginRight: "1.5rem",
        marginLeft: "1.5rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down("380")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
    },
    paragraph: {
      fontSize: "1.3rem",
      textAlign: "center",
      maxWidth: "50rem",
      fontWeight: 600,
      color: "#424242",
      [theme.breakpoints.down("950")]: {
        fontSize: "0.95rem",
        marginRight: "3rem",
        marginLeft: "3rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "0.9rem",
        marginRight: "3rem",
        marginLeft: "3rem",
      },
    },
    aboveFoldTextBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      zIndex: 2,
    },
    aboveFoldIcon: {
      fontSize: "3.2rem",
      color: "black",
    },
    aboveFoldTextBoxInner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    aboveFoldIconContainer: {
      zIndex: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    aboveFoldGlobe: {
      position: "absolute",
      "-moz-opacity": "15%",
      "-khtml-opacity": "15%",
      opacity: "15%",
      fontSize: "65rem",
      color: "#F8BB86",
      right: 0,
      [theme.breakpoints.down("1680")]: {
        right: "-5rem",
      },
      [theme.breakpoints.down("1380")]: {
        right: "-15rem",
        fontSize: "55rem",
      },
      [theme.breakpoints.down("900")]: {
        right: "-20rem",
        fontSize: "40rem",
      },
    },
    expandMoreContainer: {
      position: "absolute",
      bottom: "1rem",
      "& > *": {
        fontSize: "1.75rem",
      },
    },
    belowFold: {
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5rem",
      width: "100%",
      position: "relative",
      [theme.breakpoints.down("920")]: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: "0rem",
        paddingBottom: 0,
      },
    },
    belowFoldTextContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },
    belowFoldImage: {
      width: "30rem",
      height: "50rem",
      margin: 0,
      opacity: "75%",
      "-moz-opacity": "75%",
      "-khtml-opacity": "75%",
      marginRight: "20rem",
      objectFit: "cover",
      [theme.breakpoints.down("1050")]: {
        width: "25rem",
        height: "42rem",
      },
      [theme.breakpoints.down("800")]: {
        width: "20rem",
        height: "37rem",
        marginRight: "15rem",
      },
      [theme.breakpoints.down("700")]: {
        marginLeft: 0,
        width: "20.5rem",
        borderRadius: "0 0.5rem 0.5rem 0",
      },
      [theme.breakpoints.down("600")]: {
        width: "16.5rem",
        height: "33rem",
      },
      [theme.breakpoints.down("435")]: {
        width: "13.5rem",
        marginTop: "3rem",
        marginBottom: "3rem",
        height: "30rem",
      },
      [theme.breakpoints.down("340")]: {
        width: "11.5rem",
        height: "27rem",
      },
    },
    belowFoldImageContainer: {
      [theme.breakpoints.down("700")]: {
        marginLeft: 0,
        width: "100%",
      },
    },
    belowFoldText: {
      marginLeft: "15rem",
      maxWidth: "40rem",
      color: "white",
      fontWeight: "bold",
      fontSize: "3.5rem",
      lineHeight: "4.25rem",
      position: "absolute",
      [theme.breakpoints.down("1050")]: {
        marginLeft: "10rem",
        fontSize: "3rem",
        lineHeight: "3.5rem",
        maxWidth: "30rem",
        marginRight: "3rem",
      },
      [theme.breakpoints.down("800")]: {
        marginLeft: "6rem",
        fontSize: "2.5rem",
        lineHeight: "3rem",
        maxWidth: "25rem",
        marginRight: "3rem",
      },
      [theme.breakpoints.down("700")]: {
        marginLeft: "5rem",
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("600")]: {
        marginLeft: "4rem",
        fontSize: "2rem",
        lineHeight: "2.5rem",
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("435")]: {
        marginLeft: "2rem",
        fontSize: "1.75rem",
        lineHeight: "2.25rem",
        marginRight: "1rem",
      },
      [theme.breakpoints.down("340")]: {
        marginLeft: "1rem",
        fontSize: "1.75rem",
        lineHeight: "2.25rem",
        marginRight: "0.75rem",
      },
    },
    offerInner: {
      display: "flex",
    },
    icon: {
      color: "white",
      fontSize: "2.25rem",
    },
    iconOuter: {
      background: "#F8BB86",
      padding: "0.7rem",
      borderRadius: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      marginTop: "auto",
      marginBottom: "auto",
    },
    offerTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      lineHeight: "2.5rem",
      color: "#525252",
    },
    offerText: {
      color: "grey",
      fontWeight: 600,
      fontSize: "1.1rem",
      marginTop: "0.8rem",
      marginLeft: "0.2rem",
      maxWidth: "30rem",
    },
    offerOuter: {
      display: "flex",
      flexDirection: "column",
      marginRight: "2.5rem",
      marginLeft: "2.5rem",
    },
    offerRoot: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "90rem",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "8.5rem",
      marginBottom: "8.5rem",
      "& > div": {
        marginLeft: "3rem",
        marginRight: "3rem",
      },
      overflow: "hidden",
      zIndex: 2,
      [theme.breakpoints.down("1440")]: {
        "& > div": {
          marginLeft: "5rem",
          marginRight: "5rem",
        },
      },
      [theme.breakpoints.down("1100")]: {
        "& > div": {
          marginLeft: "2rem",
          marginRight: "2rem",
        },
      },
      [theme.breakpoints.down("950")]: {
        justifyContent: "center",
        flexDirection: "column",
        "& > div": {
          marginTop: "2rem",
          marginBottom: "2rem",
        },
      },
    },
    offerCircle: {
      position: "absolute",
      width: "25rem",
      height: "25rem",
      background: "#F8BB86",
      opacity: "25%",
      "-moz-opacity": "25%",
      "-khtml-opacity": "25%",
      borderRadius: "50%",
      bottom: "-5rem",
      left: "-5rem",
      zIndex: -1,
    },
    offerOutline: {
      position: "absolute",
      width: "20rem",
      height: "20rem",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      opacity: "25%",
      "-moz-opacity": "25%",
      "-khtml-opacity": "25%",
      borderRadius: "50%",
      top: "-5rem",
      right: "-5rem",
      zIndex: -1,
    },
    offer: {
      overflow: "hidden",
      position: "relative",
    },
    servicesRoot: {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "2.5rem",
      flexDirection: "column",
    },
    servicesHeader: {
      fontWeight: "bold",
      fontSize: "3rem",
      textAlign: "center",
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
      lineHeight: "3.25rem",
      marginBottom: "0.5rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "2.5rem",
        marginRight: 0,
        marginLeft: 0,
      },
      [theme.breakpoints.down("325")]: {
        fontSize: "2.2rem",
        lineHeight: "2.7rem",
        marginRight: 0,
        marginLeft: 0,
      },
    },
    servicesSub: {
      fontWeight: "bold",
      marginBottom: "1.8rem",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "0.35rem",
      textAlign: "center",
      [theme.breakpoints.down("325")]: {
        fontSize: "0.95rem",
        lineHeight: "1.2rem",
      },
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      marginBottom: "2rem",
      [theme.breakpoints.down("750")]: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
      },
      [theme.breakpoints.down("500")]: {
        gridTemplateColumns: "1fr",
        gap: "1rem",
      },
    },
    servicesGridChild: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        width: "20rem",
        height: "20rem",
        margin: 0,
        objectFit: "cover",
        transition: "all 0.4s ease",
        [theme.breakpoints.down("750")]: {
          opacity: "55%",
          "-moz-opacity": "55%",
          "-khtml-opacity": "55%",
        },
        [theme.breakpoints.down("1000")]: {
          width: "17.5rem",
          height: "17.5rem",
        },
        [theme.breakpoints.down("900")]: {
          width: "15rem",
          height: "15rem",
        },
        [theme.breakpoints.down("500")]: {
          width: "100%",
          height: "20rem",
          borderRadius: "0.5rem",
        },
      },
      "& div": {
        position: "absolute",
        fontWeight: "bold",
        fontSize: "1.25rem",
        margin: "0.5rem",
        display: "none",
        transition: "all 0.4s ease",
        opacity: "0%",
        "-moz-opacity": "0%",
        "-khtml-opacity": "0%",
        [theme.breakpoints.down("750")]: {
          display: "block",
          "-moz-opacity": "100%",
          "-khtml-opacity": "100%",
          opacity: "100%",
        },
      },
      "&:hover": {
        "& img": {
          "-moz-opacity": "50%",
          "-khtml-opacity": "50%",
          opacity: "50%",
          transition: "all 0.4s ease",
        },
        "& div": {
          display: "block",
          transition: "all 0.4s ease",
          "-moz-opacity": "100%",
          "-khtml-opacity": "100%",
          opacity: "100%",
        },
      },
    },
    servicesButton: {
      color: "black",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      backgroundColor: "white",
      padding: "1rem",
      "&:hover": {
        background: "white",
      },
    },
    underline: {
      width: "100px",
      height: "3px",
      background: "#F8BB86",
      margin: "0 auto 2rem"
    },
    whyChooseRoot: {
      padding: "6rem 2rem",
      background: "#f5f5f5",
      textAlign: "center"
    },
    whyChooseTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#525252",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem"
      }
    },
    whyChooseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr"
      }
    },
    whyChooseItem: {
      padding: "2rem",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)"
      }
    },
    whyChooseIcon: {
      fontSize: "3rem",
      color: "#F8BB86",
      marginBottom: "1rem"
    },
    whyChooseItemTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#525252"
    },
    whyChooseItemText: {
      color: "grey",
      lineHeight: "1.6"
    },
    whyChooseUs: {
      position: "relative",
      padding: "6rem 2rem",
      overflow: "hidden",
      textAlign: "center",
      backgroundColor: "#fff"
    },
    whyChooseCircle: {
      position: "absolute",
      width: "800px",
      height: "800px",
      borderRadius: "50%",
      background: "#F8BB86",
      opacity: 0.1,
      top: "-400px",
      right: "-200px",
      zIndex: 0
    },
    whyChooseContent: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1200px",
      margin: "0 auto"
    },
    reachSection: {
      padding: "6rem 2rem",
      background: "#fff",
      position: "relative",
      overflow: "hidden"
    },
    reachCircle1: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "-200px",
      left: "-100px",
      zIndex: 0
    },
    reachCircle2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      bottom: "-100px",
      right: "-50px",
      zIndex: 0
    },
    reachContent: {
      position: "relative",
      zIndex: 1
    },
    reachGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      maxWidth: "1200px",
      margin: "0 auto",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        textAlign: "center"
      }
    },
    reachTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      marginBottom: "2rem"
    },
    reachSubTitle: {
      fontSize: "1.8rem",
      color: "#F8BB86",
      marginBottom: "1.5rem"
    },
    reachText: {
      color: "grey",
      lineHeight: "1.8",
      marginBottom: "2rem"
    },
    reachMapContainer: {
      position: "relative",
      height: "400px",
      [theme.breakpoints.down("sm")]: {
        height: "300px"
      }
    },
    reachMap: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    },
    knowMoreBtn: {
      backgroundColor: "#F8BB86",
      color: "white",
      padding: "1rem 2rem",
      borderRadius: "30px",
      textTransform: "none",
      fontSize: "1.1rem",
      "&:hover": {
        backgroundColor: "#e5a975"
      }
    },
    coreValuesSection: {
      padding: "8rem 2rem",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    },
    coreValuesCircle1: {
      position: "absolute",
      width: "800px",
      height: "800px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "-300px",
      left: "-200px",
      zIndex: 0
    },
    coreValuesCircle2: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      bottom: "-200px",
      right: "-100px",
      zIndex: 0
    },
    coreValuesContent: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center"
    },
    coreValuesTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      marginBottom: "1rem"
    },
    coreValuesSubtitle: {
      fontSize: "1.2rem",
      color: "grey",
      maxWidth: "800px",
      margin: "0 auto 4rem",
      lineHeight: 1.6
    },
    valueBoxesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr"
      }
    },
    valueBox: {
      background: "white",
      padding: "3rem 2rem",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "&:hover": {
        transform: "translateY(-10px)"
      }
    },
    valueIcon: {
      fontSize: "4rem",
      color: "#F8BB86",
      marginBottom: "1.5rem"
    },
    valueBoxTitle: {
      fontSize: "1.8rem",
      color: "#F8BB86",
      marginBottom: "1rem",
      fontWeight: "bold"
    },
    valueBoxText: {
      color: "grey",
      lineHeight: 1.6
    },
    combinedSection: {
      position: "relative",
      background: "#fff",
      overflow: "hidden",
      padding: "0",
    },
    backgroundCircles: {
      position: "absolute",
      width: "100%",
      height: "200%",
      top: 0,
      left: 0,
      zIndex: 0
    },
    circle1: {
      position: "absolute",
      width: "1200px",
      height: "1200px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "0%",
      left: "-20%",
    },
    circle2: {
      position: "absolute",
      width: "1000px",
      height: "1000px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "50%",
      right: "-10%",
    },
    circleLeft: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "10%",
      left: "-20%",
      zIndex: 0
    },
    circleRight: {
      position: "absolute", 
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "50%",
      right: "-20%",
      zIndex: 0
    },
    sectionContent: {
      position: "relative",
      zIndex: 1,
    },
    faqSection: {
      padding: "6rem 2rem",
      position: "relative",
      zIndex: 1,
      background: "#fff",
      overflow: "hidden",
      isolation: "isolate" // Ensures containment
    },
    faqRing: {
      position: "absolute",
      width: "800px",
      height: "800px",
      borderRadius: "50%",
      border: "40px solid rgba(248, 187, 134, 0.1)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -1
    },
    faqCircleLeft: {
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      bottom: "-200px",
      left: "-200px",
      zIndex: -1
    },
    faqCircleRight: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "-100px",
      right: "-100px",
      zIndex: -1
    },
    faqTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      textAlign: "center",
      marginBottom: "1rem"
    },
    faqContainer: {
      maxWidth: "900px",
      margin: "0 auto"
    },
    accordion: {
      marginBottom: "1rem",
      borderRadius: "10px !important",
      '&:before': {
        display: 'none',
      },
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    accordionSummary: {
      backgroundColor: "white",
      borderRadius: "10px",
      '& .MuiAccordionSummary-expandIcon': {
        color: "#F8BB86"
      }
    },
    question: {
      color: "#525252",
      fontWeight: "bold",
      fontSize: "1.1rem"
    },
    answer: {
      color: "grey",
      lineHeight: 1.6
    },
    prefix: {
      color: "#F8BB86",
      marginRight: "1rem",
      fontWeight: "bold"
    },
    videoBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
      opacity: 0.5
    },
    aboveFoldContent: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem"
    },
    membershipSection: {
      background: "#fff",
      textAlign: "center"
    },
    membershipTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      marginBottom: "2rem"
    },
    scrollContainer: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding:0,
    },
    scrollTrack: {
      display: "flex",
      animation: "$scroll 30s linear infinite",
      width: "calc(200px * 25)", // double the images for seamless loop
    },
    scrollImage: {
      width: "200px",
      height: "auto",
      padding: "0 40px",
      objectFit: "contain"
    },
    "@keyframes scroll": {
      "0%": {
        transform: "translateX(0)"
      },
      "100%": {
        transform: "translateX(calc(-200px * 9))" // negative half of total width
      }
    }
  })
);

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="JambarOverseas Inc."
        description="We are committed to maximizing value by sustainably
        developing our product & services to our clients all over the world."
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className={classes.videoBackground}
          >
            <source src="/herovideo.mp4" type="video/mp4" />
          </video>
          <div className={classes.aboveFoldContent}>
            <div className={classes.aboveFoldTextBox}>
              <div className={classes.aboveFoldTextBoxInner}>
                <div className={classes.header}>
                  Your One Stop Export Import Source.
                </div>
                <p className={classes.paragraph}>
                "Top Exporter of Agriculture Commodities from India and We make strongest service above the worldwide."
                </p>
                <div>
                  <ContactButton />
                </div>
              </div>
              <div className={classes.expandMoreContainer}>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className={classes.aboveFoldIconContainer}>
              <PublicIcon className={classes.aboveFoldGlobe} />
            </div>
          </div>
        </div>
        <div className={classes.belowFold}>
          <div className={classes.belowFoldTextContainer}>
            <div className={classes.belowFoldImageContainer}>
              <img
                src="/buildingRender.JPG"
                alt="building"
                className={classes.belowFoldImage}
              />
            </div>
            <div className={classes.belowFoldText}>
              We Are a Growing Company and Passionate To Reach Our Goals
            </div>
          </div>
        </div>

        <div className={classes.whyChooseUs}>
          <div className={classes.whyChooseCircle}></div>
          <div className={classes.whyChooseContent}>
            <div className={classes.whyChooseTitle}>Why Choose Us?</div>
            <div className={classes.underline}></div>
            <div className={classes.whyChooseGrid}>
              <div className={classes.whyChooseItem}>
                <CheckCircleIcon className={classes.whyChooseIcon} />
                <div className={classes.whyChooseItemTitle}>Quality Assured</div>
                <div className={classes.whyChooseItemText}>
                  We maintain the highest standards in product quality and service delivery
                </div>
              </div>
              <div className={classes.whyChooseItem}>
                <SpeedIcon className={classes.whyChooseIcon} />
                <div className={classes.whyChooseItemTitle}>Fast & Efficient</div>
                <div className={classes.whyChooseItemText}>
                  Quick response times and efficient processing of all import-export needs
                </div>
              </div>
              <div className={classes.whyChooseItem}>
                <SecurityIcon className={classes.whyChooseIcon} />
                <div className={classes.whyChooseItemTitle}>Secure & Reliable</div>
                <div className={classes.whyChooseItemText}>
                  Trusted partnerships and secure handling of all transactions
                </div>
              </div>
              <div className={classes.whyChooseItem}>
                <EmojiObjectsIcon className={classes.whyChooseIcon} />
                <div className={classes.whyChooseItemTitle}>Expert Solutions</div>
                <div className={classes.whyChooseItemText}>
                  Tailored solutions backed by years of industry expertise
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.offer}>
          <div className={classes.offerCircle}></div>
          <div className={classes.offerOutline}></div>
          <div className={classes.offerRoot}>
            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <DataUsageIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Goods</div>
                </div>
                <div className={classes.offerText}>
                  Jambaroverseas Strives at Giving Customers The Best Quality of
                  Products and Nothing Less.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <LocalAtmIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Services</div>
                </div>
                <div className={classes.offerText}>
                  The Services that Our Company Provides are Top of the Line and
                  Will Help your Business Grow Exponentially.
                </div>
              </div>
            </div>

            <div className={classes.offerOuter}>
              <div>
                <div className={classes.offerInner}>
                  <div className={classes.iconOuter}>
                    <AccountBalanceIcon className={classes.icon} />
                  </div>
                  <div className={classes.offerTitle}>Prices</div>
                </div>
                <div className={classes.offerText}>
                Jambaroverseas Gives the Best Prices in Canada For The Services and
                  Products that We Provide.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.servicesRoot}>
          <div className={classes.servicesHeader}>The Products We Provide</div>
          <div className={classes.servicesSub}>But Not Limited To</div>
          <div className={classes.servicesGrid}>
            {products.slice(0, 6).map((i) => {
              return (
                <div className={classes.servicesGridChild}>
                  <img src={i.img} alt={i.name} />
                  <div>{i.name}</div>
                </div>
              );
            })}
            {addOn.slice(0, 6).map((i) => {
              return (
                <div className={classes.servicesGridChild}>
                  <img src={i.img} alt={i.name} />
                  <div>{i.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <Link href="/products-and-services">
              <Button className={classes.servicesButton}>
                See All Products
              </Button>
            </Link>
          </div>
        </div>

        <div className={classes.membershipSection}>
          <h2 className={classes.membershipTitle}>Membership & Registration</h2>
          <div className={classes.underline}></div>
          <div className={classes.scrollContainer}>
            <div className={classes.scrollTrack}>
              {/* Double the images for seamless loop */}
              {[...Array(2)].map(() => (
                <>
                  <img src="/scrolling/1.png" alt="Membership 1" className={classes.scrollImage} />
                  <img src="/scrolling/2.png" alt="Membership 2" className={classes.scrollImage} />
                  <img src="/scrolling/3.png" alt="Membership 3" className={classes.scrollImage} />
                  <img src="/scrolling/4.png" alt="Membership 4" className={classes.scrollImage} />
                  <img src="/scrolling/5.png" alt="Membership 5" className={classes.scrollImage} />
                  <img src="/scrolling/6.png" alt="Membership 6" className={classes.scrollImage} />
                  <img src="/scrolling/7.png" alt="Membership 7" className={classes.scrollImage} />
                  <img src="/scrolling/8.jpg" alt="Membership 8" className={classes.scrollImage} />
                  <img src="/scrolling/9.jpg" alt="Membership 9" className={classes.scrollImage} />
                </>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.combinedSection}>
          <div className={classes.circleLeft}></div>
          <div className={classes.circleRight}></div>
          <div className={classes.sectionContent}>
            {/* Our Reach Section */}
            <div className={classes.reachGrid}>
              <div>
                <h2 className={classes.reachTitle}>Our Reach</h2>
                <h3 className={classes.reachSubTitle}>Exporting needs worldwide</h3>
                <p className={classes.reachText}>
                  With over a decade of experience operating in emerging global markets, 
                  we are strategically well-positioned to assist companies from developed 
                  markets seeking to source from regions having competitive advantage 
                  over production in India.
                </p>
                <Button variant="contained" className={classes.knowMoreBtn}>
                  Know More
                </Button>
              </div>
              <div className={classes.reachMapContainer}>
                <img 
                  src="/worldmap.png" 
                  alt="Global Reach Map" 
                  className={classes.reachMap}
                />
              </div>
            </div>
          </div>

          <div className={classes.sectionContent}>
            {/* Core Values Section */}
            <div className={classes.coreValuesContent}>
              <h2 className={classes.coreValuesTitle}>Core Values Of The Jambaroverseas</h2>
              <div className={classes.underline}></div>
              <p className={classes.coreValuesSubtitle}>
                Reliability, Integrity and Quality are the foundation of our company's success, enabling us to foster lasting partnerships and deliver exceptional value to individuals, communities, and the world.
              </p>
              <div className={classes.valueBoxesGrid}>
                <div className={classes.valueBox}>
                  <VerifiedUserIcon className={classes.valueIcon} />
                  <h3 className={classes.valueBoxTitle}>Reliability</h3>
                  <p className={classes.valueBoxText}>
                    Consistently delivering on our commitments and maintaining strong relationships with our partners.
                  </p>
                </div>
                <div className={classes.valueBox}>
                  <SecurityIcon className={classes.valueIcon} />
                  <h3 className={classes.valueBoxTitle}>Integrity</h3>
                  <p className={classes.valueBoxText}>
                    Upholding honesty and ethical standards, fostering trust among partners, ensuring compliance with regulations, and promoting transparent business practices for sustainable global trade.
                  </p>
                </div>
                <div className={classes.valueBox}>
                  <StarsIcon className={classes.valueIcon} />
                  <h3 className={classes.valueBoxTitle}>Quality</h3>
                  <p className={classes.valueBoxText}>
                    By choosing Jambaroverseas, you're not just getting a product, you're getting a commitment to quality you can trust. It's a commitment that goes beyond the physical product, fostering wellbeing for producers, consumers, and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.faqSection}>
          <div className={classes.faqRing}></div>
          <div className={classes.faqCircleLeft}></div>
          <div className={classes.faqCircleRight}></div>
          <Typography variant="h2" className={classes.faqTitle}>
          JambarOverseas FAQ's
          </Typography>
          <div className={classes.underline}></div>
          <div className={classes.faqContainer}>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>I.</span>
                  What services does JambarOverseas provide?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  We specialize in sourcing, quality assurance, and logistics solutions to help companies procure goods efficiently from emerging global markets.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Add remaining FAQs with same structure */}
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>II.</span>
                  What Products Exports?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Our product range includes Millets, Rice And Ceramic. We ensure each product meets international quality standards to provide our clients with the best offerings across the globe.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>III.</span>
                  What services does JambarOverseas provide?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  We specialize in sourcing, quality assurance, and logistics solutions to help companies procure goods efficiently from emerging global markets.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>IV.</span>
                  How does JambarOverseas ensure product quality?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                We conduct thorough quality checks and audits to ensure the products meet international standards before shipping.                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>V.</span>
                  Which countries do we export to?                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                Our company proudly exports to every corner of the globe, covering all continents from the Americas, Europe, Asia, Africa, to Oceania.                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.accordionSummary}
              >
                <Typography className={classes.question}>
                  <span className={classes.prefix}>VI.</span>
                  How can I Work?                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                We accept a variety of payment methods tailored to the needs and security of our international clients, including Cash in Advance (CIA) for immediate payment, Letters of Credit (L/C) for guaranteed payment upon fulfillment of specified terms, Documentary Collections (D/C) as a balance between seller security and buyer convenience, Open Account (O/A) transactions for trusted clients with established relationships, and Consignment, allowing payment post-sale. These methods ensure flexibility, security, and convenience for both parties involved in the transaction.                </Typography>
              </AccordionDetails>
            </Accordion>


            {/* Continue adding remaining FAQ items following the same pattern */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
