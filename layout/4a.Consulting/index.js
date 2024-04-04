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

const updateTimer = (visitTime) =>{
  const TIMER_DURATION = 120_000;
  const currentTime = new Date;
  const passedTime = currentTime - visitTime;
  const timeLeft = TIMER_DURATION - passedTime;
  const minutesLeft = Math.floor(timeLeft / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const hoursElement = document.querySelector('.discount-timer__time--hours strong');
  const minutesElement = document.querySelector('.discount-timer__time--minutes strong');
  if (true) {}
}



const app = async () => {
  console.log(userVisitTime.getTime());
  const pricesLink = new URL('/subscribe/list-test', 'https://t-pay.iqfit.app');
  const { isDiscount: discountPrices, isPopular: popupPrices, regular: regularPrices } = await getSortedPrices(pricesLink);
  const userVisitTime = new Date();
  const timerId = setInterval(() => {

  }, 1000)
}

app();
