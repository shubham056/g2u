// map look up
  var map, marker, geocoder, latlng;
  var custStyles = [{
    "elementType": "geometry",
  "stylers": [{
    "color": "#1d2c4d"
    }]
},
  {
    "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#f6b260"
    }]
},
  {
    "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#1a3646"
    }]
},
  {
    "featureType": "administrative",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "administrative.country",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#4b6878"
    }]
},
  {
    "featureType": "administrative.land_parcel",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#64779e"
    }]
},
  {
    "featureType": "administrative.province",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#4b6878"
    }]
},
  {
    "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#334e87"
    }]
},
  {
    "featureType": "landscape.natural",
  "elementType": "geometry",
  "stylers": [{
    "color": "#023e58"
    }]
},
  {
    "featureType": "poi",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#283d6a"
    }]
},
  {
    "featureType": "poi",
  "elementType": "labels.text",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#6f9ba5"
    }]
},
  {
    "featureType": "poi",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#1d2c4d"
    }]
},
  {
    "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#023e58"
    }]
},
  {
    "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#3C7680"
    }]
},
  {
    "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#234e6b"
    },
  {
    "weight": 2
    }
  ]
},
  {
    "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#98a5be"
    }]
},
  {
    "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#1d2c4d"
    }]
},
  {
    "featureType": "road.arterial",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#345378"
    }]
},
  {
    "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#b0d5ce"
    }]
},
  {
    "featureType": "road.highway",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#023e58"
    }]
},
  {
    "featureType": "road.local",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "road.local",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "transit",
  "stylers": [{
    "visibility": "off"
    }]
},
  {
    "featureType": "transit",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#98a5be"
    }]
},
  {
    "featureType": "transit",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#1d2c4d"
    }]
},
  {
    "featureType": "transit.line",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#283d6a"
    }]
},
  {
    "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#3a4762"
    }]
},
  {
    "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#0e1626"
    }]
},
  {
    "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#4e6d70"
    }]
}
  ]

  function initMap() {
    try {
    geocoder = new google.maps.Geocoder();
  //Default setup
  var latlng = new google.maps.LatLng(29.481137, -98.7945945);
  var offsetx = $(window).width() / 2;
  var myOptions = {
    disableDefaultUI: true,
  zoomControl: false,
  scaleControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  rotateControl: false,
  mapTypeControl: false,
  gestureHandling: 'none',
  zoom: 8,
  center: latlng,
  styles: custStyles

        }
  map = new google.maps.Map(document.getElementById("map"), myOptions);

  var marker = new google.maps.Marker({
    position: latlng,
  map: map
        });


  google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
            var map = this;
  var ov = new google.maps.OverlayView();
  ov.onAdd = function () {
                var proj = this.getProjection();
  var aPoint = proj.fromLatLngToContainerPixel(latlng);
  aPoint.x = aPoint.x + offsetX;
  aPoint.y = aPoint.y + offsetY;
  map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
            };
  ov.draw = function () { };
  ov.setMap(this);
        };
        if (windowCheck().indexOf('desktop') > -1) {
            var offsetx = $(window).width() / 4;
  map.setCenterWithOffset(latlng, offsetx, 0);
        }
    } catch (err) { }
}

  // Call this wherever needed to actually handle the display
  function codeAddress(zipCode) {
    geocoder.geocode({
      'address': zipCode
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // Got result, center the map and put it out there
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        // move over slightly
        if (windowCheck().indexOf('desktop') > -1) {
          var offsetx = $(window).width() / 4;
          map.setCenterWithOffset(results[0].geometry.location, offsetx, 0);
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}

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



});
