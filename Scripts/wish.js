    let container = document.getElementById("container");
    let WishLS = JSON.parse(localStorage.getItem("wish_page")) || [];
    let cartLS = JSON.parse(localStorage.getItem("cart_page")) || [];


    function Display(product_data){
        container.innerHTML = null;
        product_data.forEach(function (elem,index){
        let div =  document.createElement("div");
        let image = document.createElement("img")
        let name = document.createElement("h2")
        let desc = document.createElement("p");
        let blank = "                        ";
        let price_div = document.createElement("div");    
        let price = document.createElement("p");
        let discount = document.createElement("p");
        let button = document.createElement("button");
        let deletebtn = document.createElement("button")
        let buttons_div = document.createElement("div")
        image.setAttribute("src",elem.image_url)
        image.setAttribute("width","100%")
        name.innerText=elem.name    
        desc.innerText=elem.description;

        discount.innerText="Discount:"+"  "+elem.discount;
        price.innerText="$"+elem.final_price;
        price_div.append(price,discount);
        price_div.setAttribute("id","price_div");

        button.innerText="Add to Bag";
        button.addEventListener("click",function(){
            AddtoBag(elem);
        })
        deletebtn.innerText="Delete";  
        deletebtn.addEventListener("click",function(){
            Delete(index);
            
        })
        buttons_div.append(button,deletebtn);
        buttons_div.setAttribute("id", "buttons")

        div.append(image,name,desc,blank,price_div,buttons_div)  
        container.append(div)
    })
    }
    function Delete(index){
        let deletedWish =WishLS.filter(function(el,i){
            return i!= index;
        })
        Display(deletedWish)
        localStorage.setItem("wish_page",JSON.stringify(deletedWish))
    }
    Display(WishLS)

    function AddtoBag(product){
        let is_flag = false;
        for(let i=0;i<cartLS.length;i++){
        if(cartLS[i].product_id==product.product_id){
            alert("Product already added!");
            is_flag=true;
        }
        }   
        if(is_flag==false){
        cartLS.push(product);
        alert("Product added successfully")
        localStorage.setItem("cart_page",JSON.stringify(cartLS));
        console.log(cartLS);
        }
    }