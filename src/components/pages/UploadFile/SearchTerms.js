import React, { useState } from 'react';

import data from './data';
import Term from './Terms';

const SearchTerms = props => {
  const [terms] = useState(data);

  return (
    <>
      <Term terms={terms} />
    </>
  );
};

export default SearchTerms;

// If main cat #1 checked show sub cat with main id 1 if sub cat id 1 checked show tags with main id 1 and sub cat id 1
