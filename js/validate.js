const uname = document.getElementById('uname')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const passw = document.getElementById('password')
const age = document.getElementById('age')
const form = document.getElementById('regForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []


  if(uname.value == '' || uname.value == null){
    messages.push('Username is required')
  }
  else{
    if(uname.value.length <= 7 || uname.value.length >=17){
      messages.push('Username must be 8 to 16 characters long')
    }
    else{
      if (!uname.value.match(/^[0-9a-z]+$/)){
        messages.push('Username must be lowercase alphanumeric only')
      }
    }
  }


  if(fname.value == '' || fname.value == null){
    messages.push('First name is required')
  }
  else{
    if(fname.value.length <= 1 || fname.value.length >=21){
      messages.push('First name must be 2 to 20 characters long')
    }
    else{
      if (!fname.value.match(/^[a-zA-Z]+$/)){
        messages.push('First name must be characters only')
      }
    }
  }


  if(lname.value == '' || lname.value == null){
    messages.push('Last name is required')
  }
  else{
    if(lname.value.length <= 1 || lname.value.length >=21){
      messages.push('Last name must be 2 to 20 characters long')
    }
    else{
      if (!lname.value.match(/^[a-zA-Z]+$/)){
        messages.push('Last name must be characters only')
      }
    }
  }


  if(email.value == '' || email.value == null){
    messages.push('Email is required')
  }
  else{
    if (!email.value.match(/\S+@\S+\.\S+/)){
      messages.push('Email is not in the valid format')
    }
    }


  if(phone.value == '' || phone.value == null){
    messages.push('Phone number is required')
  }
  else{
    if(phone.value.length !== 10){
      messages.push('Phone number must be exactly 10 digits long')
    }
    else{
      if (!phone.value.match(/^[0-9]+$/)){
        messages.push('Phone number must be digits only')
      }
    }
  }
  
   if(passw.value == '' || passw.value == null){
    messages.push('Password is required')
  }
  
   if(age.value == '' || age.value == null){
    messages.push('Age is required')
  }
  else{
	  if(age.value < 10 || age.value >100){
      messages.push('Age should be between 11 to 99')
    }
	else{
      if (!age.value.match(/^[0-9]+$/)){
        messages.push('Age must be digits only')
      }
	}
  }
	  
if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
