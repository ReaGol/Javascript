
const onLight=document.querySelector(".on")
const offLight=document.querySelector(".off")
const container= document.querySelector(".container")

container.addEventListener("click",x=()=>{
    const lightStatus=window.getComputedStyle(onLight).getPropertyValue("visibility")
    if(lightStatus=="hidden"){
        onLight.style.visibility="visible";
        offLight.style.visibility="hidden";
    }

    else if(lightStatus=="visible"){
        onLight.style.visibility="hidden";
        offLight.style.visibility="visible";
    }
    
})