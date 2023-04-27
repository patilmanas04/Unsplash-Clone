// header categories slider
let categoriesRight = document.querySelector(".categories .right");
let angleSmallLeft = document.querySelector(".angle-small-left");
let angleSmallRight = document.querySelector(".angle-small-right");
let scrollFraction = 5;

window.addEventListener("resize", function (){
    if(this.document.body.clientWidth < 738){
        scrollFraction = 8;
    }

    else if(this.document.body.clientWidth < 484){
        scrollFraction = 11;
    }

});


window.addEventListener("load", function (){
    categoriesRight.scrollLeft = 0;
    angleSmallLeft.style.visibility = "hidden";

});

angleSmallLeft.addEventListener("click", function (){
    let maxScrollValue = categoriesRight.scrollWidth - categoriesRight.clientWidth;
    let nextScrollValue = maxScrollValue / scrollFraction;
    categoriesRight.scrollLeft -= nextScrollValue + 10;
    angleSmallRight.style.visibility = "visible"; 

    let effectiveScrollValue = categoriesRight.scrollLeft - nextScrollValue; 
    if(effectiveScrollValue <= 0){
        angleSmallLeft.style.visibility = "hidden";
    }
});

angleSmallRight.addEventListener("click", function (){
    let maxScrollValue = categoriesRight.scrollWidth - categoriesRight.clientWidth;
    let nextScrollValue = maxScrollValue / scrollFraction;
    categoriesRight.scrollLeft += nextScrollValue + 10; 
    angleSmallLeft.style.visibility = "visible";

    let effectiveScrollValue = categoriesRight.scrollLeft + nextScrollValue;
    if(effectiveScrollValue >= maxScrollValue){
        angleSmallRight.style.visibility = "hidden";
    }
});

categoriesRight.addEventListener("scroll", ()=>{
    if(categoriesRight.scrollLeft == 0){
        angleSmallLeft.style.visibility = "hidden";
    }
    else if(categoriesRight.scrollLeft > 0){
        angleSmallLeft.style.visibility = "visible";
    }

    let maxScrollValue = categoriesRight.scrollWidth - categoriesRight.clientWidth;
    if(categoriesRight.scrollLeft < maxScrollValue){
        angleSmallRight.style.visibility = "visible";
    }
    else if(categoriesRight.scrollLeft >= maxScrollValue){
        angleSmallRight.style.visibility = "hidden";
    }
});



// search box border effect
let searchBox = document.querySelector(".header-section .top-header-section .left .search-box");
let searchBoxInput = document.querySelector(".header-section .top-header-section .left .search-box .search-input");

searchBoxInput.addEventListener("focus", function (){
    searchBox.style.border = "1px solid #d1d1d1";
    searchBox.style.backgroundColor = "white";
});

searchBoxInput.addEventListener("blur", function (){
    searchBox.style.border = "1px solid transparent";
    searchBox.style.backgroundColor = "#eee";
});

function changeSearchBoxPlaceholder() {
  if (searchBox.clientWidth < 254) {
    searchBoxInput.placeholder = "Search images";
  }
  else{
    searchBoxInput.placeholder = "Search high-resolution images";
  }
}

window.addEventListener('resize', changeSearchBoxPlaceholder);

changeSearchBoxPlaceholder();


// categories on click color and border bottom effects
let categoriesItems = document.querySelectorAll(".categories .js-on-click-effect");
categoriesItems[0].style.borderBottom = "2px solid black";
categoriesItems[0].style.color = "#111";

categoriesItems.forEach(function (item){
    item.addEventListener("click", function(){
        imageSearchBoxs.forEach(function(imageSearchBox){
            imageSearchBox.value = "";
        });
        categoriesItems.forEach(function (item){
            item.style.borderBottom = "2px solid transparent";
            item.style.color = "defualt";
            item.style.color = "#767676";
        });

        item.style.borderBottom = "2px solid black";
        item.style.color = "#111";
    });
})

categoriesItems.forEach(item =>{
    item.addEventListener("mouseover", function(){
        item.style.color = "#111";
    });
})

categoriesItems.forEach(item =>{
    item.addEventListener("mouseout", function(){
        if(item.style.borderBottom != "2px solid black"){
            item.style.color = "#767676";
        }
    });
});

let logo = document.querySelector(".header-section .top-header-section .left .branding");
logo.addEventListener("click", function (){
    location.reload();
    imageSearchBoxs.forEach(function(imageSearchBox){
        imageSearchBox.value = "";
    });
});