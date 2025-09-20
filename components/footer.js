import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Link from "next/link";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "white",
    },
    outer: {
      background: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.1rem",
      display: "flex",
      justifyContent: "center",
      "& > div": {
        margin: "1.75rem",
      },
      padding: "3rem",
      [theme.breakpoints.down("1445")]: {
        display: "grid",
        gridTemplateColumns: "13.5rem 15rem 10rem 20rem",
        gridTemplateRows: "1fr 1fr",
        "& > div": {
          margin: "1rem",
        },
      },
      [theme.breakpoints.down("1000")]: {
        display: "grid",
        gridTemplateColumns: "1fr",
        maxWidth: "55rem",
        marginLeft: "-2rem",
      },
    },
    logoRoot: {
      maxWidth: "6rem",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: "0.5rem",
      [theme.breakpoints.down("810")]: {
        marginLeft: "-0.5rem",
        marginBottom: "1rem",
      },
    },
    logo: {
      width: "10rem",
    },
    year: {
      textAlign: "center",
      marginRight: "0.8rem",
      fontWeight: "bolder",
      [theme.breakpoints.down("810")]: {
        textAlign: "left",
      },
    },
    section: {
      marginTop: "2rem",
    },
    header: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    link: {
      color: "#777777",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    phone: {
      fontSize: "1rem",
      color: "#777777",
      fontWeight: 600,
      marginBottom: "0.1rem",
    },
    socialImg: {
      width: "3rem",
      marginRight: "0.5rem",
    },
    gdpr: {
      background: "#FFB16C",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > div": {
        marginRight: "0.3rem",
        marginLeft: "0.3rem",
      },
      padding: "0.5rem",
      borderRadius: "0.4rem",
      paddingRight: "1.25rem",
      maxWidth: "12rem",
    },
    gdprImg: {
      width: "5rem",
      borderRadius: "0.4rem",
      margin: 0,
      marginBottom: "-0.5rem",
    },
    gdprTitle: {
      fontWeight: "bold",
      color: "white",
      fontSize: "1.2rem",
    },
    gdprSub: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "white",
    },
    mark: {
      display: "inline-block",
      backgroundColor: "rgba(248, 187, 134, 0.30)",
      paddingBottom: "0.7rem",
      lineHeight: "0",
      color: "#777777",
      whiteSpace: "nowrap",
    },
    locationRoot: {
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "grey",
      fontSize: "1rem",
      maxWidth: "40rem",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "3rem",
      marginTop: "-2rem",
      [theme.breakpoints.down("810")]: {
        marginLeft: "2rem",
        marginRight: "1rem",
        textAlign: "left",
        maxWidth: "20rem",
      },
    },
    sectionSupport: {
      marginTop: "2rem",
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 4,
      height: "10rem",
      [theme.breakpoints.down("1000")]: {
        gridColumnStart: 1,
        gridRowStart: 4,
        gridRowEnd: 4
      },
    },
    email: {
      marginBottom: "-0.2rem",
    },
  })
);
export default function footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.outer}>
        <div className={classes.logoRoot}>
          <div className={classes.logoContainer}>
            <img src="/logo/transparent_short_logo.png" alt="logo" className={classes.logo} />
          </div>
          <div className={classes.year}>&copy; {new Date().getFullYear()}</div>
        </div>{" "}
        <div className={classes.section}>
          <div className={classes.header}>Further Information</div>
          <div className={classes.link}>
            <Link href="/products-and-services">Products & Services</Link>
          </div>
          <div className={classes.link}>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <div className={classes.link}>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.header}>Company</div>
          <div className={classes.link}>
            <Link href="/about">About Us</Link>
          </div>
          <div className={classes.link}>
            <Link href="/cirtificates">Trust</Link>
          </div>
          <div className={classes.link}>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>{" "}
        <div className={classes.sectionSupport}>
          <div className={classes.header}>Support</div>
          <div className={classes.link}>
            <div className={classes.email}>Email: sales@jambaroversea.com</div>
          </div>

          <div className={classes.phone}>
          </div>

          <div className={classes.phone}>
          <div>+91 93163 08167 (Fax)</div>
          </div>
          <div className={classes.phone}>
          </div>
          <div className={classes.phone}>
          <div>+91 97263 99961 (Jayeshbhai Jambukiya)</div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.header}>Follow Us</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://www.instagram.com/jambaroverseas?utm_source=qr&igsh=MTIydmk3MWIwOXBhcg==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/socials/instagram.svg"
                alt="instagram"
                className={classes.socialImg}
              />
            </a>
            <a 
              href="https://www.facebook.com/share/15FYrgQCKZ/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/socials/facebook.svg"
                alt="facebook"
                className={classes.socialImg}
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/jayesh-jambukiya-45a461363/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/socials/linkedin.svg"
                alt="linkedin"
                className={classes.socialImg}
              />
            </a>
            <a 
              href="https://wa.me/+919726399961"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/socials/whatsapp.svg"
                alt="whatsapp"
                className={classes.socialImg}
              />
            </a>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.gdpr}>
            <div>
              <img
                src="/socials/gdpr.png"
                alt="gdpr"
                className={classes.gdprImg}
              />
            </div>
            <div>
              <div className={classes.gdprTitle}>GDPR</div>
              <div className={classes.gdprSub}>Compliant</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.locationRoot}>
        JambarOverseas Inc. No.8 2nd floor gruham icon in front of kosad lack garden new kosad road, amroli, surat, gujrat, india - 394107.
      </div>
    </div>
  );
}
