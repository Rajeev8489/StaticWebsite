import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
  palette: {
    primary: {
      main: '#2a3285' ,
    },
    secondary: {
      main: '#0370b5',
    },
    background: {
      default: "#f5f5f5",
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;