import React from 'react';
import { TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { FormikInputContainer } from '../styles';

type IFormikInputTextProps = TextFieldProps & {
  name: string;
};

const FormikInputText: React.FC<IFormikInputTextProps> = (props) => {
  const { name, ...rest } = props;
  const [field, meta] = useField(name);
  return (
    <FormikInputContainer
      variant='filled'
      InputLabelProps={{ style: { color: '#818C8C' } }}
      inputProps={{ style: { color: '#fff' } }}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      {...field}
      {...rest}
    />
  );
};
export default FormikInputText;
