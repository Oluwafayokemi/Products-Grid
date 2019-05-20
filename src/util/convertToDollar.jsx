/**
 * @file convert cent to Dollar
 */

/**
 * @function convertToDollar
 * @description comverts cents to dollar
 * @returns {number}
 */
let dollars;
export const convertToDollar = (num) => {
  dollars = num / 100;
  return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
}