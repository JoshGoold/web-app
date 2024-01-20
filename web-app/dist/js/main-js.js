    // Add a DOMContentLoaded event listener
    document.addEventListener("DOMContentLoaded", function () {
        $("#dark10").css("color", "black");
        $("#dark11").css("color", "black");
        $("#back").hide();
        $("#blog-header").hide();
        $("#extra-content").hide();
        function updateTime(){
        var time = moment();
        var timeDisplay = time.format('dddd,    HH:mm');
        document.getElementById("time").innerHTML=timeDisplay;
        }
        // Update time every second (1000 milliseconds)
        setInterval(updateTime, 1000);

        // Initial call to display the time immediately
        updateTime();
    
        const darkButton = document.getElementById("dm"); //creating variable to easily access dark mode button

        function changeBackgroundDark(){//created function for pressing dark mode button
            const button = darkButton; //created a local variable to serve as the dark mode button 
            var string = "Light Mode"; //created a variable to switch text of dark mode button to display light mode so you can switvh in between the two
            button.textContent = string; //changing the text content of the button to light mode after being clicked
            $("#fb").css("background-color", "black"); //changing the background color of the document upon button press
            document.body.style.backgroundColor="grey"; //^^ but to grey
            $("#dark1").css("color", "white");// dark 1 - 9 is ids for different fields around the website that need color change
            $("#dark2").css("color", "white");
            $("#dark3").css("color", "white");
            $("#dark4").css("color", "white");
            $("#dark6").css("color", "white");
            $("#dark7").css("color", "white");
            $("#dark8").css("color", "white");
            $("#dark9").css("color", "white");
            $("#dark10").css("color", "white");
            $("#dark11").css("color", "white");
            $("#dark12").css("background-color", "black");
            $("#dark13").css("color", "white");
            $("#dark14").css("color", "white");
            $("#dark15").css("color", "white");
            $("#dark16").css("color", "white");
            $("#dark17").css("color", "white");
            $("#dark19").css("color", "white");
            $("#dark20").css("color", "white");
            $("#dark21").css("color", "white");
            $("#pg1").css("color", "white");
            $("#pg2").css("color", "white");
            $("#HUB").css("color", "white");
            $("#FLD").css("color", "white");
            $("#TAQ").css("color", "white");
            $("#IHP").css("color", "white");
            $("#MTF").css("color", "white");
            $("#WIP").css("color", "white");
            $("#FP").css("color", "white");
            $("#DCD").css("color", "white");
            $("#TRM").css("color", "white");
            $("#d22").css("background-color", "black");
            $("#d22").css("box-shadow", "1px 1px 2px 2px white");
            $("#d23").css("background-color", "black");
            $("#d23").css("box-shadow", "1px 1px 2px 2px white");
            $("#d24").css("background-color", "black");
            $("#d24").css("box-shadow", "1px 1px 2px 2px white");
            $("#d25").css("background-color", "black");
            $("#d25").css("box-shadow", "1px 1px 2px 2px white");
            $("#d26").css("background-color", "black");
            $("#d26").css("box-shadow", "1px 1px 2px 2px white");
            $("#d27").css("background-color", "black");
            $("#d27").css("box-shadow", "1px 1px 2px 2px white");
            $("#d28").css("background-color", "black");
            $("#d28").css("box-shadow", "1px 1px 2px 2px white");
            $("#d29").css("background-color", "black");
            $("#d29").css("box-shadow", "1px 1px 2px 2px white");
            $("#d30").css("background-color", "black");
            $("#d30").css("box-shadow", "1px 1px 2px 2px white");
            $("#dark22").css("background-color", "black")
            $("#weather").css("color", "white");
            $("#time").css("color", "white");
            $("#lm").css("background-image", "url('dist/img/darkmodebackground.jpeg')");
            
        }
        function changeBackgroundLight(){//this function is identical to dark mode but it switched everything back to light mide/ original mode
            const button = darkButton;
            var string = "Dark Mode";
            button.textContent = string;
            $("#fb").css("background-color", "white");
            document.body.style.backgroundColor="grey";
            $("#dark1").css("color", "white");
            $("#dark2").css("color", "white");
            $("#dark3").css("color", "white");
            $("#dark4").css("color", "black");
            $("#dark6").css("color", "white");
            $("#dark7").css("color", "white");
            $("#dark8").css("color", "white");
            $("#dark9").css("color", "black");
            $("#dark10").css("color", "black");
            $("#dark11").css("color", "black");
            $("#dark12").css("background-color", "white");
            $("#dark13").css("color", "black");
            $("#dark14").css("color", "black");
            $("#dark15").css("color", "black");
            $("#dark16").css("color", "black");
            $("#dark17").css("color", "black");
            $("#dark19").css("color", "black");
            $("#pg1").css("color", "black");
            $("#pg2").css("color", "black");
            $("#HUB").css("color", "black");
            $("#FLD").css("color", "black");
            $("#TAQ").css("color", "black");
            $("#IHP").css("color", "black");
            $("#MTF").css("color", "black");
            $("#WIP").css("color", "black");
            $("#FP").css("color", "black");
            $("#DCD").css("color", "black");
            $("#TRM").css("color", "black");
            $("#d22").css("background-color", "white");
            $("#d22").css("box-shadow", "1px 1px 2px 2px black");
            $("#d23").css("background-color", "white");
            $("#d23").css("box-shadow", "1px 1px 2px 2px black");
            $("#d24").css("background-color", "white");
            $("#d24").css("box-shadow", "1px 1px 2px 2px black");
            $("#d25").css("background-color", "white");
            $("#d25").css("box-shadow", "1px 1px 2px 2px black");
            $("#d26").css("background-color", "white");
            $("#d26").css("box-shadow", "1px 1px 2px 2px black");
            $("#d27").css("background-color", "white");
            $("#d27").css("box-shadow", "1px 1px 2px 2px black");
            $("#d28").css("background-color", "white");
            $("#d28").css("box-shadow", "1px 1px 2px 2px black");
            $("#d29").css("background-color", "white");
            $("#d29").css("box-shadow", "1px 1px 2px 2px black");
            $("#d30").css("background-color", "white");
            $("#d30").css("box-shadow", "1px 1px 2px 2px black");
            $("#dark22").css("background-color", "white");
            $("#weather").css("color", "black");
            $("#time").css("color", "black");
            $("#lm").css("background-image", "url('dist/img/background2.webp')");
          
        }
        function changeClass(){
            var element = document.getElementById("dark8");
                if (element.classList.contains("fa-moon")) {
                    element.classList.remove("fa-moon");
                    element.classList.add("fa-sun");
                } else {
                    element.classList.remove("fa-sun");
                    element.classList.add("fa-moon");
                    changeBackgroundLight();
                }
            }
        var textsLoop = document.getElementById("dark23");
        var texts = ['Protect Our Earth', 'Welcome to The Capital', 'Better Future',
                     'Live Well', 'Eat Well', 'Welcome to Earth'];
        var i = 0;
        var time = 3000;
    

    function updateText(){
        textsLoop.textContent = texts[i];
        i = (i + 1) % texts.length; // Increment index and loop back to 0 when reaching the end
            setTimeout("textLoop()", time);
        }
        updateText();
        setInterval(updateText, 4500);
        
        function changeBlogMode() {
            var element= document.getElementsByClassName('link-form');
            if (element.classList.contains('link-form')){
                element.classList.remove('link-form');
                element.classList.add('link-form2');
            } else {
                element.classList.remove('link-form2');
                element.classList.add('link-form');
            }
        }
        
        function blogPageFlip(){
           var blogs = document.getElementsByClassName('page-flip');
           
           var b1 = blogs[0];
           var b2 = blogs[1];
           var b3 = blogs[2];
           var b4 = blogs[3];
           var b5 = blogs[4];
           var b6 = blogs[5];
           var b7 = blogs[6];
           var b8 = blogs[7];
           var b9 = blogs[8];

           b1.textContent= "Emotional Control";
           b2.textContent= "Find a Love for Being Uncomfortable";
           b3.textContent= "Meaning and Purpose in the Universe";
           b4.textContent= "Be Different";
           b5.textContent= "Never Compare Yourself to Others";
           b6.textContent= "Mistakes";
           b7.textContent= "Lifes Most important thing";
           b8.textContent= "Everything in Moderation";
           b9.textContent= "Why do Video Games Get Worse Every Year?"


        }
        function blogPageBack(){
            var blogs = document.getElementsByClassName('page-flip');
            
            var b1 = blogs[0];
            var b2 = blogs[1];
            var b3 = blogs[2];
            var b4 = blogs[3];
            var b5 = blogs[4];
            var b6 = blogs[5];
            var b7 = blogs[6];
            var b8 = blogs[7];
            var b9 = blogs[8];
 
            b1.textContent= "Theory: How a Universe is Born";
            b2.textContent= "The Force of Life and Death";
            b3.textContent= "The Atom Question";
            b4.textContent= "Importance of having Principles";
            b5.textContent= "My Take on Free Will";
            b6.textContent= "What is Peace?";
            b7.textContent= "Failures Purpose";
            b8.textContent= "The Dangers of Cheap Dopamine";
            b9.textContent= "My Take on Religion";
 
 
         }
        
         function slot1(){
            $("#blog-table").hide();
            $("#back").show();
            $("#blog-header").show();
            var header = document.getElementById("blog-header");
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("HUB");
            if (slot.textContent="Theory: How a Universe is Born"){
                header.textContent="Theory: How a Universe is Born";
                blog.innerHTML= "My belief is that black holes are universes<br><br> This would infer that our universe is a black hole, we can observe black holes within <br> our universe, meaning black holes can exist within black holes. This helps understand <br> how truly infinite the universe is, however its not only infinite, it's also infinitely <br> expanding. <br> This theory infers universes can indeed be born, and are actually quite common in <br> nature.<br> <br> A black hole is an infinetly dense point that stretches space time so much it <br> completely breaks modern day physic's. I believe if we are right about a black hole <br> being an infinetly dense point, then in theory that means it would stretch space time <br> infinetly, explaining why our universe is still expanding to this day. however it is not <br> only expanding, it is exponentially expanding. I believe this is because of Dark Energy <br> have an idea what it could be. <br> <br> So what is Dark Energy? I believe it is opposite pole of gravity, eartn sits on a <br> plane of space time, the mass of the earth stretches space time creating what we call <br> gravity, I believe this causes an opposite reaction that expands space time/our <br> universe. Think of what happen's when you throw a rock into a cup of water, the rock <br> increases the water level due to it's mass occupying space. It's the same for planets <br> and space time, I believe Dark Energy is this reaction, and is the cause for our <br> universe's exponential expansion. <br> <br> A newly formed black hole wont't just become a universe. Overtime it's immense <br> gravitational pull, ingests everything in its path, from planets, stars, to entire solar <br> compressed together causing constant friction, creating extreme levels of heat, on top <br> of that through my dark energy theory as the black hole ingests more and more mass, <br> the mass occupies more space, creating more friction and more heat with spacetime <br> as it tries to expand more, which eventually causes an event that we know of as the <br> Big Bang, a new universe is born. <br> <br> If this theory proves to be true that means our universe is infinite, and it is growing. If <br> universes are born, does that mean they can die? If this is true that means large stars <br> are future universes, meaning the birth of a star has a whole new significance.";
            } else {
                header.textContent= "";
                blog.textContent= "";
            }
            

         }
         function slot2(){
            $("#blog-table").hide();
            $("#back").show();
            $("#extra-content").show();
            $("#blog-header").show();
            var header = document.getElementById("blog-header");
            var blog = document.getElementById("blog-content");
            var extra = document.getElementById("extra-content");
            var slot = document.getElementById("FLD");
            if (slot.textContent="The Force of Life and Death"){
                header.textContent="The Force of Life and Death"
                blog.innerText= "The greater the problem, the greater the growth, Never shy away and lose hope \n We all play by the same rules in this life, Never believe you are the best or the worst \n There's always room to grow \n With humility comes wisdom \n Through the eye of wisdom comes understanding \n Be wary of the paths you walk \n And the decisions you make \n Because there are consequences \n For acts of good will reward you \n And acts of evil will destroy you \n This is a law of reality you cannot escape \n Whatever goes around always comes back around \n Act with reason and purpose \n To chose right, is to chose life \n To chose wrong, is to chose death \n The Force of Life and Death \n Or God and Satan \n Satan the force of death is ruler of the material world, and all that is wrong \n God is ruler of life, and all that is good \n Satan is the root of problems, and god is the root of solution \n Both equally as necessary as the other \n As a human you have great responsibility \n Humans are conscious and are held accountable for their decisions because we have the ability to chose right or wrong \n You must understand that you are accountable for every decision you make, as it directly effects your soul \n If you always chose wrong, you will be consumed by your own wickedness. \n Through choosing right will reward you with, humility, fulfillment, peace, virtue, righteousness, and all that is good. \n Through choosing wrong will consume you with greed, desire, hate, arrogance, and all that is bad. \n You ultimately have the choice, to be righteous or to be wicked \n Where one earns life and one faces death. \n One requires strength, one feeds off weakness \n Their is a god and their is a devil, do not take this life for granted \n Take accountability and responsibility for your actions as they are crucial to your soul. \n God is Life, God is Chemistry, God is Evolution, God is a being of all intelligence \n We are his children, follow his path by doing good, and if you seek solution ambitiously you’ll find him. \n Satan is death \n His primary goal is to stray you away from the path of God \n Which ultimately leads to your souls death, \n He has priority over god in this realm \n It’s much easier to follow his path, \n He takes advantage of weakness, \n If you look for the devil you will see him everywhere. \n  Nature has a perfect balance of the force of life and death \n The food chain is the perfect explanation.";
                extra.innerText= "Both forces coexist in a perfect balance so life can always continue, but death still gets his piece \n Life is a war between gods. \n As a conscious being you’re stuck in the middle, you can play both sides \n You can choose life and you can choose death. \n It’s a gift and a curse \n It is up to you on what you make it";
            } else {
                blog.textContent= "";
            } 
         }
         function slot3(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("TAQ");
            if (slot.textContent="The Atom Question"){
                blog.innerText= "";
            } else {
                blog.textContent= "";
            } 
         }
         function slot4(){
            $("#back").show();
            $("#blog-table").hide();
            $("#blog-header").show();
            var header = document.getElementById("blog-header");
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("IHP");
            if (slot.textContent="Importance of Having Principles"){
                header.textContent="Importance of Having Principles";
                blog.innerText= "Many young adults will struggle to be accountable and \n responsible for their decisions. Many will mindlessly be \n wandering through life improvising every decision they \n make, with no direction or goal to chase. \n \n Principles give structure to your character making you \n more respectable and trustworthy to yourself and those \n around you. \n \n Every individual must build a set of principles that define \n who they are. \n \n Principles are a set of rules you make for yourself based on \n what it is you want to achieve, they will hold you \n accountable and responsible for your decisions and will \n give direction to your life that you can know is always \n aligned with your best interests. \n \n To begin building the principles that define your character, \n you must ask yourself. What do you want? How will you \n achieve it? \n \n Take your time on this question, once you have an idea of \n what you want from your life, design a set of principles you \n will follow so you can reach your goals. \n \n As an example, say what you really want to do is to be \n healthier. Your principles would look like, I eat only when \n necessary, I only eat foods that supply my body with what it \n needs, I exercise every day, I do not indulge in drug use, I \n go to bed and wake up at the same time everyday, you get \n the point. \n \n You can build principles like this for just about every aspect \n of your life. \n \n You can have work principles, relationship principles, \n routine principles, investing principles, mental principles, \n and many more. I guarantee if you apply this to your life it will be much \n easier to hold yourself accountable, it will be much easier \n to stay responsible, and it will be much easier to get what \n you want. \n \n Without principles your life has no direction \n \n I challenge everyone who reads this and really wants to \n take the next step in maturing and bettering themselves to \n build your own principles reflecting what you want from life, \n to stop mindlessly improvising through every twist and turn \n life throws at you, take control of your life and make it what \n you want it to be.";
            } else {
                blog.textContent= "";
            } 
         }
         function slot5(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("MTF");
            if (slot.textContent="My Take on Free Will"){
                blog.textContent= "";
            } else {
                blog.textContent= "";
            } 
         }
         function slot6(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("WIP");
            if (slot.textContent="What is peace?"){
                blog.textContent= "";
            } else {
                blog.textContent= "";
            } 
         }
         function slot7(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("FP");
            if (slot.textContent="Failures Purpose"){
                blog.textContent= "";
            } else {
                blog.textContent= "";
            } 
         }
         function slot8(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("DCD");
            if (slot.textContent="The Dangers of Cheap Dopamine"){
                blog.textContent= "";
            } else {
                blog.textContent= "";
            } 
         }
         function slot9(){
            $("#blog-table").hide();
            var blog = document.getElementById("blog-content");
            var slot = document.getElementById("TRM");
            if (slot.textContent="My Take on Religion"){
                blog.textContent= "";
            } else {
                blog.textContent= "";
            } 
         }
         function backHome(){
            var content = document.getElementById("blog-content");
            var extra = document.getElementById("extra-content");
            $("#blog-header").hide();
            $("#extra-content").hide();
            content.textContent= "";
            extra.textContent= "";
            $("#blog-table").show(1000);

         }

            $("#main-header").hide();
            $("#main-header").show("slow");
            $("#dm").click(changeBackgroundDark);
            $("#dm").click(changeClass);
            $("#dm").click(changeBlogMode);
            $("#pg2").click(blogPageFlip);
            $("#pg1").click(blogPageBack);
            $("#d22").click(slot1);
            $("#d23").click(slot2);
            $("#d24").click(slot3);
            $("#d25").click(slot4);
            $("#d26").click(slot5);
            $("#d27").click(slot6);
            $("#d28").click(slot7);
            $("#d29").click(slot8);
            $("#d30").click(slot9);
            $("#back").click(backHome);

            
        
    });

   