export const calculateDiscount = (originalPrice, newPrice) => {
  return ((1 - parseFloat(newPrice) / parseFloat(originalPrice)) * 100).toFixed(
    0
  );
};
