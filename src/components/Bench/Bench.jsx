import { Box, ListItem } from "@material-ui/core";
import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Typography from "@material-ui/core/Typography";
import Crop75Icon from "@material-ui/icons/Crop75";
import { Crop } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: { borderRadius: "5px" },
  benchItem: {
    width: "70.2px",
    padding: "0px",
  },

  benchImage: {
    width: "100%",
    height: "100%",
  },
  placeHolder: {
    backgroundColor: "black",
    width: "70.2px",
    padding: "0px",
  },
}));

const Bench = (props) => {
  const classes = useStyles();

  const bench = useMemo(() => {
    const arr = [];

    if (props.bench && props.bench.length > 0) {
      const lastBench = props.bench[props.bench.length - 1];
      for (let item in lastBench) {
        arr.push(lastBench[item]);
      }
    }
    return arr;
  }, [props.bench]);
  if (bench.length < 1) {
    return null;
  }
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
          <Crop75Icon />
          <Typography>Bench</Typography>
        </Box>
      </Box>
      <Box
        alignItems="center"
        padding="12px"
        gridGap="5px"
        display="flex"
        maxWidth="400px"
      >
        {bench.map((item, i) => {
          return (
            <div key={i} className={classes.benchItem}>
              <img
                className={classes.benchImage}
                src={`${process.env.PUBLIC_URL}/tftchamps/${item.name}.png`}
                alt=""
              />
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Bench;
