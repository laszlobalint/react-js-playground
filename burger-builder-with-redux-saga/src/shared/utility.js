export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const mapErrorCodeToMessage = (errorCode) => {
  return ERROR[errorCode];
};

const ERROR = {
  EMAIL_NOT_FOUND: 'Email address was not found!',
  INVALID_PASSWORD: 'The password is invalid!',
  USER_DISABLED: 'The user account has been disabled!',
  INVALID_EMAIL: 'Email given is a not a valid address!',
  EMAIL_EXISTS: 'The email address is already in use!',
  OPERATION_NOT_ALLOWED: 'Password sign-in is disabled!',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'Requests have been blocker due to unusual activity!',
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};
