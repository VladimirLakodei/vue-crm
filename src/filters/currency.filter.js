export default function currencyFilter(value, currency = 'CZK') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(value)
}
