import React from 'react';
import {View} from 'react-native';

type Props = {
  height?: any;
  width?: any;
};

const Gap = ({height, width}: Props) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
