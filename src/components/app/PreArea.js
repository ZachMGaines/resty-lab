import React from 'react';


const preArea = ({ body }) => {
  return <pre>{JSON.stringify(body, null, 2)}</pre>;
};

export default preArea;
