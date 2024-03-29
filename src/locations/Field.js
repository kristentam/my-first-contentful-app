import React from 'react';
import { Paragraph, TextInput } from '@contentful/f36-components';
import { FieldAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  // return <Paragraph>Hello Demo (AppId: {sdk.ids.app})</Paragraph>;
  // return <Paragraph>Hello Demo {sdk.ids.app}</Paragraph>
  return <TextInput value={'random'}></TextInput>
};

export default Field;
