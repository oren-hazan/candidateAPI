const fs = require('fs');;
const PDFParser = require('pdf2json');
const files = fs.readdirSync('candidates')

let candidates = [];

(async () => {
    await Promise.all(files.map(async (file) =>{

        let pdfParser = new PDFParser(this, 1);
        pdfParser.loadPDF(`candidates/${file}`);

        let candidate = await new Promise( async (resolve, reject) => {

            pdfParser.on('pdfParser_dataReady', (pdfData) => {
                const raw = pdfParser.getRawTextContent().replace(/\r\n/g, "");
                console.log(raw)

                resolve({
                    name: /Name:\s(.*?)Id:/i.exec(raw)[1].trim(),
                    Id: /Id:\s(.*?)Email:/i.exec(raw)[1].trim(),
                    Email: /Email:\s(.*?)Phone number:/i.exec(raw)[1].trim(),
                    Phone: /Phone number:\s(.*?)Linkedin:/i.exec(raw)[1].trim(),
                    Linkedin: /Linkedin:\s(.*?)Description/i.exec(raw)[1].trim()
                })
            })
            
        });

        candidates.push(candidate);
    }))
    fs.writeFileSync('candidates.json', JSON.stringify(candidates));
})();
