export const setErrors = (
    lmoID,
    matID,
    matName,
    qty,
    category,
    description
    
  ) => {
    let errors = {};
    errors.lmoID = lmoID ? "" : "LMO ID Required !";
    errors.matID = matID ? "" : "Material ID Required !";
    errors.matName = matName ? "" : "Material Name Required !";
    errors.qty = qty ? "" : "Qty Required !";
    errors.category = category ? "" : "Category Required !";
    errors.description = description ? "" : "Description Required !";
    
    return errors;
  };

 

 