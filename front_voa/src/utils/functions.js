import moment from 'moment';

export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const calculatePercentageNumber = (total, value) => {
  return total ? (100 * value) / total : 0;
};

export const calculatePercentageString = (total, value) => {
  return total ? `${((100 * value) / total).toFixed(2)}%` : `0%`;
};

export const daysRemaining = (deadline) => {

  const today = new Date();
  const startMoment = moment(new Date(deadline));
  const endMoment = moment(today);
  const diff = startMoment.diff(endMoment, 'days');

  if (diff <= 0) {
    return `Encerrado`;
  } else if (diff == 1) {
    return `${diff} dia restante`;
  } else if (diff > 1) {
    return `${diff} dias restante`;
  }
};

export const daysPast = (date) => {
  const today = new Date();
  const startMoment = moment(new Date(date));
  const endMoment = moment(today);
  const diff = endMoment.diff(startMoment, 'days');

  if (diff <= 0) {
    return `Hoje`;
  } else if (diff == 1) {
    return `Ontem`;
  } else if (diff > 1) {
    return `a cerca de ${diff} dias`;
  }
};
