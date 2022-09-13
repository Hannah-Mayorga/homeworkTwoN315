// Import the model 
import * as MODEL from "./model.js";

function initListeners() {
    console.log("hello world");
    $("nav a").click((e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        console.log(btnID);

        MODEL.setCurrentPageContent(btnID);
    })

}

$(document).ready(function () {
    // Turn back on once project is complete so home loads on start
    // MODEL.setCurrentPageContent("home");
    initListeners();
})