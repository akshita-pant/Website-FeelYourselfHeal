
var questions = ["Feeling down or hopeless?<br /><br /><button class=blue001 id=hide1 onclick=correct1()>Not at all</button><br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Yes, often</button><br /><br />",

         "Poor appetite or overeating?<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Nearly everyday</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>Sometimes only</button><br /><br />",
          
         "Feeling bad about yourself - or that you are a failure or have let yourself or your family down<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Yes</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>No, I don't blame myself</button><br /><br />",
          
         "Trouble falling or staying asleep, or sleeping too much<br /><br /><button class=blue001 id=hide1 onclick=correct1()>Sometimes</button><br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Yes, most of the times</button><br /><br />",

         "Thoughts that you would be better off dead, or of hurting yourself<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Nearly everyday</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>Not at all</button>",
          
         "Trouble concentrating on things, such as reading<br /><br /><button class=blue001 id=hide1 onclick=correct1()>Not really, i can concentrate well</button><br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>yes, a lot</button><br /><br />",

         "Little interest or pleasure in doing things?<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Everytime</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>I always keep myself busy</button><br /><br />",
          
         "Feeling tired or having little energy?<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Yes</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>No</button><br /><br />",
          
         "Moving or speaking either so slowly or too fidgetly<br /><br /><button class=blue001 id=hide1 onclick=correct1()>No, i keep my actions in control</button><br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Yes ,quite often</button><br /><br />",

         "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?<br /><br /><button class=blue001 id=hide2 onclick=incorrect1()>Extremely difficult</button><br /><br /><button class=blue001 id=hide1 onclick=correct1()>Not difficult</button>",
          "0"];
          
          var answers = ["because if u feel hopeless, that can take you towards the wrong life.", "As, you must neither eat too less nor too much", "You are actually a good human", "As, you must neither sleep too less nor too much", "Sucidal thoughts are very dangerous...try to think and endulge in something else", "Less concentration leads to mistakes and causes further irritations and anxiety", "One must try to live their lives to fullest and try new things everyday", "If you feel tired everytime, that shows how hopeless you feel to try and embrace new opportunities", "Because, this habit directly reflects your inner you", "If it gets so difficult, you need medical help", "0"];
          
          var numbers = 0;
          numbers++;
          
          var scores = 0;
          scores++;
          

function begin1() {
disappear1.innerHTML = "";
number001.innerHTML = numbers++;
message001.innerHTML = questions.shift();
}
 
function btn1() {
number001.innerHTML = numbers++;
message001.innerHTML = questions.shift();
message002.innerHTML = "";
message003.innerHTML = "";
if (questions == questions.length) {
message001.innerHTML = "if your marks are between 7-10, then you are doing great <br>if your marks are between 4-6, then there are chances that your stress might cause depression<br>if your marks are between 0-3,then you need help and should consult the doctor<br>";
number001.innerHTML = numbers - 2;
  }
  }
 
function correct1() {
score001.innerHTML = scores++;
message002.innerHTML = "Correct. " + answers.shift();
hide1.style.background = "#66CDAA";
hide1.disabled = true;
hide2.disabled = true;
message003.innerHTML = "<button class=blue002 onclick=btn1()>Next</button>";
}

function incorrect1() {

message002.innerHTML = "Incorrect. " + answers.shift();
hide2.style.background = "#B22222";
hide1.style.background = "#66CDAA";
hide1.disabled = true;
hide2.disabled = true;
message003.innerHTML = "<button class=blue002 onclick=btn1()>Next</button>";
}
