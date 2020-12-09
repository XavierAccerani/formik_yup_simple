import React from 'react';
import { Container } from '@material-ui/core';
import { PartnersProvider } from './contexts/partners.context';
import PartnerForm from './components/PartnerForm';
import PartnerList from './components/PartnerList';
import useStyles from './styles/AppStyles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {/* <Typography variant="h4" component="h1" gutterBottom>
        Liste des associés
      </Typography> */}
      <header className={classes.header}>
        <h1>
          Liste des <span>Associés</span>
        </h1>
        <h2>A simple app built with React Hooks & Context</h2>
      </header>
      <PartnersProvider>
        <PartnerForm />
        <PartnerList />
      </PartnersProvider>
    </Container>
  );
};

export default App;
