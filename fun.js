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



