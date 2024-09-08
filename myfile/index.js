let forminput=document.querySelector("input")
let downloadbtn=document.querySelector("button")
downloadbtn.addEventListener("click",e=>{
    e.preventDefault()
    fetchFile(forminput.value)

})
function fetchfile(url){

    fetch(url).then(res=>res.blob()).then(file=>{
        let tmpurl=URL.createObjectURL(file)
        let atag=document.createElement("a")
        atag.href=tmpurl
        atag.download=url.replace(/^.*[\\\/]/,'')
        document.body.appendChild(atag)
        atag.click()
        atag.remove()
    })
}