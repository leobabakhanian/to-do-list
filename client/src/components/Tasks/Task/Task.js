import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../../actions/tasks";

const Task = ({ task, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

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

  const CheckButton = () => (
    <IconButton
      variant="contained"
      color="primary"
      style={{ backgroundColor: "transparent" }}
      disableRipple
      onClick={() => dispatch(doneTask(task._id))}
    >
      <CheckIcon className={classes.iconCheck} />
    </IconButton>
  );

  const Message = () => {
    if (task.done && task.done.length > 0) {
      return task.done.find((dn) => dn === user?.result?._id) ? (
        <>
          <strike>{task.message}</strike>
        </>
      ) : (
        <>{task.message}</>
      );
    }

    return <>{task.message}</>;
  };

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.message} variant="body2" component="p">
          <Message />
          <div className={classes.buttons}>
            <CheckButton />
            <EditButton />
            <DeleteButton />
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
