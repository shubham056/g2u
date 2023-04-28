// detect width of device
function windowCheck() {
    if (typeof (window.getComputedStyle) != 'undefined') {

        var content = window.getComputedStyle(
            document.body, ':after'
        ).getPropertyValue('content');

    } else {
        var content = "desktop";
    }
    return content;
}

var hover = false;

function animatecontent(ele, modifier) {
    var sl = ele.scrollLeft();
    ele.animate({
        scrollLeft: sl + (modifier * 120)
    }, 500, 'linear', function () {
        if (hover) {
            animatecontent(ele, modifier);
        }
    });
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function collapseSplashPage(forceCollapse) {
    if (forceCollapse) {
        $('html, body').removeAttr('style');
        $('#splashPage').addClass('splash-collapse');
    }
}

function createInputSuccess(self) {
    if ($(self).siblings('.ti-sprite.input-error-icon').length) {
        $(self).siblings('.ti-sprite.input-error-icon').remove();
    }

    if ($(self).siblings('.ti-error-message').length) {
        $(self).siblings('.ti-error-message').remove();
    }

    $(self).parent().append('<span class="ti-sprite checkmark"></span>');
    $(self).removeClass('ti-error');
}

function createInputError(self) {
    var checkmark = $(self).siblings('.ti-sprite.checkmark');
    if (checkmark.length) {
        $(self).siblings('.ti-sprite.checkmark').remove();
    }

    if (!$(self).siblings('.ti-sprite.input-error-icon').length) {
        $(self).parent().append('<span class="ti-sprite input-error-icon"></span>');
        $(self).addClass('ti-error');
    }
}

function createInputErrorMessage(self, message) {
    var errorMessage = $(self).siblings('.ti-error-message');
    if (!errorMessage.length && $(self).siblings) {
        $(self).parent().append('<span class="ti-error-message">' + message + '</span>');
    }
}

function isValidPostalCode(postalCode) {

    if (!postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim()

    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);
    var ca3 = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ])/i);

    if (us.test(postalCode)) {
        return postalCode;
    }

    postalCode = postalCode.toUpperCase();

    if (ca.test(postalCode.replace(/\W+/g, ''))) {
        return postalCode;
    }

    if (ca3.test(postalCode.replace(/\W+/g, ''))) {
        return postalCode;
    }

    return null;
}

function getFranchise(myZipCode, formID, fieldID, formZipID) {

    $.ajax({
        url: "/model/sitebuilder.cfc?method=setFranchise&returnformat=json",
        dataType: "json",
        data: {
            postcode: myZipCode
        },
        type: "POST"

    }).done(function (result) {

        if (result.FRANCHISEID > 0) {

            var myURL = result.NEWURL;

            $('#' + fieldID).val(myURL);
            $('#' + formID).attr('action', "/" + myURL).submit();

        } else {

            $('#' + formZipID).addClass('splash-ziperror');
            $('#' + formZipID).val(result.REASON);
            return true;
        }

    }).fail(function (e) {
        // console.log(e);
    });

}

$(document).ready(function () {

    $('.phone_us').mask('(000) 000-0000');

    $(document).on('submit', '#frmSplash', function (e) {

        if ($('#franchiseName').val() == '') {

            e.preventDefault();

            if ($('[name="splashZip"]').val().length) {

                var myZipCode = $('[name="splashZip"]').val();
                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {
                    var formID = 'frmSplash';
                    var fieldID = 'franchiseName';
                    var formZipID = 'zipcode';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('.splash-box').addClass('splash-ziperror');
                    $('#divSplashError').removeClass('hide');
                    $('#zipcode').addClass('has-error');
                }

            } else {
                // console.log('nothing entered');
                $('.splash-box').addClass('splash-ziperror');
                $('#divSplashError').removeClass('hide');
                $('#zipcode').addClass('has-error');
            }

        }

    });

    $('#splashPage.homepage .ti-yellow-button').click(function (e) {

        if ($('#franchiseName').val() == '') {

            e.preventDefault();

            if ($('[name="splashZip"]').val().length) {

                var myZipCode = $('[name="splashZip"]').val();
                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {
                    var formID = 'frmSplash';
                    var fieldID = 'franchiseName';
                    var formZipID = 'zipcode';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('.splash-box').addClass('splash-ziperror');
                    $('#divSplashError').removeClass('hide');
                    $('#zipcode').addClass('has-error');
                }

            } else {
                $('.splash-box').addClass('splash-ziperror');
                $('#divSplashError').removeClass('hide');
                $('#zipcode').addClass('has-error');
            }
        }
    });

    /* top navigation zip form - on enter */
    $('#headerZip').on('keydown', function (e) {
        if (e.keyCode == 13) {

            if ($('#franchiseNameNav').val() == '') {

                e.preventDefault();

                if ($('#headerZip').val().length) {

                    var myZipCode = $('#headerZip').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmLocNav';
                        var fieldID = 'franchiseNameNav';
                        var formZipID = 'headerZip';
                        getFranchise(myZipCode, formID, fieldID, formZipID);

                    } else {
                        $('#headerZip').val('Not Valid Zip');
                    }

                } else {
                    $('#headerZip').val('Not Valid Zip');
                }
            }
        }
    });

    /* top navigation zip form - on submit button click */
    $('#locationNav .ti-yellow-button').click(function (e) {

        if ($('#franchiseNameNav').val() == '') {

            e.preventDefault();

            if ($('#headerZip').val().length) {

                var myZipCode = $('#headerZip').val();
                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {

                    var formID = 'frmLocNav';
                    var fieldID = 'franchiseNameNav';
                    var formZipID = 'headerZip';
                    // console.log('valid zip format');
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {

                    $('#headerZip').val('Not Valid Zip');
                }

            } else {

                $('#headerZip').val('Not Valid Zip');

            }
        }
    });


    /* location box zip form - on enter */
    $('#locationBoxZip').on('keydown', function (e) {
        if (e.keyCode == 13) {

            if ($('#franchiseNameLocBox').val() == '') {

                e.preventDefault();

                if ($('#locationBoxZip').val().length) {


                    var myZipCode = $('#locationBoxZip').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmlocationBox';
                        var fieldID = 'franchiseNameLocBox';
                        var formZipID = 'locationBoxZip';
                        getFranchise(myZipCode, formID, fieldID, formZipID);
                    } else {
                        $('#locationBoxZip').val('Not Valid Zip');
                    }

                } else {
                    $('#locationBoxZip').val('Not Valid Zip');
                }

            }

        }
    });

    /* location box zip form - on submit button click */
    $('#locationBox .ti-yellow-button').click(function (e) {


        if ($('#franchiseNameLocBox').val() == '') {

            e.preventDefault();

            if ($('#locationBoxZip').val().length) {

                var myZipCode = $('#locationBoxZip').val();
                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {

                    var formID = 'frmlocationBox';
                    var fieldID = 'franchiseNameLocBox';
                    var formZipID = 'locationBoxZip';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('#locationBoxZip').val('Not Valid Zip');
                }

            } else {
                $('#locationBoxZip').val('Not Valid Zip');
            }
        }

    });


    /* location box zip form - on submit button click */

    $('#frmFooterZip .ti-yellow-button').click(function (e) {

        if ($('#franchiseNameFooter').val() == '') {

            e.preventDefault();

            if ($('#footerZipcode').val().length) {

                var myZipCode = $('#footerZipcode').val();
                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {
                    // valid zip code 
                    var formID = 'frmFooterZip';
                    var fieldID = 'franchiseNameFooter';
                    var formZipID = 'footerZipcode';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {

                    $('#footerZipcode').val('Not Valid Zip');
                }

            } else {
                //console.log('nothing entered');
                $('#footerZipcode').focus();
                $('#footerZipcode').val('Please enter a valid zipcode');
                $('#footerZipcode').blur();
            }

        }
    });

    $('#footerZipcode').on('keydown', function (e) {

        if (e.keyCode == 13) {

            if ($('#franchiseNameFooter').val() == '') {

                e.preventDefault();

                if ($('#footerZipcode').val().length) {

                    var myZipCode = $('#footerZipcode').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmFooterZip';
                        var fieldID = 'franchiseNameFooter';
                        var formZipID = 'footerZipcode';
                        getFranchise(myZipCode, formID, fieldID, formZipID);

                    } else {
                        $('#footerZipcode').val('Not Valid Zip');
                    }

                } else {
                    $('#footerZipcode').val('Not Valid Zip');
                }

            }

        }
    });

    $('#btnStartPrice').click(function (e) {


        if ($('#franchiseNamePrix').val() == '') {

            e.preventDefault();

            if ($('#startPriceZip').val().length) {

                var myZipCode = $('#startPriceZip').val();
                var isValidZipCode = isValidPostalCode(myZipCode);


                if (isValidZipCode) {

                    var formID = 'frmStartPrice';
                    var fieldID = 'franchiseNamePrix';
                    var formZipID = 'startPriceZip';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('#startPriceZip').val('Not Valid Zip');
                }

            } else {
                $('#startPriceZip').val('Not Valid Zip');
            }
        }
    });


    $('#startPriceZip').on('keydown', function (e) {

        if (e.keyCode == 13) {

            if ($('#franchiseNamePrix').val() == '') {

                e.preventDefault();

                if ($('#startPriceZip').val().length) {

                    var myZipCode = $('#startPriceZip').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmStartPrice';
                        var fieldID = 'franchiseNamePrix';
                        var formZipID = 'startPriceZip';
                        getFranchise(myZipCode, formID, fieldID, formZipID);

                    } else {
                        $('#startPriceZip').val('Not Valid Zip');
                    }

                } else {
                    $('#startPriceZip').val('Not Valid Zip');
                }

            }

        }
    });


    $('#btnMobileZipNav').click(function (e) {

        if ($('#franchiseNameMobNav').val() == '') {

            e.preventDefault();

            if ($('#mobileZipNav').val().length) {

                var myZipCode = $('#mobileZipNav').val();

                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {
                    var formID = 'frmMobileZipNav';
                    var fieldID = 'franchiseNameMobNav';
                    var formZipID = 'mobileZipNav';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('#mobileZipNav').val('Not Valid Zip');
                }
            } else {
                $('#mobileZipNav').val('Not Valid Zip');
            }
        }
    });

    $('#mobileZipNav').on('keydown', function (e) {

        if (e.keyCode == 13) {

            if ($('#franchiseNameMobNav').val() == '') {

                e.preventDefault();

                if ($('#mobileZipNav').val().length) {

                    var myZipCode = $('#mobileZipNav').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmMobileZipNav';
                        var fieldID = 'franchiseNameMobNav';
                        var formZipID = 'mobileZipNav';
                        getFranchise(myZipCode, formID, fieldID, formZipID);
                    } else {
                        $('#mobileZipNav').val('Not Valid Zip');
                    }

                } else {
                    $('#mobileZipNav').val('Not Valid Zip');
                }
            }
        }
    });

    $('#btnMobileZipFooter').click(function (e) {

        if ($('#franchiseNameMobFooter').val() == '') {

            e.preventDefault();

            if ($('#mobileZipFooter').val().length) {

                var myZipCode = $('#mobileZipFooter').val();

                var isValidZipCode = isValidPostalCode(myZipCode);

                if (isValidZipCode) {
                    var formID = 'frmMobileFooter';
                    var fieldID = 'franchiseNameMobFooter';
                    var formZipID = 'mobileZipFooter';
                    getFranchise(myZipCode, formID, fieldID, formZipID);

                } else {
                    $('#mobileZipFooter').val('Not Valid Zip');
                }
            } else {
                $('#mobileZipFooter').val('Not Valid Zip');
            }
        }
    });

    $('#mobileZipFooter').on('keydown', function (e) {

        if (e.keyCode == 13) {

            if ($('#franchiseNameMobFooter').val() == '') {

                e.preventDefault();

                if ($('#mobileZipFooter').val().length) {


                    var myZipCode = $('#mobileZipFooter').val();
                    var isValidZipCode = isValidPostalCode(myZipCode);

                    if (isValidZipCode) {
                        var formID = 'frmMobileFooter';
                        var fieldID = 'franchiseNameMobFooter';
                        var formZipID = 'mobileZipFooter';
                        getFranchise(myZipCode, formID, fieldID, formZipID);
                    } else {
                        $('#mobileZipFooter').val('Not Valid Zip');
                    }

                } else {
                    $('#mobileZipFooter').val('Not Valid Zip');
                }

            }

        }
    });


    // Carousels
    $('.ti-slider-parent').not('.ti-slider-gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: '<div class="ti-left-slider"><span class="ti-sprite blue-arrow-left"></span></div>',
        nextArrow: '<div class="ti-right-slider"><span class="ti-sprite blue-arrow-right"></span></div>',
        responsive: [{
            breakpoint: 1279,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 889,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 639,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 519,
            settings: {
                centerMode: true,
                slidesToShow: 1
            }
        }
        ]
    });

    $('.ti-slider-parent.ti-slider-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow: '<div class="ti-left-slider"><span class="ti-sprite blue-arrow-left"></span></div>',
        nextArrow: '<div class="ti-right-slider"><span class="ti-sprite blue-arrow-right"></span></div>'
    });

    // Equalize carousel item heights
    $('.ti-slider-parent').on('setPosition', function () {
        $(this).find('.slick-slide .ti-box').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide .ti-box').css('height', slickTrackHeight + 'px');
    });

    $('.ti-input input:not(.mobile-bottom-nav-input), .ti-textarea textarea').focus(function () {
        var self = this;
        var label = $(self).siblings('label');
        label.addClass('has-content');
        $('#mobile-bottom-nav').addClass('ti-hide');
    });

    $('.ti-input input:not(.mobile-bottom-nav-input), .ti-textarea textarea').blur(function () {
        var self = this;
        var label = $(self).siblings('label');
        if (!$(self).val()) {
            label.removeClass('has-content');
        }
        setTimeout(function () {
            $('#mobile-bottom-nav').removeClass('ti-hide');
        }, 500);
    });

    $('select.inactive').change(function (event) {
        var self = this;
        $(self).removeClass('inactive');
    });

    $('.faq-container').click(function (event) {
        var self = this;
        $(self).toggleClass('active');
    });

    $('.ti-input.required input').blur(function () {
        var self = this;
        var type = $(self).attr('type');
        switch (type) {

            case 'text':
                if ($(self).val()) {
                    if (!$(self).siblings('.ti-sprite.checkmark').length) {
                        createInputSuccess(self);
                    }
                    $('#btnBook').prop('disabled', false);
                } else if (!$(self).val()) {
                    createInputError(self);
                    createInputErrorMessage(self, 'Please enter your name');
                }

                break;

            case 'tel':
                if ($(self).val()) {
                    if (!$(self).siblings('.ti-sprite.checkmark').length) {
                        createInputSuccess(self);
                    }
                    $('#btnBook').prop('disabled', false);
                } else if (!$(self).val()) {
                    createInputError(self);
                    createInputErrorMessage(self, 'Please enter your phone number');
                }

                break;

            case 'email':
                var myEmail = $(self).val();
                if (validateEmail(myEmail)) {
                    if (!$(self).siblings('.ti-sprite.checkmark').length) {
                        createInputSuccess(self);
                    }
                    $('#btnBook').prop('disabled', false);
                } else {
                    createInputError(self);
                    createInputErrorMessage(self, 'Please provide a valid email address');
                }

                break;

            default:

                break;
        }
    });

    var controlScrollTop = 0;
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        collapseSplashPage(false);
    });

    $('#splashPage').on('click', '.continue-to-site', function () {
        collapseSplashPage(true);
        // unbind right away
        $('#splashPage').off('click');
    });


    $('#zipcode').focus(function () {

        if ($('#zipcode').val().length && ($('#zipcode').val() == 'Not Valid Zip' || $('#zipcode').val() == 'Not Serviced')) {
            $('#zipcode').val('');
        }

    });

    $('#headerZip').focus(function () {

        if ($('#headerZip').val().length && ($('#headerZip').val() == 'Not Valid Zip' || $('#headerZip').val() == 'Not Serviced')) {
            $('#headerZip').val('');
        }
    });

    $('#locationBoxZip').focus(function () {

        if ($('#locationBoxZip').val().length && ($('#locationBoxZip').val() == 'Not Valid Zip' || $('#locationBoxZip').val() == 'Not Serviced')) {
            $('#locationBoxZip').val('');
        }
    });

    $('#footerZipcode').click(function (e) {
        if ($('#footerZipcode').val() == 'Please enter a valid zipcode' || $('#footerZipcode').val() == 'Not Valid Zip') {
            $('#footerZipcode').val('');
        }
    });

    $('#startPriceZip').focus(function () {

        if ($('#startPriceZip').val().length && ($('#startPriceZip').val() == 'Not Valid Zip' || $('#startPriceZip').val() == 'Not Serviced')) {
            $('#startPriceZip').val('');
        }
    });

    $('#mobileZip').focus(function () {

        if ($('#mobileZip').val().length && ($('#mobileZip').val() == 'Not Valid Zip' || $('#mobileZip').val() == 'Not Serviced')) {
            $('#mobileZip').val('');
        }
    });

    $('#mobileZip').click(function (e) {
        if ($('#footerZipcode').val() == 'Please enter a valid zipcode' || $('#footerZipcode').val() == 'Not Valid Zip') {
            $('#footerZipcode').val('');
        }
    });

    $('#mobile-bottom-nav .ti-yellow-button').click(function (e) {

        e.preventDefault();

        if ($('#mobileZip').val().length) {

            var myZipCode = $('#mobileZip').val();
            var isValidZipCode = isValidPostalCode(myZipCode);

            if (isValidZipCode) {

                $(this).find("input[type='image'],input[type='submit']").click(function () {
                    return;
                });

            } else {

                $('#mobileZip').val('Not Valid Zip');
            }

        } else {
            //console.log('nothing entered');
            $('.splash-box').addClass('splash-ziperror');
            $('#mobileZip').focus();
            $('#mobileZip').val('Please enter a valid zipcode');
            $('#mobileZip').blur();
        }
    });

    $('.jsFrmZipcode').blur(function () {
        // alert('hello world');
        // this works, tells us when the user ahs changed the zipcode
    });

    $('.jsDismissAcknowledgement').click(function () {
        $('#notificationBanner').addClass('hide');
        $.ajax({
            url: "/model/sitebuilder.cfc?method=dismissAcknowledgement",
            dataType: "json",
            type: "POST"

        }).done(function (e) {
            // console.log('dismissed from session');	
        }).fail(function (e) {
            console.log('something went wrong');
            // console.log(e);
        });

    });

    function franchiseCheck(zipcode) {

        // check if postcode serviced - set Franchise here;
        $.ajax({
            url: "/model/sitebuilder.cfc?method=setFranchise&returnformat=json",
            dataType: "json",
            data: {
                postcode: zipcode
            },
            type: "POST"

        }).done(function (result) {

            if (result.FRANCHISEID > 0) {

                var myURL = result.NEWURL;

                // $('#' + fieldID ).val(myURL);
                $('#footerZip').attr('data-ov', zipcode);
                $('#footerZip').val(zipcode);
                createInputSuccess($('#footerZip'));
                $('#frmBookEvent').attr('action', "/" + myURL + '#footerContact');
                return true;
                // .submit()	

            } else {

                createInputError($('#footerZip'));
                createInputErrorMessage($('#footerZip'), 'Zip not serviced. Please enter a different zipcode');
                return true;
            }

        }).fail(function (e) {
            // console.log(e);
        });

    }

    function setCookie() {

        var xhr = ((window.XMLHttpRequest && (window.location.protocol !== "file:" || !window.ActiveXObject)) ?
            function () {
                return new window.XMLHttpRequest();
            } : function () {
                try {
                    return new window.ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) { }
            }
        );

        // I test the AJAX request for cookie transporation.
        function testAjax() {
            // Create a new XHR request object.
            var request = xhr();
            // Open the AJAX connection.
            request.open(
                "GET",
                ("http://g2upublic.site/cookie/getCookie.cfm?_=" + (new Date()).getTime()),
                false
            );
            // Send the request. Since this request is being made
            // *Synchronously*, we don't have to keep a ready-state
            // change handler.
            request.send();
            // Get a handle on the output node.
            /* var output = document.getElementById( "output" ); */
            // Append output HTML.
            /* output.innerHTML += request.responseText; */
        }

    }

    $('#frmBookEvent .ti-yellow-button').click(function (e) {

        // stop it from submitting
        e.preventDefault();

        /* this stops the button from being clicked multiple times */
        $('#btnBook').attr('disabled', true);

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phoneNumber').val();
        var zipcode = $('#footerZip').val();
        var ogzip = $('#footerZip').attr('data-ov');
        var isValidZip = 0;
        var isServicedZip = 0;
        var customerComments = $('#comments').val();
        var isFormValid = 1;

        if (zipcode == ogzip) {
            var isServicedZip = 1;
            var isValidZip = 1;
            // do nothing	
        } else {
            // test if valid zip code
            isValidPostalCode(zipcode);
            if (isValidPostalCode(zipcode)) {
                franchiseCheck(zipcode);
            } else {
                isFormValid = 0;
            }
        }

        if (validateEmail(email)) {
            if (!$($('#email')).siblings('.ti-sprite.checkmark').length) {
                createInputSuccess($('#email'));
            }
            $('#btnBook').attr('disabled', false);
        } else {
            createInputError($('#email'));
            createInputErrorMessage($('#email'), 'Please enter a valid email address');
            isFormValid = 0;
        }

        if (name == "") {
            createInputError($('#name'));
            createInputErrorMessage($('#name'), 'Please enter your name');
            isFormValid = 0;
        } else {
            if (!$($('#name')).siblings('.ti-sprite.checkmark').length) {
                createInputSuccess($('#name'));
            }
            $('#btnBook').attr('disabled', false);
        }

        if (phone == "") {
            createInputError($('#phoneNumber'));
            createInputErrorMessage($('#phoneNumber'), 'Please enter your phone number');
            isFormValid = 0;
        } else {
            if (!$($('#phoneNumber')).siblings('.ti-sprite.checkmark').length) {
                createInputSuccess($('#phoneNumber'));
            }
            $('#btnBook').attr('disabled', false);
        }

        /* handle zip code errors */
        if (zipcode == "") {
            createInputError($('#zipcode'));
            createInputErrorMessage($('#zipcode'), 'Please enter your zipcode');
            isFormValid = 0;
        } else {

            if (zipcode != "" && !isValidZip) {
                createInputError($('#footerZip'));
                createInputErrorMessage($('#footerZip'), 'Not valid zipcode. Please enter a valid zipcode');
                isFormValid = 0;
            } else {

                if (zipcode != "" && isValidZip && !isServicedZip) {
                    createInputError($('#footerZip'));
                    createInputErrorMessage($('#footerZip'), 'Zip not serviced. Please enter a different zipcode');
                    isFormValid = 0;
                } else {
                    if (!$($('#footerZip')).siblings('.ti-sprite.checkmark').length) {
                        createInputSuccess($('#footerZip'));
                    }
                    $('#btnBook').attr('disabled', false);
                }
            }
        }

        if (isFormValid) {

            // setCookie();

            var xhr = ((window.XMLHttpRequest && (window.location.protocol !== "file:" || !window.ActiveXObject)) ?
                function () {
                    return new window.XMLHttpRequest();
                } : function () {
                    try {
                        return new window.ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) { }
                }
            );

            var request = xhr();
            // Open the AJAX connection.
            request.open("GET", ("./cookie/getCookie.cfm?_=" + (new Date()).getTime()), false);
            /* Send the request. Since this request is being made *Synchronously*, we don't have to keep a ready-state change handler. */
            request.send();

            $.ajax({
                url: "/model/sitebuilder.cfc?method=addLead&returnformat=json",
                dataType: "json",
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    zipcode: zipcode,
                    customerComments: customerComments
                },
                method: "POST"

            }).done(function (result) {

                if (result.response_text == 'success') {
                    $('#divFrmBookEvent').addClass('hide');
                    $('#divBookEventSuccess').removeClass('hide');
                } else {
                    return;
                }

            }).fail(function (e) {

                return;
            });

        } else {

            // 	alert('Your form is incomplete');
            return;
        }

    });



    $('#frmBookEvent1 .ti-yellow-button1').click(function (e) {

        // stop it from submitting
        e.preventDefault();

        /* this stops the button from being clicked multiple times */
        $('#btnBook').prop('disabled', true);

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phoneNumber').val();
        var zipcode = $('#footerZip').val();
        var customerComments = $('#comments').val();


        if (name != "" && email != "" && phone != "" && zipcode != "") {

            $.ajax({
                url: "/model/sitebuilder.cfc?method=addLead&returnformat=json",
                dataType: "json",
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    zipcode: zipcode,
                    customerComments: customerComments
                },
                method: "POST"

            }).done(function (result) {

                if (result.response_text == 'success') {
                    $('#divFrmBookEvent').addClass('hide')
                    $('#divBookEventSuccess').removeClass('hide')
                } else {

                    return;
                }

            }).fail(function (e) {

                // $('#btnBook').prop('disabled',false);
                return;
            });

        } else {

            if (name == "") {
                createInputError($('#name'));
                createInputErrorMessage($('#name'), 'Please enter your name');
            }

            if (phone == "") {
                createInputError($('#phoneNumber'));
                createInputErrorMessage($('#phoneNumber'), 'Please enter your phone number');
            }

            if (zipcode == "") {
                createInputError($('#zipcode'));
                createInputErrorMessage($('#zipcode'), 'Please enter your zipcode');
            }

            if (email == "") {
                createInputError($('#email'));
                createInputErrorMessage($('#email'), 'Please enter a valid email address');
            }

            // 	alert('Your form is incomplete');
            return;
        }

    });

    $('#mobileMenu').click(function () {
        var self = this;
        if ($(self).children('.ti-sprite').hasClass('hamburger-close')) {
            $(self).children('.ti-sprite').removeClass('hamburger-close').addClass('hamburger-icon');
            $(self).siblings('.links-container').slideToggle();
            $('.mobile-menu-overlay').fadeToggle(200);
        } else {
            $(self).children('.ti-sprite').removeClass('hamburger-icon').addClass('hamburger-close');
            $(self).parents('#navLinks').addClass('active');
            $(self).siblings('.links-container').slideToggle();
            $('.mobile-menu-overlay').fadeToggle(200);
        }
    });

    $('#navLinks #ourGamesNav a[href="#footerContact"]').click(function () {
        var self = $('#mobileMenu');
        $(self).children('.ti-sprite').removeClass('hamburger-close').addClass('hamburger-icon');
        $(self).siblings('.links-container').slideToggle();
        $('.mobile-menu-overlay').fadeToggle(200);
    });

    var tiClear, tiOverClear;
    $('#ourGamesNav').on("mouseenter", function () {
        var b = $(this);
        b.data("isHovered", true);
        clearTimeout(tiClear);
        tiOverClear = setTimeout(function () {
            if (b.data("isHovered")) {
                b.addClass("hover");
                b.find('.sub-menu').slideDown(200);
            }
        }, 250);
    }).on("mouseleave", function () {
        var b = $(this);
        b.data("isHovered", false);
        clearTimeout(tiOverClear);
        tiClear = setTimeout(function () {
            b.removeClass("hover");
            b.find('.sub-menu').slideUp(200);
        }, 250);
    });

    if ($('#splashPage').length) {
        $('html, body').css({
            'height': '100%',
            'overflow': 'hidden'
        });
    }




    var clickEvent = (function () {
        if ('ontouchstart' in document.documentElement === true)
            return 'touchstart';
        else
            return 'click';
    })();

    $('body').on(clickEvent, function (event) {
        var self = $('#mobileMenu');
        if (window.innerWidth < 992 && $("#navLinks .links-container").css('display') == "block" && !$(event.target).parents('#navLinks').length) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            $(self).children('.ti-sprite').removeClass('hamburger-close').addClass('hamburger-icon');
            $(self).siblings('.links-container').slideToggle();
            $('.mobile-menu-overlay').fadeToggle(200);
        }
    });


    $('.location-update-form').click(function () {
        $('#divFrmBookEvent').addClass('hide');
        $('#divFrmRequestUpdateZip').removeClass('hide');
    });

    // update location
    // desktop
    $('.location-edit-link').click(function () {
        $(this).closest('.location-update-wrap').toggleClass('edit');
    });

    $('.update-location .close-btn').click(function () {
        $(this).closest('.location-update-wrap').toggleClass('edit');
    });

    // tablet and mobile
    $('#mobileLocationIcon').click(function () {
        $('#mobileMenu').children('.ti-sprite').removeClass('hamburger-icon').addClass('hamburger-close');
        $('#navLinks').addClass('active');
        $('#navLinks .links-container').slideDown('fast');
    });

    // as seen on hover
    $('.scroll-arrow').each(function () {
        var modifier = ($(this).hasClass('right')) ? 1 : -1;
        var sib = ('.as-seen-images');
        var self = this;
        if (('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch))) {
            $(self).on('click', function () {
                $(this).siblings(sib).stop();
                hover = true;
                setTimeout(function () {
                    hover = false;
                }, 250);
                animatecontent($(this).siblings(sib), modifier);
            });
        } else {
            $(self).hover(function () {
                hover = true;
                $(this).siblings(sib).stop();
                animatecontent($(this).siblings(sib), modifier);
            }, function () {
                hover = false;
                $(this).siblings(sib).stop();
            });

        }
    });

    $('.as-seen-images').scroll(function () {
        var asSeenPos = 0;
        var asSeenCurrPos = $(this).scrollLeft();
        if (asSeenPos < asSeenCurrPos) {
            $(this).closest('.as-seen-banner').addClass('left-arrow-enabled');
        } else {
            $(this).closest('.as-seen-banner').removeClass('left-arrow-enabled');
        }
    });

    // video modal buttons
    $('.video-trigger').click(function () {
        var video = $(this).attr('data-video');
        $('#videoModal video').remove();
        $('#videoModal').append('<video preload="preload" id="video" autoplay="autoplay" loop="loop" controls muted="muted" ><source src="' + video + '" type="video/mp4"></video>');
        $('#overlay, #videoModal').fadeIn('fast');
    });
    $('#videoModalClose, #overlay').click(function () {
        $('#overlay, #videoModal').fadeOut('fast');
        $('#videoModal video').remove();
    });

    // suggested games
    $('.view-suggestions').click(function () {

        if ($('#sAgeRange').val() && $('#sGroupSize').val()) {

            $('#frmSuggestGame').submit();

        } else {

            if (!$('#sAgeRange').val()) {
                $('#sAgeRange').addClass('ti-error ti-error-text');
                //alert('Age Range blank');
            }

            if (!$('#sGroupSize').val()) {
                $('#sGroupSize').addClass('ti-error ti-error-text');
                //alert('Group Size blank');
            }

        }

    });

    $('#sAgeRange').change(function () {
        if ($('#sAgeRange').val()) {
            $('#sAgeRange').removeClass('ti-error ti-error-text');
            $('#sAgeRange').addClass('ti-success');
        }
    });

    $('#sGroupSize').change(function () {
        if ($('#sGroupSize').val()) {
            $('#sGroupSize').removeClass('ti-error ti-error-text');
            $('#sGroupSize').addClass('ti-success');
        }
    });

    $('.view-all-games').click(function () {
        $('html, body').animate({
            scrollTop: $('#allGamesContent').offset().top
        }, 'fast');
    })

    // testimonial slider
    var testCurrent = 0;
    var testSlides = $('.testimonial-cell').length;
    setInterval(function () {
        $('.testimonial-cell').removeClass('active');
        testCurrent++;
        if (testCurrent == testSlides) {
            testCurrent = 0;
        }
        $('.testimonial-cell:eq(' + testCurrent + ')').addClass('active');
    }, 10000);

    if ($('#splashPage').length) {
        $('#splashPage').css({
            'height': window.innerHeight + 'px'
        });
    }

    if (window.location.href.indexOf('franchise-information') > -1) {
        $('#mobile-bottom-nav').removeClass('show-mobile');
        $('body').css({
            'padding-bottom': '0'
        });
    } else {
        var scroll = $(window).scrollTop();
        if (scroll >= 300 && window.location.href.indexOf('franchise-information') < 0) {
            $('#mobile-bottom-nav').addClass('show-mobile');
        }
    }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 300 && window.location.href.indexOf('franchise-information') < 0) {
            $('#mobile-bottom-nav').addClass('show-mobile');
        } else {
            $('#mobile-bottom-nav').removeClass('show-mobile');
        }
    });
});