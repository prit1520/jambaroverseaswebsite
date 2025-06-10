import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";
import { Formik } from "formik";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import parsePhoneNumber from "libphonenumber-js";
import axios from "axios";
import {NextSeo} from "next-seo"
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Checkbox from "@material-ui/core/Checkbox";
import { Modal, Fade } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: "Gilroy, sans-serif",
      background: "white",
      width: "100%",
      overflowX: "hidden"
    },
    inner: {
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      maxWidth: "100%",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    leftPanel: {
      background: "black",
      color: "white",
      minHeight: "100%",
      width: "100%",
      maxWidth: "50rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "7.5rem",
      borderBottomRightRadius: "0.25rem",
      [theme.breakpoints.down("1550")]: {
        maxWidth: "35rem",
      },
      [theme.breakpoints.down("1300")]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down("1150")]: {
        maxWidth: "25rem",
      },
      [theme.breakpoints.down("1050")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        paddingTop: "3rem"
      }
    },
    leftPanelText: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      maxWidth: "50rem",
      textAlign: "center",
      marginRight: "1.25rem",
      marginLeft: "1.25rem",
      [theme.breakpoints.down("1550")]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        maxWidth: "30rem",
      },
      [theme.breakpoints.down("1150")]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        maxWidth: "30rem",
      },
    },
    handshake: {
      width: "20rem",
      marginTop: "2rem",
      [theme.breakpoints.down("1150")]: {
        width: "17.5rem",
        marginBottom: "3.5rem",
      },
    },
    rightPanel: {
      background: "white",
      color: "black",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start", // Changed from center
      alignItems: "start",
      paddingTop: "5rem",
      flexDirection: "column",
      boxSizing: "border-box",
      [theme.breakpoints.down("1050")]: {
        padding: "2rem"
      },
      [theme.breakpoints.down("sm")]: {
        padding: "1rem",
        margin: 0,
        paddingTop: "80px", // Adjust this to match navbar height
        overflow: "visible",
        minHeight: "auto",
        justifyContent: "flex-start"
      }
    },
    input: {},
    textFieldFlex: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "1.5rem"
    },
    messageContainer: {
      width: "100%",
    },
    button: {
      backgroundColor: "#F8BB86",
      color: "white",
      padding: "1rem 3rem",
      "&:hover": {
        backgroundColor: "#e5a975"
      }
    },
    margin: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    errorSpan: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      verticalAlign: "middle",
      margin: "0.25rem",
    },
    errorDiv: {
      marginLeft: "-1.5rem",
    },
    detailsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      padding: "3rem",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        padding: "2rem"
      }
    },
    detailBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)"
      }
    },
    detailIcon: {
      fontSize: "3rem",
      color: "#F8BB86",
      marginBottom: "1rem"
    },
    detailTitle: {
      fontSize: "1.5rem",
      color: "#525252",
      marginBottom: "0.5rem"
    },
    detailText: {
      color: "grey",
      lineHeight: 1.6
    },
    mapSection: {
      width: '100%',
      padding: '3rem',
      backgroundColor: '#f9f9f9',
      [theme.breakpoints.down("sm")]: {
        padding: '1rem'
      }
    },
    mapContainer: {
      width: '100%',
      height: '400px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      border: '1px solid #eee',
      '&:hover': {
        boxShadow: '0 6px 25px rgba(0,0,0,0.15)',
      }
    },
    mapFrame: {
      width: '100%',
      height: '100%',
      border: 'none'
    },
    contactWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    formContainer: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "4rem 2rem",
      maxWidth: "800px",
      margin: "2rem auto",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      borderTop: "5px solid #F8BB86",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
        margin: "0",
        width: "100%",
        maxWidth: "100%",
        borderRadius: "0",
        boxSizing: "border-box"
      }
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      width: "100%"
    },
    textFieldContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr"
      }
    },
    inputField: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        width: "100%",
        "&:hover fieldset": {
          borderColor: "#F8BB86"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#F8BB86"
        }
      }
    },
    messageField: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        width: "100%"
      }
    },
    resultMessage: {
      marginTop: "1rem",
      color: "green"
    },
    successModal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    successContent: {
      backgroundColor: 'white',
      padding: theme.spacing(4),
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: 400,
      position: 'relative',
    },
    checkIcon: {
      fontSize: 80,
      color: '#4CAF50',
      animation: '$scaleIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    successText: {
      margin: '20px 0',
      fontSize: '1.2rem',
    },
    closeButton: {
      marginTop: 20,
      backgroundColor: '#4CAF50',
      color: 'white',
      '&:hover': {
        backgroundColor: '#45a049',
      },
    },
    "@keyframes scaleIn": {
      "0%": {
        transform: "scale(0)",
        opacity: 0,
      },
      "100%": {
        transform: "scale(1)",
        opacity: 1,
      },
    },
  })
);
export default function contact() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 1049px)` });
  const [src, setSrc] = useState();
  const [resultMessage, setResultMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setSrc("/logo/transparent_logo.png");
    } else {
      setSrc("/logo/transparent_white_logo.png");
    }
  });
  return (
    <Layout whiteLogo={src}>
      <NextSeo
        title="Contact | JambarOverseas"
        description="JambarOverseas Strives at Giving Customers The Best Quality of Products and Nothing Less."
      />
      <div className={classes.root}>
        <div className={classes.inner}>
          <div className={classes.leftPanel}>
            <div className={classes.leftPanelText}>
            JambarOverseas is Dedicated to Creating a Better Future for Everyone.
            </div>
            <div>
              <img
                src="/handshake.png"
                alt="handshake"
                className={classes.handshake}
              />
            </div>
          </div>
          <div className={classes.margin}>
            <div className={classes.rightPanel}>
              <div className={classes.formContainer}>
                <h2 className={classes.formTitle}>Contact Us</h2>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                    botcheck: false
                  }}
                  validate={(values) => {
                    const errors = {};
                    const phoneParse = parsePhoneNumber(values.phone, "CA");
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }

                    if (!values.firstName) {
                      errors.firstName = "Required";
                    }
                    if (!values.lastName) {
                      errors.lastName = "Required";
                    }
                    if (!values.message) {
                      errors.message = "Required";
                    }
                    if (!values.phone) {
                      errors.phone = "Required";
                    } else if (phoneParse === undefined) {
                      errors.phone = "Not Valid Input";
                    } else if (phoneParse.isValid() === false) {
                      errors.phone = "Not Valid Phone Number";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    const formData = {
                      access_key: 'b718ad66-5748-42d5-9ae2-f3b6ea28a9ee',
                      name: `${values.firstName} ${values.lastName}`,
                      email: values.email,
                      message: values.message,
                      phone: values.phone,
                      botcheck: values.botcheck
                    };

                    setResultMessage("Please wait...");
                    
                    fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify(formData)
                    })
                    .then(async (response) => {
                      let json = await response.json();
                      if (response.status === 200) {
                        setShowSuccess(true);
                        setResultMessage("Form submitted successfully");
                      } else {
                        setResultMessage(json.message);
                      }
                    })
                    .catch(error => {
                      setResultMessage("Something went wrong!");
                    })
                    .finally(() => {
                      setSubmitting(false);
                      resetForm();
                      setTimeout(() => setResultMessage(''), 3000);
                    });
                  }}
                  className={classes.flexCenter}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <div className={classes.formWrapper}>
                      <div className={classes.textFieldContainer}>
                        <TextField
                          className={classes.inputField}
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="firstName"
                          error={errors.firstName && touched.firstName}
                          helperText={errors.firstName && touched.firstName && (
                            <div className={classes.errorDiv}>
                              <ErrorOutlineIcon className={classes.errorIcon} />
                              <span className={classes.errorSpan}>{errors.firstName}</span>
                            </div>
                          )}
                        />
                        <TextField
                          className={classes.inputField}
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="lastName"
                          error={errors.lastName && touched.lastName}
                          helperText={errors.lastName && touched.lastName && (
                            <div className={classes.errorDiv}>
                              <ErrorOutlineIcon className={classes.errorIcon} />
                              <span className={classes.errorSpan}>{errors.lastName}</span>
                            </div>
                          )}
                        />
                      </div>
                      <div className={classes.textFieldContainer}>
                        <TextField
                          className={classes.inputField}
                          label="Email Address"
                          variant="outlined"
                          fullWidth
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="email"
                          error={errors.email && touched.email}
                          helperText={errors.email && touched.email && (
                            <div className={classes.errorDiv}>
                              <ErrorOutlineIcon className={classes.errorIcon} />
                              <span className={classes.errorSpan}>{errors.email}</span>
                            </div>
                          )}
                        />
                        <TextField
                          className={classes.inputField}
                          label="Phone Number"
                          variant="outlined"
                          fullWidth
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="phone"
                          type="tel"
                          error={errors.phone && touched.phone}
                          helperText={errors.phone && touched.phone && (
                            <div className={classes.errorDiv}>
                              <ErrorOutlineIcon className={classes.errorIcon} />
                              <span className={classes.errorSpan}>{errors.phone}</span>
                            </div>
                          )}
                        />
                      </div>
                      <TextField
                        className={classes.messageField}
                        label="Message"
                        variant="outlined"
                        fullWidth
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="message"
                        multiline
                        rows="8"
                        error={errors.message && touched.message}
                        helperText={errors.message && touched.message && (
                          <div className={classes.errorDiv}>
                            <ErrorOutlineIcon className={classes.errorIcon} />
                            <span className={classes.errorSpan}>{errors.message}</span>
                          </div>
                        )}
                      />
                      <Checkbox
                        name="botcheck"
                        checked={values.botcheck}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'none' }}
                      />
                      <Button
                        className={classes.button}
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                      {resultMessage && (
                        <div style={{ 
                          marginTop: '1rem', 
                          color: resultMessage.includes('successfully') ? 'green' : 'red'
                        }}>
                          {resultMessage}
                        </div>
                      )}
                    </div>
                  )}
                </Formik>
              </div>
              <div className={classes.contactWrapper}>
                <div className={classes.detailsSection}>
                  <div className={classes.detailBox}>
                    <PhoneIcon className={classes.detailIcon} />
                    <h3 className={classes.detailTitle}>Phone</h3>
                    <p className={classes.detailText}>+91 93163 08167</p>
                  </div>
                  
                  <div className={classes.detailBox}>
                    <LocationOnIcon className={classes.detailIcon} />
                    <h3 className={classes.detailTitle}>Address</h3>
                    <p className={classes.detailText}>No.8 2nd floor gruham icon in front of kosad lack garden new kosad road, amroli, surat, gujrat, india - 394107</p>
                  </div>
                  
                  <div className={classes.detailBox}>
                    <EmailIcon className={classes.detailIcon} />
                    <h3 className={classes.detailTitle}>Email</h3>
                    <p className={classes.detailText}>Jambaroverseas@gmail.com</p>
                  </div>
                </div>

                <div className={classes.mapSection}>
                  <div className={classes.mapContainer}>
                    <a href="https://www.google.com/maps/place/Jambar+Overseas/@21.254065,72.8561464,17z/" target="_blank" rel="noopener noreferrer">
                      <iframe 
                        className={classes.mapFrame}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5248526657164!2d72.85614637497506!3d21.254065073689144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084dc150c71831d%3A0x45b8f26069d734a7!2sJambar%20Overseas!5e0!3m2!1sen!2sin!4v1706977514959!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Jambar Overseas Location"
                        aria-label="Jambar Overseas Location Map"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        className={classes.successModal}
        closeAfterTransition
      >
        <Fade in={showSuccess}>
          <div className={classes.successContent}>
            <CheckCircleIcon className={classes.checkIcon} />
            <div className={classes.successText}>
              <h2>Thank You!</h2>
              <p>Your message has been successfully sent.</p>
            </div>
            <Button
              variant="contained"
              className={classes.closeButton}
              onClick={() => setShowSuccess(false)}
            >
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </Layout>
  );
}
