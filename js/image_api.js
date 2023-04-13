// Access Key - ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA
// url for random images - https://api.unsplash.com/random/photos?orientation=landscape&query=wallpaper&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA

// inserting random image in the editorial category
let url1 = "https://api.unsplash.com/photos/random?orientation=landscape&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA";
let editorialImageAJAXCall = new XMLHttpRequest();
editorialImageAJAXCall.open('GET', url1);
editorialImageAJAXCall.send();

editorialImageAJAXCall.addEventListener("load", function (e){
    let response = JSON.parse(e.target.response);
    addImageToDOM(response);
});

function addImageToDOM(response){
    let imageContainer = document.querySelector(".container .editorial-title-details");
    imageContainer.style.backgroundImage = `url(${response.urls.full})`;
}





// Adding the images to the gallery dynamically
let url2 = "https://api.unsplash.com/photos/random?client_id=HB6DnSO4g5aZ4oHbaFwFK5IZUareL-qF5kuq8VuGwZk&count=30";

let galleryImageAJAXCall = new XMLHttpRequest();
galleryImageAJAXCall.open('GET', url2);
galleryImageAJAXCall.send();

galleryImageAJAXCall.addEventListener("load", function(e){
    let response = JSON.parse(e.target.response);
    appendImageToGallery(response);
});

function appendImageToGallery(response){
    console.log(response);
    response.forEach(function(e){
        let imageUrl = e.urls.regular;
        console.log(imageUrl);
        let gallery = document.querySelector(".gallery");
        let imageContainer = document.createElement('img');
        imageContainer.src = imageUrl;
        imageContainer.className = "gallery-image";
        gallery.appendChild(imageContainer);
    });
}