import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import Tasks from "../Tasks/Tasks";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getTasks } from "../../actions/tasks";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  if (!user?.result) {
    history.push("/auth");
    window.location.reload();
  }

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Tasks setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
