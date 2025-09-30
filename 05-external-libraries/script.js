$(document).ready(function () {

    $("#restofthepage").hover(function () {
        $("#caption").animate({ top: '220px' }, { duration: 500, easing: 'swing' });
    });

});

document.addEventListener('aos:in', ({ detail }) => {
  if (detail.id === "wormnoodles") {
    $("#wormtext").animate(
      { opacity: 1, left: "0%" },
      { duration: 800, easing: "swing" }
    );
  }
  if (detail.id === "centdog") {
    $("#centtext").animate(
      { opacity: 1, left: "0%" },
      { duration: 800, easing: "swing" }
    );
  }
    if (detail.id === "dumpicture") {
    $("#dumptext").animate(
      { opacity: 1, left: "0%" },
      { duration: 800, easing: "swing" }
    );
  }

});
