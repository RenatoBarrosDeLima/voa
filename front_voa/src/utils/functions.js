// import moment from 'moment';

export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

// export const dateFormat = date => {
//   return moment(date).format('DD/MM/YYYY');
// };
