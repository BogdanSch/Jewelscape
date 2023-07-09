"use strict"

//Aos
AOS.init();

// Fields customization
$(function () {
    $(".phone").mask("+38 (999)-999-9999", {
        autoсlear: false
    });
});

//Forms Handler
let forms = document.querySelectorAll("form.contact-form");

forms.forEach((form) => {
    form.addEventListener("submit", e => {
        e.preventDefault();

        let timeField = form.querySelector("#time");
        let date = Date.now();
        let options = { day: '2-digit', month: 'long', year: 'numeric' };
        timeField.value = date.toLocaleString(undefined, options);

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