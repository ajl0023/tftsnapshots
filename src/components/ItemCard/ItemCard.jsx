import React, { useEffect, useMemo, useState } from "react";
import { Backdrop, Box, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BuildIcon from "@material-ui/icons/Build";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import allItems from "../../items.json";

const useStyles = makeStyles((theme) => ({
  shopItem: {
    width: "70.2px",
    padding: "0px",
    position: "relative",
  },
  shopImage: {
    maxWidth: "100%",
  },
}));

const ItemCard = (props) => {
  const [formattedItems, setFormattedItems] = useState();
  const classes = useStyles();
  useEffect(() => {}, [props.items]);

  const items = useMemo(() => {
    if (props.items) {
      const arr = [];
      if (props.items) {
        const length = props.items.board.length;

        for (let i = 0; i < length; i++) {
          for (let j = 1; j < 4; j++) {
            if (props.items.board[i][`item_${j}`].length > 0) {
              arr.push(props.items.board[i][`item_${j}`]);
            }
          }
        }
      }
      const formattedArr = arr.reduce((acc, item) => {
        const split = item.split("/");
        const itemName = split[2];
        const regex = /[\W_]/gim;
        const formatted = itemName.replace(regex, "").toUpperCase();

        const find = allItems.find((item) => {
          item.name = item.name.replace(regex, "").toUpperCase();

          if (formatted === "JeweledGuantlet".toUpperCase()) {
            return item.name === "JeweledGauntlet".toUpperCase();
          }
          return item.name === formatted;
        });
        if (find) {
          acc.push(find);
        }

        return acc;
      }, []);
      return formattedArr;
    }
    return [];
  }, [props.items]);
  return (
    <Box
      width="100%"
      bgcolor="secondary.main"
      className={classes.container}
      color="white"
      border="#9e9e9e
 0.5px solid"
    >
      <Box padding="5px" display="flex" justifyContent="space-between">
        <Box gridGap="7px" display="flex">
          <BuildIcon fontSize="5px" />
          <Typography>Items</Typography>
        </Box>
      </Box>
      <Box padding="12px" gridGap="5px" display="flex" maxWidth="400px">
        {items.map((item, i) => {
          return (
            <ListItem key={i} className={classes.shopItem}>
              <img
                className={classes.shopImage}
                src={`${process.env.PUBLIC_URL}/tftitems/${item.id}.png`}
                alt=""
              />
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default ItemCard;
