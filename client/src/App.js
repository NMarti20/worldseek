import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import worldseek from "./images/worldseek.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="WorldSeek"></Typography>
        <img src={worldseek} alt="worldseek" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
