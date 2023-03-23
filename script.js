var be = "Habit 1: Be Proactive is about taking responsibility for your life. Proactive people recognize that they are “response-able.” They don’t blame circumstances, conditions, or conditioning for their behavior. They know they can choose their behavior. Reactive people, on the other hand, are often affected by their physical environment. They find external sources to blame for their behavior. If the weather is good, they feel good. If it isn’t, it affects their attitude and performance, and they blame the weather";
var begin = "Habit 2: Begin With the End in Mind is based on imagination—the ability to envision in your mind what you cannot at present see with your eyes. It is based on the principle that all things are created twice. There is a mental (first) creation, and a physical (second) creation. The physical creation follows the mental, just as a building follows a blueprint"
var put = "Habit 3: Put First Things First is the exercise of independent will toward becoming principle-centered. Habit 3 is the practical fulfillment of Habits 1 and 2. Habit 1 says, “You are the creator. You are in charge.” Habit 2 is the first mental creation, based on imagination, the ability to envision what you can become. Habit 3 is the second creation, the physical creation"
var win = "Habit 4: Think Win-Win is the belief that everyone can win. It's not me or you—it is both of us. It is a belief that there are enough good things for everyone; it is an abundant way of thinking. Think Win-Win is being happy for others when good things happen to them"
var seek = "Habit 5: Seek first to understand then to be understood is one of the habits developed by Stephen Covey in the book, The 7 Habits of Highly Effective People. Covey identified that in order to build deep relationships and lead with clarity, you need to first truly understand what people are both saying and feeling when in conversation. This is normally referred to as empathic listening. Once you understand their story, then and only then you reply, based on what they have said"
var synergy = "Habit 6: To put it simply, synergy means “two heads are better than one.” Synergize is the habit of creative cooperation. It is teamwork, open-mindedness, and the adventure of finding new solutions to old problems. But it doesn’t happen on its own. It’s a process, and through that process, people bring all their personal experience and expertise to the table"
var sharpen = "Sharpen the Saw means preserving and enhancing the greatest asset you have—you. It means having a balanced program for self-renewal in the four areas of your life: physical, social/emotional, mental, and spiritual.";
const quotes = [" “Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” —Abraham Lincoln ","“You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar","“Inspiration does exist, but it must find you working.” —Pablo Picasso","“More is lost by indecision than wrong decision.” —Marcus Tullius Cicero", "“When you have a dream, you've got to grab it and never let go.” - Carol Burnett","“Nothing is impossible. The word itself says 'I'm possible!” -Audrey Hepburn", "“There is nothing impossible to they who will try.” -Alexander the Great", "“Keep your face always toward the sunshine, and shadows will fall behind you.” -Walt Whitman", "“Success is not final, failure is not fatal: it is the courage to continue that counts” -Winston Churchill", "“You can be everything. You can be the infinite amount of things that people are” -Kesha"];


function h1(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Be Proactive";
    document.getElementById('popup-text').innerText = be;
}

function h2(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Begin With the End in Mind";
    document.getElementById('popup-text').innerText = begin;
}

function h3(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Put First Things First";
    document.getElementById('popup-text').innerText = put;
}

function h4(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Think Win-Win";
    document.getElementById('popup-text').innerText = win;
}

function h5(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Seek First to Understand, Then to Be Understood";
    document.getElementById('popup-text').innerText = seek;
}

function h6(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Synergize";
    document.getElementById('popup-text').innerText = synergy;
}

function h7(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Sharpen the Saw";
    document.getElementById('popup-text').innerText = sharpen;
}

function popupbttn(){
    document.getElementById('popup').style.display = "none";
    document.getElementById('main-content').style.display = "block";
    document.getElementById('popupcard').innerHTML = "";
    document.getElementById('popup-text').innerText = "";
}

function quote(){
    document.getElementById('popup').style.display = "block";
    document.getElementById('main-content').style.display = "none";
    document.getElementById('popupcard').innerHTML = "Quote";
    document.getElementById('popup-text').innerText = quotes[Math.floor(Math.random() * 10)];
    console.log(random);
}
