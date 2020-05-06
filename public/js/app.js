const todo_list_form = document.querySelector('form')

//variables
var title = document.querySelector("input[name='title']")
var activity = document.querySelector("input[name='activity']")
var description = document.querySelector("input[name='desc']")
var place = document.querySelector("input[name='place']")
var date = document.querySelector("input[name='date']")
var time = document.querySelector("input[name='time']")

//document.getElementById('success').style.display='none'
//document.getElementById('error').style.display='none'
//var total = document.querySelector('#total')

const url = '/todoList'

todo_list_form.addEventListener('submit', (e) => {
    e.preventDefault()
    //creating the todo_list object
    var todo_list = {
        title: title.value,
        activity: activity.value,
        description: description.value,
        place: place.value,
        date: date.value,
        time: time.value,
    }

   sendTodoList(url,todo_list)
    
})

const sendTodoList = (url, data) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()).then(({message,data,records}) => {
            total.textContent=records
            //document.getElementById('success').style.visibility='visible'
            //clearFormValues()
        }).catch((error) => {
            setTimeout(()=>{
                document.getElementById('success').style.visibility='visible'
             } ,5000)
        });
}

//clear form values
const clearFormValues=()=>{
    setTimeout(()=>{
        title.value = ""
        activity.value = ""
        description.value = ""
        place.value =""
        date.value =""
        time.value =""
    },5000)
}


