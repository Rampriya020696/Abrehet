import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.98474 16.8033C12.3677 16.8033 15.9207 13.2472 15.9207 8.86064C15.9207 4.47406 12.3677 0.91803 7.98474 0.91803C3.60182 0.91803 0.0487671 4.47406 0.0487671 8.86064C0.0487671 13.2472 3.60182 16.8033 7.98474 16.8033Z" fill="#8BC34A"/>
</svg>
`;

const ICBlipOrder = ({...rest}: any) => {
  return <SvgXml xml={xml} {...rest} />;
};

export default ICBlipOrder;
