import { Backdrop, Box, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: theme.palette.primary.main,
  },
  mainDivider: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    marginBottom: "20px",
  },
  hexContainer: {
    position: "relative",
  },
  playerStatus: {
    display: "flex",
    alignItems: "center",

    gap: "10px",
  },
  statusIcon: {
    width: "20px",
  },
  statusItemContainer: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  shopItem: {
    maxWidth: "120px",
    padding: "0px",
    position: "relative",
  },
  shopImage: {
    maxWidth: "100%",
  },
  listContainer: {
    borderRadius: "5px",

    backgroundColor: theme.palette.secondary.main,
  },
  divider: {
    backgroundColor: "white",
    margin: "5px",
    maxHeight: "50%",
  },
  soldImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: "5",
  },
  inactive: {
    display: "none",
  },
}));
const Store = (props) => {
  const classes = useStyles();

  const prevStore = props.prevStore;
  const nextStore = props.nextStore;
  const rounds = props.rounds;
  const currRound = props.currRound;
  const currStore = props.currStore;
  if (!rounds || !rounds[currRound].store.length > 0) {
    return null;
  }
  return (
    <Box
      border="#9e9e9e
 0.5px solid"
      color="white"
      className={classes.listContainer}
    >
      <Box padding="5px" display="flex" justifyContent="space-between">
        <Box color="white" gridGap="7px" display="flex" alignItems="center">
          <MonetizationOnIcon></MonetizationOnIcon>
          <Typography>Store</Typography>
          <Divider
            variant="inset"
            className={classes.divider}
            orientation="vertical"
          ></Divider>
          <Typography>Rolled {props.store.length - 1}</Typography>
        </Box>

        <div>
          <ArrowBackIcon onClick={() => prevStore("shop")}></ArrowBackIcon>
          <ArrowForwardIcon
            onClick={() => nextStore("shop")}
          ></ArrowForwardIcon>
        </div>
      </Box>
      <Box padding="12px" gridGap="5px" display="flex" maxWidth="400px">
        {rounds && rounds[currRound].store.length > 0
          ? props.store[currStore].map((champ, i) => {
              return (
                <ListItem key={champ.name + i} className={classes.shopItem}>
                  <Backdrop
                    open={champ.sold}
                    className={
                      champ.sold ? classes.soldImage : classes.inactive
                    }
                  ></Backdrop>
                  <img
                    className={classes.shopImage}
                    src={`${process.env.PUBLIC_URL}/tftchamps/${champ.name}.png`}
                    alt=""
                  />
                </ListItem>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default Store;
