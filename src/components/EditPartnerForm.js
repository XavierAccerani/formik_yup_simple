/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/partners.context';
// import PartnerForm from './PartnerForm';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/EditPartnerFormStyles';
import { EDIT_PARTNER } from '../constants/actions';

const EditParnterForm = ({ id, name, spouse, spouseName, toggleEditForm }) => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [nameValue, handleNameChange, clearNameValue] = useInputState(name);
  // const [spouseValue, handleSpouseChange, clearSpouseValue] = useInputState(
  //   spouse
  // );
  // const [
  //   spouseNameValue,
  //   handleSpouseNameChange,
  //   clearSpouseNameValue,
  // ] = useInputState(spouseName);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: EDIT_PARTNER,
          id,
          payload: { name: nameValue, spouse, spouseName },
        });
        toggleEditForm();

        clearNameValue();
        // clearSpouseValue();
        // clearSpouseNameValue();
      }}
      className={classes.EditPartnerForm}
    >
      <input
        autoFocus
        onClick={(e) => e.stopPropagation()}
        placeholder="Nom de l'associé..."
        value={nameValue}
        onChange={handleNameChange}
        className={classes.input}
      />
    </form>
  );
};

export default EditParnterForm;
