import React from 'react';

const INITIAL_VALUE = {
  partnerIndex: 0,
  partners: [],
};

const UserContext = React.createContext(INITIAL_VALUE);

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
