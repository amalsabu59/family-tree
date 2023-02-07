import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function FamilyCard() {
  const classes = useStyles();
  const selectedMemberData = useSelector(
    (state) => state.AccordianUi.selectedMemberData
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Family Photo" className={classes.avatar}>
            F
          </Avatar>
        }
        title={selectedMemberData.name}
        subheader="Family Member"
      />

      <Typography variant="body2" color="textSecondary" component="p">
        Name: {selectedMemberData.name}
        <br />
        Age:{selectedMemberData.age}
        <br />
        Location:{selectedMemberData.location}
        <br />
        Permanent Address:
        <br />
        {selectedMemberData.permanentAddress}
      </Typography>
      <CardMedia
        className={classes.media}
        image="FamilyPhoto"
        title="Family Photo"
      />
    </Card>
  );
}
