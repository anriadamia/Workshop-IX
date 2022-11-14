let form=document.getElementById("registration");

form.addEventListener("submit", function(event){
event.preventDefault();
let errors={};
let form=event.target
let username=document.getElementById("usernamefield").value;
// let username=document.querySelector('[name="username"]').value
//შეგვიძლია ამ ინფუთს მივწვდეთ მეორე ჩანაწერის მეშვეობითაც.
if(username==""){
    errors.username="Username field can't be empty and must be more than 5 characters "
}
// if(username.length<5){
//     errors.username="Username must be more than 5 characters"
// }
let password=document.getElementById("passwordfield").value;
let password2=document.getElementById("passwordfield2").value;

if(password==""){
    errors.pasww="Password field can't be empty"
}
if(password!=password2){
    errors.pasww2="Password don't match"
}
let agree=document.getElementById("agree").checked;
// if (agree=false)
if(!agree){
    errors.agree="You must agree terms and conditions"
}
let gender=false;
form.querySelectorAll('[name="gender"]').forEach(item=>{
    if(item.checked){           
        gender=true;
    }
})
if(!gender){
    errors.gender="Please select your gender"
}  
console.log(errors);  
form.querySelectorAll(".error-text").forEach(element =>{
    element.textContent=" "
})
for(let item in errors){
    console.log(item);
    let spanContent=document.getElementById("error_"+item);
    if(spanContent){
        spanContent.textContent=errors[item];
    }
}
if(Object.keys(errors).length ==0){
form.submit()
}
})

let errors={
username:"Username field can't be empty",
pasww:"Password field can't be empty",
pasww2:"Password don't match",
agree:"You must agree terms and conditions",
gender:"Please select your gender"

}


let showPassword=document.getElementById("passwordfield");
let showPassword2=document.getElementById("passwordfield2");
let toggleIcon=document.getElementById("toggleIcon");

toggleIcon.addEventListener("click",function(){
    if(showPassword.type=="password"
    ||showPassword2.type=="password"){
        showPassword.setAttribute("type","text");
        showPassword2.setAttribute("type","text");
        toggleIcon.classList.remove("fa-eye")
        toggleIcon.classList.add("fa-eye-slash")
    }else{
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye")
        showPassword.setAttribute("type","password");
        showPassword2.setAttribute("type","password");

    }
})

let usernameField=document.getElementById("usernamefield");
let usernameError=document.getElementById("usernameError");
usernameField.addEventListener("keyup",function(){
    let usernameField=document.getElementById("usernamefield").value;
    let usernameRegex="^[A-Za-z][A-Za-z0-9_]{7,29}$"
    if(usernameField.match(usernameRegex)){
        usernameError.innerText="Username is valid";
        usernameError.style.color="green";
    }else{
        usernameError.innerText="Username isn't valid";
        usernameError.style.color="red"
    }
    if(usernameField==""){
        usernameError.innerText=" "
    }
    
})

usernameField.addEventListener("focus",function(event){
    event.target.style.border="2px solid green";
    event.target.style.outline="none"
})

let emailField=document.getElementById("email");
emailField.addEventListener("keyup",function(){
let emailValue=document.getElementById("email").value;
let errorEmail=document.getElementById("text");
let emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(emailValue.match(emailRegex)){
    errorEmail.innerText="Your email is valid";
    errorEmail.style.color="green";
}else{
    errorEmail.innerText="Your email isn't valid";
    errorEmail.style.color="red";
}
if(emailValue==""){
    errorEmail.textContent=" ";
}
});

emailField.addEventListener("focus",function(event){
     event.target.style.border="2px solid green"
     event.target.style.outline="none"
})