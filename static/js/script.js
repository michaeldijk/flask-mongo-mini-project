
$(document).ready(function(){
    // Mobile menu expander JQuery
    $('.sidenav').sidenav({edge: "right"});
    // Tasks expander, JQuery
    $('.collapsible').collapsible();
    // Tooltip, JQuery
    $('.tooltipped').tooltip();
    // Initialize Dropdown, JQuery
    $('select').formSelect();
    // datepicker, JQuery
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: "select"
      }
    });

  });