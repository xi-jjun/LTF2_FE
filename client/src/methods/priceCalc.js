export function priceCalc(phone, plan, supportPrice, discount, installment) {
  const month = installment || 24;

  const monthFee = 0.059 / 12;

  const originalPhone = phone.price;
  const publicSupportPrice =
    discount === -1 ? Math.round(supportPrice / 1.15) : 0;
  const extraSupportPrice =
    discount === -1 ? Math.round((supportPrice / 1.15) * 0.15) : 0;
  const actualPrice = originalPhone - (discount === -1 ? supportPrice : 0);
  const monthPhonePrice =
    month === 1
      ? actualPrice
      : Math.round(
          (actualPrice * monthFee * Math.pow(1 + monthFee, month)) /
            (Math.pow(1 + monthFee, month) - 1) /
            10
        ) * 10;
  const originalPlan = plan.monthPrice;
  const discountPlan = discount > 11 ? originalPlan * 0.25 : 0;
  const monthPlanPrice = originalPlan - discountPlan;
  const totalInstallmentFee =
    month === 1
      ? 0
      : Math.round(
          (((actualPrice * monthFee * Math.pow(1 + monthFee, month)) /
            (Math.pow(1 + monthFee, month) - 1)) *
            month -
            actualPrice) /
            10
        ) * 10;
  const monthTotalPrice =
    (month === 1 ? 0 : Math.ceil(actualPrice / month / 100) * 100) +
    originalPlan * (discount > 11 ? 0.75 : 1);

  return {
    originalPhone,
    actualPrice,
    supportPrice: publicSupportPrice,
    extraSupportPrice,
    phone: monthPhonePrice,
    installmentFee: totalInstallmentFee,
    originalPlan,
    discountPlan,
    plan: monthPlanPrice,
    total: monthTotalPrice,
  };
}
