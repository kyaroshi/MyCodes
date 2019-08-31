// Event Listener on button

$("#submit").click(function() {
    console.log("work");


//Save name as a variable
var name= $("#name").val();

//Set the HTML of the p element
$("#buttonPusherInfo").html(name + " was the last person to push the button.");

//Set input value to be blank.
$("#name").val("");

});

