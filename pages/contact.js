import React from 'react'

import Layout from '../components/layout/Layout'
import GetInTouch from '../components/ContactForm'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Contact = () => {
  return (
    <Layout
      title="Contact | Alex Griffiths"
      description="Contact form to get in touch with Alex."
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <GetInTouch />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
