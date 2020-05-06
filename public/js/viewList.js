document.addEventListener("DOMContentLoaded", function(){
    loadTodoList()
});

//load todo list
const loadTodoList = ()=>{
    fetch('/AllTodoList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json()).then((records) => {
            var dv = document.getElementById('lst')
            records.forEach(element => {
                var tag = document.createElement('div')
                var crd = document.createElement('div')
                var crd_bdy = document.createElement('div')
                var prg = document.createElement('p')
                var hd = document.createElement('h5')
                tag.setAttribute('class','col-sm-6')
                crd.setAttribute('class','card')
                crd_bdy.setAttribute('class','card-body')
                hd.setAttribute('class','card-title')
                prg.setAttribute('class','card-text')
                var task = document.createTextNode(element.Task)
                var desc = document.createTextNode(element.Description)
                hd.appendChild(task)
                prg.appendChild(desc)
                crd_bdy.appendChild(hd)
                crd_bdy.appendChild(prg)
                crd.appendChild(crd_bdy)
                tag.appendChild(crd)
                dv.appendChild(tag)
            });
        }).catch((error) => {
            console.log(error)
    });
}