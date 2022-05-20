const btn = document.getElementById('btnData')
const disData = document.getElementById('displayDataFromServer')

 async function handle(e){
    e.preventDefault();
    const a = await getDataNow()
     console.log(a)
    const c = await display(a)
     console.log(c)

     let delButton = document.querySelectorAll('.deleteMongo')
     console.log(delButton)
     for(let i of delButton){
         i.addEventListener('click', deletingData)
     }
     let updateButton = document.querySelectorAll('.updateButton')
     for(let i of updateButton){
         i.addEventListener('click', updatingData)
     }

}

//Deleting Button
async function deletingData(e){
    e.preventDefault()
    console.log(e.target.id)
    const deleteFromMongoDb = await fetch(`/${e.target.id}`, {
        method:'DELETE'
    })
    window.location.reload()
    return deleteFromMongoDb
}

async function updatingData(e){
    console.log(e.target.id)
    const getToOtherPage = await fetch('/getToOther')
    // const updateFromMongo = await fetch(`/${e.target.id}`, {
    //     method:'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({b: e.parentElement})
    // })
    // console.log(updateFromMongo)
    return getToOtherPage
}
//Getting All DATA
async function getDataNow(){
    const response = await fetch('/index')
    return await response.json()

}
//Display Data
async function display(a){
    let html = ''
    for(let i =0; i <a.length; i++){
        html+= `<div class="fetchData"><div id="makeitbetter"><h1>${a[i].info}</h1><button class="deleteMongo" id=${a[i]._id} type="submit">X</button></div><h3>${a[i].name}</h3><h3>${a[i].birthDay}</h3><button id=${a[i]._id} class="updateButton" >Update Your Data</button></div>`
    }
    return disData.innerHTML = html
}

//Event Handler; Starting Position
btn.addEventListener('click', handle)
