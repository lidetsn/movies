const express =require("express")

const App=express()


port=process.env.port|| 2000



App.listen(port, function(){
 console.log("app is lisning ")
}


)