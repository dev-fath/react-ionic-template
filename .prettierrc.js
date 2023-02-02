module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  endOfLine: 'lf',
  importOrder: [
    '^react$',
    '^react/(.*)$',
    '^@ionic/(.*)$',
    '^@reduxjs/toolkit(.*)$',
    '^react-redux$',
    '^api/(.*)$',
    '^redux(.*)$',
    '^context(.*)$',
    '^hooks/(.*)$',
    '^components/(.*)$',
    '^navigation/(.*)$',
    '^screens/(.*)$',
    '^storages/(.*)$',
    '^utils/(.*)$',
    '^interfaces/(.*)$',
    '^assets/(.*)$',
    '^constants/(.*)$',
    '^data/(.*)$',
    '^./(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};