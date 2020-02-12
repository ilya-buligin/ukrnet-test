export const validateCarNumber = carNumber => {
  const carNumberRegExp = /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/;
  return carNumberRegExp.test(carNumber)
    ? Promise.resolve()
    : Promise.reject("INVALID_CAR_NUMBER");
};

export const errorMessages = {
  INVALID_CAR_NUMBER: "Неверный номер автомобиля",
  default: "Ошибка"
};

export const getErrorMessage = errorCode =>
  errorMessages[errorCode] || errorMessages.default;
