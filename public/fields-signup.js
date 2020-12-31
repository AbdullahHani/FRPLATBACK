$(function () {
    $(".field-wrapper-signup .field-placeholder").on("click", function () {
        $(this).closest(".field-wrapper-signup").find("input").focus();
    });
    $(".field-wrapper-signup input").on("keyup", function () {
        var value = $.trim($(this).val());
        if (value) {
            $(this).closest(".field-wrapper-signup").addClass("hasValue");
        } else {
            $(this).closest(".field-wrapper-signup").removeClass("hasValue");
        }
    });

});