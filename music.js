function showmenubar(){
    let menu = document.getElementById('h1')
    menu.style.display = 'block'
    let openimg = document.getElementById('open-img')
    openimg.style.display= 'none'
    let closeimg = document.getElementById('close-img')
    closeimg.style.display = 'block'
    menu.style.transition = 'all 200ms'
}
function closemenubar(){
    let menu = document.getElementById('h1')
    menu.style.display = 'none'
    let closeimg = document.getElementById('close-img')
    closeimg.style.display = 'none'
    let openimg = document.getElementById('open-img')
    openimg.style.display= 'block'
}