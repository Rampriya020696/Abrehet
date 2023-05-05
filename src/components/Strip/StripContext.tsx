import React from 'react';

const initalState = {stripeKey: 'test stripe key'};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_STRIPE_KEY':
      console.log('action==', action.payload);
      return {...state, stripeKey: action.payload};
    default:
      return state;
  }
};

export const StripeKeyContext = React.createContext<any>({});

const StripeKeyContextProvider = ({children}) => {
  const [state, stripKeyDispatch] = React.useReducer<any>(reducer, initalState);
  return (
    <StripeKeyContext.Provider value={{state, stripKeyDispatch}}>
      {children}
    </StripeKeyContext.Provider>
  );
};

export default StripeKeyContextProvider;
