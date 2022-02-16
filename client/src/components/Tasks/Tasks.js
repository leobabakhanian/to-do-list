import React from "react";
import Task from "./Task/Task";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Tasks = ({ setCurrentId }) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {tasks
        .map(
          (task) =>
            user?.result?._id === task?.author && (
              <Grid key={task.id} item xs={12} sm={12}>
                <Task task={task} setCurrentId={setCurrentId} />
              </Grid>
            )
        )
        .reverse()}
    </Grid>
  );
};

export default Tasks;
