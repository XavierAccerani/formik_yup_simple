import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import FormikForm from './components/FormikForm';
// import DemanderNom from './pages/demandeNom';
// import DemanderMari from './pages/demandeMari';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MontrerRecap from './pages/recapPlus';

import { UserProvider } from './pages/userContext';
import DemanderNom from './pages/demandeNom';
import DemanderMari from './pages/demandeMari';

// if (pages === '' && values.mariage === 'oui') {
//   nextpage = { DemanderMari };
// }
// if (pages === '' && values.mariage === 'non') {
//   nextpage = { MontrerRecap };
// }

// const App = () => (
function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Box my={4} width={1}>
          <Typography variant="h4" component="h1" gutterBottom>
            Mini projet
          </Typography>
          {/* <UserProvider value="hello future me :)"> */}
          <UserProvider>
            <switch>
              <Route path="/" component={MontrerRecap} />
              {/* <Route path="/pages/recapPlus" component={MontrerRecap} /> */}
              <Route path="/pages/demandeNom" component={DemanderNom} />
              <Route path="/pages/demandeMari" component={DemanderMari} />
            </switch>
          </UserProvider>
          {/* <FormikForm /> */}
        </Box>
      </Container>
    </Router>
  );
}

export default App;
