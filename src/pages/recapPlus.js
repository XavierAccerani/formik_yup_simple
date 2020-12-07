import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@material-ui/core';

import { UserConsumer } from '../context/UserContext';

const MontrerRecap = ({ handleAddNewParnter }) => {
  return (
    <Box display="flex" flexDirection="column">
      <UserConsumer>
        {(formValues) => (
          <div>
            <div>Nombre d associés: {formValues.partners.length}</div>
            {formValues.partners.length > 0 &&
              formValues.partners.map((partner, index) => {
                return (
                  <div key={index}>
                    <hr />
                    Editer {index}
                    <br />
                    Nom: {partner.name}
                    <br />
                    Marrié: {partner.mariage}
                    <br />
                    {partner.mariage === 'oui' && (
                      <span>avec {partner.spouse_name}</span>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </UserConsumer>
      <br />
      <Button onClick={handleAddNewParnter}>Ajouter un associer</Button>
    </Box>
  );
};

MontrerRecap.propTypes = {
  handleAddNewParnter: PropTypes.func,
};

export default MontrerRecap;
