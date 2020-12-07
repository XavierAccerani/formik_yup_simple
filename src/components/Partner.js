/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/partners.context';
import EditPartnerForm from './EditPartnerForm';
import useToggleState from '../hooks/useToggleState';
import useStyle from '../styles/PartnerStyles';
import { REMOVE_PARTNER } from '../constants/actions';

const Partner = ({ id, name, spouse, spouseName }) => {
  const classes = useStyle();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <li
        className={classes.Todo}
        style={{ overflowY: 'hidden' }}
        onClick={() => toggle()}
      >
        <EditPartnerForm
          id={id}
          name={name}
          spouse={spouse}
          spouseName={spouseName}
          toggleEditForm={toggle}
        />
      </li>
    );
  }

  return (
    <li className={classes.Partner}>
      <span>
        {name}, marrié : {spouse ? 'Oui' : 'Non'} {spouse ? spouseName : ''}
      </span>
      <div className={classes.icons}>
        <i
          style={{ color: '#c0392b' }}
          className="fas fa-trash"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: REMOVE_PARTNER, id });
          }}
        />
        <i
          style={{ color: '#58b2dc' }}
          className="fas fa-pen"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        />
      </div>
    </li>
  );
};

export default Partner;
