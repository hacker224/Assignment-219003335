const collection = 'todo'
//a function to save todo list in database
const saveTodoList = (data,db,callback)=>{
    db.collection(collection).insertOne(data).then((response)=>{
        fetchFirstFive(db,(error,result)=>{
            if(error) callback(error,undefined)
            callback(undefined,result)
        })
    }).catch((err)=>{
        callback(err,undefined)
    })
}

const fetchFirstFive = (db,callback)=>{
    db.collection(collection).find({}).limit(5).toArray((error,result)=>{
        if(error) callback(error,undefined)
        callback(undefined,result)
    })
}

const fetchAllTodoList = (db,callback)=>{
    db.collection(collection).find({}).toArray((error,result)=>{
        if(error) callback(error,undefined)
        callback(undefined,result)
    })
}

//count the number of documents in a collection
const countDocuments = (db)=>{
    return db.collection(collection).count()
}

module.exports= {saveTodoList,fetchFirstFive,fetchAllTodoList,countDocuments}

