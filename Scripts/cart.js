let container = document.getElementById("container");
let cartLS = JSON.parse(localStorage.getItem("cart_page")) || [];
let t_price = document.getElementById("total_price"); 


function Display(product_data){
    container.innerHTML = null;
    let total = 0;
    console.log(total)
    product_data.forEach(function (elem,index){
    total+= Number(elem.final_price);
    let div =  document.createElement("div");
    let image = document.createElement("img")
    let name = document.createElement("h2")
    let desc = document.createElement("p");
    let blank = "                        ";
    let price_div = document.createElement("div");    
    let price = document.createElement("p");
    let button = document.createElement("button")
    let buttons_div = document.createElement("div")
    image.setAttribute("src",elem.image_url)
    image.setAttribute("width","100%")
    name.innerText=elem.name    
    desc.innerText=elem.description;

    price.innerText="$"+elem.final_price;
    price_div.append(price);
    price_div.setAttribute("id","price_div");

    button.innerText="Delete";
    button.addEventListener("click",function(){
        Delete(index);
    })
    
    buttons_div.append(button);
    buttons_div.setAttribute("id", "buttons")

    div.append(image,name,desc,blank,price_div,buttons_div)  
    container.append(div)
})
t_price.textContent=total
}
Display(cartLS)

function Delete(index){
    let deletedCart =cartLS.filter(function(el,i){
        return i!= index;
    })
    Display(deletedCart)
    localStorage.setItem("cart_page",JSON.stringify(deletedCart))
}
let check = document.getElementById("checkout");
check.addEventListener("click",function(){
    alert("Transaction Success");
    cartLS = [];
    localStorage.setItem("cart_page",JSON.stringify(cartLS))
    Display(cartLS)
})