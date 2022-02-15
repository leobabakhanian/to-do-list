import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 10,
    },
  },
  avatar: {
    margin: 10,
    backgroundColor: "#2074d4 !important",
  },
  form: {
    width: "100%",
    marginTop: 30,
  },
  submit: {
    marginTop: "15px !important",
    marginBottom: "15px !important",
  },
}));
