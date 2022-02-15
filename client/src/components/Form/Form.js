import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, IconButton, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../../actions/tasks";
import AddIcon from "@mui/icons-material/Add";

const Form = ({ currentId, setCurrentId }) => {
  const [taskData, setTaskData] = useState({
    message: "",
  });
  const task = useSelector((state) =>
    currentId ? state.tasks.find((message) => message._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const clear = () => {
    setCurrentId(0);
    setTaskData({
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentId) {
      dispatch(createTask({ ...taskData }));
      clear();
    } else {
      dispatch(updateTask(currentId, { ...taskData }));
      clear();
    }
  };

  if (!user?.result?.username) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to start creating your to-do list.
        </Typography>
      </Paper>
    );
  }

  const AddButton = () => (
    <IconButton
      className={classes.buttonSubmit}
      variant="contained"
      color="primary"
      type="submit"
    >
      <AddIcon />
    </IconButton>
  );

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.taskInput}
        name="message"
        variant="outlined"
        label="Create a task..."
        fullWidth
        multiline
        value={taskData.message}
        onChange={(e) => setTaskData({ ...taskData, message: e.target.value })}
        InputProps={{ endAdornment: <AddButton />, style: { fontSize: 25 } }}
        InputLabelProps={{ style: { fontSize: 25 } }}
      />
    </form>
  );
};

export default Form;
