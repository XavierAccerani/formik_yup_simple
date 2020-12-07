import React from 'react';
import { Formik, Field, useFormikContext } from 'formik';

import { TextField, RadioGroup } from 'formik-material-ui';
// import { Box } from '@material-ui/core';

// ompport pour l'ajout de la checkbox
import * as Yup from 'yup';

import {
  FormControlLabel,
  Radio,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import DemanderMari from './demandeMari';
// import MontrerRecap from './recapPlus';

// fin ajout de la checkbox

const validationSchema = Yup.object({
  name: Yup.string()
    // .name('entrez un nom')
    .required('Le nom est '),
  mariage: Yup.string('')
    // .mariage('')
    .required('Une réponse est nécessaire'),
  //   password: Yup
  //     .string('Enter your password')
  //     .min(8, 'Password should be of minimum 8 characters length')
  //     .required('Password is required'),
});

const DemanderNom = () => {
  // const { values } = useFormikContext();

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     mariage: '',
  //     //   password: 'foobar',
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // debut implementation formik tag
  // const BasicExample = () => (

  // <div>
  return (
    <Router>
      <Box>
        {/* <h1>My Form</h1> */}

        <Formik
          initialValues={{
            name: '',
            mariage: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Entrez un nom"
              />

              <Typography variant="h6">Y a t-il un mariage ?</Typography>

              <Field component={RadioGroup} defaultValue="non" name="mariage">
                <FormControlLabel value="oui" control={<Radio />} label="Oui" />
                <FormControlLabel value="non" control={<Radio />} label="Non" />
              </Field>

              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              {props.errors.mariage && (
                <div id="feedback">{props.errors.mariage}</div>
              )}

              {props.values.mariage === 'oui' && (
                <Button component={Link} to="/pages/demandeMari">
                  suivant
                </Button>
              )}

              {props.values.mariage === 'non' && (
                <Button component={Link} to="/pages/recapPlus">
                  suivant
                </Button>
              )}
            </form>
          )}
        </Formik>
      </Box>
      {/* <Route path="/pages/demandeNom" component={DemanderNom} /> */}
      <Route path="/pages/demandeMari" component={DemanderMari} />
      {/* <Route path="/pages/recapPlus" component={MontrerRecap} /> */}
    </Router>
  );
  /* </div> */
  // );
  /* fin implmentation formik tag  */

  //   const { values} = useFormikContext();

  //   return (
  //     <Box>
  //       <Field
  //         component={TextField}
  //         name="name"
  //         type="text"
  //         label="Entrez un nom"
  //       />

  //       <Typography variant="h6">Y a t-il un mariage ?</Typography>

  //       <Field component={RadioGroup} defaultValue="non" name="mariage">
  //         <FormControlLabel value="oui" control={<Radio />} label="Oui" />
  //         <FormControlLabel value="non" control={<Radio />} label="Non" />
  //       </Field>
  //     </Box>
  //   );
};

export default DemanderNom;
