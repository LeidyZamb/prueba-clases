import { useEffect, useState } from 'react';
import { isEmpty, validStringRange } from '../utils/validations';

export const useUserForm = () => {
  const [cedula, setCedula] = useState('');
  const [isValidCedula, setisValidCedula] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('Campo requerido');
  const [firstName, setFirstName] = useState('');
  const [isValidFirstName, setisValidFirstName] = useState(false);

  useEffect(() => {
    setisValidCedula(cedula !== '' && cedula.trim().length > 0)
  }, [cedula]);

  useEffect(() => {
    setisValidFirstName(!isEmpty(firstName) && validStringRange({ max: 10, value: firstName}));
    if (isEmpty(firstName)){
      setFirstNameErrorMessage('Campo requerido');
      return;
    }
    if (!validStringRange({max: 10, value:firstName})){
      setFirstNameErrorMessage('El nombre no debe tener más de 10 caracteres');
      return;
    }
  }, [firstName]);

  const validateForm = () => {
    return isValidFirstName;
  };

  return {
    cedula, setCedula, isValidCedula,
    validateForm, firstNameErrorMessage,
    firstName, setFirstName, isValidFirstName
  };
};
