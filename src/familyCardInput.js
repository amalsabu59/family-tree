import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAccordian } from "./Redux/FamilyDetailsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function FamilyCardInput({ setAddingInProgress }) {
  const classes = useStyles();
  const createRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const [member, setMember] = useState({
    id: createRandomId(),
    name: "",
    age: "",
    location: "",
    permanentAddress: "",
  });
  const jsonData = useSelector((state) => state.AccordianUi.data);
  const dispatch = useDispatch();
  const addDataToJson = () => {
    dispatch(ToggleAccordian.importJson([...jsonData, member]));
    setAddingInProgress(false);
  };

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Family Photo" className={classes.avatar}>
            F
          </Avatar>
        }
        title={member.name}
        subheader="Family Member"
      />
      <Typography variant="body2" color="textSecondary" component="p">
        <TextField
          label="Name"
          name="name"
          value={member.name}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Age"
          name="age"
          value={member.age}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Location"
          name="location"
          value={member.location}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Permanent Address"
          name="permanentAddress"
          value={member.permanentAddress}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <Button onClick={addDataToJson}>Add To Json</Button>
      </Typography>
      <CardMedia
        className={classes.media}
        image="FamilyPhoto"
        title="Family Photo"
      />
    </Card>
  );
}
