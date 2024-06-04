import { background, extendTheme } from "@chakra-ui/react";
import { gradientButtonTheme } from "./gradientButtonTheme";
import { breakpoints } from "./themeConstants";
import { color } from "framer-motion";

export const chTheme = extendTheme({
  breakpoints : breakpoints,
  "html, body": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  fonts: {
    heading: "Assistant, san-serif",
    body: "Assistant, san-serif",
  },
  components: {
    Button: {
      baseStyle: {
        boxShadow: "0px 4px 4px 0px #2C2C2C0A",
        transition: "box-shadow 0.2s",
        background : "#F2833E"
      },

      variants: {
        gradient: gradientButtonTheme
      },
    },
    Progress : {
      baseStyle: {
        filledTrack: {
          bg: "linear-gradient(to right, #f67c00, #FED401)"
        }
      }, 
      variants : {
        gradient : {
          filledTrack: {
            bg: "linear-gradient(to right, #f67c00, #FED401)"
          }
        }, 
        green : {
          filledTrack: {
            bg: "green"
          }
        }
      }
    }, 
    Switch : {
      baseStyle : {
        thumb : {
         bg : "#FEF8EC"
        },
        track : {
          _checked : {
            bg: "#57BB35"
          }
        }
      }
    },

    Text : {
      baseStyle : {
        color : "#ff5821",
        fontWeight: "700",
        fontSize : "18px",
        transition: "color 0.2s",
        _hover: {
          color: "gray.600",
        },
      }
    }
  },
});
