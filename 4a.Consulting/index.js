const groupPricesByType = (priceList) => {
  return priceList.reduce((acc, price) => {
    if (price.isPopular) {
      acc.isPopular.push(price)
    } else if (price.isDiscount) {
      acc.isDiscount.push(price)
    } else {
      acc.regular.push(price);
    }

    return acc;
  }, {
    isPopular: [],
    isDiscount: [],
    regular: [],
  });
}

const sortPrices = (pricesGroupedByType) => {
  const entries = Object.entries(pricesGroupedByType);
  const sortedEntriesByKeyPrice = entries.map(([key, value]) => {
    const sortedValue = value.toSorted((a, b) => a.price - b.price );
    return [key, sortedValue];
  })

  return Object.fromEntries(sortedEntriesByKeyPrice);
}

const getSortedPrices = async (urlObj) => {
  try {
    const response = await fetch(urlObj.href);
    const prices = await response.json() ?? null;
    if (!prices) {
      throw new Error('Something went wrong, no prices found');
    }
    const groupedPrices = groupPricesByType(prices);
    return sortPrices(groupedPrices);
  } catch (e) {
    alert(e.message)
    console.error(JSON.stringify(e))
  }
}

const renderTimer = (minutesLeft, secondsLeft) =>{
  const hoursElement = document.querySelector('.discount-timer__time--hours strong');
  const minutesElement = document.querySelector('.discount-timer__time--minutes strong');
  const separatorElement = document.querySelector('.discount-timer__separator');
  minutesLeft >= 10
    ? hoursElement.textContent = String(minutesLeft)
    : hoursElement.textContent = `0${String(minutesLeft)}`;
  secondsLeft >= 10
    ? minutesElement.textContent = String(secondsLeft)
    : minutesElement.textContent = `0${String(secondsLeft)}`;

  if (timeLeftInSeconds < 30) {
    hoursElement.classList.add('warning-color');
    minutesElement.classList.add('warning-color');
    separatorElement.classList.add('warning-color');
  }
}

const renderTariffs = (priceList = [], discountPriceList = []) => {
  const priceElements = document.querySelectorAll('.regular-price');
  const oldPriceElements = document.querySelectorAll('.regular-old-price');
  const cardTitleElements = document.querySelectorAll('.card__title');
  priceList.forEach((price, index) => {
    cardTitleElements[index].textContent = priceList[index].name;
    if (discountPriceList.length > 0) {
      priceElements[index].textContent = `${discountPriceList[index].price}₽`;
      oldPriceElements[index].textContent = `${priceList[index].price}₽`;
    } else {
      priceElements[index].textContent = `${priceList[index].price}₽`;
      oldPriceElements[index].classList.add('text-vanish');
    }
  })
};

const renderPopupTariffs = (priceList = [], popupPriceList = []) => {
  const basicPriceList = priceList.slice(0, 3);
  const popupDiscountPriceElements = document.querySelectorAll('.hot-sale__price');
  const popupPriceElements = document.querySelectorAll('.hot-sale__old-price');
  const popupTitleElements = document.querySelectorAll('.hot-sale__title');

  basicPriceList.forEach((price, index) => {
    popupTitleElements[index].textContent = priceList[index].name;
    popupPriceElements[index].textContent = `${priceList[index].price}₽`;
    popupDiscountPriceElements[index].textContent = `${popupPriceList[index].price}₽`;
  })
}

const renderPopup = () => {
  const bodyElement = document.querySelector('body');
  const modalWindow = document.querySelector('.modal-window');
  const closeButtonElement = document.querySelector('.modal__close-button');

  bodyElement.classList.add('modal-open');
  modalWindow.classList.add('modal-window--open');
  closeButtonElement.addEventListener('click', () => {
    bodyElement.classList.remove('modal-open');
    modalWindow.classList.remove('modal-window--open');
  })
}

const app = async () => {
  const pricesLink = new URL('/subscribe/list-test', 'https://t-pay.iqfit.app');
  const { isDiscount: popupPrices, isPopular: discountPrices, regular: regularPrices } = await getSortedPrices(pricesLink);
  const userVisitTime = new Date();
  renderTariffs(regularPrices, discountPrices);
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const passedTime = currentTime.getTime() - userVisitTime.getTime();
    const TIMER_DURATION = 120_000;
    timeLeftInSeconds = Math.floor((TIMER_DURATION - passedTime) / 1000);
    const minutesLeft = Math.floor(timeLeftInSeconds / 60);
    const secondsLeft = timeLeftInSeconds % 60;
    renderTimer(minutesLeft, secondsLeft, intervalId);
    if (timeLeftInSeconds === 0) {
      clearInterval(intervalId);
      renderPopupTariffs(regularPrices, popupPrices)
      renderPopup();
      renderTariffs(regularPrices);
    }
  }, 100)
}

app();
