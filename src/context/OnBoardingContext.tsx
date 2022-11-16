/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';

export const OnBoardingContext = createContext({});

const OnBoardingProvider = ({children}) => {
  const [onboardingRes, setOnboardingRes] = useState([]);
  return (
    <OnBoardingContext.Provider value={{onboardingRes, setOnboardingRes}}>
      {children}
    </OnBoardingContext.Provider>
  );
};

export default OnBoardingProvider;
