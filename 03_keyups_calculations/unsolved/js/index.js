$(".calculate").keyup(function(){
    // add carrots variable here
 
    var carrots= $("#carrots").val();

    parseInt(carrots);

    // add carrotsPrice variable here
    var carrotsPrice= carrots * 1.00
    // add onions variable here
 
    var onions= $("#onions").val();
    parseInt(onions);

    // add onionsPrice variable here
    var onionsPrice= onions * 3.00

    // add potatoes variable here
 
    var potatoes= $("#potatoes").val();
    parseInt(potatoes);

    // add potatoesPrice variable here
    var potatoesPrice= potatoes * 2.50

    // add total variable here

    var total= carrotsPrice + onionsPrice + potatoesPrice

    // set totalPrice value equal to total variable
     
    $(".totalPrice").val(total);


});
