const synth = new Tone.MembraneSynth().toDestination();
var btn = document.getElementById("1");

function node(){
    synth.triggerAttackRelease("C2","8n");
}
function start(){
    node();
    setTimeout(start,1000)
}

btn.addEventListener("click", function (){
    let i =0;
    function test() {
        console.log(i);
        setTimeout(test,1000);
        i=i+1;
    }
    test();
})


