export const setErrors = (
  shipmentID,

  supplierID,

  supllierName,

  materialID,

  materialName,

  qunatity,

  unitPrice,

  date
) => {
  let errors = {};
  errors.shipmentID = shipmentID ? "" : "Factory Name Required !";
  errors.supplierID = supplierID ? "" : "Telephone Required !";
  errors.supllierName = supllierName ? "" : "Email Required !";
  errors.materialID = materialID ? "" : "Website Required !";
  errors.materialName = materialName ? "" : "CEO NAME Required !";
  errors.qunatity = qunatity ? "" : "FCO NAME Required !";
  
  errors.unitPrice = unitPrice ? "" : "Products Required !";
  errors.date = date ? "" : "Products Required !";

  return errors;
};
