(function ($) {
    if($.validator && $.validator.unobtrusive){
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
        };
    }
    else {
        console.warn('$.validator is not defined. Please load this library **after** loading jquery.validate.js and jquery.validate.unobtrusive.js');
    }
})(jQuery);
