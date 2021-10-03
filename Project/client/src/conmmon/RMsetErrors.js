export const setErrors = (customer,orderId,category,payment,quantity,weight,dueDate,address) =>{
    let errors = {};
    errors.customer = customer?"":"Customer is Required !";
    errors.orderId = orderId ?"":"OrderID is Required !";
    errors.category = category?"":"Caregory is Required !";
    errors.payment = payment ?"":"Payment is Required !";
    errors.quantity = quantity? "":"Quantity is Required !";
    errors.weight = weight ?"":"Weight is Required !";
    errors.dueDate = dueDate ?"":"Duedate is Required !";
    errors.address = address ?"":"Address is Required !";
    return errors;
};