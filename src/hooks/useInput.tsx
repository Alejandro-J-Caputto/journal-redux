import { useState } from 'react';
import { ChangeEvent } from 'react';
import { Validatable } from '../interfaces/validatable.interface';
import customValidator from '../utils/validator';

const useInput = (valOpts: Validatable) => {

  const [inputValue, setInputValue] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const formValueIsValid = customValidator(valOpts, inputValue);
  const containsError = !formValueIsValid && isDirty;

  const inputChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  };

  const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  const reset = () => {
    setInputValue('');
    setIsDirty(false)
  };

  

  return {
    value: inputValue,
    isValid: formValueIsValid,
    containsError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;