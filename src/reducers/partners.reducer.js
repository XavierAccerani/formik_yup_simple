import { v4 as uuidv4 } from 'uuid';

import {
  ADD_PARTNER,
  REMOVE_PARTNER,
  EDIT_PARTNER,
} from '../constants/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PARTNER:
      return [...state, { id: uuidv4(), ...action.payload }];
    case REMOVE_PARTNER:
      return state.filter((PARTNER) => PARTNER.id !== action.id);
    case EDIT_PARTNER:
      return state.map((PARTNER) =>
        PARTNER.id === action.id ? { ...PARTNER, ...action.payload } : PARTNER
      );
    default:
      return state;
  }
};

export default reducer;
