// Hold all the content for the four different pages

var homeContent = ``;
var aboutContent = ``;
var servicesContent = ``;
var contactContent = ``;

// Setting the current page based on the ID
function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));

};

// Export the model 
export {setCurrentPageContent};