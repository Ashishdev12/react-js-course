import React from 'react';
import Level1Component from './level1Component';

export const userContext = React.createContext(); // 1. create the userContext
// 2. provide a value for the userContext
function RootComponent() {
  return ( <div>
    <userContext.Provider value={'Ashish Kumar'}>
    <Level1Component></Level1Component>
    </userContext.Provider>
  </div> );
}

export default RootComponent;