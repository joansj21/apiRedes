
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



app.post("/login/:userName/:password/end",(req,res)=>{
   
   // let nombre = req.body.userName; //undefined recupera el nombre
  //  let pass = req.body.password;//recupera la contraseña

    let nombre = req.params.userName; //undefined recupera el nombre
    let pass= req.params.password;//recupera la contraseña


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
           
            try {
                         if(data.code==="UserDefinedResourceError"){
                                 
                                  data={Error:"Error"}
        
                                     


                            }
                 }
                 catch(err) {
           
                 }

                 res.send(
                    data
            
                )

            
        }else{
            res.send(
                {
                    items:"fallo"
            
                }
        
        
            )
        }
    });

})




//////////////////////

app.post("/register/:userName/:name/:password/:ADMIN/:MAIL/registerEnd",(req,res)=>{

    let userNameApi=req.params.userName
    let nameApi=req.params.name
    let passwordApi=req.params.password
    let ADMINApi=req.params.ADMIN
    let MAILApi=req.params.MAIL

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
            
           
            try {
                const data = JSON.parse(body);
                
               
               
                if(data.code){

                    
                    res.status("401").send(
                        {data:"ERROR"}
                
                    )
                    
                }
                    
                
            
            }

            catch(err) {
                res.status("200").send(
                    {data:"Exitoso"}
            
                )
              }
           
            

            
        }else{
            res.send(
                {
                    items:"fallo"
            
                }
        
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
          
          
           
            res.send(
                data
        
            )

            
        }else{
            res.send(
                {
                    items:"fallo"
            
                }
        
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