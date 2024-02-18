const whisper = require('whisper-node-anas23');

let SummarizerManager = require("node-summarizer").SummarizerManager;

(async () => {
    try {
        var options = {
            modelName:"base.en"
        };

        const transcription = await whisper.whisper("/Users/mikeland/newDay/aiGetToThePointBro/audio/midjourney.wav", options);

        var fullTranscript = "";
        transcription.forEach(workPkg => {
            fullTranscript += workPkg.speech;
        })

        console.log("FULL TRANSCRIPT", fullTranscript);

        let Summarizer = new SummarizerManager(fullTranscript, 2); 

        // let summary = Summarizer.getSummaryByRank().then((summary_object)=>{
        //     console.log("summary_object.summary");
        //     console.log(summary_object.summary);
        // })
        let summary = Summarizer.getSummaryByFrequency().summary;

        console.log("Summary");
        console.log(summary);
    } catch (err) {
        console.log("ERROR", err);
        process.exit(1);
    }
})();

