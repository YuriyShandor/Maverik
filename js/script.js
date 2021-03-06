$(document).ready(function() {
  $('select').niceSelect();

  // Change header on scroll
  $(window).scroll(function(){
    if ($(window).scrollTop()) {
       $('.header').addClass('header_fixed');
    }
    else {
       $('.header').removeClass('header_fixed');
    }
  });

  // Display menu for tablet
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // Sort goods by price
  var products = $('.product');

  $(".sort-select").change(function(){
    if ($(this).val() == 0) return false;

    if ($(this).val() == "price") {
      var numericallyOrderedDivs = products.sort(function (a, b) {
        return +$(a).find(".product__price").text().slice(0, -3) > +$(b).find(".product__price").text().slice(0, -3);
      });
      $(".products").html(numericallyOrderedDivs);
    }
  });

  //Price clider by jQuery Slider UI
  $("#price").slider({
	  min: 70,
	  max: 900,
	  values: [70,900],
	  range: true,
    stop: function(event, ui) {
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));
    },
    slide: function(event, ui){
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));

      priceSliderValMin = jQuery("#price").slider("values",0);
      priceSliderValMax = jQuery("#price").slider("values",1);
    },
  });

  $("input#minCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		  value1 = value2;
		  $("input#minCost").val(value1);
	  }
	  $("#price").slider("values",0,value1);
  });


  $("input#maxCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

	  if (value2 > 900) { value2 = 900; jQuery("input#maxCost").val(250)}

	  if(parseInt(value1) > parseInt(value2)){
		  value2 = value1;
		  $("input#maxCost").val(value2);
	  }
	  $("#price").slider("values",1,value2);
  });

  //Categories accordion
  var accordionsArr = $(".accordion");

  for (i = 0; i < accordionsArr.length; i++) {
    accordionsArr[i].addEventListener("click", function() {
      this.classList.toggle("accordion_active");
      var panel = this.nextElementSibling;
      if (panel.style.height){
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    });
  };

  // Display card modal
  $('.product__cart').click(function() {
    $('.modal-card').addClass('modal-card_active');
  })
  $('.close-span').click(function() {
    $('.modal-card').removeClass('modal-card_active');
  })

  //Validate card form
  $('#card-holder').on('input', function() {
		if ($(this).val() != '') {
			var pattern = /^[a-z]+$/;
			if (pattern.test($(this).val()) && $(this).val().length > 4) {
        $(this).css({
					'outline-color': '#000'
				});
				$('#card-holder_valid').text('');
			} else {
				$(this).css({
					'outline-color': 'red'
				});
				$('#card-holder_valid').text('Только латинские символы не менее четырех');
			}
		}
	});
  $('.cardNumber').on('input', function() {
		if ($(this).val() != '') {
			var pattern = /^[0-9]+$/;
			if (pattern.test($(this).val()) && $(this).val().length == 4) {
        $(this).css({
					'outline-color': '#000'
				});
				$('#card-number').text('');
			} else {
				$(this).css({
					'outline-color': 'red'
				});
				$('#card-number').text('Только 4 цифры');
			}
		}
	});
  $('#input-cvv').on('input', function() {
		if ($(this).val() != '') {
			var pattern = /^[0-9]+$/;
			if (pattern.test($(this).val()) && $(this).val().length == 3) {
        $(this).css({
					'outline-color': '#000'
				});
				$('#cvv-input').text('');
			} else {
				$(this).css({
					'outline-color': 'red'
				});
				$('#cvv-input').text('Только 3 цифры');
			}
		}
	});

  //Sort products by category
  var categoryProducts = ['blankets', 'covers'];

  categoryProducts.forEach(function(item) {
    $(`.chose-category__${item}`).click(function(){
      $('.product__all').addClass('product_hide');
      $(`.product__${item}`).removeClass('product_hide');
    });
  });
});
