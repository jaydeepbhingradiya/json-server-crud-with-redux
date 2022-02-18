import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

function AddUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, address, contact } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      console.log("plzz fill up the field");
    } else {
      dispatch(addUser(state));
      history.push("/");
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4">Add user</Typography>
      <TextField
        name="name"
        onChange={handleInputChange}
        value={name}
        label="Name"
        variant="outlined"
      />
      <TextField
        name="email"
        onChange={handleInputChange}
        value={email}
        label="Email"
        variant="outlined"
      />
      <TextField
        name="address"
        onChange={handleInputChange}
        value={address}
        label="Address"
        variant="outlined"
      />
      <TextField
        name="contact"
        onChange={handleInputChange}
        value={contact}
        label="Contact"
        variant="outlined"
      />
      <Button
        onClick={() => history.push("/")}
        style={{ width: "20%" }}
        variant="contained"
        type="Submit"
      >
        Exit
      </Button>
      <Button
        onClick={handleSubmit}
        style={{ width: "20%" }}
        variant="contained"
        type="Submit"
      >
        Submit
      </Button>
    </Box>
  );
}

export default AddUser;
