export const currencyFormatter = (number, country) => {
  const currencies = {
    "indonesia": {
      lang: 'id-ID',
      currency: 'IDR'
    }
  }

  const formattedNumber = new Intl.NumberFormat(currencies[country]?.lang, {
    style: 'currency',
    currency: currencies[country]?.currency
  })
  .format(number)
  .toString();

  return formattedNumber.slice(0, formattedNumber.length - 3);
}