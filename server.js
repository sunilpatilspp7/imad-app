var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var artcileOne={
    title:'Article One|Sunil',
    heading:'Article One',
    Content:    ` <p>
               Early birds earn better grades in school: In 2008, a study was conducted at Texas University in which people identified themselves as "morning people" or "night owls." It was found that those who identified as early risers, on average, earn a full point more in their GPA than night owls (3.5 GPA vs. 2.5 GPA).
                        Get better sleep: If you can consistently wake up early, you're more likely to be able to go to bed at a reasonable hour. The better sleep is also a product of exerting more energy throughout the day due to a longer day. 
             </p>`

};


function creatTemplate(data){
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

app.get('/article-one', function (req, res) {
  res.send(htmlTemplate(articleOne));
});

app.get('/ui/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/image.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'image.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
