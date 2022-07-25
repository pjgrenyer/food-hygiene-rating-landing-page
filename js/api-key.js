"use strict";
const firstName = $("[name=first-name]");
$("#submitBtn").on('click', function () {
    console.log(firstName.val());
    // $("#myForm").submit(); // Submit the form
});
// const handleIt = (form: any) => {
//     console.log(form);
//     return false;
//   }
