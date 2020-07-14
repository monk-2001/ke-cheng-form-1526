// DECLARING VARIABLES
let em = document.getElementById('email');
let fn = document.getElementById('fullname');
let message = document.getElementById('message');
let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Declare variable that will 
let submit = document.getElementById('submit');

// Start with your function here
function handleForm() {
  
//START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
	let uinput = {};
  let errors = [];
  if(fn.value !==''){
    uinput.FullName = fn.value;
  }
  else{
    errors.push('Full name is missing');
  }
 
//Check input exist at all
  if (em.value !== '') {
    
//Email
   if (pattern.test(em.value)) {
      uinput.Email = em.value;
    } else {
      errors.push('Invalid Email');
    }   
  } else {
    errors.push('Email is missing');
  }
  
// Message  
  if (message.value !==''){
    uinput.Message= message.value;
  }
  else
  {
    errors.push("Message name is missing");
  }
    
// FEEDBACK/ERRORS 
  if (errors.length === 0) {
    console.log('user input', uinput);
  } else {
    console.log('errors', errors);
  }
  
}

// Register your form to "click" event.
submit.addEventListener('click', handleForm);