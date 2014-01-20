$(document).ready(function () {

//Global Variables
        
//Adding a Task
    
    $("#submitTask").click(function () {
        var newTask = $("#newTask").val();
        var newTask = newTask.replace(/^\s+|\s+$/g, '');
        if (newTask==null || newTask=="") {
            alert("Red Alert! Please enter a task.");
            return false;
        };
        $("#taskList").append("<li class='taskItem'><input class='checkbox' type='checkbox'>" + newTask + "<span class='deleteButton'>Delete</span></li>");
        //RESET FORM
        document.getElementById("newTask").value="";
    });
    
//Checking Off    
    
    $("#taskList").on("click", "input", function () {
            $(this).parent("li").toggleClass("taskItemComplete");
    });
    
    
//Removing Completed
    
    $("#clearButton").click(function(){
        $(".taskItemComplete").remove();
    });
    
//Deleting Items
    
    $(".deleteButton").click(function(){
        $(this).parent("li").remove();
    });
    
});