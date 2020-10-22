// const { ToneAudioBuffer, ToneAudioBuffers } = require("tone");
// const { Tone } = require("tone/build/esm/core/Tone");


function sequencer(){
    const kick = new Audio("./Drums/Kick/kick(1).wav")
    const eight = new Audio("./Drums/808/808(1).wav")
    // const hat
    const clap = new Audio("./Drums/Clap/clap(1).wav")
    // const snare
    // const sound1
    // const sound2
    // const sound3

    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "8n");
    

    const bpm = parseInt(document.querySelector("#bpm").value)
    Tone.Transport.bpm.value = bpm
    

    function repeat(){
        let step = index % 16
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.clap input:nth-child(${step + 1})`);
        let eightInputs = document.querySelector(`.eight input:nth-child(${step + 1})`);

            if(kickInputs.checked){
                kick.play();
            }
            if(eightInputs.checked){
                eight.play();
            }
            if(clapInputs.checked){
                clap.play();
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
.then(function(beats) {
    for(beat of beats) {
        
        const beatSelect = document.querySelector('#beatSelect')
        const beatFile = document.createElement('option')
        beatFile.innerHTML = beat.name
        beatSelect.append(beatFile)

        let kickPattern = document.querySelector('.kick')
        kickPattern.innerHTML = "kick"
        

        for(let i of beat.kicks) {
            // console.log(i)
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
    }
})

fetch(beatsUrl, {
  method: "POST",
  headers: {
      "Content-Type": "appplication/json",
      "Accept": "application/json"
  },
  body: JSON.stringify({
      name: name,
      kicks: kicks,
      snares: snares
  })  
})
.then(function(response) {
    return response.json();
})
.then(function(json) {
    console.log(json)
})



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