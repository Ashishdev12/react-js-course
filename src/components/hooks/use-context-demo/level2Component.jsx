import React, { useContext } from 'react';
import { userContext } from './rootComponent';

function Level2Component() {
  const userName = useContext(userContext);
  return ( <div>
    <h4>User Name form context:{userName}</h4>
  </div> );
}

export default Level2Component;