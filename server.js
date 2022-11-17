
const express = require('express'); // importar libreria
const request = require("request");
const exphbs = require("express-handlebars");
const cors = require('cors');
const port =3001
const app = express();

app.use(cors());
app.use(express.json());//para que el server sepa que se le envian JSon

app.engine('handlebars', exphbs.engine({
    layoutsDir: 'views/', // directory to handlebars files
    defaultLayout: null,
    extname: 'handlebars'
  })
);
app.set("view engine","handlebars");



app.post("/login",(req,res)=>{
    let nombre = req.body.userName; //undefined recupera el nombre
    let pass = req.body.password;//recupera la contraseña
    console.log(nombre)
    console.log(pass)
    res.removeHeader('Transfer-Encoding');
    res.removeHeader('X-Powered-By');



    let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/login/'
        const datos= {
        uri: url,
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName:nombre,
            password:pass
            })
        
       
        
    };
    

    request(datos,(err,response,body)=>{
        
        if (!err){
            const data = JSON.parse(body);
            console.log(body)
           
           
            res.send(
                data
        
            )

            
        }else{
            res.send(
                data
        
        
            )
        }
    });

})




//////////////////////

app.post("/register",(req,res)=>{

    let userNameApi=req.body.userName
    let nameApi=req.body.name
    let passwordApi=req.body.password
    let ADMINApi=req.body.ADMIN
    let MAILApi=req.body.MAIL

    res.removeHeader('Transfer-Encoding');
    res.removeHeader('X-Powered-By');



    let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/register/'
        const datos= {
        uri: url,
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                userName:userNameApi,
                name:nameApi,
                password:passwordApi,
                ADMIN:ADMINApi,
                MAIL:MAILApi
            }
            
            )
        
       
        
    };
    

    request(datos,(err,response,body)=>{
        
        if (!err){
           
            
           
            res.send(
                body
        
            )

            
        }else{
            res.send(
                body
        
            )
        }
    });

})

/////////////

app.get("/ipBlock",(req,res)=>{

    res.removeHeader('Transfer-Encoding');
    res.removeHeader('X-Powered-By');


    let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/ipBlock/'
        const datos= {
        uri: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json' },

        
       
        
    };
    

    request(datos,(err,response,body)=>{
        
        if (!err){
            const data = JSON.parse(body);
          
            console.log(data)
           
            res.send(
                data
        
            )

            
        }else{
            res.send(
                data
        
            )
        }
    });

})

///////////////



/////////////

app.post("/ipBlock2",(req,res)=>{

    let ipUser=req.body.ip
   // console.log(ipUser)
    res.removeHeader('Transfer-Encoding');
    res.removeHeader('X-Powered-By');
    
    let url = 'https://g5ab0d028fce44a-proyecto.adb.us-phoenix-1.oraclecloudapps.com/ords/proyecto/proyecto/ipBlock/'
        const datos= {
        uri: url,
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                ip:ipUser,
                descrip:"Bloquedo en la pagina del grupo F ",
            }
            
            )

        
       
        
    };
    

    request(datos,(err,response,body)=>{
        
        if (!err){
           return body

            
        }else{
            res.send({
                items:"fallo"
        
            })
        }
    });

})

///////////////





console.log('Iniciando Server');
app.listen( port) // puerto del server
console.log('Server Iniciado');