    let array_men = ["Comme Des Garçons Play","Brunello Cucinelli","TOM FORD Eyewear","Thom Browne","visvim","Buscemi","Raf Simons","Axel Arigato","Greg Lauren","Homme Plissé Issey Miyake","Casablanca","Pringle of Scotland","Mastermind Japan","MCM","Maison Kitsuné"]
    let array_women = ["Paris Texas","Canada Goose","Amina Muaddi","Self-Portrait","Amen","MCM","Stella McCartney","Issey Miyake","Jacquemus","Comme Des Garçons","Aquazzura","Herno","Gianvito Rossi",]
    let array_kids = ["Fendi Kids","Gucci Kids","Golden Goose Kids","Givenchy Kids","Moschino Kids","Dolce & Gabbana Kids","Bonpoint","Moncler Enfant","Burberry Kids","Balmain Kids","Il Gufo","Versace Kids","The Marc Jacobs Kids","Alexander McQueen Kids","Adidas Yeezy Kids","Balenciaga Kids"]
    
    let arrow1=false;
    let arrow2=false;
    let arrow3=false;
    let arrow4=false;
    let arrow5=false;
    let arrow6=false;
    let div_men = document.getElementById("myDropdown1")
    let div_women = document.getElementById("myDropdown2")
    let div_kids = document.getElementById("myDropdown3")
    let div_men2 = document.getElementById("myDropdown4")
    let div_women2 = document.getElementById("myDropdown5")
    let div_kids2 = document.getElementById("myDropdown6")


    for(i=0;i<array_men.length;i++){
        anchor = document.createElement("a")
        anchor2 = document.createElement("a")
        anchor.innerText = array_men[i];
        anchor2.innerText = array_men[i];
        anchor.href = "index.html"
        anchor2.href = "index.html"
        div_men.append(anchor)
        div_men2.append(anchor2)
    }

    for(i=0;i<array_women.length;i++){
        anchor = document.createElement("a")
        anchor2 = document.createElement("a")
        anchor.innerText = array_women[i];
        anchor2.innerText = array_women[i];
        anchor.href = "index.html"
        anchor2.href = "index.html"
        div_women.append(anchor)
        div_women2.append(anchor2)
    }

    for(i=0;i<array_kids.length;i++){
        anchor = document.createElement("a")
        anchor2 = document.createElement("a")
        anchor.innerText = array_kids[i];
        anchor2.innerText   = array_kids[i];
        anchor.href = "index.html"
        anchor.href = "index.html"
        div_kids.append(anchor)
        div_kids2.append(anchor2);
    }

    function myFunction(j,i) {
        if(j==1){
            document.getElementById("myDropdown1").classList.toggle("show");
        }
        else if(j==2){
            document.getElementById("myDropdown2").classList.toggle("show");
        }
        else if(j==3){
            document.getElementById("myDropdown3").classList.toggle("show");
        }
        else if(j==4){
            document.getElementById("myDropdown4").classList.toggle("show");
        }
        else if(j==5){
            document.getElementById("myDropdown5").classList.toggle("show");
        }
        else if(j==6){
            document.getElementById("myDropdown6").classList.toggle("show");
        }
        if(i==1 && arrow1==false){
            document.getElementById("arrow1").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow1 = true;
        }
        else{
            document.getElementById("arrow1").src = "https://charbase.com/images/glyph/9013"
            arrow1 = false;
        }
        if(i==2 && arrow2==false){
            document.getElementById("arrow2").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow2 = true;
        }
        else{
            document.getElementById("arrow2").src = "https://charbase.com/images/glyph/9013"
            arrow2 = false;
        }
        if(i==3 && arrow3==false){
            document.getElementById("arrow3").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow3 = true;    
        }
        else{
            document.getElementById("arrow3").src = "https://charbase.com/images/glyph/9013"
            arrow3 = false;
        }
        if(i==4 && arrow4==false){
            document.getElementById("arrow4").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow4 = true
        }
        else{
            document.getElementById("arrow4").src = "https://charbase.com/images/glyph/9013"
            arrow4 = false;
        }
        if(i==5 && arrow5==false){
            document.getElementById("arrow5").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow5 = true;
        }
        else{
            document.getElementById("arrow5").src = "https://charbase.com/images/glyph/9013"
            arrow5 = false;
        }
        if(i==6 && arrow6==false){
            document.getElementById("arrow6").src = "https://w7.pngwing.com/pngs/28/816/png-transparent-arrow-computer-icons-symbol-up-arrow-angle-rectangle-triangle.png"
            arrow6 = true
        }
        else{
            document.getElementById("arrow6").src = "https://charbase.com/images/glyph/9013"
            arrow6 = false;
        }
    }
   