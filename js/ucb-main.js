/**************************************************
 *
 *   Main JS functionality for all pages.
 *
**************************************************/

( $ => {
  $(document).ready(() => {
    // handler to close the local tasks (edit, revisions, clone, etc...)
    $("a#ucbCloseLocalTasks").click(e => {
      e.preventDefault();
      $(".ucb-local-tasks").hide();
    });

    // Handle the responsive menu
    $("#mobile-toggle").click(e => {
      const menuHeight = $('.ucb-main-menu.nav').height() + $('.ucb-menu.nav').height() + "px";
      // set a CSS variable to the menu height, which is dynamic
      $("body").css("--menu-height", menuHeight);
      $("section.ucb-main-nav-section").toggleClass('toggle');
    });
  });
})(jQuery);