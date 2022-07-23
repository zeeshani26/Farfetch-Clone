
    let form1 = document.getElementById("Signup_form");
    let signupLS=JSON.parse(localStorage.getItem("signup_info")) || [];

    form1.addEventListener("submit", function(e){
        e.preventDefault();
        let obj ={
            name:form1.name.value,
            email:form1.email.value,
            password:form1.password.value,
        }
        if(obj.name == ""){
            alert("Please enter your name.");
            return;
        }
        else if(obj.email == ""){
            alert("Please enter a valid email address.");
            return;
        }
        else if(obj.password == ""){
            alert("Please enter a valid password.");
            return;
        }
        signupLS.push(obj);
        localStorage.setItem("signup_info",JSON.stringify(signupLS));
        alert("Signup successful")
    })