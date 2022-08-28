import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Heading,
  TextContainer,
  ContactWrapper,
} from "../components/Heroes/HeroStyles/TextHeroElements";
import "./Contact.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useToasts } from "react-toast-notifications";

const Contact = ({ id }) => {
  const form = useRef();

  const { addToast } = useToasts();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2jc67ar",
        "template_6iqb9pb",
        form.current,
        "IBZAzjDfeFWcL7S53"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    addToast("Email successfully sent!", {
      appearance: "success",
    });
  };

  //   style={{
  //     background: "#fff",
  //     height: "700px",
  //     paddingTop: "20px",
  //     paddingLeft: "30%",
  //     alignItems: "center",
  //     width: "80%",
  //     justifyContent: "center",
  //     marginRight: "auto",
  //     marginLeft: "auto",
  //     paddingRight: "10%",
  //   }}

  return (
    <>
      <TextContainer
        style={{
          background: "#fff",
        }}
      >
        <ContactWrapper>
          <Heading id={id} style={{ color: "rgb(17,24,28)" }}>
            Get in touch with me
          </Heading>
          <div className="form-container" style={{ margin: "auto" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50%" },
              }}
              noValidate={false}
              autoComplete="off"
              ref={form}
              onSubmit={sendEmail}
            >
              <TextField
                id="standard-basic"
                name="user_name"
                label="Name"
                variant="standard"
                required
              />
              <br />
              <TextField
                id="standard-basic"
                type="email"
                name="user_email"
                label="Email"
                variant="standard"
                required
              />
              <br />
              <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={8}
                placeholder="Type message here..."
                variant="standard"
                name="message"
                required
              />
              <br />
              <input type="submit" value="Send" className="submit-btn" />
            </Box>
          </div>
        </ContactWrapper>
      </TextContainer>
    </>
  );
};

export default Contact;
