let currentQuestion = 0;
let score = 0;
let arrStore=[];
let correctAns;
let answer;
let main;
// fetch data from mongodb database
$(document).ready(function(){
   $.ajax({
       url:'http://localhost:8100/api',
   }).done(function(data) {
       main = data;
       getQues(main);
       $('#next').click(function(){
           getQues(main);
       }); 
})
// Display data 
function getQues(main){
    
       if(currentQuestion < 9){  
           $('#ques-div').text(main[currentQuestion].question);
           $('#option1').text(main[currentQuestion].options[0]);
           $('#option2').text(main[currentQuestion].options[1]);
           $('#option3').text(main[currentQuestion].options[2]);
           $('#option4').text(main[currentQuestion].options[3]);
           $('.displayScore').hide();
           correctAns = main[currentQuestion].answer;
           currentQuestion++;
       }
}
// Store selected answer in array
$('.checkAnswer').click(function(){
   answer = $(this).text();
   arrStore.push(answer);
//    console.log(arrStore);
});
$('#submit').click(function(){
    $('.displayScore').show();
    $('#next,#submit,.ans,.que').hide();
 for(let i=0;i<arrStore.length;i++){
     if((main[i].ans)=== arrStore[i]){
         score++;
     }
 }
 console.log(score);
 document.getElementById('score').innerHTML = score;
});
});

// store email into mongodb database
$(".topic_submit").click(function() {  
    var emailStore = $("#mail").val();
    console.log("here");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "http://localhost:8100/",
        data:{
            'email': emailStore
        },
        success: function(data){
           result=data;
           console.log(result);
           getQues();
           console.log(result[0].question);
        },
        error:function(err){
            console.log(err);
        }
    });
});


