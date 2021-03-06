// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'Панель управления DDOS',

    stopBtnLabel: 'Остановить',
    startBtnLabel: 'Начать',
    ddosAttackConfigureBtnLabel: 'Настроить атаку',

    actionsHint: 'Остановка/Начало могут занять до 1 минуты',

    statusTitle: 'Статус',
    attackActiveStatusLabel: 'Атака в процессе',
    attackStoppedStatusLabel: 'Остановлена',

    resultsCardTitle: 'Результаты атаки',

    deleteSelectedTargets: 'Удалить выбранные цели',
    table: {
      target: 'Цель',
      success: 'Успешных запросов',
      errors: 'Ошибок',
      checkAvailability: 'Проверить доступность',
    },

    totalResults: {
      error: 'Ошибок',
      success: 'Успешных запросов',
    },
  },

  attackConfigPage: {
    pageTitle: 'Настройка DDOS',
    connectionsTitle: 'Запросы',
    reqCountFieldLabel: 'Лимит запросов за интервал',
    reqCountFieldHint: 'Рекомендуемое количество - 100',
    reqCountValidationHint: 'Минимальное количество запросов: 1',

    streamsCountLabel: 'Количство потоков',
    streamsCountHint: 'В разработке',

    resetConfigBtnLabel: 'Восстановить по умолчанию',
    startAttackBtnLabel: 'Начать атаку',

    intervalTimeFieldLabel: 'Длина интервала',
    intervalTimeFieldHint: 'В миллисекундах',
    intervalTimeValidationHint: 'Минимальная длина интервала: 1',

    removeAllTargetsBtnLabel: 'Удалить все цели',

    targetsCardTitle: 'Цели',
    addTargetFieldLabel: 'Ссылка или IP',
    addTargetFieldHint: 'Вы можете вставить любой текст со ссылками на цели и мы автоматически найдем их',
    addTargetBtnLabel: 'Добавить',
    targetsAddListTitle: 'Цели которые будут добавлены',
    targetTooltipText: 'Нажмите, чтобы открыть в новой вкладке',

    invalidTargetNotify: 'Это не похоже на URL или IP адрес',
    targetaAreadyAddedNotify: 'Цель уже добавлена',
    targetAddedNotify: 'Цель добавлена',

    errorReqDefaultNotify: 'Ошибка при запросе целей по умолчанию',

    attackStartedDialog: {
      title: 'Атака началась',
      description:
        'Пока вы не нажмете кнопку "Стоп" или не закроете вкладку, атака будет активной. Запуск может занять до 1 минуты',
      okBtnLabel: 'Ок',
    },

    targetsAutoUpdate: {
      title: 'Автообновление целей',
      notification: 'Цели были успешно обновлены',
      forceUpdateBtnLabel: 'Обновить сейчас',

      isEnabledFieldLabel: 'Включено',
      isEnabledFieldHint: 'Автоматически обновлять список целей',

      intervalFieldLabel: 'Интервал обновления',
      intervalFieldHint: 'Интервал между скачиваниями (по умолчанию: 60)',
      intervalValidationHint: 'Минимальный интервал обновления: 5 минут',

      targetsFileUrlLabel: 'Ссылка на файл',
      targetsFileUrlHint: "Внешняя ссылка на файл '.json' (массив)",
    },
  },
  donatePage: {
    pageTitle: 'Помощь проекту',
    number: 'Номер',
    copied: 'скопирован',
  },
  russianEmailsPage: {
    pageTitle: 'Список E-mail русских сервисов и компаний',
    dataSourceLabel: 'Источник',
  },
  russianDataPage: {
    listSeparator: 'Разделитель списка ',
    copyData: 'Копировать список',
    dataIsCopied: 'Скопировано',
    openJsonBtn: 'Показать в JSON',
  },

  updatesNotify: {
    title: 'Новая версия',
    message: 'Мы выпустили новую версию приложения. Атака возобновиться сразу же после обновления',
    okBtnLabel: 'Обновить сейчас',
    cancelBtnLabel: 'Позже',
  },

  nav: {
    ddos: {
      subnavLabel: 'DDOS Атака',
      dasboardLabel: 'Управление',
      configLabel: 'Настройка',
    },
    russianData: {
      subnavLabel: 'Данные русских',
      emailsLabel: 'Список email',
    },

    telegram: 'Мы в Telegram',
    donatePage: 'Помочь проекту',
    github: 'Код на GitHub',
  },
  ipNotify: {
    title: 'Используйте VPN с российским или белорусским IP для более эффективной атаки',
    ipLabel: 'Ваш IP',
    countryLabel: 'IP нахожиться в',
    reloadBtnLabel: 'Обновить',
    updatedAtLabel: 'Последнее обновление в',
  },

  denialOfResponsibilityWarning: {
    message:
      'Этот сайт является проектом для нагрузочного тестирования ваших собственных проектов. Администрация не несет никакой ответственности за незаконное использование данного ресурса',
    okBtnLabel: 'Ок',
  },
  donateDialog: {
    title: 'Вы можете помочь проекту',
    message:
      'Для этого совсем не обязательно уметь писать код. Достаточно просто пожертвовать любую сумму удобным способом нажав кпопку "Помочь проекту"',
    closeBtnText: 'Отказаться',
    donateBtnText: 'Помочь проекту',
  },
  promoBanner: {
    message: 'Разработка веб приложений/сервисов/порталов для B2B и B2C',
    actionBtnText: 'Подробнее',
  },
}
