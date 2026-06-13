const { reject } = require("async")

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("DataId :"+dataid)
        if(getnextdata){
            getnextdata()
        }
    },2000)
}
getdata(1,()=>{
    getdata(2,()=>{
         getdata(3,()=>{
             getdata(2,()=>{
                    getdata(5)
            }) 
       })
    })
})

//second method

function getdata(dataid){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data is :"+dataid)
            reject("its not fullfilled")
        },30000)
    })
}
getdata(1).then(()=>getdata(2)).then(()=>getdata(3)).catch((err)=>{console.log("error")})