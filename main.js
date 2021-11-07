const text = document.getElementById('text');
const load = document.getElementById('loader');
time=3;
let state = 1;
setInterval(() => {
    updateTime();
}, 1000);
function updateTime(){
    if (time!==0){
        time=time-1;
    }
    if (time===0){
        text.innerText = "File 'Trojan436.exe' has been successfully installed to your computer."
        load.remove();
        if(state===1){
            const para = document.createElement('p');
            document.body.appendChild(para);
            para.innerText = "Execution of file 'Trojan436.exe' on your device will start shortly."
            para.classList.add('para');
            state=0;
        }
        
    }
}

