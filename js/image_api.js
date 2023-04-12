// Access Key - ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA
// url for random images - https://api.unsplash.com/random/photos?orientation=landscape&query=wallpaper&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA

// inserting random image in the editorial category
let url1 = "https://api.unsplash.com/photos/random?orientation=landscape&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA";
let editorialImageAJAXCall = new XMLHttpRequest();
editorialImageAJAXCall.open('GET', url1);
editorialImageAJAXCall.send();

editorialImageAJAXCall.addEventListener("load", function (e){
    console.log(e);
    let response = JSON.parse(e.target.response);
    console.log(response);
    addImageToDOM(response);
});

function addImageToDOM(response){
    let imageContainer = document.querySelector(".container .editorial-title-details");
    console.log(imageContainer);
    imageContainer.style.backgroundImage = `url(${response.urls.full})`;
}
