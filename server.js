const express =require("express")

const App=express()

App.use(express.static("public"))


port=process.env.port|| 2000

App.listen(port, function(){
 console.log("app is lisning ")
}


)