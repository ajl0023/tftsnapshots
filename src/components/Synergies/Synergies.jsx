import {
  Box,
  Card,
  CardContent,
  Grid,
  GridList,
  GridListTile,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import synergies from "../../champions.json";
import traits from "../../traits.json";
import { makeStyles } from "@material-ui/core/styles";
import HexagonSm from "./HexagonSm";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  trait: {
    width: "20px",
  },
}));
const Synergies = (props) => {
  const classes = useStyles();
  const [synergy, setSynergy] = useState([]);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (props.board) {
      const arr = [];
      const copySynergy = {};
      const board = props.board.board.map((item) => {
        return item.name;
      });
      const mapBoard = board.reduce((acc, name) => {
        if (!acc.includes(name)) {
          acc.push(name);
        }
        return acc;
      }, []);

      for (let champ of mapBoard) {
        const find = synergies.find((item) => {
          return item.championId === champ;
        });
        if (find) {
          arr.push(...find.traits);
        }
      }
      for (let trait of arr) {
        if (!copySynergy[trait]) {
          copySynergy[trait] = {
            count: 0,
            min: traits.find((currTrait) => {
              return currTrait.key === trait;
            }),
          };
        }
        copySynergy[trait].count++;
      }

      const finalArr = [];
      for (let trait in copySynergy) {
        if (
          copySynergy[trait].count >=
          copySynergy[trait].min.sets[copySynergy[trait].min.sets.length - 1]
            .min
        ) {
          finalArr.push({
            ...copySynergy[trait].min.sets[
              copySynergy[trait].min.sets.length - 1
            ],
            name: copySynergy[trait].min.name,
          });
        } else {
          const find = copySynergy[trait].min.sets.find((curr) => {
            return (
              copySynergy[trait].count >= curr.min &&
              copySynergy[trait].count <= curr.max
            );
          });

          if (find) {
            if (find.style === "gold") {
              find.style = "#81390B";
            }
            if (find.style === "bronze") {
              find.style = "#81390B";
            }
            if (find.style === "chromatic") {
            }
            finalArr.push({
              ...find,
              ...copySynergy[trait],
              name: copySynergy[trait].min.name.toLowerCase(),
            });
          } else {
            finalArr.push({
              ...copySynergy[trait],
              name: copySynergy[trait].min.name.toLowerCase(),
            });
          }
        }
      }
      setSynergy(finalArr);
    }
  }, [props.board]);
  return (
    <Grid
      xs={12}
      container
      spacing={0}
      style={{
        maxHeight: md ? "120px" : "",

        overflowY: "auto",
      }}
    >
      {synergy.map((trait) => {
        return (
          <>
            <Grid
              style={{ height: "fit-content" }}
              item
              xs={6}
              sm={6}
              md={12}
              style={{ padding: "4px" }}
            >
              <Box
                border="0.5px solid rgb(158, 158, 158)"
                display="flex"
                padding="8px 10px"
                alignItems="center"
                borderRadius="4px"
                gridGap="8px"
              >
                <HexagonSm key={trait.name} trait={trait}></HexagonSm>

                <Box
                  textOverflow="ellipsis"
                  overflow="hidden"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                  }}
                  whiteSpace="nowrap"
                >
                  {trait.name + " "}
                  {trait.count}
                </Box>
              </Box>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export default Synergies;
