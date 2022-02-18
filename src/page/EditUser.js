import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";

function EditUser() {
  const { user } = useSelector((state) => state.data);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, address, contact } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      console.log("plzz fill up the field");
    } else {
      dispatch(updateUser(state, id));
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
      <Typography variant="h4">Edit user</Typography>
      <TextField
        name="name"
        onChange={handleInputChange}
        value={name || ""}
        label="Name"
        variant="outlined"
      />
      <TextField
        name="email"
        onChange={handleInputChange}
        value={email || ""}
        label="Email"
        variant="outlined"
      />
      <TextField
        name="address"
        onChange={handleInputChange}
        value={address || ""}
        label="Address"
        variant="outlined"
      />
      <TextField
        name="contact"
        onChange={handleInputChange}
        value={contact || ""}
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
        Update
      </Button>
    </Box>
  );
}

export default EditUser;
