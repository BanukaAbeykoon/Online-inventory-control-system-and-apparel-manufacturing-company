export const setErrors = (
  orderid,
  rawproduct,
  matone,
  matoneqty,
  mattwo,
  mattwoqty,
  matthree,
  matthreeqty
) => {
  let errors = {};
  errors.orderid = orderid ? "" : "Order ID Required !";
  errors.rawproduct = rawproduct ? "" : "Product Required !";
  errors.matone = matone ? "" : "Material 1 Details Required !";
  errors.matoneqty = matoneqty ? "" : "Material 1 Quantity Required !";
  errors.mattwo = mattwo ? "" : "Material 2 Details !";
  errors.mattwoqty = mattwoqty ? "" : "Material 2 Quantity Required !";
  errors.matthree = matthree ? "" : "Material 3 Details !";
  errors.matthreeqty = matthreeqty ? "" : "Material 3 Quantity Required !";
  return errors;
};

