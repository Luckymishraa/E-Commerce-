const bar = document.getElementById('bar'); /* const is variable, bar is id of hemburger add the hemburger menu using id */
const close = document.getElementById('close'); /* close icon*/
const nav = document.getElementById('navbar'); /*  navbar should display after clicking the navbar menu */

        // check if the navbar is showing on the screen or not
if(bar){
    bar.addEventListener('click',() =>  {
        nav.classList.add('active');
    })
}
if(close){
     close.addEventListener('click',() =>  {
        nav.classList.remove('active');
    })
}