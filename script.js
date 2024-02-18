function hero(){
    const myvid = document.getElementById('video').innerHTML='<video width="400" height="350" autoplay id="myvid1"><source src="./assets/main toh tere ko harami samaj tha tu toh ram nikla re.mp4" type="video/mp4"></video>';
    const paye = document.getElementById('pay');
    document.getElementById('myvid1').addEventListener('ended',function(){
        paye.removeAttribute('hidden');
        document.getElementById('myvid1').style = "display:none";
    })
    document.getElementById('btn1').style = 'display:none;';
    document.getElementById('btn2').style = 'display:none;';
}

function hero1(){
    document.getElementById('video').innerHTML='<video width="400" height="350" autoplay id="myvid2"><source src="./assets/ykthbmk.mp4" type="video/mp4"></video>';
    document.getElementById('btn2').style = 'display:none;';
    document.getElementById('btn1').style = 'display:none;';
    document.getElementById('myvid2').addEventListener('ended',function(){
        document.getElementById('end').removeAttribute('hidden');
        document.getElementById('myvid2').style = "display:none";
    })
}