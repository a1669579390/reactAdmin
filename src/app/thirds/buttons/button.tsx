import React from "react"
import {
  createMuiTheme,
  createStyles,
  withStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { green, purple } from "@material-ui/core/colors"
import DeleteIcon from "@material-ui/icons/Delete"
import { IRoundButton } from "../../models/thirds/buttons.model"

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button)

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
)

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

export function CustomizedButtons() {
  const classes = useStyles()

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export function RoundButton(props: IRoundButton) {
  // 圆形按钮
  const RoundButton = withStyles((theme: Theme) => ({
    root: {
      color: props.color || "#625858",
      backgroundColor: props.backgroundColor || "#fff",
      borderRadius: "30px",
      minWidth: "41px",
      width: "41px",
      height: "41px",
      boxShadow:
        props.boxShadow ||
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      "&:hover": {
        backgroundColor: "#fff",
        boxShadow:
          props.hover_boxShadow ||
          "0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)",
      },
    },
  }))(Button)
  const classes = useStyles()
  return (
    <RoundButton variant="contained" color="primary">
      {props.children}
    </RoundButton>
  )
}
export function MenuButton(props: IRoundButton) {
  // 顶部功能区按钮
  const MenuButton = withStyles((theme: Theme) => ({
    root: {
      color: props.color || "#00000091",
      backgroundColor: props.backgroundColor || "transparent",
      borderRadius: "30px",
      minWidth: "41px",
      width: "41px",
      height: "41px",
      boxShadow: props.boxShadow || "unset",
      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: props.hover_boxShadow || "unset",
      },
    },
  }))(Button)
  const classes = useStyles()
  return (
    <MenuButton variant="contained" color="primary">
      {props.children}
    </MenuButton>
  )
}
