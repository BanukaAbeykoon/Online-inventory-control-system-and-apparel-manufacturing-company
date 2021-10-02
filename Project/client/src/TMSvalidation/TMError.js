export const setErrors = (regno,engno,brandname,manuyear) =>{
    let errors = {};
    errors.regno = regno?"":"Register No is Required !";
    errors.engno = engno ?"":"Engine No is Required !";
    errors.brandname = brandname?"":"BrandName is Required !";
    errors.manuyear = manuyear?"":"Manufacture Date is Required !";
  
    return errors;
};