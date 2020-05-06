document.addEventListener("DOMContentLoaded", function(){
    msg = document.getElementById('msg')
    msg.style.display='none'
    loadEmpList()
});

//load todo list
const loadEmpList = ()=>{
    fetch('/AllEmployees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json()).then((records) => {
        console.log(records)
        var dv = document.getElementById('lst')
        records.forEach(element => {
            var tag = document.createElement('div')
            var crd = document.createElement('div')
            var crd_bdy = document.createElement('div')
            var prg = document.createElement('p')
            var hd = document.createElement('h5')
            tag.setAttribute('class','col-sm-3')
            crd.setAttribute('class','card')
            crd_bdy.setAttribute('class','card-body')
            hd.setAttribute('class','card-title')
            prg.setAttribute('class','card-text')
            var task = document.createTextNode(element.FirstName + ' '+element.LastName)
            var desc = document.createTextNode(element.Email)
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