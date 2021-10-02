export const setErrors = (
                        orderId,
                        cusName,
                        cusStatus,
                        pjournal,
                        sjournal,
                        gjournal,
                        other
  ) => {
    let errors = {};
    errors.orderId = orderId ? "" : "Order ID Required !";
    errors.cusName = cusName ? "" : "Customer Name Required !";
    errors.cusStatus = cusStatus ? "" : "Customer Status Required !";
    errors.pjournal = pjournal ? "" : "Purchase journal Amount Required !";
    errors.sjournal = sjournal ? "" : "Sales journal Amount Required !";
    errors.gjournal = gjournal ? "" : "General journal Amount Required !";
    errors.other = other ? "" : "Other Details Required !";
    
    return errors;
  };