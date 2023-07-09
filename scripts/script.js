"use strict"

//Aos
AOS.init();

// Fields customization
$(function () {
    $(".phone").mask("+38 (999)-999-9999", {
        autoсlear: false
    });
});

//Form Handler
let forms = document.querySelectorAll("form.contact-form");

forms.forEach((form) => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "Post",
            body: new FormData(form),
        }).then((html) => {
            $("#registration-modal").modal("hide");
            $("#confirm-modal").modal("show");
            form.reset();
        }).catch((error) => {
            $("#registration-modal").modal("hide");
            $("#error-modal").modal("show");
            form.reset();
        });
    });
});