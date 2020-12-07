import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom';

import {
  UserProvider,
  INITIAL_VALUE,
  PARTNER_MODEL,
} from './context/UserContext';

import MontrerRecap from './pages/recapPlus';
import DemanderNom from './pages/demandeNom';
import DemanderMari from './pages/demandeMari';

const App = () => {
  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const history = useHistory();

  const handleAddNewParnter = () => {
    console.log('handleAddNewParnter');
    const { partners } = formValues;
    partners.push(PARTNER_MODEL);
    setFormValues({
      partnerIndex: partners.length - 1,
      partners,
    });
    // navigate to user input
    return history.push('/demandeNom');
  };

  const handleSubmitNewPartner = (values, actions) => {
    console.log('handle submit new partner with ', values);
    const { partners, partnerIndex } = formValues;
    partners[partnerIndex] = { ...partners[partnerIndex], ...values };
    setFormValues({
      ...formValues,
      partners,
    });

    actions.setSubmitting(false);
    if (values.mariage === 'oui') {
      return history.push('/demandeMari');
    }
    return history.push('/');
  };

  const handleSubmitSpouse = (values, actions) => {
    console.log('handle submit spuse with ', values);
    const { partners, partnerIndex } = formValues;
    partners[partnerIndex] = { ...partners[partnerIndex], ...values };
    setFormValues({
      ...formValues,
      partners,
    });

    actions.setSubmitting(false);
    return history.push('/');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Mini projet
      </Typography>
      <UserProvider value={formValues}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <MontrerRecap
                handleAddNewParnter={handleAddNewParnter}
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/demandeNom"
            render={(props) => (
              <DemanderNom
                handleSubmitNewPartner={handleSubmitNewPartner}
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/demandeMari"
            render={(props) => (
              <DemanderMari
                handleSubmitSpouse={handleSubmitSpouse}
                {...props}
              />
            )}
          />
        </Switch>
      </UserProvider>
    </Container>
  );
};

export default App;
