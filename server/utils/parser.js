const fs = require('fs');
const PDFParser = require('pdf2json');
const files = fs.readdirSync('candidates')

parsedAndCreate = async () => {

    return await Promise.all(files.map(async (file) =>{

        let pdfParser = new PDFParser(this, 1);
        pdfParser.loadPDF(`candidates/${file}`);

        let candidate = await new Promise( async (resolve, reject) => {

            pdfParser.on('pdfParser_dataReady', (pdfData) => {
                const raw = pdfParser.getRawTextContent().replace(/\r\n/g, "");
                //console.log(raw)

                resolve({
                    Name: /Name:\s(.*?)Id:/i.exec(raw)[1].trim(),
                    PersonalId: /Id:\s(.*?)Email:/i.exec(raw)[1].trim(),
                    Email: /Email:\s(.*?)Phone number:/i.exec(raw)[1].trim(),
                    Phone: /Phone number:\s(.*?)Linkedin:/i.exec(raw)[1].trim(),
                    LinkedinUrl: /Linkedin:\s(.*?)Description/i.exec(raw)[1].trim(), 
                    RawData: raw
                })
            })
        }).then(resolve => { //console.log(resolve)
            return resolve;
        })
        //console.log(candidate)
        return candidate;
    }))
};

module.exports = parsedAndCreate;



