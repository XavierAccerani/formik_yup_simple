import React, { useContext } from 'react';
import { PartnersContext } from '../contexts/partners.context';
import Partner from './Partner';

const PartnerList = () => {
  const partners = useContext(PartnersContext);

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {partners.map((partner, idx) => (
        <Partner key={idx} {...partner} />
      ))}
    </ul>
  );
};

export default PartnerList;
