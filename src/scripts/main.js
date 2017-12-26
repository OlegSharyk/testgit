var mainJs = new MainJsClass();

function MainJsClass() {
    var scope = this;

    this.initProductDesc = function() {
		if ($(".jsProduct").length) {
			$(".jsProductDesc", '.jsProduct').hide();
			$(".jsProduct").each(function(){
				var $productDesc = $('.jsProductDesc', this),
					$productOpener = $('.jsProductOpener', this),
					$productCloser = $('.jsProductCloseDesc', this);

					$productOpener.click(function(e){
					 	$productDesc.slideToggle(400);
						e.preventDefault();
					});
					$productCloser.click(function(e){
						$productDesc.slideToggle(400);
						e.preventDefault();
					});
			});
		}
    };

	this.initMoreProduct = function() {
		if ($(".jsViewMoreCont").length) {
			$(".jsViewMore").unbind('click').click(function (e) {
				$(".jsViewMoreCont").each(function () {
					$(this).find(".jsViewMoreBlock:not(:visible)").first().fadeIn();
				});

				if (!$(".jsViewMoreBlock:not(:visible)").length) {
					$(this).unbind('click').hide();
				}
				e.preventDefault();
				return false;
			});
		}
	};

    this.initChosen = function() {
		if ($(".jsCustomSelect").length) {
			$('.jsCustomSelect').selecter({
				cover: true
			});
		}
    };

	this.initFancyBox = function() {
		if ($(".fancybox").length) {
			$('.fancybox').fancybox();
			$('.btn-esc').click(function(e){
				$.fancybox.close();
				e.preventDefault();
			});
		}
	};

	this.initlightbox = function() {
		if ($(".lightbox").length) {
			$('.lightbox-opener').fancybox({
				autoSize   : true,
				autoHeight : true
			});
		}
	};

	this.initLogin = function() {
		if ($(".b-popup").length) {
			var $loginBtn = $('.jsLoginBtn'),
				$popup = $('.b-popup'),
				$popupClose = $('.b-popup__close');

			$loginBtn.click(function(e){
				$popup.fadeIn(400);
				e.preventDefault();
			});

			$popupClose.click(function(e){
				$popup.fadeOut(400);
				e.preventDefault();
			});
		}
	};

	this.initCarousel = function() {
		if ($(".carousel__slider").length) {
			// Using custom configuration
			$(".carousel__slider").carouFredSel({
				items				: 3,
				prev: '.carousel__prev',
				next: '.carousel__next',
				circular: false,
				scroll : {
					items			: 3,
					easing			: "linear",
					duration		: 1000,
					pauseOnHover	: true
				},
				swipe: {
					onTouch     : true,
					onMouse     : true
				}
			});
		}
	};

	this.initSlideshow = function() {
		if ($(".slideshow__slider").length) {
			// Using custom configuration
			$(".slideshow__slider").carouFredSel({
				items				: 1,
				prev: '.slideshow__prev',
				next: '.slideshow__next',
				circular: true,
				auto: true,
				scroll : {
					items			: 1,
					easing			: "linear",
					duration		: 1000,
					pauseOnHover	: true,
					timeoutDuration : 3000
				},
				swipe: {
					onTouch     : true,
					onMouse     : true
				}
			});
		}
	};

  this.initMenu = function() {
    var $nav = $('#nav');
    var $logoIndex = $('#jsNavIndex');
    var $mainContainer = $('#main-container');

    $logoIndex.on({
//      click: function(){
//        $mainContainer.load('ajax_templates/main.html', function(){
//          scope.initSlideshow();
//        });
//      }

      click: function(){
        $.ajax({
          url: "ajax_templates/main.html",
          context: document.body,
          success: function(response){
            $mainContainer.html(response);
            console.log(response);
            scope.initSlideshow();
          }
        });
      }
    });

  };

    $(function(){
       scope.initProductDesc();
       scope.initMoreProduct();
       scope.initChosen();
       scope.initFancyBox();
       scope.initlightbox();
       scope.initLogin();
       scope.initCarousel();
       scope.initSlideshow();
       scope.initMenu();
    });
}