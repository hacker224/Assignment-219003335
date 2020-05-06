const collection = 'employeeList'
//a function to save todo list in database
const saveEmployee = (data,db,callback)=>{
    db.collection(collection).insertOne(data).then((response)=>{
        callback(undefined,'success')
    }).catch((err)=>{
        callback(err,undefined)
    })
}

const fetchEmployeeList = (db,callback)=>{
    db.collection(collection).find({}).toArray((error,result)=>{
        if(error) callback(error,undefined)
        callback(undefined,result)
    })
}

module.exports= {saveEmployee,fetchEmployeeList}

