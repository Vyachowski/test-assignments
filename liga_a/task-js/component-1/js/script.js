(function() {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue('tabs_limit') || 0,
  };

  /* Код компонента пишите ниже */
  const renderUI = (openTabs, tabs) => {
    const openTabClass = 'accordeon-item--open';

    tabs.forEach((tab) => tab.classList.remove(openTabClass));
    openTabs.forEach((openTab) => openTab.classList.add(openTabClass));
  };

  const handleTabClick = (event, uiState, accordeonTabs, tabsLimit) => {
    const targetTab = event.currentTarget;

    if (uiState.accordeonOpenTabs.includes(targetTab)) {
      uiState.accordeonOpenTabs = uiState.accordeonOpenTabs.filter((clickedTab) => clickedTab !== targetTab);
      renderUI(uiState.accordeonOpenTabs, accordeonTabs);
      return;
    }

    if (tabsLimit === 0) {
      uiState.accordeonOpenTabs.push(targetTab);
      renderUI(uiState.accordeonOpenTabs, accordeonTabs);
      return;
    }

    if (uiState.accordeonOpenTabs.length < tabsLimit) {
      uiState.accordeonOpenTabs.push(targetTab);
    } else {
      uiState.accordeonOpenTabs.shift();
      uiState.accordeonOpenTabs.push(targetTab);
    }

    renderUI(uiState.accordeonOpenTabs, accordeonTabs);
  };

  const app = () => {
    const { tabsLimit = 0 } = settings;
    const tabClass = '.accordeon-item';
    const uiState = {
      accordeonOpenTabs: [],
    };
    const accordeonTabs = document.querySelectorAll(tabClass);

    accordeonTabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handleTabClick(event, uiState, accordeonTabs, tabsLimit));
    });
  };

  app();
})();
