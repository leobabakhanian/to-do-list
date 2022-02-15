import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../actions/tasks";

const Task = ({ task, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const DeleteButton = () => (
    <IconButton
      variant="contained"
      color="primary"
      style={{ backgroundColor: "transparent" }}
      disableRipple
      onClick={() => dispatch(deleteTask(task._id))}
    >
      <DeleteIcon className={classes.iconDelete} />
    </IconButton>
  );

  const EditButton = () => (
    <IconButton
      variant="contained"
      color="primary"
      style={{ backgroundColor: "transparent" }}
      disableRipple
      onClick={() => setCurrentId(task._id)}
    >
      <EditIcon className={classes.iconEdit} />
    </IconButton>
  );

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.message} variant="body2" component="p">
          {task.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <EditButton />
        <DeleteButton />
      </CardActions>
    </Card>
  );
};

export default Task;
