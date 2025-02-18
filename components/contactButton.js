import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#F8BB86",
      padding: "1rem",
      color: "white",
      textTransform: "none",
      fontWeight: "bold",
      fontFamily: "Gilroy, sans-serif",
      "&:hover": {
        background: "#FFB16C",
      },
    },
  })
);

export default function ContactButton() {
  const classes = useStyles();
  return (
    <Link href="/contact" passHref>
      <Button 
        variant="contained" 
        style={{ 
          backgroundColor: '#F8BB86',
          color: 'white',
          fontSize: '1.2rem',
          padding: '12px 24px',
          borderRadius: '8px',
          textTransform: 'none'
        }}
      >
        Get In Touch
      </Button>
    </Link>
  );
}
