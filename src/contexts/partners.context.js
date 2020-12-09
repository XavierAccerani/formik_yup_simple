import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import partnersReducer from '../reducers/partners.reducer';

const defaultPartners = [
  { id: '0', name: 'Jean Seul', spouse: false },
  { id: '1', name: 'Pierre Pas', spouse: true, spouseName: 'Jeanne' },
  { id: '2', name: 'Catherine Aussi', spouse: true, spouseName: 'Marc' },
];

export const PartnersContext = createContext();
export const DispatchContext = createContext();

export const PartnersProvider = (props) => {
  const [partners, dispatch] = useLocalStorageReducer(
    'partners',
    partnersReducer,
    defaultPartners
  );

  return (
    <PartnersContext.Provider value={partners}>
      <DispatchContext.Provider value={dispatch}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </DispatchContext.Provider>
    </PartnersContext.Provider>
  );
};
