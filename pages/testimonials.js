/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Layout from '../components/layout/Layout'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paperClass: {
    padding: theme.spacing(6),
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Testimonials | Alex Griffiths"
      description="Previous projects and clients."
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={12}
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Paper className={classes.paperClass}>
                        <div>
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
                        </div>
                    </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paperClass}>
                        <div>
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
                        </div>
                    </Paper>
              </Grid>
              <Grid item>
              <Paper className={classes.paperClass}>
                    <div>
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
                    </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Testimonials;
