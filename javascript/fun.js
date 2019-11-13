let currentQuestion = 0;
let score = 0;
let arrStore=[];
let correctAns;
let answer;
let main;

// fetch data from mongodb database
$(document).ready(function(){
   $.ajax({
       url:'https://quiz-mongodb-application.herokuapp.com/',
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
 $('#score').text(score);
});
});

 let usernameStore;
 let passwordStore;
// store email into mongodb database
$(".signupbtn").click(function() {  
    usernameStore = $(".authusername").val();
    // let validateName = /[A-Za-z0-9_]+/;
    passwordStore = $(".authpassword").val();
    let strongRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}/;
    confirmPassword = $('.authconfirmpassword').val();
    console.log(usernameStore);
    if(!(passwordStore.match(strongRegex))){
        alert("Password should contains symbol, letter and number");
    }
    else if(usernameStore=="" || passwordStore==""){
        alert("All fields are required");
    }
    else if(!(passwordStore==confirmPassword)){
        alert("confirm password is wrong");
    }
    else{
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://quiz-mongodb-application.herokuapp.com/",
            data:{
                'username':usernameStore,
                'password':passwordStore,
            },
            success: 
                window.location="quiz.html"
        });
    }
});
$('.loginbtn').click(function(){
    usernameStore = $(".authusername").val();
    // let validateName = /[A-Za-z0-9_]+/;
    passwordStore = $(".authpassword").val();
    let strongRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}/;
    confirmPassword = $('.authconfirmpassword').val();
    if(usernameStore=="" || passwordStore==""){
        alert("All fields are required");
    }
    else{
        window.location="quiz.html";
    }
});

