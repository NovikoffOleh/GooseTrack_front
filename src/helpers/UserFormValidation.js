import * as yup from 'yup';
import { patterns } from 'helpers/patterns';
const nameSchema = yup
  .string()
  .required('Name is a required field')
  .matches(patterns.namePattern, patterns.namePatternErrorMessage)
  .max(16, 'Name must not exceed 16 characters');

const emailSchema = yup
  .string()
  .required('Email is a required field')
  .email('Email must have @ and be valid')
  .matches(patterns.emailPattern, patterns.emailPatternErrorMessage);

const phoneSchema = yup
  .string()
  .matches(
          /^\+380\d{9}$/,
          'Phone must begin +38 and have 10 numbers then',)

const skypeSchema = yup
  .string()
  .max(16, 'Skype must not exceed 16 characters')
  .matches(patterns.skypePattern, patterns.skypePatternErrorMessage);

const birthdaySchema = yup
  .date()


const validateField = async (value, schema) => {
  let isValid;
  let firstError;
  await schema
    .validate(value)
    .then(() => (isValid = true))
    .catch(error => {
      isValid = false;
      firstError = error.message;
    });
  return { valid: isValid, error: firstError };
};

export const validateUserForm = async ({ name, email, phone, skype, birthday }) => {
  const nameValidation = await validateField(name, nameSchema);
  const emailValidation = await validateField(email, emailSchema);
  const phoneValidation = await validateField(phone, phoneSchema);
  const skypeValidation = await validateField(skype, skypeSchema);
  const birthdayValidation = await validateField(birthday, birthdaySchema);

  return {
    name: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    skype: skypeValidation,
    birthday: birthdayValidation,
  };
};


