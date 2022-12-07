var muzich = " ";

scoreLeft = 0;
scoreRight = 0;

lWristx = 0;
rWristx = 0;
lWristy = 0;
rWristy = 0;

function preload(){
    muzich = loadSound('music.mp3')
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, wakaWakaEE)
    poseNet.on('pose', safrica)
}
function draw(){
    image(video, 0, 0, 600, 500)

    fill('red')
    stroke('red');
    
    if(scoreRight > 0.2){
        circle(rWristx, rWristy, 20)
        if(rWristy > 0 && rWristy <= 100){
            document.getElementById("speed").innerHTML = "Velocidade: 0.5";
            muzich.rate(0.5);
        }
        if(rWristy > 100 && rWristy <= 200){
            document.getElementById("speed").innerHTML = "Velocidade: 1.0";
            muzich.rate(1);
        }
        if(rWristy > 200 && rWristy <= 300){
            document.getElementById("speed").innerHTML = "Velocidade: 1.5";
            muzich.rate(1.5);
        }
        if(rWristy > 300 && rWristy <= 400){
            document.getElementById("speed").innerHTML = "Velocidade: 2.0";
            muzich.rate(2);
        }
        if(rWristy > 400 && rWristy <= 500){
            document.getElementById("speed").innerHTML = "Velocidade: 2.5";
            muzich.rate(2.5);
        }
    }

    if(scoreLeft > 0.2){
        circle(lWristx, lWristy, 20)
        isnumberlWy = Number(lWristy);
        tira10 =floor(isnumberlWy)
        volume = tira10/500
        document.getElementById("volume").innerHTML = "Volume: "+volume;
        muzich.setVolume(volume) 
    }
}
function babagi(){
    muzich.play();
}
function fortinaiti(){
    muzich.pause();
}
function wakaWakaEE(){
    console.log("TONERI E UM LIXO")
}
function safrica(results){
    if(results.length > 0){
        console.log(results)
        scoreLeft = results[0].pose.keypoints[9].score;
        scoreRight = results[0].pose.keypoints[10].score;
        console.log(scoreLeft + " esquerda")
        console.log(scoreRight + " direita")
        lWristx = results[0].pose.leftWrist.x;
        lWristy = results[0].pose.leftWrist.y;
        console.log("pulso esquerdo: " + lWristx + " pulso esquerdo y: " + lWristy)

        rWristx = results[0].pose.rightWrist.x;
        rWristy = results[0].pose.rightWrist.y;
        console.log("pulso direito: " + rWristx + " pulso direito y: " + rWristy)
    }
}