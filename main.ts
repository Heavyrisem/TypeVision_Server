import fs from 'fs';
import vision from '@google-cloud/vision'; //$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\insu\Desktop\Develop\TypoParser\lateral-concord-298602-8ec431ba3c5b.json"
import mongo from 'mongodb';

const file = fs.readFileSync('./Result.txt');
const URLlist = file.toString().split("\r\n");

interface Data {
    description: string,
    author: string
}

let Result: Array<Data> = [];

// // Creates a client
const client = new vision.ImageAnnotatorClient();

// /**
//  * TODO(developer): Uncomment the following line before running the sample.
//  */
// // const fileName = '';

// // Performs text detection on the local file
(async() => {
    for (let i  = 0; i < URLlist.length; i++) {
        console.log(URLlist[i])
        const [result] = await client.textDetection(URLlist[i]);
        const detections = result.textAnnotations;
        if (!detections) continue;
        if (!detections.length) continue;

        let Data: Data = {description: "", author: ""};
        console.log()
        let description = detections[0].description?.split("\n").reverse();
        if (!description) continue;
        description.shift();
        Data.author = description.shift() as string;
        if (description[0].toUpperCase() == "TYPOTOUCH.COM") description.shift();
        description = description.reverse();
        Data.description = description.join("\n");
        // console.log(Data.description, Data.author);
        Result.push(Data);

        // console.log();
    }
    console.log(Result)
})();