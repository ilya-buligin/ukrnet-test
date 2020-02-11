export const validateCarNumber = carNumber => {
  const carNumberRegExp = /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/;
  return new Promise((resolve, reject) =>
    carNumberRegExp.test(carNumber) ? resolve() : reject("INVALID_CAR_NUMBER")
  );
};

export const errorMessages = {
  INVALID_CAR_NUMBER: "Неверный номер автомобиля",
  default: "Ошибка"
};

export const getErrorMessage = errorCode =>
  errorMessages[errorCode] || errorMessages.default;
