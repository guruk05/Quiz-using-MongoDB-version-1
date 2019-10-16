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



