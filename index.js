const primaryNav = document.querySelector('#primary-nav');
const toggleNav = document.querySelector('.toggle-nav-btn');

toggleNav.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute('data-visible')
    // console.log(visibility);
    if (visibility === 'false'){
        primaryNav.setAttribute('data-visible', true)
    }
    if (visibility === 'true'){
        primaryNav.setAttribute('data-visible', false)
    }
})