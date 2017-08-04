var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:'Article One|Sunil',
    heading:'Article One',
    content:    ` <p>
               Early birds earn better grades in school: In 2008, a study was conducted at Texas University in which people identified themselves as "morning people" or "night owls." It was found that those who identified as early risers, on average, earn a full point more in their GPA than night owls (3.5 GPA vs. 2.5 GPA).
                        Get better sleep: If you can consistently wake up early, you're more likely to be able to go to bed at a reasonable hour. The better sleep is also a product of exerting more energy throughout the day due to a longer day. 
             </p>`

};

var articleTwo={
    title:'Article two|Sunil',
    heading:'Article two',
    content:    ` <p>
               Nature Neuroscience recently published a study with the incredible revelation that brain scanners could predict whether a person would hit a button with their left or right hand a whopping seven seconds before the person was even aware of the decision.
                </p>
                
<b>S E V E N. S E C O N D S.</b>

<b>Think about what that means.</b>

<p>That means that the subjects deliberating in their mind about which hand to decide to press the button with was pointless.

This means that at least with regard to basic, simple decisions, the subconscious activity of the mind makes its choices before the choice becomes a part of our conscious reality.
</P>
<p>
If you think about this logically with regards to our emotional reactions to situations, it makes a ton of sense.

Imagine you are confronted with a stressful situation or one that makes you angry. Your subconscious decides that you are going to be angry and then the thoughts you have literally tell you what to feel and why it is justified. The only thing weird about it is the fact that we genuinely believe it is the other way around
</P>
<p>
Most people hear this fact and they think "oh, interesting." It never crosses their mind again - or they might tell it to someone else in passing conversation.
</p>
<h>
STOP.
</h>
<p>
Think for a moment how valuable this information is. 

See if you can catch yourself deliberating or justifying some unpleasant emotion. Even when we deliberate, we usually FEEL that there is only one proper course of action to take. If you catch yourself doing it, see if you can catch it again, and again. 

If we make us of this knowledge, it has the potential to change the way we live. 
             </p>`

};


var articleThree={
    title:'Article three|Sunil',
    heading:'Article three',
    content:    ` 
             <p>
               Early birds earn better grades in school: In 2008, a study was conducted at Texas University in which people identified themselves as "morning people" or "night owls." It was found that those who identified as early risers, on average, earn a full point more in their GPA than night owls (3.5 GPA vs. 2.5 GPA).
              </p>
              <p>
                    Early risers are more proactive: Christopher Randle, a Harvard psychologist proved that morning people are more likely to identify and set long-term goals for themselves. The study also found that these same early risers are more likely to believe that they're in charge of actually making their goals come to fruition. 
              </p>
              <P>
                        Better at anticipating problems: Morning risers are better at anticipating problems and solving them efficiently and quickly than others. 
               </P>            
                  <P>       
                        Optimism is enhanced: There have been multiple studies conducted that show that morning people more often exhibit traits like optimism, agreeability, satisfaction, and conscientiousness. Although "night owls" often exhibit traits like intelligence and creativity, they're also more likely to be depressed, neurotic and pessimistic. 
                   </P>    
                    <p>
                        Enhanced ability to organize in work and life: Studies have proven that people who wake up early in the morning are better at planning, both in the short term and long term. 
                    </p>     
                     <p>      
                        Take better care of themselves: As logical as it is, there is research behind the fact that morning risers inevitably have more time to exercise and take care of themselves mentally, emotionally and physically before the day starts. The same research conclusively shows that this has the effect of boosting their energy and productivity for the day. 
                    </p>        
                     <p>     
                        Get better sleep: If you can consistently wake up early, you're more likely to be able to go to bed at a reasonable hour. The better sleep is also a product of exerting more energy throughout the day due to a longer day. 
                     
             </p>`

};


function createTemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplate= `
    <!DOCTYPE html>
<html>
    <head>
         <title>
      ${title}
         </title>
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
    </head> 
     <body>
         <div class="container">
         <div>
             <a href="/">Home</a>
         </div>
         <hr>
         
         <div>
            ${heading}
         </div> 
         <div>
             
              ${content}
             
             </div>
         </div>
     </body>       
</html>
`;
return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
 
 var counte=0;
app.get('/counter',function(req, res){
    counter=counte+1;
   res.send(counter.toString()); 
});
app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});

app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});

app.get('/ui/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
