/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Layout from '../components/layout/Layout'
import Social from '../components/Social'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avatarClass: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const Home = () => {
  const classes = useStyles();
  const avatar = "https://pbs.twimg.com/profile_images/1360071932427796482/QznHBZs3_400x400.jpg";
  return (
    <Layout
      title="About | Alex Griffiths"
      description="About Alex Griffiths and his work and services."
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Avatar alt="avatar" src={avatar} className={classes.avatarClass} />
              </Grid>
              <Grid item>
                <Typography variant="h3">Alex Griffiths</Typography>
              </Grid>
              <Social color />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
