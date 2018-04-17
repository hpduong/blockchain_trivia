/*
// testing jquery
window.onload = function() {
if (window.jQuery) {
    // jQuery is loaded
    alert("Answer the Trivia Question and forever be remembered on the Blockchain!");
} else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }
}
*/
//<ul> randomizer so answers are randomly ordered
function randomUl(){
      $('ul').each(function(){
            // get current ul
            var $ul = $(this);
            // get array of list items in current ul
            var $liArr = $ul.children('li');
            // sort array of list items in current ul randomly
            $liArr.sort(function(a,b){
                  // Get a random number between 0 and 10
                  var temp = parseInt( Math.random()*10 );
                  // Get 1 or 0, whether temp is odd or even
                  var isOddOrEven = temp%2;
                  // Get +1 or -1, whether temp greater or smaller than 5
                  var isPosOrNeg = temp>5 ? 1 : -1;
                  // Return -1, 0, or +1
                  return( isOddOrEven*isPosOrNeg );
            })
            // append list items to ul
            .appendTo($ul);
      });
};


window.onload = function() {
$.getJSON(url)
  .done(function(data){
  console.log(data);
  randomUl();
  randomUl();
  $('#question').text(data.results[0].question);
  $('#a').text(data.results[0].incorrect_answers[0]);
  $('#b').text(data.results[0].incorrect_answers[1]);
  $('#c').text(data.results[0].incorrect_answers[2]);
  $('#d').text(data.results[0].correct_answer);
  $('#wallet-address-1').text(web3.eth.accounts[0]);
  $('#wallet-address-2').text(web3.eth.accounts[1]);
  $('#wallet-address-3').text(web3.eth.accounts[2]);

  //$('#correct_answer').text(data.results[0].correct_answer);
  });
};


var url = 'https://opentdb.com/api.php?amount=1'
//var xhrbtn = document.querySelector("#xhr");
//var fetchbtn = document.querySelector("#fetch");
//var axiosbtn = document.querySelector("#axios");
var display = document.querySelector("#quote");

//hide for now
/*
xhrbtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  }
  XHR.open("GET", url);
  XHR.send();
});
*/

/*
fetchbtn.addEventListener("click", function(){
  fetch(url)
  .then(function(req){
    req.json().then(function(data){
      display.innerText = data[0];
    })
  })
  .catch(function(){
    alert("ERROR!")
  })
});
*/

function incrementScore() {
  candidateName = "Anton";
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  });
}

function getQuestion() {
  $.getJSON(url)
  .done(function(data){
    randomUl();
    randomUl();
    console.log(data)
    $('#question').text(data.results[0].question);
    $('#a').text(data.results[0].incorrect_answers[0]);
    $('#b').text(data.results[0].incorrect_answers[1]);
    $('#c').text(data.results[0].incorrect_answers[2]);
    $('#d').text(data.results[0].correct_answer);
    //$('#correct_answer').text(data.results[0].correct_answer);
  });
};

//use id selector for new question from api
$('#newQ').click(function(){
  $.getJSON(url)
  .done(function(data){
    randomUl();
    randomUl();
    console.log(data)
    $('#question').text(data.results[0].question);
    $('#a').text(data.results[0].incorrect_answers[0]);
    $('#b').text(data.results[0].incorrect_answers[1]);
    $('#c').text(data.results[0].incorrect_answers[2]);
    $('#d').text(data.results[0].correct_answer);
    //$('#correct_answer').text(data.results[0].correct_answer);
  });
});

function isAnswer(idClicked) {
  if (idClicked == "d") {
    console.log("you got it, dude!");
    $.notify("Yeah! You got it!", "success");
    $.notify("Stop! Hammer time", 'info');
    $('#correct_answer').text("NICE! +1");
    incrementScore();
  } else {
    console.log("sorry, bud. WRONG!");
    $.notify("Sorry, maybe next time", "error");
    $('#correct_answer').text("WRONG!");
  };
};

//use class selector for answer buttons
$(".select").click(function(e){
    var idClicked = e.target.id;
    console.log(idClicked);
    isAnswer(idClicked);
    getQuestion();
});


/*
axiosbtn.addEventListener("click",function(){
  axios.get(url)
  .then(function(res){
    display.innerText = res.data[0];
  })
  .catch(function(){
    alert("ERROR!");
  })
});
*/
