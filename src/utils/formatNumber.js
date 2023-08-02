export const formatNumber = (number) => {
  return "$ " + new Intl.NumberFormat("es-ES").format(number);
};
