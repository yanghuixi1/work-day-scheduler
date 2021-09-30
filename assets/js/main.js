var mainContainer = $(".container");

$("textarea").each(function () {
  var textarea = parseInt($(this).attr("id"));
  var currTime = moment().hours();
  if (textarea < currTime) {
    $(this).addClass("past");
  } else if (textarea === currTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

function handleSaveEvent(event) {
  var btnClicked = $(event.target);
  var textareaEl = $(btnClicked.siblings()[1]);
  var userInput = textareaEl.val();
  localStorage.setItem(textareaEl.attr("id"), userInput);
}

function loadSavedEvents() {
  for (i = 9; i < 18; i++) {
    var currEvent = localStorage.getItem(i.toString());
    if (currEvent != null) {
      $(`#${i}`).val(currEvent);
    }
  }
}

mainContainer.on("click", ".saveBtn", handleSaveEvent);

$(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  loadSavedEvents();
});
