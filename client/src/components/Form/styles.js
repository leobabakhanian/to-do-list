import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonSubmit: {
    color: "#fff",
    background: "#017af7",
    "&:hover": {
      backgroundColor: "#0371e2",
    },
    margin: 0,
    borderRadius: 3,
  },
  paper: {
    marginTop: 25,
    padding: 15,
    width: "50%",
    margin: "auto",
  },
  taskInput: {
    background: "#fff",
  },
}));
