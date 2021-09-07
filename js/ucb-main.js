/**************************************************
 *
 *   Main JS functionality for all pages.
 *
**************************************************/

( $ => {
  $(document).ready(() => {
    // Handle the Local Actions menu at top
    if($("#local-tasks-menu").length > 0){
      $(".layout-container").addClass("local-tasks-present");
    }
    // Handle the responsive menu
    $("#mobile-toggle").click(() => {
      const menuHeight = $(".ucb-main-menu.nav").height() + $(".ucb-menu.nav").height() + "px";
      // set a CSS variable to the menu height, which is dynamic
      $("body").css("--menu-height", menuHeight);
      $("section.ucb-main-nav-section").toggleClass("toggle");
    });
  });
})(jQuery);