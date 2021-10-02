export const setErrors = (
  facname,
  factelephone,
  facemail,
  facwebsite,
  ceoname,
  fconame,
  product,
  units
) => {
  let errors = {};
  errors.facname = facname ? "" : "Factory Name Required !";
  errors.factelephone = factelephone ? "" : "Telephone Required !";
  errors.facemail = facemail ? "" : "Email Required !";
  errors.facwebsite = facwebsite ? "" : "Website Required !";
  errors.ceoname = ceoname ? "" : "CEO NAME Required !";
  errors.fconame = fconame ? "" : "FCO NAME Required !";
  errors.product = product ? "" : "Products Required !";
  errors.units = units ? "" : "Number Of Units Required !";
  return errors;
};
