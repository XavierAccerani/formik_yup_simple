import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/partners.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/PartnerFormStyles';
import { ADD_PARTNER } from '../constants/actions';

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

  return (
    // test depuis ubuntu
    // <form
    <formik
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ADD_PARTNER,
          payload: {
            name: nameValue,
            spouse: spouseValue,
            spouseName: spouseNameValue,
          },
        });
        // clearNameValue();
        // clearSpouseValue();
        // clearSpouseNameValue();
      }}
      className={classes.PartnerForm}
    >
      <input
        placeholder="Nom de l'associé..."
        value={nameValue}
        onChange={handleNameChange}
        className={classes.input}
      />

      <input
        type="radio"
        id="oui"
        name="spouseValue"
        value="oui"
        checked={spouseValue === 'oui'}
        onChange={handleSpouseChange}
      />
      <label htmlFor="oui">Oui</label>
      <input
        type="radio"
        id="non"
        name="spouseValue"
        checked={spouseValue === 'non'}
        value="non"
        onChange={handleSpouseChange}
      />
      <label htmlFor="nom">Non</label>
      {spouseValue === 'oui' && (
        <input
          placeholder="Nom de l'époux(se)..."
          value={spouseNameValue}
          onChange={handleSpouseNameChange}
          className={classes.input}
        />
      )}
      <button type="submit">submit</button>
    </formik>
  {/* </form> */}
  );
};

export default NewPartnerForm;
