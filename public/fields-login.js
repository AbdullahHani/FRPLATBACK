$(function () {
    $(".field-wrapper-login .field-placeholder").on("click", function () {
        $(this).closest(".field-wrapper-login").find("input").focus();
    });
    $(".field-wrapper-login input").on("keyup", function () {
        var value = $.trim($(this).val());
        if (value) {
            $(this).closest(".field-wrapper-login").addClass("hasValue");
        } else {
            $(this).closest(".field-wrapper-login").removeClass("hasValue");
        }
    });
});