var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");

var savedName = document.getElementById("saved-name");// not used.

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var studentGradeObj = { // we are getting the values from the user on the page.
    student: student.value, 
    grade: grade.value,
    comment: comment.value.trim() // trim() removes whitespace from the start and end of a string.
  };

  localStorage.setItem("studentGradeObj", JSON.stringify(studentGradeObj));
 
  console.log("JSON.stringify ", JSON.stringify(studentGradeObj));

  renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGradeObj")); //return and obj.
  
  console.log("Last grade: ", lastGrade);
   
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
