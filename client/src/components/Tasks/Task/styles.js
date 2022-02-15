import { makeStyles } from "@mui/styles";

export default makeStyles({
  message: {
    fontSize: 25,
  },
  cardActions: {
    float: "right",
    paddingBottom: 5,
    paddingTop: 0,
  },
  card: {
    overflowWrap: "break-word",
  },
  iconDelete: {
    background: "#d63241",
    color: "#fff",
    borderRadius: 3,
    padding: 8,
    "&:hover": {
      backgroundColor: "#ad2931",
    },
  },
  iconEdit: {
    background: "#28a244",
    color: "#fff",
    borderRadius: 3,
    padding: 8,
    "&:hover": {
      backgroundColor: "#208236",
    },
  },
});
