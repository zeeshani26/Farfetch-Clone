
    let form2 = document.getElementById("Login_form");
    let signupLS=JSON.parse(localStorage.getItem("signup_info")) || [];

    form2.addEventListener("submit", function(e){
        e.preventDefault();
        if(signupLS.length===0){
            alert("No User Exists");
            return;
        }
        let obj = {
            email:form2.email.value,
            password:form2.password.value,
        }
        let signedin = false;
        signupLS.forEach(function(ele){
            if(ele.email===obj.email && ele.password===obj.password){
                localStorage.setItem("signin",JSON.stringify(ele));
                signedin = true;
                alert("Login Success");
                window.location.href = "mens.html";
                
            }
        })
        if(signedin==false){
            alert("Login Failed");
        }
        })