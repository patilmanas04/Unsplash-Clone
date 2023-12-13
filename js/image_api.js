// Access Key - ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA for random title images
// Access Key - D0VoBabslhk-aM9VW1sHXbY-sO_CVsZDpsM8yDvKQkY for random gallery images
// Access Key - WUyG0J-piF8tE-aMvpI8IX8GRtDMmNzRXKQvVBMeqzg for random search images

// url for random images - https://api.unsplash.com/random/photos?orientation=landscape&query=wallpaper&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA




// inserting random image in the editorial category
let url1 = "https://api.unsplash.com/photos/random?orientation=landscape&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA";
let editorialImageAJAXCall = new XMLHttpRequest();
editorialImageAJAXCall.open('GET', url1);
editorialImageAJAXCall.send();

editorialImageAJAXCall.addEventListener("load", function (e){
    let response = JSON.parse(e.target.response);
    addImageToDOM(response);
    console.log(response)
});

function addImageToDOM(response){
    let imageContainer = document.querySelector(".container .editorial-title-details");
    imageContainer.style.backgroundImage = `url(${response.urls.full})`;
}

// Defaults
let introductionContainerSettingDefaults = document.querySelector(".other-categories");
introductionContainerSettingDefaults.style.display = "none";



// Adding the images to the gallery dynamically in the editorial gallery
let url2 = "https://api.unsplash.com/photos/random?client_id=D0VoBabslhk-aM9VW1sHXbY-sO_CVsZDpsM8yDvKQkY&count=30";

let galleryImageAJAXCall = new XMLHttpRequest();
galleryImageAJAXCall.open('GET', url2);
galleryImageAJAXCall.send();

galleryImageAJAXCall.addEventListener("load", function(e){
    let response = JSON.parse(e.target.response);
    appendImageToGallery(response);
});


let imagePopupWindow = document.querySelector(".image-popup-window");
let fadedBackground = document.querySelector(".faded-background");
let previewImage = document.querySelector(".preview-image");
let closeImagePopupWindowButton = document.querySelector(".image-popup-window .close-button");
let downloadButton = document.querySelector(".download-button");
let nextButton = document.querySelector(".image-popup-window .control-next");
let previousButton = document.querySelector(".image-popup-window .control-previous");
let index = 0;
let allImages = "";
let imageClientWidth = "";
let imageClientHeight = "";

// values related to each image
let imageLocation = document.querySelector(".image-information .other-informations .location");
let imageLocationText = document.querySelector(".image-information .other-informations .location .text");
let imageCamera = document.querySelector(".image-information .other-informations .camera");
let imageCameraText = document.querySelector(".image-information .other-informations .camera .text");
let imageViews = document.querySelector(".image-information .information-values .views");
let imageViewsValue = document.querySelector(".image-information .information-values .views .value");
let imageDownloads = document.querySelector(".image-information .information-values .downloads"); // not used in the code
let imageDownloadsValue = document.querySelector(".image-information .information-values .downloads .value");
let imageLikes = document.querySelector(".image-information .information-values .likes .value");
let imageDescription = document.querySelector(".image-information .other-informations .description");
let imageDescriptionText = document.querySelector(".image-information .other-informations .description .text");

function appendImageToGallery(response){
    allImages = response;
    // console.log(response);
    response.forEach(function(e, currentIndex){
        // console.log(e);
        const gallery = document.querySelector(".gallery");
        const imageContainer = document.createElement('img');
        const imageUrl = e.urls.regular;
        imageContainer.src = imageUrl;
        imageContainer.loading = "lazy";
        imageContainer.className = "gallery-image";
        gallery.appendChild(imageContainer);  
        
        
        imageContainer.addEventListener("click", function(){   
            //defaults
            imageLocation.style.display = "flex";
            imageCamera.style.display = "flex";
            imageViews.style.display = "flex";
            imageDownloads.style.display = "flex";
            imageLikes.style.display = "flex";
            imageDescription.style.display = "flex";

            imagePopupWindow.scrollTop = 0;


            if(e.location.city == null && e.location.country == null){
                imageLocation.style.display = "none";
            }
            else if(e.location.city != null && e.location.country != null){
                imageLocationText.innerHTML = `${e.location.city}, ${e.location.country}`;
            }
            else if(e.location != null){
                imageLocationText.innerHTML = `${e.location.country}`;
            }

            if(e.views!=0){
                imageViewsValue.innerHTML = `${e.views}`;
            }
            else{
                imageViews.style.display = "none";    
            }

            imageDownloadsValue.innerHTML = `${e.downloads}`;
            imageLikes.innerHTML = `${e.likes}`;

            if(e.alt_description != null){
                imageDescriptionText.innerHTML = e.alt_description;
            }
            else{
                imageDescription.style.display = "none";
            }

            if(e.exif.name!=null){
                imageCameraText.innerHTML = e.exif.name;
            }
            else{
                imageCamera.style.display = "none";
            }

            imagePopupWindow.style.display = "flex";
            fadedBackground.style.display = "block";
            document.body.style.overflow = "hidden";
            previewImage.src = imageUrl;
            downloadButton.href = e.links.html;
            index = currentIndex;
        });
        
        closeImagePopupWindowButton.addEventListener("click", function(){
            imagePopupWindow.style.display = "none";
            fadedBackground.style.display = "none";
            previewImage.src = "";
            downloadButton.href = "";
            index = "";
            document.body.style.overflow = "auto";
        });
    });

    let imagesInsideGallery = document.querySelectorAll("main .gallery .gallery-image");
    
    // console.log(imagesInsideGallery.length);
    
    if(imagesInsideGallery.length < 5){
        document.querySelector(".gallery").style.columns = 2;
    }
}

nextButton.addEventListener("click", function(){
    if(index < allImages.length - 1){
        previewImage.src = allImages[index + 1].urls.regular;
        downloadButton.href = allImages[index + 1].links.html;

        // if(allImages[index + 1].height > allImages[index + 1].width){
        //     previewImage.style.height = "75%";
        // }    
        // else if(allImages[index + 1].width > allImages[index + 1].height){
        //     previewImage.style.height = "70%";
        // }
        // else if(allImages[index + 1].width === allImages[index + 1].height){
        //     previewImage.style.height = "70%";
        // }

        imageLocation.style.display = "flex";
        imageCamera.style.display = "flex";
        imageViews.style.display = "flex";
        imageDownloads.style.display = "flex";
        imageLikes.style.display = "flex";
        imageDescription.style.display = "flex";

        if(allImages[index + 1].location.city == null && allImages[index + 1].location.country == null){
            imageLocation.style.display = "none";
        }
        else if(allImages[index + 1].location.city != null && allImages[index + 1].location.country != null){
            imageLocationText.innerHTML = `${allImages[index + 1].location.city}, ${allImages[index + 1].location.country}`;
        }
        else if(allImages[index + 1].location != null){
            imageLocationText.innerHTML = `${allImages[index + 1].location.country}`;
        }

        if(allImages[index + 1].views!=0){
            imageViewsValue.innerHTML = allImages[index + 1].views;
        }
        else{
            imageViews.style.display = "none";
        }

        imageDownloadsValue.innerHTML = `${allImages[index + 1].downloads}`;
        imageLikes.innerHTML = `${allImages[index + 1].likes}`;

        if(allImages[index + 1].alt_description != null){
            imageDescriptionText.innerHTML = allImages[index + 1].alt_description;
        }
        else{
            imageDescription.style.display = "none";
        }

        if(allImages[index + 1].exif.name!=null){
            imageCameraText.innerHTML = allImages[index + 1].exif.name;
        }
        else{
            imageCamera.style.display = "none";
        }

        index++;
    }
});

previousButton.addEventListener("click", function(){
    if(index > 0){
        previewImage.src = allImages[index - 1].urls.regular;
        downloadButton.href = allImages[index - 1].links.html;

        // if(allImages[index - 1].height > allImages[index - 1].width){
        //     previewImage.style.height = "75%";
        // }    
        // else if(allImages[index - 1].width > allImages[index - 1].height){
        //     previewImage.style.height = "70%";
        // }
        // else if(allImages[index - 1].width === allImages[index - 1].height){
        //     previewImage.style.height = "70%";
        // }

        imageLocation.style.display = "flex";
        imageCamera.style.display = "flex";
        imageViews.style.display = "flex";
        imageDownloads.style.display = "flex";
        imageLikes.style.display = "flex";
        imageDescription.style.display = "flex";

        if(allImages[index - 1].location.city == null && allImages[index - 1].location.country == null){
            imageLocation.style.display = "none";
        }
        else if(allImages[index - 1].location.city != null && allImages[index - 1].location.country != null){
            imageLocationText.innerHTML = `${allImages[index - 1].location.city}, ${allImages[index - 1].location.country}`;
        }
        else if(allImages[index - 1].location != null){
            imageLocationText.innerHTML = `${allImages[index - 1].location.country}`;
        }

        if(allImages[index - 1].views!=0){
            imageViewsValue.innerHTML = `${allImages[index - 1].views}`;
        }
        else{
            imageViews.style.display = "none";
        }

        imageDownloadsValue.innerHTML = `${allImages[index - 1].downloads}`;
        imageLikes.innerHTML = `${allImages[index - 1].likes}`;

        if(allImages[index - 1].alt_description != null){
            imageDescriptionText.innerHTML = allImages[index - 1].alt_description;
        }
        else{
            imageDescription.style.display = "none";
        }

        if(allImages[index - 1].exif.name!=null){
            imageCameraText.innerHTML = allImages[index - 1].exif.name;
        }
        else{
            imageCamera.style.display = "none";
        }

        index--;
    }
});

// window.addEventListener("resize", ()=>{
//     console.log("window resized");
//     console.log(`Image popup window width: ${imagePopupWindow.clientWidth}`);
//     console.log(`Preview image width: ${previewImage.clientWidth}`);

//     if(previewImage.clientWidth < (80/100)*(imagePopupWindow.clientWidth)){
//         previewImage.style.width = "80%";
//         previewImage.style.height = "auto";
//         console.log("The condition is True");
//     }
// });










let categoriesTabs = document.querySelectorAll(".category");
// console.log(categoriesTabs);

categoriesTabs.forEach(function(e){
    e.addEventListener("click", function(e){
        displaySearchTermBox.style.display = "none";
        let galleryOfImages = document.querySelector(".gallery");
        galleryOfImages.innerHTML = "";
        let search = e.target.innerText;
        // let api_search_url = `https://api.unsplash.com/search/photos?query=${search}&per_page=30&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA`;
        let api_search_url = `https://api.unsplash.com/photos/random?query=${search}&client_id=D0VoBabslhk-aM9VW1sHXbY-sO_CVsZDpsM8yDvKQkY&count=30`;
        // console.log(api_search_url);

        let newGalleryImageAJAXCall = new XMLHttpRequest();
        newGalleryImageAJAXCall.open('GET', api_search_url);
        newGalleryImageAJAXCall.send();

        newGalleryImageAJAXCall.addEventListener("load", function(e){
            let api_response = JSON.parse(e.target.response);
            // console.log(api_response);
            appendImageToGallery(api_response);
        });

        // manipulating the content on the starting container
        let introductionContainer = document.querySelector(".other-categories");
        let imageContainer = document.querySelector(".container .editorial-title-details");
        let containerTitle = document.querySelector(".other-categories .title");
        let containerContent = document.querySelector(".other-categories .content");
        if(search === "Editorial"){
            imageContainer.style.display = "flex";
            introductionContainer.style.display = "none";
        }
        else{
            imageContainer.style.display = "none";
            introductionContainer.style.display = "flex";
            // console.log("else part");
        }

        let categoriesDefinations = {
            "Wallpapers" : "Transform your desktop or mobile screen with our stunning collection of high-quality wallpapers, handpicked to inspire and delight.",
            "3D Renders" : "Step into the future with our collection of mesmerizing 3D renders, showcasing a breathtaking array of scenes and objects that blur the line between reality and imagination.",
            "Nature" : "Immerse yourself in the wonders of the natural world with our stunning collection of nature photography, capturing the awe-inspiring beauty of landscapes, wildlife, and more",
            "Travel" : "Explore the world from the comfort of your screen with our breathtaking collection of travel photography, showcasing the diverse cultures, landscapes, and experiences that make our planet so rich and fascinating.",
            "Architecture & Interiors" : "Get inspired by the world's most stunning buildings and interiors with our curated collection of architectural and interior design photography, showcasing the incredible creativity and craftsmanship of human design.",
            "Street Photography" : "Experience the vibrant energy and diversity of urban life with our captivating collection of street photography, featuring candid moments and glimpses of humanity from the world's bustling cities.",
            "Textures & Patterns" : "Add depth and richness to your creative projects with our collection of intricate textures and mesmerizing patterns, offering endless inspiration for designers, artists, and enthusiasts alike.",
            "Film" : "Step into the world of cinema with our curated collection of film stills and behind-the-scenes photography, offering a glimpse into the magic of storytelling and the art of filmmaking.",
            "Experimental" : "Push the boundaries of creativity with our collection of experimental photography, showcasing innovative techniques and unconventional approaches that challenge our perception of art and beauty.",
            "Animals" : "Discover the stunning diversity and wonder of the animal kingdom with our collection of captivating animal photography, showcasing the beauty, grace, and wildness of creatures from around the world.",
            "Fashion & Beauty" : "Step into the glamorous world of fashion and beauty with our collection of stunning photography, featuring the latest trends and styles, and celebrating the art of self-expression and individuality.",
            "Business & Work" : "Explore the dynamic world of business and work with our collection of professional photography, showcasing the energy, diversity, and innovation of modern workplaces and industries.",
            "Food & Drink" : "Indulge your senses with our collection of mouth-watering food and drink photography, showcasing the art and science of culinary creation, and celebrating the rich culture and traditions behind our favorite dishes and beverages.",
            "People" : "Experience the power and emotion of human connection with our collection of captivating people photography, featuring moments of joy, love, struggle, and triumph from around the world.",
            "Spirituality" : "Explore the mysteries and wonders of spirituality with our collection of inspiring photography, showcasing the beauty, diversity, and profound meaning of religious and spiritual traditions around the world.",
            "Athletics" : "Get inspired and energized by our collection of dynamic athletics photography, capturing the strength, speed, and grace of athletes in motion across a wide range of sports and activities.",
            "Health & Wellness" : "Discover the power of mind, body, and spirit with our collection of health and wellness photography, capturing the beauty and vitality of healthy living, fitness, and wellness practices from around the world.",
            "Current Events" : "Stay up-to-date with the latest news and events from around the world through our curated collection of powerful and compelling photography capturing the most significant and newsworthy events of our time.",
            "Arts & Culture" : "Experience the vibrancy and diversity of human expression through our captivating collection of photography showcasing the beauty and complexity of art, culture, and tradition from around the world."
        }
        containerTitle.innerHTML = search;
        containerContent.innerHTML = categoriesDefinations[search];

        // adding background image to the starting container
        let introductionContainerBgImageUrl = `https://api.unsplash.com/photos/random?orientation=landscape&client_id=ozXScMyHblGMcBhsey3YVGsdHYygc0JiKHW-5KUdcfA&query=${search}`;
        
        let introductionContainerBgImageAJAXCall = new XMLHttpRequest();
        introductionContainerBgImageAJAXCall.open('GET', introductionContainerBgImageUrl);
        introductionContainerBgImageAJAXCall.send();

        introductionContainerBgImageAJAXCall.addEventListener("load", function(e){
            let apiResponse = JSON.parse(e.target.response);
            introductionContainer.style.backgroundImage = `url(${apiResponse.urls.full})`;
        });
    });
});








// Showing the loading animation when the images are not loaded
let imageLoadingSkeleton = document.querySelector(".image-loading-skeleton");
let imageGalleryDisplayNone = document.querySelector(".gallery");
imageGalleryDisplayNone.style.display = "none";

window.addEventListener("load", function(){
    imageLoadingSkeleton.style.display = "none";
    imageGalleryDisplayNone.style.display = "block";
});