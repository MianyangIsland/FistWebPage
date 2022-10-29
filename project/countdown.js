let time = 60;
let text = document.getElementById('textinput');
let miao = document.getElementById('miao');
let leaveText = document.getElementById('leaveText')
let daojishi = setInterval(()=>{
   if(time == 0)
   {
    time = 60;
    miao.innerHTML = time.toString();
   }
   else
   {
    time = time - 1;
    miao.innerHTML = time.toString();
   }
},1000)



function leaveMessage(){
    let li = document.createElement('li');
    li.innerHTML = text.value;
    li.className = 'leaveItem';
    leaveText.appendChild(li)
}
