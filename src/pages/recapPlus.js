import React from 'react';
import {
  // useFormikContext,
  Formik,
  Field,
} from 'formik';
import * as Yup from 'yup';

import { Box, Button } from '@material-ui/core';

import { TextField } from 'formik-material-ui';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { UserConsumer } from './userContext';

import DemanderNom from './demandeNom';
// import DemanderMari from './demandeMari';

// import { Link } from 'react-router-dom';

const MontrerRecap = () => {
  // export default function LayoutTextFields() {
  // const { values } = useFormikContext();

  const validationSchema = Yup.object({
    azertty: Yup.string().required('Le nom est obligatoire'),
  });

  return (
    <Router>
      <Box>
        {/* <h1>My Form</h1> */}

        <Formik
          initialValues={{
            spouse_name: '',
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
                name="azertty"
                type="text"
                label="essai textfield"
              />

              <UserConsumer>
                {(ctx) => {
                  return <Box> {ctx.partnerIndex} </Box>;
                }}
              </UserConsumer>

              <Button
                component={Link}
                to="/pages/demandeNom"
                // onClick=""
                // faire un return de la page suivante
              >
                Ajouter une personne
              </Button>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              {props.errors.mariage && (
                <div id="feedback">{props.errors.mariage}</div>
              )}

              {/* <button type="submit">Submit</button> */}
            </form>
          )}
        </Formik>
      </Box>
      <Route path="/pages/demandeNom" component={DemanderNom} />
      {/* <Route path="/pages/demandeMari" component={DemanderMari} /> */}
    </Router>
  );
};
export default MontrerRecap;

//   return (
//     <Box>

//       {/* <Box>
//         <pre>{JSON.stringify(values, null, 4)}</pre>
//       </Box> */}
//       <Box>
//         <Field
//           component={TextField}
//           name="azertty"
//           type="text"
//           label="essai textfield"
//         />

//         <Button component={Link} to="./demandeNom" color="primary">
//           MyButton
//         </Button>
//         <Button
//           onClick="

//           "
//           // faire un return de la page suivante
//         >
//           Ajouter une personne
//         </Button>
//       </Box>
//     </Box>
//   );
// }
