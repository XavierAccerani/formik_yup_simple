import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/partners.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/PartnerFormStyles';
import { ADD_PARTNER } from '../constants/actions';
import { TextField } from 'formik-material-ui';
import { Formik, Field, Form } from 'formik';

const NewPartnerForm = () => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [nameValue, handleNameChange, clearNameValue] = useInputState('');
  const [spouseValue, handleSpouseChange, clearSpouseValue] = useInputState(
    'non'
  );
  const [
    spouseNameValue,
    handleSpouseNameChange,
    clearSpouseNameValue,
  ] = useInputState('');

  const formik = useFormik({

    initialValues={
      name: "",
      spouse:"non",
      spouse_name:""
    },

    
    onSubmit: values => {
      console.log(object)
      dispatch({
            type: ADD_PARTNER,
            payload: {
              values
      }});}
  });


  return (
    // test depuis ubuntu
    <form onSubmit={formik.handleSubmit}
    // <formik

    // initialValues={initialValues}
      // validationSchema={validationSchema}
      // onSubmit={handleSubmitNewPartner}

      // onSubmit={(e) => {
      //   e.preventDefault();
      //   dispatch({
      //     type: ADD_PARTNER,
      //     payload: {
      //       values
      //     },
      //   });
      //   payload: {
      //       name: nameValue,
      //       spouse: spouseValue,
      //       spouseName: spouseNameValue,
      //     },
      //     clearNameValue();
      //     clearSpouseValue();
      //     clearSpouseNameValue();
      //   }}
          className={classes.PartnerForm}
    >
      <input
        placeholder="Nom de l'associé..."
        value={formik.values.name}
        // onChange={handleNameChange}

        

        onChange={formik.handleChange}
        className={classes.input}
      />

      <input
        type="radio"
        id="oui"
        name="spouseValue"
        value={formik.values.spouseValue}
        // value="oui"
        checked={spouseValue === 'oui'}
        // onChange={handleSpouseChange}
        onChange ={formik.handleChange}
      />
      <label htmlFor="oui">Oui</label>
      <input
        type="radio"
        id="non"
        name="spouseValue"
        checked={spouseValue === 'non'}
        value={formik.values.spouseValue}
        // value="non"
        // onChange={handleSpouseChange}
        onChange ={formik.handleChange}

      />
      <label htmlFor="nom">Non</label>
      {spouseValue === 'oui' && (
        <input
          placeholder="Nom de l'époux(se)..."
          // value={spouseNameValue}
          value={formik.values.spouseValue}
          // onChange={handleSpouseNameChange}
          onChange ={formik.handleChange}
          className={classes.input}
        />
      )}
      <button type="submit">submit</button>
    {/* </formik> */}
  </form>
  );
};

export default NewPartnerForm;
