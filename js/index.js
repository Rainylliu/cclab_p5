var mouse = document.querySelector('.mouse');
window.addEventListener('mousemove', function (event) {
    mouse.style.left = event.clientX - mouse.offsetWidth / 2 + 'px';
    mouse.style.top = event.clientY - mouse.offsetHeight / 2 + 'px';
})



/* 

answer：

*/



document.querySelectorAll('a')[0].addEventListener('click', function (e) {

    e.preventDefault()

    /* 
    
    A
    
    */

    let key = document.querySelector('h6').textContent.split('.')[0].match('\\d+')[0]

    let a = document.querySelectorAll('a')[0]

    if (/res/g[Symbol.match](a.href)?.length > 1) {
        /* result */
    }
    else {
        console.log(key);
        localStorage.setItem(key, "A")
    }


    window.location.href=a.href


})

document.querySelectorAll('a')[1].addEventListener('click', function (e) {
    e.preventDefault()

    /* 
    
    B
    
    */

    let key = document.querySelector('h6').textContent.split('.')[0].match('\\d+')[0]

    let a = document.querySelectorAll('a')[1]

    if (/res/g[Symbol.match](a.href)?.length > 1) {
        /* result */
    }
    else {
        console.log(key);
        localStorage.setItem(key, "B")
    }

    window.location.href = a.href

})

