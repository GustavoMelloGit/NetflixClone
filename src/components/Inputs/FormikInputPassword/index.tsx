import { TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FormikInputContainer } from '../styles';

type IFormikInputPasswordProps = TextFieldProps & {
  name: string;
};

const FormikInputPassword: React.FC<IFormikInputPasswordProps> = (props) => {
  const { name, ...rest } = props;
  const [textVisible, setTextVisible] = useState(false);
  const [field, meta] = useField(name);

  function handleChangeVisibility() {
    setTextVisible((prev) => !prev);
  }
  return (
    <FormikInputContainer
      variant='filled'
      InputLabelProps={{ style: { color: '#818C8C' } }}
      inputProps={{ style: { color: '#fff' } }}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      type={textVisible ? 'text' : 'password'}
      InputProps={{
        endAdornment: textVisible ? (
          <AiOutlineEye
            className='pointer'
            onClick={handleChangeVisibility}
            size={35}
            color='#818C8C'
          />
        ) : (
          <AiOutlineEyeInvisible
            className='pointer'
            onClick={handleChangeVisibility}
            size={35}
            color='#818C8C'
          />
        ),
      }}
      {...field}
      {...rest}
    />
  );
};
export default FormikInputPassword;
