let imageSearchBoxs = document.querySelectorAll(".search-box .search-input");
let titleDetails = document.querySelectorAll(".display-none");
let displaySearchTermBox = document.querySelector(".displaying-search-term");
let displaySearchTerm = document.querySelector(".displaying-search-term .search-term");
let galleryForShowingSearchImages = document.querySelector(".gallery");

imageSearchBoxs.forEach(function (imageSearchBox){
    imageSearchBox.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            galleryForShowingSearchImages.innerHTML = "";

            let searchValue = imageSearchBox.value;
            // let imageSearchUrl = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=50&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA`;
            let imageSearchUrl = `https://api.unsplash.com/photos/random?query=${searchValue}&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA&count=30`;

            titleDetails.forEach(function(e){
                e.style.display = "none";
            });
            displaySearchTermBox.style.display = "block";
            displaySearchTerm.innerHTML = searchValue;

            let imageSearchApiAJAXCall = new XMLHttpRequest();
            imageSearchApiAJAXCall.open("GET", imageSearchUrl);
            imageSearchApiAJAXCall.send();

            imageSearchApiAJAXCall.addEventListener("load", function () {
                let imageSearchResponse = JSON.parse(imageSearchApiAJAXCall.response);
                appendImageToGallery(imageSearchResponse);
            });
        }
    });
});