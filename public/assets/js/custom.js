
$(document).ready(function () {

  function alignModal() {
    var modalDialog = $(this).find(".modal-dialog");
    /* Applying the top margin on modal dialog to align it vertically center */
    modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
  }

  // Align modal when it is displayed
  $(".modal").on("shown.bs.modal", alignModal);

  // Align modal when user resize the window
  $(window).on("resize", function () {
    $(".modal:visible").each(alignModal);
  });

  $('.modal-overlay').show();
  $('#zipModal').modal('toggle');

  $("#zipModal").on("show", function () {
    $("body").addClass("modal-open");
  }).on("hidden", function () {
    $("body").removeClass("modal-open")
  });

  $('.close-link').click(function () {

    // alert('closed');
    $('.modal-overlay').hide();
    $.ajax({
      url: "/model/sitebuilder.cfc?method=dismissZipModal",
      dataType: "json",
      data: {
        zip: 'none'
      },
      type: "POST"

    }).done(function (e) {
      //  console.log(e);
      return;
    }).fail(function (e) {
      // console.log(e);
      return;

    });
  });

  $(document).on('click', '#submit-button', function (e) {

    e.preventDefault();

    if ($('#popupZipcode').val().length) {

      var myZipCode = $('#popupZipcode').val();
      var isValidZipCode = isValidPostalCode(myZipCode);

      if (isValidZipCode) {
        var formID = 'frmZipPopUp';
        var fieldID = 'modalFranchiseName';
        var formZipID = 'popupZipcode';
        getFranchise(myZipCode, formID, fieldID, formZipID);

      } else {

        $('#popupZipcode').addClass('has-error');
        $('#popupZipcode').val('Please enter a valid zip code');
      }

    } else {
      $('#popupZipcode').addClass('has-error');
      $('#popupZipcode').val('Please enter a zip code');
    }

  });

  $('.modal-overlay').on('click', function (e) {
    if (e.target !== this) {
      return;
    }

    $('#zipModal').modal('toggle');
    $('.modal-overlay').hide();

  });

  /* zip popup form - on enter */
  $(document).on('keydown', '#zipModal #popupZipcode', function (e) {

    if (e.keyCode == 13) {

      e.preventDefault();

      if ($('#zipModal #popupZipcode').val().length) {

        console.log('field has a length');

        var myZipCode = $('#popupZipcode').val();
        var isValidZipCode = isValidPostalCode(myZipCode);

        console.log(isValidZipCode + ' ' + myZipCode);

        if (isValidZipCode) {
          var formID = 'frmZipPopUp';
          var fieldID = 'modalFranchiseName';
          var formZipID = 'popupZipcode';
          getFranchise(myZipCode, formID, fieldID, formZipID);

        } else {

          $('#popupZipcode').val('Please enter a valid zip code');
          $('#popupZipcode').blur();
        }

      } else {

        $('#popupZipcode').val('Please enter a zip code');
        $('#popupZipcode').blur();
      }

    }
  });

  $('#popupZipcode').focus(function () {

    if ($('#popupZipcode').val().length && ($('#popupZipcode').val() == 'Please enter a zip code' || $('#popupZipcode').val() == 'This Zip is not serviced' || $('#popupZipcode').val() == 'Please enter a valid zip code')) {
      $('#popupZipcode').val('');
    }

  });

  // document.getElementById('phone').addEventListener('input', function (e) {
  //   var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  //   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  // });

});
