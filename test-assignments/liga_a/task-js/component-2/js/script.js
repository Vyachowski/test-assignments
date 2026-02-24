(function() {
  /* Код компонента пишите здесь */
  const isPhoneNumberValid = (phoneNumber) => {
    const phoneCode = phoneNumber.slice(0, 2);
    const phone = phoneNumber.slice(2).trim();
    const clearPhoneNumber = phone.replace(/[()\s-]/g, '');
    const phoneRegex = /^[()\-\s0-9]+$/;

    return phoneCode === '+7'
      ? (clearPhoneNumber.length === 10 && phoneRegex.test(phone))
      : false;
  };

  const normalizeDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const isFourDayPassed = (checkInDate, checkOutDate) => {
    const dateRegexArray = [
      /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/,
      /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.[0-9]{4}$/
    ];
    const fourDaysInMillis = 4 * 24 * 60 * 60 * 1000;
    const isCheckInDateValid = dateRegexArray.some((regex) => regex.test(checkInDate));
    const isCheckOutDateValid = dateRegexArray.some((regex) => regex.test(checkOutDate));

    if (!isCheckInDateValid || !isCheckOutDateValid) {
      return false;
    }

    const standardCheckInDate = checkInDate.includes('.')
      ? normalizeDate(checkInDate)
      : checkInDate;

    const standardCheckOutDate = checkOutDate.includes('.')
      ? normalizeDate(checkOutDate)
      : checkOutDate;

    const normalizedCheckInDate = new Date(standardCheckInDate);
    const normalizedCheckOutDate = new Date(standardCheckOutDate);
    const differenceInMillis = normalizedCheckOutDate - normalizedCheckInDate;

    return (differenceInMillis >= fourDaysInMillis);
  };

  const isGuestsConfigurationValid = (adults = 0, children = 0, roomType) => {
    const childrenNumber = Number(children) ?? 0;
    const adultsNumber = Number(adults) ?? 0;
    if (adultsNumber === 0 || childrenNumber > adultsNumber) {
      return false;
    }
    if (roomType === 'single' && adultsNumber > 1) {
      return false;
    }
    return !(roomType === 'family' && adultsNumber < 2 || childrenNumber === 0);
  };


  const formElement = document.querySelector('#booking-form');

  const renderFormUI = ({
    isPhoneValid,
    isDatesValid,
    isGuestsValid
  }) => {
    const fieldStates = {
      phone: isPhoneValid,
      ['checkin-date']: isDatesValid,
      ['checkout-date']: isDatesValid,
      adults: isGuestsValid,
      children: isGuestsValid
    };

    const fieldClasses = {
      true: 'field-correct',
      false: 'field-error'
    };

    Object.entries(fieldStates).forEach(([fieldId, isValid]) => {
      const fieldElement = document.querySelector(`#${fieldId}`);
      const classToAdd = fieldClasses[isValid];
      const classToRemove = fieldClasses[!isValid];

      fieldElement.classList.add(classToAdd);
      fieldElement.classList.remove(classToRemove);
    });
  };

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);
    const phoneValue = formData.get('phone');
    const checkInDateValue = formData.get('checkin-date');
    const checkOutDateValue = formData.get('checkout-date');
    const adultsValue = formData.get('adults');
    const childrenValue = formData.get('children');
    const roomTypeValue = formData.get('room-type');

    const formUIState = {
      isPhoneValid: isPhoneNumberValid(phoneValue),
      isDatesValid: isFourDayPassed(checkInDateValue, checkOutDateValue),
      isGuestsValid: isGuestsConfigurationValid(adultsValue, childrenValue, roomTypeValue),
    };

    renderFormUI(formUIState);
  });

})();
