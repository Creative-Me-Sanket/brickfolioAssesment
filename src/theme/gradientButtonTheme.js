import { gradients,  boxShadow, colors } from "../theme/themeConstants";

export const gradientButtonTheme =  {
    bgGradient: gradients.equip9Gradient,
    color: colors.white,
    transition: "box-shadow 0.2s",
    _hover: {
      boxShadow: boxShadow.gradientButton.hover,
    },
    _disabled: {
      bgGradient: colors.equip9Gradient,
      boxShadow: boxShadow.gradientButton.disabled,
      opacity: "0.5",
      cursor: "not-allowed",
      _hover: {
        background: "linear-gradient(to right, #f67c00, #FED401);",
        bgGradient: colors.equip9Gradient,
        boxShadow: boxShadow.gradientButton.disabled,
        color: colors.black,
      },
    },
  }