//Business Logic
function list(task, place, date) {
  this.task = task;
  this.place = place;
  this.date = date;
}


//UI Logic
$(document).ready(function() {
  $("form#toDoForm").submit(function(event) {
  event.preventDefault();
  var inputTask = $("#task").val();
  var inputPlace = $("#place").val();
  var inputDate = $("#date").val();

  if (!inputTask) {
    alert("Must enter a task");
  } else {
  var newResults = new list (inputTask, inputPlace, inputDate);
  };

  $("ul#listResults").append("<li><span class='thingsToDo'>" + "Task: " + newResults.task + "<br>" + "Place: " + newResults.place + "</span></li>")

  $(".thingsToDo").last().click(function() {
    $("#showList").show();

    $(".task").text(newResults.task);
    $(".place").text(newResults.place);
    $(".date").text(newResults.date);

    });
  $("#toDoForm input").val("");



  $(".thingsToDo").last().click(function(){
      $("#complete").append("<li>"+ newResults.task + "</li>");
      $(this).parents("li").remove();
  });
  });
});
