export const setErrors = (
    matreportID,
    matID,
    matName,
    date,
    shipID,
    defect,
    qty
  ) => {
    let errors = {};
    errors.matreportID = matreportID ? "" : "Report ID Required !";
    errors.matID = matID ? "" : "Material ID Required !";
    errors.matName = matName ? "" : "Material Name Required !";
    errors.date = date ? "" : "Date Required !";
    errors.shipID = shipID ? "" : "Shipment ID Required !";
    errors.defect = defect ? "" : "Defect Reason Required !";
    errors.qty =  qty ? "" : "Qty Required !";
    return errors;
  };

 