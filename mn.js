// Mohammad Rashed

function Stream(){
    const mediaStreamY = new MediaStream;
    const videoElement = document.querySelector('video');
    var front = false;
    document.getElementById('flip-camera').onclick = function() { front = !front; console.log(front) };
   let nav = navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(mediaStreamY => {
        videoElement.srcObject = mediaStreamY;
        videoElement.onloadedmetadata = function(e){
            videoElement.play();
        }
    });
   
}

Stream();