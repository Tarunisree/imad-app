var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content={
    title:'Article One | Taruni',
    heading:'Article One',
    date: 'August 17 2017',
    content:`<div text align=center > 
        
            <p>
                
                                                                    This is my second article. This is my second article. This is my second article. This is my second article
            
            </p>
            
            <p>
            
                                                                    This is my second article. This is my second article. This is my second article. This is my second article. 
          
            </p>
            <p>
                
                                                                      This is my second article. This is my second article. This is my second article. This is my second article.
        
            </p>`
            };`
   function createTemplate(data) {  
   var titl=data.title
   var date=data.date
   var heading=data.heading
   var content=data.content
   
var htmlTemplate= `
    <html>
     < head >
        < title > 
    
            ${title}
    
        < /title >
    
    
        <meta name="viewport" content="width=device-width, initial-sacle=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        
    
    </ head >
    < body >
        <div class="container">
          <div text align=center> 
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div text align=center>
            ${date}
        </div>
        ${content}
        </div>
        </div>
    </body>
</html> `;
return htmlTemplate;
}
  app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function (req,res) {
res.send(createTemplate(article-one));
});
app.get('/article-two',function (req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function (req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
