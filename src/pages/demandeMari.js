import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { TextField } from 'formik-material-ui';
import { Box, Button } from '@material-ui/core';

const validationSchema = Yup.object({
  spouse_name: Yup.string().required('Le nom est obligatoire'),
});

const DemanderMari = (props) => {
  return (
    <Form>
      <Box display="flex" flexDirection="column">
        <Field
          component={TextField}
          name="spouse_name"
          type="text"
          label="Entrez le nom de l'époux/épouse"
        />
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

DemanderMari.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
};

const FormikDemanderMari = ({ handleSubmitSpouse }) => {
  return (
    <Formik
      initialValues={{
        spouse_name: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmitSpouse}
    >
      {(props) => <DemanderMari {...props} />}
    </Formik>
  );
};

FormikDemanderMari.propTypes = {
  handleSubmitSpouse: PropTypes.func,
};
export default FormikDemanderMari;
