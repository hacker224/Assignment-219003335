const add_emp_form = document.querySelector('form')

//variables
var fname = document.querySelector("input[name='fname']")
var lname = document.querySelector("input[name='lname']")
var email = document.querySelector("input[name='email']")
var dept = document.querySelector("input[name='dept']")
var dob = document.querySelector("input[name='dob']")
var phone = document.querySelector("input[name='phone']")

const url = '/addEmployee'
var msg_div = document.getElementById('msg')
var success = document.getElementById('success')
success.style.display='none'

add_emp_form.addEventListener('submit', (e) => {
    e.preventDefault()
    //creating the todo_list object
    var empData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        dept: dept.value,
        dob: dob.value,
        phone: phone.value,
    }
    sendEmployee(url,empData)    
})

const sendEmployee = (url, data) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()).then(({message}) => {
            success.style.display='block'
            msg_div.textContent=message
            clearFormValues()
        }).catch((error) => {
        });
}

//clear form values
const clearFormValues=()=>{
    setTimeout(()=>{
        fname.value=""
        lname.value=""
        email.value=""
        dept.value=""
        dob.value=""
        phone.value=""
        success.style.display='none'
    },5000)
}