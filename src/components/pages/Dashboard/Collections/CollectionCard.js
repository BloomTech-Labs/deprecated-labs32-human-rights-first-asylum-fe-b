import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CollectionDetail from './CollectionDetail.js';

const CollectionCard = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(
    () =>
      axios
        .get('https://')
        // be sure to pass the user id in the params
        .then(res => {
          console.log(res.data.results);
          // setcaseData(res.data.results);
        })
        .catch(err => {
          console.log(
            '404 Error (Cases Get Request from Collection Card)',
            err
          );
        }),
    []
  );

  return (
    <div>
      {/* MAP LOGIC TO BE INCLUDED ONCE BE ENDPOINT IS RECEIVED */}
      {/* dont forget the collection id because it will be needed for adding cases later */}
      {/* {collectionData.map((collection, id) => {
          return (
            <CollectionDetails key={id} collection={collection} />
          );
        })} */}
      {/* PLACEHOLDER COMPONENT FOR DUMMY DATA>>> */}
      <CollectionDetail />
    </div>
  );
};

export default CollectionCard;
