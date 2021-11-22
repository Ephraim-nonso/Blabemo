$(document).ready(function () {
  // Prevent the default of the the buttons

  $(".btn").click(function (e) {
    e.preventDefault();
  });

  $("input").focus(function () {
    $(this).css("background-color", "#f8f8f8");
  });

  setTimeout(function () {
    $(".quote-content").fadeOut(3000);
  }, 3000);

  setTimeout(function () {
    $(".quote-content").fadeToggle(3000, function () {
      $(this).html(
        "Business triumphs on solid rock and the incredibility of the personnels that make the team."
      );
    });
  }, 3001);
});
