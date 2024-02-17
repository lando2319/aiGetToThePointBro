const whisper = require('whisper-node-anas23');

(async () => {
    try {
        var options = {
            modelName:"base.en"
        };

        const transcription = await whisper.whisper("/Users/mikeland/newDay/aiGetToThePointBro/audio/output2.wav", options);

        console.log(transcription);
        process.exit(0);
    } catch (err) {
        console.log("ERROR", err);
        process.exit(1);
    }
})();

