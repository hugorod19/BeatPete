// const { ToneAudioBuffer, ToneAudioBuffers } = require("tone");
// const { Tone } = require("tone/build/esm/core/Tone");


function sequencer(){
    const kick = new Audio("./Drums/Kick/kick(1).wav")
    const eight = new Audio("./Drums/808/808(1).wav")
    const hat = new Audio("./Drums/Hat/hat(1).wav")
    const clap = new Audio("./Drums/Clap/clap(1).wav")
    // const snare
    // const sound1
    // const sound2
    // const sound3

    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "8n");
    

    const bpm = parseInt(document.querySelector("#bpm").value)
    Tone.Transport.bpm.value = 180
    

    function repeat(){
        let step = index % 16
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.clap input:nth-child(${step + 1})`);
        let eightInputs = document.querySelector(`.eight input:nth-child(${step + 1})`);
        let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);

            if(kickInputs.checked){
                kick.play();
            }
            if(eightInputs.checked){
                eight.play();
            }
            if(clapInputs.checked){
                clap.play();
            }
            if(hatInputs.checked){
                hat.play();
            }

            index++;
    }

    document.querySelector('.play').addEventListener('click', function() {
        Tone.Transport.start()
        Tone.start()
    });
    document.querySelector('.stop').addEventListener('click', function() {
            Tone.Transport.pause()
    });
}

sequencer()


let beatsUrl = "http://localhost:3000/beats"
fetch(beatsUrl)
.then(resp => resp.json())
.then(beatsData => loadBeat(beatsData))

function loadBeat(beatsData){
    const beatSelect = document.querySelector('#beatSelect')
    const loadButton = document.querySelector('#loadBeatButton')

    loadButton.addEventListener('click', () =>{
       for(beat of beatsData){
           if(beat.name === beatSelect.value){

            let kickPattern = document.querySelector('.kick')
            kickPattern.innerHTML = "kick"

            let clapPattern = document.querySelector('.clap')
            clapPattern.innerHTML = "clap"
            
            for(let i of beat.kicks) {
                console.log(i)
                let checkbox = document.createElement('input')
                checkbox.type = "checkbox"
                if(i === "1") {
                    // console.log('we have a one')
                    checkbox.checked = true
                    kickPattern.append(checkbox)
                } else if (i === "0") {
                    // console.log('we have a zero')
                    checkbox.checked = false
                    kickPattern.append(checkbox)
                }
            }

            for(let i of beat.snares) {
                // console.log(i)
                let checkbox = document.createElement('input')
                checkbox.type = "checkbox"
                if(i === "1") {
                    console.log('we have a one')
                    checkbox.checked = true
                    clapPattern.append(checkbox)
                } else if (i === "0") {
                    console.log('we have a zero')
                    checkbox.checked = false
                    clapPattern.append(checkbox)
                }
    
            }
           }
       }
    })

    for(beat of beatsData) {
       console.log(beat)

        const beatFile = document.createElement('option')
        beatFile.innerHTML = beat.name
        beatSelect.append(beatFile)

    }
}





//         for(let i of beat.snares) {
//             // console.log(i)
//             let snarePattern = document.querySelector('.snare')
//             let checkbox = document.createElement('input')
//             checkbox.type = "checkbox"
//             if(i === "1") {
//                 console.log('we have a one')
//                 checkbox.checked = true
//                 snarePattern.append(checkbox)
//             } else if (i === "0") {
//                 console.log('we have a zero')
//                 checkbox.checked = false
//                 snarePattern.append(checkbox)
//             }

//         }
//     }
// })


let buttonC = document.createElement("button")
buttonC.innerText = "SaveBeat"
let divv = document.querySelector("#a")
divv.append(buttonC)

buttonC.addEventListener("click", function() {

    let kicks = document.querySelectorAll(".kick input")
    let snares = document.querySelectorAll(".snare input")
    let claps = document.querySelectorAll(".clap input")
     createBeat (name, kicks, snares, claps)
})

function createBeat (name, kicks = [], snares = [], claps = []) {
    


    fetch("http://localhost:3000/beats", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: name,
        kicks: kicks,
        snares: snares,
        claps: claps 
    })
})
.then(function(response) {
    return response.json()
}) 
.then(function(json) {
    console.log(json)
})
}

