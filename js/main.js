/**
 * Created by House on 2017/1/5.
 */
$(function () {
  'use strict';

  var sidebar = $('#sidebar'), //选择侧栏
      mask = $('.mask'), //选择遮盖
      sidebar_trigger = $('#sidebar_trigger'), //选择侧边菜单
      backbutton = $('#back-to-top'); //选择返回顶部

  function showSidebar() { //显示侧栏
    console.log('clicked');
    mask.fadeIn();
    sidebar.animate({'right':0}); //调整侧栏响应的css
  }

  function hideSidebar() { //隐藏侧栏
    console.log('clicked');
    mask.fadeOut();
    sidebar.animate({'right': - sidebar.width()}); //调整侧栏响应的css
  }

  sidebar_trigger.on('click',showSidebar);  //监听侧栏触发器 onclick事件
  mask.on('click',hideSidebar); //监听 mask

  backbutton.on('click',function () { //监听返回顶部按钮
    $('html, body').animate({
      scrollTop: 0
    },800)
  });

  $(window).on('scroll', function () { //监听 window scroll 事件
    //如果已滚动的部分高于窗口高度：
    if ($(window).scrollTop() > $(window).height())
      //显示返回按钮
      backbutton.fadeIn();
      else {
        //否则隐藏按钮
        backbutton.fadeOut();
      }
  });

  //触发 sroll 事件
  $(window).trigger('scroll');

});