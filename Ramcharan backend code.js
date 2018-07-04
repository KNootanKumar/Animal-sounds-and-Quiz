var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handelers,askQuestionHandlers,checkAnswerHandlers);
    alexa.execute();
};

var WelcomeAudio='';
var sound='';
var score=0;
var out=0;
var per={
'<audio src="https://s3.amazonaws.com/soundsofanimals/Cat+meow+1.mp3" />' : "cat",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Chickens.mp3" />':"chickens",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3" />':"cow",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Crow+caw.mp3" />':"crow",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3" />':"duck",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3" />':"elephant",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Field+Rat.mp3" />':"rat",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Goat.mp3" />':"goat",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3" />':"sheep",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Horse+whinnying+1.mp3" />':"horse",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3" />':"lion",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Monkey+chatter+2.mp3" />':"monkey",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3" />':"mosquito",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Pig+squeal+1.mp3" />':"pig",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3" />':"rooster",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3" />':"tiger",
'<audio src="https://s3.amazonaws.com/soundsofanimals/deer.mp3" />':"deer",
'<audio src="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3" />':"eagle",
'<audio src="https://s3.amazonaws.com/soundsofanimals/frog.mp3" />':"frog",
'<audio src="https://s3.amazonaws.com/soundsofanimals/kite.mp3" />':"kite",

};


var anss={
    
'<audio src="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3" />':"false",
'<audio src="https://s3.amazonaws.com/soundsofanimals/frog.mp3" />':"true",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3" />':"true",
'<audio src="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3" />':"false",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3" />':"true",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3" />':"false",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3" />':"false",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3" />':"true",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3" />':"true",
'<audio src="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3" />':"false",

};



var handelers= {

            'LaunchRequest': function() { //Executes when a new session is launched
            this.emit('launchintent');
    },

   'launchintent': function() {

            this.emit(':ask',   "Welcome to Animals Sounds gaming and Quiz Alexa Skill. I can play a animal sound. to listen to animal sounds say one or two or three upto twenty. after the animal sound terminated, Guess the animal by saying ,The animal is .Say start quiz, to play quiz.  make sure that if once quiz is started you cannot play game. say end quiz to stop palying quiz");
    },

    'one': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Cat+meow+1.mp3" />';
             this.emit(':ask',WelcomeAudio+"Now guess the animal  ");
    },
	'two': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Chickens.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'three': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal ");
    },
	'four': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Crow+caw.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'five': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
    'six': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3" />';
            this.emit(':ask', WelcomeAudio+"Now guess the animal");
    },
	'seven': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Field+Rat.mp3" />';
             this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'eight': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Goat.mp3" />';
             this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'nine': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'ten': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Horse+whinnying+1.mp3" />';
             this.emit(':ask',WelcomeAudio+ "Now guess the animal ");
    },
	'eleven': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3" />';
            this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'twelve': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Monkey+chatter+2.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'thirteen': function() {
        WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'fourteen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Pig+squeal+1.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'fifteen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal ");
    },
	'sixteen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'seventeen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/deer.mp3" />';
        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'eighteen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3" />';

        this.emit(':ask',WelcomeAudio+ "Now guess the animal ");
    },
	'ninteen': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/frog.mp3" />';

        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'twenty': function() {
             WelcomeAudio = '<audio src="https://s3.amazonaws.com/soundsofanimals/kite.mp3" />';

        this.emit(':ask',WelcomeAudio+ "Now guess the animal");
    },
	'checking': function() {
      var animal = this.event.request.intent.slots.animal.value;
        if (animal==per[WelcomeAudio])
        this.emit(':ask',"yes your are correct");
        else
        this.emit(':ask',"sorry correct answer is "+per[WelcomeAudio]);
	},

    'startquiz':function(){
          this.handler.state = "QUIZMODE";
        this.emitWithState("quizinstructions");

    },

	'Unhandled':function(){
        this.emit(':ask',"Sorry can't get you. please ask one or two or three upto twenty to play a animal sounds or say start quiz to play quiz. make sure that if once quiz is started you cannot play game. Try again");
	},

	'AMAZON.HelpIntent': function() {
        this.emit(':ask', " I will play a animal sound. to listen to animal sounds say one or two or three upto twenty. after the animal sound terminated, Guess the animal by saying ,The animal is .Say start quiz, to play quiz. Beaware that if once quiz is started you cannot play game. say stop quiz to end palying quiz game ");
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz Alexa skill. Hope you enjoyed the game. Good Bye! ");
    },
    'AMAZON.CancelIntent':function() {
        this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz  Alexa Skill. Hope you enjoyed the game . Good Bye! ");
}

};

    var askQuestionHandlers = Alexa.CreateStateHandler("QUIZMODE", {
            
            'quizinstructions':function(){
                
                this.emit(':ask',"Welcome to animals sounds quiz. to listen  quiz questions ask qone or qtwo or qthree upto qten. After question say. true you are correct or false you are wrong to provide answer for question. There is negitive marking please beaware. say end quiz to stop playing quiz  ");
            },
            
            'qone':function(){
                 sound= '<audio src="https://s3.amazonaws.com/soundsofanimals/Cow%2C+moo%2C+cow+moo.mp3" />';
          this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "This animal is buffalo");
                   },

            'qtwo':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/frog.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is frog");
                   },

            'qthree':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Elephant+trumpeting.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is elephant");
                   },

            'qfour':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/dustier_eagle1.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is vulture");
                   },

            'qfive':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Tiger+growl+1.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is tiger");
                   },

            'qsix':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Herd+sheep.mp3" />';
               this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is goat");
                   },

            'qseven':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Lion+roar.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is tiger");
                   },

            'qeight':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Duck+quacking+1.mp3" />';
                this.handler.state = "CHECKMODE";
                this.emit(':ask',sound+ "The animal is Duck");
                   },

            'qnine':function(){
                 sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Mosquito.mp3" />';
        this.handler.state = "CHECKMODE";
                 
                this.emit(':ask',sound+ "The animal sucks the blood");
                   },

            'qten':function(){
                sound = '<audio src="https://s3.amazonaws.com/soundsofanimals/Rooster.mp3" />';
                this.handler.state = "CHECKMODE";
                 
                this.emit(':ask',sound+ "This animal doesn't lay eggs");
                   },

             'endquiz':function(){
//  this.handler.state="CHECKMODE";               
   //             this.emitwithstate("scoreboard");
         this.emit(':tell',"Your score for this quiz is "+score+" out of "+ out + ".  Have a nice day. Bye");
               score=0;
               out=0;
                    //':tell',"Your score for this quiz is "+score+" out of "+ out + ".  Have a nice day. Bye");

             },
             
            //  'myscore':function(){
               
             //this.handler.state = "SCOREMODE";
            //this.emitWithState("scores");
          // },
           

         
         
            'Unhandled':function(){
                this.emit(':ask',"Sorry can get you. please ask the quiz question as, qone, qtwo, qthree upto qten");
            },

            'AMAZON.HelpIntent': function() {
                this.emit(':ask', "Welcome to animals sounds quiz. to listen  quiz questions ask qone or qtwo or qthree upto qten. After question say. true you are correct or false you are wrong to provide answer for qustion. say end quiz to stop playing quiz");
            },

            'AMAZON.StopIntent': function() {
                this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz Alexa skill. Hope you enjoyed the game. Good Bye! ");
            },

            'AMAZON.CancelIntent':function() {
        this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz  Alexa Skill. Hope you enjoyed the game . Good Bye! ");
}
                   });



   var checkAnswerHandlers = Alexa.CreateStateHandler("CHECKMODE", {

        'answer':function(){
            var ans = this.event.request.intent.slots.ans.value;
                    
        if (ans==anss[sound]){
            out=out+1;      
            score=score+1;
            this.handler.state="QUIZMODE";
            this.emit(':ask',"yes your are correct");
                              }    
            else{
                out=out+1;
                score=score-1;
                this.handler.state="QUIZMODE";
                    this.emit(':ask',"No you are wrong");
                    }},

    

    
    
                

       'Unhandled':function(){
      this.emit(':ask',"Sorry cant get you. please provide answer as. true you are correct or false you are wrong. Try again");
       },
              'AMAZON.HelpIntent': function() {
                this.emit(':ask', "please provide answer as. true you are correct or false you are wrong. Try again");
            },

        //   'myscore':function(){
               
          //   this.handler.state = "SCOREMODE";
            //this.emitWithState("scores");
          // },
           
           


            'AMAZON.StopIntent': function() {
                this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz Alexa skill. Hope you enjoyed the game. Good Bye! ");
            },

            'AMAZON.CancelIntent':function() {
                this.emit(':tell', "Thanks for using the Animals sounds gaming and Quiz  Alexa Skill. Hope you enjoyed the game . Good Bye! ");
}          
           
   });   
      



// var checkScore = Alexa.CreateStateHandler("SCOREMODE", {
  //              'scores':function(){
                 
    //             this.emit(':ask',"Your current score is"+score);
                 
      //       }});