let sonuc=document.getElementById("sonuc");
let olustur=document.getElementById("btnOlustur");
let random=Math.floor((Math.random()*7)+5);

olustur.addEventListener("click", ()=>{
    sonuc.innerHTML=random;
    console.log(random);
});
