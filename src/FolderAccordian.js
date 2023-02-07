import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FolderIcon from "@material-ui/icons/Folder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAccordian } from "./Redux/FamilyDetailsSlice";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
  },
  folderIcon: {
    marginRight: theme.spacing(2),
  },
}));

const FolderAccordion = (props) => {
  const { data, marginRight } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.AccordianUi.open);

  const handleClick = (id) => {
    const filteredData = filterDataById(id, data);
    dispatch(ToggleAccordian.selectedMemberdata(filteredData));
    dispatch(
      ToggleAccordian.toggleAccordianWidthId({ ...open, [id]: !open[id] })
    );
  };

  const filterDataById = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const result = filterDataById(id, item.children);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {data.map((item) => {
        return (
          <React.Fragment key={item?.id}>
            <ListItem button onClick={() => handleClick(item?.id)}>
              <FolderIcon
                className={classes.folderIcon}
                style={{ marginRight: marginRight }}
              />
              <ListItemText
                primary={item?.name}
                // onClick={() => setSelected(item.id)}
              />
              {item?.children ? (
                open[item?.id] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {item?.children ? (
              <Collapse in={open[item?.id]} timeout="auto" unmountOnExit>
                <FolderAccordion
                  data={item?.children}
                  marginRight={marginRight + 20}
                />
              </Collapse>
            ) : null}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default FolderAccordion;
