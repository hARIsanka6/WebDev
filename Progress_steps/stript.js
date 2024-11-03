let progress = document.getElementById('progress')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let circles = document.querySelectorAll('.circle')

console.log(circles)

let curr_active = 1


next.addEventListener('click',function () {
    curr_active++
    
    if(curr_active > circles.length){
        curr_active = circles.length
    }
    
    update()
    
})

prev.addEventListener('click',function (){
    curr_active--
    if(curr_active < 1){
        curr_active = 1
    }

    update()

})


function update(){
    circles.forEach((circle,indx) => {
        if((indx) < curr_active){
            circle.classList.add('active')
            
        }else{
            circle.classList.remove('active')
        }
        console.log({$index:indx,$circle:circle})
        
    });

    let actives = document.querySelectorAll(".active")
    console.log((actives.length-1) / (circles.length-1))
    progress.style.width = ((actives.length-1) / (circles.length-1))*100 + "%"

    if(curr_active === 1){
        prev.disabled = true
    }else if(curr_active === circles.length){
        next.disabled = true

    }else{
        prev.disabled = false
        next.disabled = false
    }

}
