// utils/calculateSolarProfit.js
export function calculateSolarProfit({
  addressLabel,
  roofArea,
  numApartments,
  annualDemand,
}) {
  const roof = Number(roofArea) || 0;
  const apartments = Number(numApartments) || 0;
  const demand = Number(annualDemand) || 0;

  const systemSize = roof > 0 ? roof / 5 : 0;

  const totalInvestment = systemSize * 1000;

  const annualProduction = systemSize * 950;

  const internalRevenue = annualProduction * 0.35 * 0.3;

  const feedInRevenue = annualProduction * 0.65 * 0.08;

  const totalRevenue = internalRevenue + feedInRevenue;

  const annualOM = totalInvestment * 0.01;

  const annualProfit = totalRevenue - annualOM;

  const paybackYears = annualProfit > 0 ? totalInvestment / annualProfit : null;

  const roi = (annualProfit / totalInvestment) * 100;

  return {
    addressLabel,
    numApartments: apartments,
    annualDemand: demand,
    systemSize,
    totalInvestment,
    annualProduction,
    internalRevenue,
    feedInRevenue,
    totalRevenue,
    annualOM,
    annualProfit,
    paybackYears,
    roi,
  };
}
