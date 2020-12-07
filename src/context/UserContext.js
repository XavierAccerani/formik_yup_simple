import React from 'react';

const INITIAL_VALUE = {
  partnerIndex: 0,
  partners: [],
};

const PARTNER_MODEL = {
  name: '',
  marriage: '',
  spouse_name: '',
};

const UserContext = React.createContext(INITIAL_VALUE);

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, INITIAL_VALUE, PARTNER_MODEL };
