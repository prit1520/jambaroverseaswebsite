import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import ContactButton from "../components/contactButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalAtmIcon from "@material-ui/icons/LocalAtmRounded";
import Button from "@material-ui/core/Button";
import {NextSeo} from "next-seo"
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      overflow: "hidden",
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
    aboveFoldHeader: {
      fontSize: "7.5rem",
      maxWidth: "90rem",
      lineHeight: "8rem",
      marginBottom: 0,
      [theme.breakpoints.down("1550")]: {
        fontSize: "5.5rem",
        lineHeight: "6rem",
        maxWidth: "70rem",
      },
      [theme.breakpoints.down("1400")]: {
        fontSize: "4.5rem",
        lineHeight: "5rem",
        maxWidth: "55rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
        maxWidth: "45rem",
        marginRight: "1.75rem",
        marginLeft: "1.75rem",
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
    aboveFoldSub: {
      textTransform: "uppercase",
      marginTop: "-0.2rem",
      fontSize: "1.2rem",
      letterSpacing: "1rem",
      marginLeft: "1rem",
      marginBottom: "1rem",
      marginTop: "0.5rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("650")]: {
        fontSize: "1rem",
        letterSpacing: "0.7rem",
      },
    },
    aboveFoldCircle3: {
      background: "#F8BB86",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "15%",
      "-moz-opacity": "15%",
      "-khtml-opacity": "15%",
      bottom: "27.5rem",
      left: "16rem",
      zIndex: -1,
    },
    aboveFoldIcon: {
      position: "absolute",
      bottom: "1rem",
      "& > *": {
        fontSize: "1.75rem",
      },
    },
    aboveFoldCircle2: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      "-moz-opacity": "20%",
      "-khtml-opacity": "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      right: "-7rem",
      bottom: "-5rem",
      zIndex: -1,
    },
    objectiveCircle: {
      background: "transparent",
      width: "22.5rem",
      height: "22.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "20%",
      "-moz-opacity": "20%",
      "-khtml-opacity": "20%",
      boxShadow: "0 0 0 0.5rem #F8BB86",
      left: "-7rem",
      top: "-5rem",
      zIndex: -1,
    },
    objectiveCircle2: {
      background: "#F8BB86",
      width: "17.5rem",
      height: "17.5rem",
      position: "absolute",
      borderRadius: "50%",
      opacity: "10%",
      "-moz-opacity": "10%",
      "-khtml-opacity": "10%",
      right: "-5rem",

      zIndex: -1,
    },
    aboveFoldText: {
      marginBottom: "7rem",
    },
    aboveFoldIconContainer: {
      marginRight: "1.5rem",
    },
    coreValues: {
      background: "white",
      color: "#525252",
      display: "flex",
      padding: "5rem",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "3.5rem",
      paddingBottom: "10rem",
      flexDirection: "column",
      position: "relative",
      zIndex: 2,
      [theme.breakpoints.down("600")]: {
        paddingTop: "3rem",
        paddingBottom: "7rem",
      },
      [theme.breakpoints.down("550")]: {
        paddingTop: "5rem",
        paddingBottom: "5rem",
      },
      [theme.breakpoints.down("360")]: {
        paddingTop: "3rem",
        paddingBottom: "3rem",
      },
    },
    coreValuesTitle: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      lineHeight: "4rem",
      maxWidth: "80rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down("550")]: {
        fontSize: "2.7rem",
        lineHeight: "3.2rem",
      },
      [theme.breakpoints.down("430")]: {
        fontSize: "2.2rem",
        lineHeight: "2.8rem",
      },
      [theme.breakpoints.down("360")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.down("320")]: {
        fontSize: "1.8rem",
        lineHeight: "2.3rem",
      },
    },
    mark: {
      display: "inline-block",
      backgroundColor: "rgba(248, 187, 134, 0.70)",
      paddingBottom: "1.9rem",
      lineHeight: "0",
      color: "#525252",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("600")]: {
        paddingBottom: "1.4rem",
      },
      [theme.breakpoints.down("550")]: {
        paddingBottom: "1.3rem",
      },
      [theme.breakpoints.down("320")]: {
        paddingBottom: "1.1rem",
      },
    },
    belowFold: {
      backgroundColor: "black",
      color: "white",
      padding: "3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 3,
      "& > div": {
        marginRight: "1.5rem",
        marginLeft: "1.5rem",
      },
      paddingTop: "8rem",
      paddingBottom: "8rem",
      [theme.breakpoints.down("1250")]: {
        "& > div": {
          marginRight: "1.5rem",
          marginLeft: "1.5rem",
        },
      },
      [theme.breakpoints.down("940")]: {
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        "& > div": {
          marginBottom: "1rem",
          marginTop: "1rem",
          marginLeft: 0,
        },
      },
    },
    belowFoldTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      maxWidth: "70rem",
      lineHeight: "3.5rem",
      zIndex: 3,
      [theme.breakpoints.down("1250")]: {
        fontSize: "2.25rem",
        lineHeight: "2.5rem",
      },
      [theme.breakpoints.down("940")]: {
        marginLeft: "-1rem",
        marginBottom: "0.5rem",
      },
      [theme.breakpoints.down("700")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
        marginTop: "-1rem",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "1.5rem",
        lineHeight: "1.85rem",
      },
    },
    belowFoldPara: {
      color: "#f5f5f5",
      fontSize: "1.5rem",
      maxWidth: "60rem",
      [theme.breakpoints.down("1250")]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      [theme.breakpoints.down("940")]: {
        marginLeft: "-1rem",
      },
      [theme.breakpoints.down("700")]: {
        fontSize: "1.3rem",
        lineHeight: "1.5rem",
      },
      [theme.breakpoints.down("500")]: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
      },
    },
    logo: {
      width: "13.5rem",
      [theme.breakpoints.down("1250")]: {
        width: "12rem",
      },
      [theme.breakpoints.down("940")]: {
        width: "14rem",
        marginLeft: "-1.2rem",
      },
      [theme.breakpoints.down("700")]: {
        width: "12rem",
      },
      [theme.breakpoints.down("500")]: {
        width: "10rem",
      },
    },
    objectives: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "white",
      padding: "3rem",
      position: "relative",
      zIndex: 1,
    },
    objectivesHeader: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "4rem",
      lineHeight: "4.5rem",
      paddingBottom: "5rem",
      [theme.breakpoints.down("1050")]: {
        marginLeft: "0.75rem",
        marginRight: "0.75rem",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        margin: 0,
      },
      [theme.breakpoints.down("400")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        margin: 0,
      },
    },
    objectivesFlex: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "70rem",
      alignItems: "center",
      width: "100%",
      paddingBottom: "5rem",
      "& > div": {
        display: "flex",
      },
      [theme.breakpoints.down("900")]: {
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "-2.5rem",
        "& > div": {
          margin: "2rem",
          marginLeft: 0,
          marginRight: 0,
        },
      },
      [theme.breakpoints.down("450")]: {
        marginTop: "-5rem",
        marginBottom: "-5rem",
      },
    },
    icon: {
      color: "white",
      fontSize: "3rem",
      [theme.breakpoints.down("900")]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "2rem",
      },
    },
    iconOuter: {
      background: "#F8BB86",
      padding: "0.7rem",
      borderRadius: "20%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      height: "100%",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down("900")]: {
        padding: "1.5rem",
      },
      [theme.breakpoints.down("450")]: {
        padding: "1rem",
      },
    },
    objectiveTitle: {
      fontWeight: "bold",
      fontSize: "2.3rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      lineHeight: "2.5rem",
      color: "#525252",
      maxWidth: "10rem",
      [theme.breakpoints.down("1050")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down("900")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down("450")]: {
        fontSize: "1.75rem",
        lineHeight: "2rem",
      },
    },
    aboutSection: {
      padding: "6rem 2rem",
      position: "relative",
      background: "#fff",
      overflow: "hidden"
    },
    aboutContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1
    },
    aboutTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      textAlign: "center",
      marginBottom: "1rem"
    },
    underline: {
      width: "100px",
      height: "3px",
      background: "#F8BB86",
      margin: "0 auto 2rem"
    },
    introText: {
      fontSize: "1.2rem",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 4rem",
      color: "grey"
    },
    aboutGrid: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem"
    },
    aboutRow: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem"
    },
    aboutRowReverse: {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    aboutImage: {
      "& img": {
        width: "100%",
        borderRadius: "10px"
      }
    },
    aboutContent: {
      "& h3": {
        fontSize: "2rem",
        color: "#525252",
        marginBottom: "1rem",
        textAlign: "center"
      },
      "& p": {
        color: "grey",
        lineHeight: 1.6,
        textAlign: "center"
      }
    },
    lineWithPin: {
      height: "2px",
      background: "#F8BB86",
      opacity: 0.3,
      position: "relative",
      margin: "2rem 0",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "20px",
        height: "20px",
        background: "#F8BB86",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    },
    visionMission: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      margin: "4rem 0",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr"
      }
    },
    vmBox: {
      padding: "2rem",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      "& h3": {
        color: "#F8BB86",
        marginBottom: "1rem",
        fontSize: "1.5rem"
      }
    },
    leadershipSection: {
      marginTop: "6rem",
      textAlign: "center"
    },
    leadershipTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#525252",
      marginBottom: "1rem"
    },
    subHeading: {
      fontSize: "1.2rem",
      color: "grey",
      maxWidth: "800px",
      margin: "2rem auto",
      lineHeight: 1.6
    },
    leadershipGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "3rem",
      maxWidth: "1200px",
      margin: "4rem auto",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr"
      }
    },
    leaderBox: {
      background: "white",
      padding: "2rem",
      borderRadius: "15px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)"
      }
    },
    leaderImage: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      margin: "0 auto 1.5rem",
      overflow: "hidden",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "fit"
      }
    },
    leaderName: {
      fontSize: "1.5rem",
      color: "#525252",
      marginBottom: "0.5rem"
    },
    leaderTitle: {
      color: "grey",
      marginBottom: "1rem"
    },
    greenUnderline: {
      width: "50px",
      height: "3px",
      background: "#F8BB86",
      margin: "0 auto"
    },
    aboutCircle1: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #F8BB86 30%, #ff9b44 90%)",
      opacity: 0.1,
      top: "-200px",
      left: "-300px",
      zIndex: 0
    },
    aboutCircle2: {
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      border: "40px solid rgba(248, 187, 134, 0.1)",
      bottom: "-100px",
      right: "-100px",
      zIndex: 0
    }
  })
);
export default function about() {
  const classes = useStyles();
  return (
    <Layout>
      <NextSeo
        title="About Us | JambarOverseas"
        description="Through our years of experience, we've learned how to serve better by effective communications."
      />
      <div className={classes.root}>
        <div className={classes.aboveFold}>
          <div className={classes.aboveFoldCircle2}></div>
          <div className={classes.aboveFoldCircle3}></div>
          <div className={classes.aboveFoldText}>
            <h1 className={classes.aboveFoldHeader}>
              Shaping The World as Your Local Market
            </h1>
            <h3 className={classes.aboveFoldSub}>About Us</h3>
            <div>
              <ContactButton />
            </div>
          </div>
          <div className={classes.aboveFoldIconContainer}>
            <ExpandMoreIcon className={classes.aboveFoldIcon} />
          </div>
        </div>
        <div className={classes.belowFold}>
          <div>
            <img
              src="/png.png"
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div>
            <div className={classes.belowFoldTitle}>
              Through our years of experience, we've learned how to serve better
              by effective communications.
            </div>
            <div className={classes.belowFoldPara}>
              We are a Canadian integrated Export-Import Company headquartered
              in Alberta-Canada, committed to maximizing value by sustainably
              developing our product & services to our clients all over the
              world.
            </div>
          </div>
        </div>
        <div className={classes.objectives}>
          <div className={classes.objectiveCircle} />
          <div className={classes.objectivesHeader}>
            Our Objectives Are To Offer
          </div>
          <div className={classes.objectivesFlex}>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>The Best Goods</div>
            </div>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>A Great Price</div>
            </div>
            <div>
              <div className={classes.iconOuter}>
                <LocalAtmIcon className={classes.icon} />
              </div>
              <div className={classes.objectiveTitle}>Quality Services</div>
            </div>
          </div>
        </div>
        <div className={classes.aboutSection}>
          <div className={classes.aboutCircle1}></div>
          <div className={classes.aboutCircle2}></div>
          <div className={classes.aboutContainer}>
            <h2 className={classes.aboutTitle}>About Us</h2>
            <div className={classes.underline}></div>
            <p className={classes.introText}>
              At JAMBAROVERSEAS, we take pride in our people, vision, and values. Together, we strive to bring the best of nature to the world.
            </p>

            <div className={classes.aboutGrid}>
              <div className={classes.aboutRow}>
                <div className={classes.aboutContent}>
                  <h3>Our Story</h3>
                  <p>Founded in 2025 by Jayeshbhai Jambukiya JAMBAROVERSEAS began with a shared commitment to promoting global wellness through healthy food solutions.</p>
                </div>
              </div>

              <div className={classes.lineWithPin}></div>

              <div className={classes.aboutRow}>
                <div className={classes.aboutContent}>
                  <h3>Fueling Growth</h3>
                  <p>Since our establishment, we have steadily expanded our reach. Our team's innovation and partnerships have enabled us to diversify our products and continue making a positive global impact while staying true to our core values.</p>
                </div>
              </div>

              <div className={classes.lineWithPin}></div>

              <div className={classes.aboutRow}>
                <div className={classes.aboutContent}>
                  <h3>Commitment to Excellence</h3>
                  <p>At JAMBAROVERSEAS, excellence is at the heart of everything we do. From sourcing to delivering, we ensure the highest quality standards are met to satisfy our customers and build lasting relationships based on trust.</p>
                </div>
              </div>

              <div className={classes.lineWithPin}></div>

              <div className={classes.aboutRow}>
                <div className={classes.aboutContent}>
                  <h3>Driving Positive Impact</h3>
                  <p>We believe in making a difference beyond business. Our initiatives aim to empower communities, promote sustainability, and contribute to a healthier planet, ensuring our legacy is one of positive change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.leadershipSection}>
          <h2 className={classes.leadershipTitle}>Our Leadership</h2>
          <div className={classes.underline}></div>
          <p className={classes.subHeading}>
            At JAMBAROVERSEAS, our leaders inspire innovation and sustainability, 
            steering the company towards a prosperous future.
          </p>
          <div className={classes.leadershipGrid}>
            <div className={classes.leaderBox}>
              <div className={classes.leaderImage}>
                <img src="/role/user2.png" alt="CEO" />
              </div>
              <h3 className={classes.leaderName}>Jayesh Jambukiya</h3>
              <p className={classes.leaderTitle}>Founder</p>
              <div className={classes.greenUnderline}></div>
            </div>
            <div className={classes.leaderBox}>
              <div className={classes.leaderImage}>
                <img src="/role/user1.png" alt="Founder" />
              </div>
              <h3 className={classes.leaderName}>Dinesh Baraiya</h3>
              <p className={classes.leaderTitle}>Chief Executive Officer</p>
              <div className={classes.greenUnderline}></div>
            </div>
          </div>
        </div>
        <div className={classes.coreValues}>
          <div className={classes.objectiveCircle2} />
          <div className={classes.coreValuesTitle}>
            Our core values contain{" "}
            <mark className={classes.mark}>integrity,</mark>{" "}
            <mark className={classes.mark}>innovation,</mark>{" "}
            <mark className={classes.mark}>efficiency</mark> and{" "}
            <mark className={classes.mark}>cost-effectiveness.</mark>
          </div>
        </div>
      </div>
    </Layout>
  );
}
