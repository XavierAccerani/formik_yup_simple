import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
// import Button from '@material-ui/core/Button';

import { TextField } from 'formik-material-ui';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  spouse_name: Yup.string("quel est le nom de l'époux ? ")
    // .spouse_name('entrez un nom')
    .required('Le nom est obligatoire'),
  //   password: Yup
  //     .string('Enter your password')
  //     .min(8, 'Password should be of minimum 8 characters length')
  //     .required('Password is required'),
});

const DemanderMari = () => {
  // entre ici

  return (
    // <Router>
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
              name="spouse_name"
              type="text"
              label="Entrez le nom de l'époux"
            />

            {props.errors.spouse_name && (
              <div id="feedback">{props.errors.spouse_name}</div>
            )}
            {/* {props.errors.mariage && (
                <div id="feedback">{props.errors.mariage}</div>
              )} */}

            <Button component={Link} to="/pages/recapPlus">
              suivant
            </Button>
          </form>
        )}
      </Formik>
    </Box>

    // </Router>
  );
};

// et la

//   const formik = useFormik({
//     initialValues: {
//       spouse_name: 'webber',
//       //   password: 'foobar',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <Box>
//           <Field
//             component={TextField}
//             fullWidth
//             id="spouse_name"
//             name="spouse_name"
//             label="spouse_name"
//             //   value={formik.values.spouse_name}
//             onChange={formik.handleChange}
//             error={
//               formik.touched.spouse_name && Boolean(formik.errors.spouse_name)
//             }
//             helperText={formik.touched.spouse_name && formik.errors.spouse_name}
//           />
//           {/* <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         /> */}
//           <Button color="primary" variant="contained" fullWidth type="submit">
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

export default DemanderMari;
// ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));
