import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    width: "100%",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between !important",
    alignItems: "center",
    padding: "10px 50px",
    borderRadius: "0px 0px 3px 3px",
  },
  heading: {
    color: "#000",
    textDecoration: "none",
  },
  image: {
    marginLeft: "30px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  logout: {
    borderRadius: 3,
  },
  avatar: {
    background: "purple",
  },
}));
