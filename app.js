//simple express file this will show the message in  localhost:3000

// var express = require('express');
// var app = express();
// app.get('/',function(req,res){
//     res.send("welcome to express-js");
// });
// app.listen(3000);





// another way to run on terminal only

// const express  = require('express');

// const app = express();
// const PORT = 3000;

// app.listen(PORT, (error)=>{
//     if(!error)
//         console.log("Server is successfully running on port",+PORT )
//     else
        // console.log("error occurred",error);
// });





// const express = require('express');
// const PORT = 3000;
// const app = express();

// app.get('/',(req,res)=>{  //using arror function
//     res.status(200);
//     res.send("welcome to root URL of Server");
// });
// app.listen(PORT,(error)=>{
//     if(!error)
//         console.log("server running on port",+PORT);
//     else
//         console.log("error occurred , server can't start",error);
// });





// Setting up one more get request route on the ‘/hello’ path. 

// const express  = require('express');
// const app = express();
// const PORT = 3000;
// app.get('/home',(req,res)=>{
//     res.set('Content-Type','text/html');
//     res.status(200).send("<h1>hello welcome!!!</h1>");
// });
// app.listen(PORT,(error)=>{
//     if(!error)
//         console.log("server running on port "+PORT);
//     else
//         console.log("error occurred ",error);
// }
// );




// Setting up a basic get request route on the root URL (‘/’ path) of the server.

const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
app.post('/',(req, res)=>{
    const {name} = req.body;
    res.send(`welcome ${name}`);
})

app.listen(PORT, (error)=>{
    if(!error)
        console.log("server is successfully running at port" ,+PORT);
    else
        console.log("error occurred , server can't start",error);
});

