jQuery(document).ready(function() {

	// if(jQuery(window).width() > 750 && jQuery(window).width() < 900) {
	// 	jQuery('#video-space').attr('data-columns' , '1');
	// }

    if(jQuery(window).width() < 790) {
        jQuery('.element1').attr('data-voffset' , '-290');
        jQuery('.element2').removeClass('.mainslider_1 li:nth-child(1) .tp-caption._bs_slider_title + ._bs_slider_title');
    }
});