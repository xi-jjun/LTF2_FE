export function priceCalc(phone, plan, supportPrice, discount, installment) {
  const actualPrice = phone.price - (discount === -1 ? supportPrice : 0);

  const month = installment || 24;

  const monthFee = 0.059 / 12;

  return {
    phone:
      month === 1
        ? actualPrice
        : Math.round(
            (actualPrice * monthFee * Math.pow(1 + monthFee, month)) /
              (Math.pow(1 + monthFee, month) - 1) /
              10
          ) * 10,
    plan: plan.monthPrice * (discount > 11 ? 0.75 : 1),
    installmentFee:
      month === 1
        ? 0
        : Math.round(
            (((actualPrice * monthFee * Math.pow(1 + monthFee, month)) /
              (Math.pow(1 + monthFee, month) - 1)) *
              month -
              actualPrice) /
              10
          ) * 10,
    total:
      (month === 1 ? 0 : Math.ceil(actualPrice / month / 100) * 100) +
      plan.monthPrice * (discount > 11 ? 0.75 : 1),
  };
}
