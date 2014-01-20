$(document).ready(function () {

//Global Variables
        
//Adding a Task
    
    $("#submitTask").click(function () {
        var newTask = $("#newTask").val();
        console.log("User added: " + newTask);
        $("#taskList").append("<li class='taskItem'><input class='checkbox' type='checkbox'>" + newTask + "<span class='deleteButton'>Delete</span></li>");
    });
    
//Checking Off    
    
    $("#taskList").on("click", "input", function () {
            $(this).parent("li").toggleClass("taskItemComplete");
    });
    
    
//Removing Completed
    
    $("#clearButton").click(function(){
        $(".taskItemComplete").remove();
    });
    
//Functions
        
});