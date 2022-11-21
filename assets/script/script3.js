//main page
var mainPage = document.getElementById("main-page")

//timer
var timer = document.getElementById("timer");
var timeLeft = 60
timer.innerHTML= "Time: " + timeLeft;
var counter = 0;

//quiz
var score = 0
var start = document.getElementById("start-btn")
var quiz = document.getElementById("quiz")
var highScores = document.getElementById("highscores")
var qu1 = document.getElementById("q1")
var qu2 = document.getElementById("q2")
var qu3 = document.getElementById("q3")
var qu4 = document.getElementById("q4")
var qu5 = document.getElementById("q5")
var result = document.getElementById("result-screen")
var score = 0
var timedOut;
var listOfHighScores=document.getElementById("listOfHighscores");
var allHighscores = JSON.parse(localStorage.getItem("highscores"))
var initialsButton = document.getElementById("enter-initials")
var initialsInput = document.getElementById("initials")

//first question
function firstQuestion(){
    mainPage.style.display="none";
    var questionOne = document.createElement("h1");
    questionOne.innerHTML = "Which statement best describes the purpose of JavaScript for a webpage?"
    var ansOneOne = document.createElement("h3")
    ansOneOne.innerHTML="It gives the webpage style."
    var ansOneTwo = document.createElement("h3")
    ansOneTwo.innerHTML="It gives the webpage functionality."
    var ansOneThree = document.createElement("h3")
    ansOneThree.innerHTML="It gives the webpage its content."
    var ansOneFour = document.createElement("h3")
    ansOneFour.innerHTML="It makes the webpage invincible against hackers."
    qu1.appendChild(questionOne)
    qu1.appendChild(ansOneOne)
    qu1.appendChild(ansOneTwo)
    qu1.appendChild(ansOneThree)
    qu1.appendChild(ansOneFour)
   
    ansOneOne.addEventListener("click", function(){
        secondQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })

    ansOneTwo.addEventListener("click", function(){
        score = score + 10
        console.log(score)
        confirm("Correct!")
        secondQuestion()
    })
   
    ansOneThree.addEventListener("click", function(){
        secondQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })

    ansOneFour.addEventListener("click", function(){
        secondQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })
}


//second question
function secondQuestion(){
    qu1.style.display="none";
    var questionTwo = document.createElement("h1");
    questionTwo.innerHTML = "Where should you link your JavaScript file?"
    var ansTwoOne = document.createElement("h3")
    ansTwoOne.innerHTML="At the top of your CSS style sheet."
    var ansTwoTwo = document.createElement("h3")
    ansTwoTwo.innerHTML="In the body of your index.html."
    var ansTwoThree = document.createElement("h3")
    ansTwoThree.innerHTML="In the head of your index.html."
    var ansTwoFour = document.createElement("h3")
    ansTwoFour.innerHTML="In your repository."
    qu2.appendChild(questionTwo)
    qu2.appendChild(ansTwoOne)
    qu2.appendChild(ansTwoTwo)
    qu2.appendChild(ansTwoThree)
    qu2.appendChild(ansTwoFour)

    ansTwoOne.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        thirdQuestion()
        timeLeft= timeLeft -10
    })

    ansTwoTwo.addEventListener("click", function(){
        confirm("Correct!")
        thirdQuestion()
        score = score + 10
        console.log(score)
    })
   
    ansTwoThree.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        thirdQuestion()
        timeLeft= timeLeft -10
    })

    ansTwoFour.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        thirdQuestion()
        timeLeft= timeLeft -10
    })
}

//third question
function thirdQuestion(){
    qu2.style.display="none";
    var questionThree = document.createElement("h1");
    questionThree.innerHTML = "Which is an example of a boolean value"
    var ansThreeOne = document.createElement("h3")
    ansThreeOne.innerHTML="Seventeen"
    var ansThreeTwo = document.createElement("h3")
    ansThreeTwo.innerHTML="17"
    var ansThreeThree = document.createElement("h3")
    ansThreeThree.innerHTML="True"
    var ansThreeFour = document.createElement("h3")
    ansThreeFour.innerHTML="None of the above."
    qu3.appendChild(questionThree)
    qu3.appendChild(ansThreeOne)
    qu3.appendChild(ansThreeTwo)
    qu3.appendChild(ansThreeThree)
    qu3.appendChild(ansThreeFour)

    ansThreeOne.addEventListener("click", function(){
        fourthQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })

    ansThreeTwo.addEventListener("click", function(){
        fourthQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })
   
    ansThreeThree.addEventListener("click", function(){
        fourthQuestion()
        score = score + 10
        console.log(score)
        confirm("Correct!")
    })

    ansThreeFour.addEventListener("click", function(){
        fourthQuestion()
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
    })
}

//fourth question
function fourthQuestion(){
    qu3.style.display="none";
    var questionFour = document.createElement("h1");
    questionFour.innerHTML = "Which is a tool used in JavaScript to run the same code over and over again, each time with a different value."
    var ansFourOne = document.createElement("h3")
    ansFourOne.innerHTML="A for loop"
    var ansFourTwo = document.createElement("h3")
    ansFourTwo.innerHTML="A method loop"
    var ansFourThree = document.createElement("h3")
    ansFourThree.innerHTML="A string loop"
    var ansFourFour = document.createElement("h3")
    ansFourFour.innerHTML="An attribute loop."
    qu4.appendChild(questionFour)
    qu4.appendChild(ansFourOne)
    qu4.appendChild(ansFourTwo)
    qu4.appendChild(ansFourThree)
    qu4.appendChild(ansFourFour)

    ansFourOne.addEventListener("click", function(){
        confirm("Correct!")
        fifthQuestion()
        score = score + 10
        console.log(score)
    })

    ansFourTwo.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        fifthQuestion()
    })
   
    ansFourThree.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        fifthQuestion()
    })

    ansFourFour.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        fifthQuestion()
    })
}
//fifth question
function fifthQuestion(){
    qu4.style.display="none";
    var questionFive = document.createElement("h1");
    questionFive.innerHTML = "Inside which HTML element do we put the JavaScript?"
    var ansFiveOne = document.createElement("h3")
    ansFiveOne.textContent="<a>"
    var ansFiveTwo = document.createElement("h3")
    ansFiveTwo.textContent="<javascript>"
    var ansFiveThree = document.createElement("h3")
    ansFiveThree.textContent="<js>"
    var ansFiveFour = document.createElement("h3")
    ansFiveFour.textContent="<script>"
    qu5.appendChild(questionFive)
    qu5.appendChild(ansFiveOne)
    qu5.appendChild(ansFiveTwo)
    qu5.appendChild(ansFiveThree)
    qu5.appendChild(ansFiveFour)

    ansFiveOne.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        resultScreen()
    })

    ansFiveTwo.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        resultScreen()
    })
   
    ansFiveThree.addEventListener("click", function(){
        confirm("Incorrect! Ten seconds will be taken off the timer.")
        timeLeft= timeLeft -10
        resultScreen()
    })

    ansFiveFour.addEventListener("click", function(){
        score = score + 10
        confirm("Correct!")
        resultScreen()
        console.log(score)
    })
}

//results screen
function resultScreen(){
    qu5.style.display="none";
    //prompt("Please enter your initials")
    var resultHeader = document.createElement("h1");
    resultHeader.innerHTML = "Thanks for playing!"
    var playerScore = document.createElement("h3")
    playerScore.innerHTML="Your score is: " + score
    result.appendChild(resultHeader)
    result.appendChild(playerScore)
}

start.addEventListener("click", function(){
    firstQuestion();
    timerStart();
})

function timerStart(){
    var countDown = setInterval(function(){
        timeLeft--;
        timer.innerHTML = "Time: " + timeLeft
        if(timeLeft === 0){
        qu1.style.display="none"
        qu2.style.display="none"
         qu3.style.display="none"
         qu4.style.display="none"
         qu5.style.display="none"
         resultScreen()
         clearInterval(countDown)
        }
    },1000)
}
//high score tracker
initialsButton.addEventListener("click", function(){
    var results={
        initials:initialsInput,
        score:score
    }
    if(allHighscores){
        allHighscores.push(result)
    } else {
        allHighscores = [results]
    }
    localStorage.setItem("highscores", JSON.stringify(allHighscores))
    initialsInput.value = ""
})

highScores.addEventListener("click", function(){
    timer.style.display="none"
    qu1.style.display="none"
    qu2.style.display="none"
    qu3.style.display="none"
    qu4.style.display="none"
    qu5.style.display="none"
    mainPage.style.display="none"
    listOfHighScores.innerHTML("")
    allHighscores.sort(function(a,b){return b.score - a.score})
    for(var i = 0; i < allHighscores; i++){
        var newScoreEl = document.createElement("li");
        newScoreEl.innerHTML = allHighscores[i].initials + " "+allHighscores[i].score
        listOfHighScores.append(newScoreEl);
    }
    highScores.style.display="block"
})