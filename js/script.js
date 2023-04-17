// header categories slider
let categories = document.querySelector(".categories .right");
let angleSmallLeft = document.querySelector(".angle-small-left");
let angleSmallRight = document.querySelector(".angle-small-right");

window.addEventListener("load", function (){
    categories.scrollLeft = 0;
    angleSmallLeft.style.visibility = "hidden";
});

angleSmallLeft.addEventListener("click", function (){
    let maxScrollValue = categories.scrollWidth - categories.clientWidth;
    categories.scrollLeft -= 275;
    angleSmallRight.style.visibility = "visible"; 

    let effectiveScrollValue = categories.scrollLeft - 275; 
    if(effectiveScrollValue <= 0){
        angleSmallLeft.style.visibility = "hidden";
    }
});

angleSmallRight.addEventListener("click", function (){
    let maxScrollValue = categories.scrollWidth - categories.clientWidth;
    categories.scrollLeft += 275; 
    angleSmallLeft.style.visibility = "visible";

    let effectiveScrollValue = categories.scrollLeft + 275;
    if(effectiveScrollValue >= maxScrollValue){
        angleSmallRight.style.visibility = "hidden";
    }
});





// search box border effect
let searchBox = document.querySelector(".header-section .top-header-section .left .search-box");
let searchBoxInput = document.querySelector(".header-section .top-header-section .left .search-box .search-input");

searchBoxInput.addEventListener("focus", function (){
    searchBox.style.border = "1px solid #d1d1d1";
});

searchBoxInput.addEventListener("blur", function (){
    searchBox.style.border = "1px solid transparent";
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



let logo = document.querySelector(".header-section .top-header-section .left .branding");
logo.addEventListener("click", function (){
    location.reload();
    imageSearchBoxs.forEach(function(imageSearchBox){
        imageSearchBox.value = "";
    });
});