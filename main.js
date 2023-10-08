
let edit_pos = false;
let env_pos = [0,0];
let ms_startpoint = [0,0];
let ms_pos = [0,0];
let last = [0,0];
let moving = false;

document.addEventListener('mousemove', (mouse)=>{
    ms_pos = [mouse.pageX, mouse.pageY];
    last = [mouse.pageX, mouse.pageY];
})


document.addEventListener('mousedown', function(mouse) {
    if (mouse.button === 1) {
      edit_pos = true;
      document.getElementById('environment').style.cursor = "crosshair";
      ms_startpoint = [mouse.pageX, mouse.pageY]
    }
});

document.addEventListener('mouseup', function(mouse) {
    if (mouse.button === 1) {
      edit_pos = false;
      document.getElementById('environment').style.cursor = "pointer";
    }
});


setInterval(update, 1);

function update(){
    switch(edit_pos){
        case false:
            return;
        case true:
            move_env();
            break;
    }
}

function move_env(){
    env_pos = [env_pos[0] + (ms_pos[0] - ms_startpoint[0])/50, env_pos[1] + (ms_pos[1] - ms_startpoint[1])/50];
    document.getElementById('pos').innerHTML =  env_pos[0].toFixed(0) + ', ' + env_pos[1].toFixed(0) + '<button onclick="reset()">reset</button>';
    const env = document.getElementById('environment');

    env.style.backgroundPosition = env_pos[0] + 'px ' + env_pos[1] + 'px';
    document.querySelectorAll('.block')[0].style.left = env_pos[0] + 'px';
    document.querySelectorAll('.block')[0].style.top = env_pos[1] + 'px';
}

function reset(){
    env_pos = [0,0];
}