/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import { TextField, RadioGroup } from 'formik-material-ui';
import * as Yup from 'yup';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Box,
  Button,
  FormHelperText,
} from '@material-ui/core';

const validationSchema = Yup.object({
  name: Yup.string().required('Le nom est obligatoire'),
  mariage: Yup.string('').required('Une réponse est nécessaire'),
});

const DemanderNom = (props) => {
  console.log(props.values);
  return (
    <Form>
      <Box display="flex" flexDirection="column">
        <Field
          component={TextField}
          name="name"
          type="text"
          label="Nom de l'associé"
        />

        <br />

        <FormControl
          component="fieldset"
          error={typeof props.errors.mariage === 'string'}
        >
          <FormLabel component="legend">Marié</FormLabel>
          <Field component={RadioGroup} name="mariage">
            <FormControlLabel value="oui" control={<Radio />} label="Oui" />
            <FormControlLabel value="non" control={<Radio />} label="Non" />
          </Field>
          {props.errors.mariage && (
            <FormHelperText>{props.errors.mariage}</FormHelperText>
          )}
        </FormControl>

        <br />

        <Button
          onClick={props.handleSubmit}
          disabled={props.isSubmitting || !props.isValid}
        >
          Suivant
        </Button>
      </Box>
    </Form>
  );
};

DemanderNom.propTypes = {
  handleSubmitNewPartner: PropTypes.func,
};

const FormikDemanderNom = ({ handleSubmitNewPartner, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitNewPartner}
    >
      {(props) => <DemanderNom {...props} />}
    </Formik>
  );
};

FormikDemanderNom.propTypes = {
  handleSubmitNewPartner: PropTypes.func,
  initialValues: PropTypes.object,
};

export default FormikDemanderNom;
