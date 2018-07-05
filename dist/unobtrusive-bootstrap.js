(function ($) {
    var defaultOptions = {
        validClass: 'is-valid',
        errorClass: 'is-invalid',
        highlight: function (element, errorClass, validClass) {
            $(element)
                .removeClass(validClass)
                .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element)
                .removeClass(errorClass)
                .addClass(validClass);
        }
    };

    $.validator.setDefaults(defaultOptions);

    $.validator.unobtrusive.options = {
        errorClass: defaultOptions.errorClass,
        validClass: defaultOptions.validClass,
        errorElement: 'div',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');

            if ($element.next().is(".input-group-append")) {
                $error.insertAfter($element.next());
            } else {
                $error.insertAfter($element);
            }
        }
    };
})(jQuery);