const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"His Biggest Strength ?",
        answers:[
            {text:'Mother',correct:true},
            {text:'Father',correct:false},
            {text:'Brother',correct:false},
            {text:'Friends',correct:false}
        ]
    },
    {
        questions:"His Personality ?",
        answers:[
            {text:'Talking in a direct way',correct:true},
            {text:'Thinking Differently',correct:false},
            {text:'Egomeniac',correct:false},
            {text:'Genius',correct:false},
        ]
    },
    {
        questions:"His Dream Job?",
        answers:[
            {text:'Economist',correct:false},
            {text:'Enterprenur',correct:false},
            {text:'CEO of Company',correct:false},
            {text:'Defense Officer',correct:true}
        ]
    },
    {
        questions:"One Person he Can't live Without ?",
        answers:[
            {text:'Father',correct:false},
            {text:'Mother',correct:true},
            {text:'Brother',correct:false},
            {text:'None of the above',correct:false}
        ]
    },
    {
        questions:"Nickname that he got during A/Ls ?",
        answers:[
            {text:'Akash Walker',correct:true},
            {text:'Security Akash',correct:false},
            {text:'Nikie Akash',correct:false},
            {text:'None of the above',correct:false}
        ]
    },
    {
        questions:"Greatest Era of his School Life ?",
        answers:[
            {text:'2013 - 2018',correct:true},
            {text:'2018 - 2019',correct:false},
            {text:'2011 -2013',correct:false},
            {text:'2008 - 2010',correct:false}
        ]
    },
    {
        questions:"A gift you think he has ?",
        answers:[
            {text:'Love and Care for friends',correct:true},
            {text:'Great Competetor',correct:false},
            {text:'Focused',correct:false},
            {text:'Genius',correct:false}
        ]
    },
    {
        questions:"His Current Job ?",
        answers:[
            {text:'Student at Seagis',correct:true},
            {text:'Student at UCL',correct:false},
            {text:'Student at SLIIT',correct:false},
            {text:'Student at NSBM',correct:false}
        ]
    },
    {
        questions:"His Current Relationship Status ?",
        answers:[
            {text:'Single',correct:true},
            {text:'In a Relationship',correct:false},
            {text:'Married',correct:false},
            {text:'Have no idea',correct:false}
        ]
    },
    {
        questions:"A Schoolmate that makes him laugh ?",
        answers:[
            {text:'Nikie Munaj',correct:false},
            {text:'Roshan Murugan',correct:true},
            {text:'Azmi Kamil',correct:false},
            {text:'Bryan De Silva',correct:false}
        ]
    },
    {
        questions:"His Worst Habbit ?",
        answers:[
            {text:'Gets Angry too quicky',correct:true},
            {text:'Gets Emotional too quicky',correct:false},
            {text:'Says "YES" to everything',correct:false},
            {text:'Biting Nails',correct:false}
        ]
    },
    {
        questions:"Schoolmates that lecture him?",
        answers:[
            {text:'Munaj and Azmi',correct:false},
            {text:'Aadhil and Teran',correct:false},
            {text:'Bryan and Migara',correct:true},
            {text:'Saduni and Sahassrika',correct:false}
        ]
    },
    {
        questions:"Schoolmates that inspire him ?",
        answers:[
            {text:'Sandro and Azeeza',correct:false},
            {text:'Adhya and Kaw',correct:false},
            {text:'Sahasra and Roshan',correct:false},
            {text:'Aadhil and Teran',correct:true}
        ]
    },
    {
        questions:"Favorite People he like to be around?",
        answers:[
            {text:'Adhya and Sahasra',correct:false},
            {text:'Azeeza and Aadhil',correct:true},
            {text:'Sahassrika and Migara',correct:false},
            {text:'Sanduni and Bryan',correct:false}
        ]
    },
    {
        questions:"Famous People that inspire him ?",
        answers:[
            {text:'Mark Cuban and Elon Musk',correct:false},
            {text:'Warren Buffet and Donald Trump',correct:false},
            {text:'Mark Zuckerberg and Jack Ma',correct:true},
            {text:'Jeff Bezos and Larry Page',correct:false}
        ]
    },
    {
        questions:"Most Used App?",
        answers:[
            {text:'Youtube',correct:true},
            {text:'Spotify',correct:false},
            {text:'Netflix',correct:false},
            {text:'Instagram',correct:false}
        ]
    },
    {
        questions:"Most Visited Website?",
        answers:[
            {text:'google.com',correct:false},
            {text:'youtube.com',correct:false},
            {text:'asiangrammar.lk',correct:true},
            {text:'facebook.com',correct:false}
        ]
    },
    {
        questions:"An Industry he is passionate about ?",
        answers:[
            {text:'Space',correct:false},
            {text:'Bussiness Development',correct:true},
            {text:'Energy',correct:false},
            {text:'Finance',correct:false}
        ]
    },
    {
        questions:"Favorite Subjects ?",
        answers:[
            {text:'Biology and Chemistry',correct:true},
            {text:'Eonomics and Bussiness Studies',correct:false},
            {text:'IT and Accounting',correct:false},
            {text:'Physics an Com.Maths',correct:false}
        ]
    },
    {
        questions:"Best Day of his life ?",
        answers:[
            {text:'First day of O/L',correct:false},
            {text:'First day of School',correct:false},
            {text:'First day of A/L',correct:true},
            {text:'Last day of School',correct:false}
        ]
    },
]