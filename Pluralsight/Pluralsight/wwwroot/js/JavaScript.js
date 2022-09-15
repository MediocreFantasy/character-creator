$(document).ready(function () {

    var basicInfo = document.getElementById("basicInfo");

    var saveBasicInfo = $("button#saveBasicInfo");
    saveBasicInfo.on("click", function () {
        alert("Information saved!");
    });

    var infoBox = $(".infoBox");

    var loginToggle = $("#loginToggle");
    var popupForm = $(".popupForm");

    loginToggle.on("click", function () {
        popupForm.toggle();
    })


});