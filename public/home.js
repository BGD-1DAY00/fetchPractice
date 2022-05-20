const btn = document.querySelector('#submitBtn')
const form = document.querySelector('form')
const updateBtn = document.getElementById('updateMongoBtn')
async function submitBtn(e){
    e.preventDefault();
    const a = form.info.value
    const b = form.flname.value
    const c = form.bday.value
    let obj = {"name": a, "info": b, "birthDay": c}
    const data = await postData(obj)
    console.log(data)
    form.bday.value = ''
    form.flname.value = ''
    form.info.value = ''
}
function enterBtn(e){
    if(e.key === 'Enter'){
        e.preventDefault()
        form.info.value = ''
        form.bday.value = ''
        form.flname.value =''
    }
}
async function updatingData(e){
    e.preventDefault()
    console.log(e.target.id)
    const updateFromMongo = await fetch(`/${e.target.id}`, {
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({b: e.parentElement})
    })
    const a= await updateFromMongo.json()
    console.log(a)
}
async function postData(obj){
    const response = await fetch('/home', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    const content = await response.json();
    console.log(typeof content)
    return content

}
btn.addEventListener('click', submitBtn)
updateBtn.addEventListener('click', updatingData)
form.info.addEventListener('keyup', enterBtn)