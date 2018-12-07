$(document).ready(function(){
	/**
	 * country dragdown
	 */
	$("#country_arrow").mouseover(function(){
		$('.country_select').show();
		$('#country_name').removeClass('country_name_leave');
		$('#country_name').addClass('country_name_enter');
		$(".arrow_down").removeClass('arrow_rotate_leave');
		$(".arrow_down").addClass('arrow_rotate_enter');
	});
	$("#country_arrow").mouseout(function(){
		$('.country_select').hide();
		$('#country_name').removeClass('country_name_enter');
		$('#country_name').addClass('country_name_leave');
		$(".arrow_down").removeClass('arrow_rotate_enter');
		$(".arrow_down").addClass('arrow_rotate_leave');
	});

	/**
	 * addholder and close button
	 */
	var addStatus = false;
	$('.addholder_outbox').click(function() {
		if(addStatus){
			$('.addholder_close').css({
					opacity : '0',
					transition : 'all 0.3s'
				})
			$('.addholder_content').slideUp('slow');
			addStatus = false;
		}else{
			$('.addholder_content').slideDown('slow',function(){
				$('.addholder_close').css({
					opacity : '1',
					transition : 'all 1s'
				})
			});
			addStatus = true;
		}
	});
	$('.addholder_close').click(function(){
		$(this).css({
					opacity : '0',
					transition : 'all 0.3s'
		});
		$('.addholder_content').slideUp('slow');
		addStatus = false;
	})

	/**
	 * nav menu
	 */	
	$('.li_container >li').mouseenter(function(event){
		var str = $(this).find('i').attr('class');
		var strId = $(this).attr('id');
		if(!str.match('active_circle')){
			$(this).find('i').show('fast');
		}
		if(strId.match('menu_computer')){
			$('.computer_box').show();
		}else if(strId.match('menu_phone')){
			$('.phone_box').show();
		}else if(strId.match('menu_stroage')){
			$('.stroage_box').show();
		}else if(strId.match('menu_stage')){
			$('.stage_box').show();
		}
	});
	$('.li_container >li').mouseleave(function(evnet){
		var str = $(this).find('i').attr('class');
		var strId = $(this).attr('id');
		if(!str.match('active_circle')){
			$(this).find('i').hide('fast');
		}
		if(strId.match('menu_computer')){
			$('.computer_box').hide();
		}else if(strId.match('menu_phone')){
			$('.phone_box').hide();
		}else if(strId.match('menu_stroage')){
			$('.stroage_box').hide();
		}else if(strId.match('menu_stage')){
			$('.stage_box').hide();
		}
	});
	var oNavLi = $('.li_container').find('li');
	$('.li_container').find('li').click(function(){
		for (var i = 0; i < oNavLi.length; i++) {
			$(oNavLi[i]).find('i').removeClass('active_circle');
			$(oNavLi[i]).find('i').hide('fast');
		};
		$(this).find('i').addClass('active_circle');
	})

	/*
	 * search and servers click evnet
	 */
	$('.search_click').click(function(){
		$('.search_content').show();
	});
	$('.search_close').click(function(){
		$('.search_content').hide();
	});
	$('.servers_click').click(function(){
		$('.servers_content').addClass('servers_show');
	});
	$('.servers_enter').click(function(){
		$('.servers_content').removeClass('servers_show');
	});

	/**
	 * servers content mouseenter
	 */
	$('.servers_box_public').mouseenter(function(){
		$(this).find('img').addClass('img_scale');
	});
	$('.servers_box_public').mouseleave(function(){
		$(this).find('img').removeClass('img_scale');
	});
	$('.servers_box_public2').mouseenter(function(){
		$(this).find('img').addClass('img_scale');
	});
	$('.servers_box_public2').mouseleave(function(){
		$(this).find('img').removeClass('img_scale');
	})
})