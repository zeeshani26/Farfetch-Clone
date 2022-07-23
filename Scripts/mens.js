
    product_data = [{"product_id":"001","image_url":"https://cdn-images.farfetch-contents.com/17/52/98/21/17529821_36750527_480.jpg","name":"Valentino","description":"Neon Universe print bomber jacket","discount":"-40%","final_price":"1126","category":"jackets_sweaters"},
    {"product_id":"002","image_url":"https://cdn-images.farfetch-contents.com/17/77/82/07/17778207_40014742_480.jpg","name":"Jil Sander","description":"straight-leg cropped trousers","discount":"-60%","final_price":"337","category":"trousers_short"},
    {"product_id":"003","image_url":"https://cdn-images.farfetch-contents.com/18/32/19/25/18321925_40086555_480.jpg","name":"Vetements","description":"printed sleeve long-sleeve T-shirt","discount":"","final_price":"883","category":"tshirt_shirt"},
    {"product_id":"004","image_url":"https://cdn-images.farfetch-contents.com/17/26/66/24/17266624_39745909_480.jpg","name":"Bethany Williams","description":"Magpie and Baby wool jumper","discount":"-60%","final_price":"1271","category":"jackets_sweaters"},
    {"product_id":"005","image_url":"https://cdn-images.farfetch-contents.com/18/43/52/22/18435222_39579040_480.jpg","name":"Heron Preston","description":"logo-print organic cotton T-shirt","discount":"-50%","final_price":"192","category":"tshirt_shirt"},
    {"product_id":"006","image_url":"https://cdn-images.farfetch-contents.com/17/90/69/35/17906935_40353301_480.jpg","name":"Stone Island Shadow","description":"pocketed cargo shorts","discount":"-50%","final_price":"379","category":"trousers_short"},
    {"product_id":"007","image_url":"https://cdn-images.farfetch-contents.com/17/57/29/02/17572902_38962545_480.jpg","name":"Palm Angels","description":"mix-print cargo trousers","discount":"-45%","final_price":"770","category":"trousers_short"},
    {"product_id":"008","image_url":"https://cdn-images.farfetch-contents.com/17/51/50/12/17515012_39223459_480.jpg","name":"AMIRI","description":"Satin Flames Souvenir varsity jacket","discount":"-50%","final_price":"1994","category":"jackets_sweaters"},
    {"product_id":"009","image_url":"https://cdn-images.farfetch-contents.com/17/77/64/12/17776412_39387600_480.jpg","name":"By Walid","description":"Chico tie-dye short-sleeve shirt","discount":"-60%","final_price":"440","category":"tshirt_shirt"},
    {"product_id":"010","image_url":"https://cdn-images.farfetch-contents.com/18/56/53/88/18565388_40048763_480.jpg","name":"Thom Browne","description":"multi-panel zip-fastening jacket","discount":"","final_price":"4165","category":"jackets_sweaters"},
    {"product_id":"011","image_url":"https://cdn-images.farfetch-contents.com/17/52/98/05/17529805_36575225_480.jpg","name":"Valentino","description":"VLogo straight-leg jeans","discount":"-40%","final_price":"489","category":"trousers_short"},
    {"product_id":"012","image_url":"https://cdn-images.farfetch-contents.com/18/57/06/62/18570662_40429986_480.jpg","name":"Palm Angels","description":"graffiti-print logo T-shirt","discount":"","final_price":"445","category":"tshirt_shirt"},
    {"product_id":"013","image_url":"https://cdn-images.farfetch-contents.com/17/51/33/36/17513336_39704535_480.jpg","name":"AMI Paris","description":"logo-embroidered organic cotton hoodie","discount":"-50%","final_price":"254","category":"jackets_sweaters"},
    {"product_id":"014","image_url":"https://cdn-images.farfetch-contents.com/18/07/93/89/18079389_c1dbac35-402b-4876-8507-63d31d81b162_480.jpg","name":"Kenzo","description":"flame-print branded short-sleeve shirt","discount":"-50%","final_price":"247","category":"tshirt_shirt"},
    {"product_id":"015","image_url":"https://cdn-images.farfetch-contents.com/18/53/61/60/18536160_39994159_480.jpg","name":"Off-White","description":"Industrail-belt cargo shorts","discount":"","final_price":"825","category":"trousers_short"},
    {"product_id":"016","image_url":"https://cdn-images.farfetch-contents.com/17/64/84/10/17648410_39235251_480.jpg","name":"Moncler","description":"Sattouf hooded windbreaker jacket","discount":"","final_price":"1255","category":"jackets_sweaters"},
    {"product_id":"017","image_url":"https://cdn-images.farfetch-contents.com/17/58/53/34/17585334_7da533f9-5a07-42ae-9526-1fceebba5303_480.jpg","name":"Jil Sander","description":"cropped straight-leg trousers","discount":"-40%","final_price":"462","category":"trousers_short"},
    {"product_id":"018","image_url":"https://cdn-images.farfetch-contents.com/18/45/81/77/18458177_40628662_480.jpg","name":"Marni","description":"graphic-print T-shirt","discount":"","final_price":"580","category":"tshirt_shirt"},
    {"product_id":"019","image_url":"https://cdn-images.farfetch-contents.com/17/68/13/05/17681305_40260483_480.jpg","name":"Versace","description":"retro-style varsity jacket","discount":"50%","final_price":"2371","category":"jackets_sweaters"},
    {"product_id":"020","image_url":"https://cdn-images.farfetch-contents.com/17/89/81/86/17898186_37747238_480.jpg","name":"Off-White","description":"Arrows logo-print track pants","discount":"35%","final_price":"477","category":"trousers_short"}]

    let container = document.getElementById("container");
    let filter = document.getElementById("filter");
    let cartLS = JSON.parse(localStorage.getItem("cart_page")) || [];
    let WishLS = JSON.parse(localStorage.getItem("wish_page")) || [];

    
    filter.addEventListener("change",function(){
        if(filter.value == ""){
            Display(product_data)
        }
        else{
        filtered = product_data.filter(function(ele){
            return ele.category===filter.value;
        })
        Display(filtered) 
        }
    })


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
        let button = document.createElement("button")
        let wishlist = document.createElement("button")
        let buttons_div = document.createElement("div")
        image.setAttribute("src",elem.image_url)
        image.setAttribute("width","90%")
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
        wishlist.innerText="Add to Wishlist";  
        wishlist.addEventListener("click",function(){
            AddtoWish(elem);
            
        })
        buttons_div.append(button,wishlist);
        buttons_div.setAttribute("id", "buttons")

        div.append(image,name,desc,blank,price_div,buttons_div)  
        container.append(div)
    })
    }
    Display(product_data)

    
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

    function AddtoWish(product){
        let flag = false;
        for(let i=0;i<WishLS.length;i++){
        if(WishLS[i].product_id==product.product_id){
            flag = true;
            alert("You have wished for it already, Buy it Now!!")
        }
        }
        if(flag==false){
        WishLS.push(product);
        alert("Product added to Wishlist")
        localStorage.setItem("wish_page",JSON.stringify(WishLS));
        }
    }