import { plantillaPDF, plantillaPDF2 } from '../assets';
import moment from 'moment';
import { Database } from './db';
const { jsPDF } = require("jspdf"); // will automatically load the node version
const fs = window.require('fs');
const path = window.require('path');

export class GeneratorPDF {
    pathRutines = path.join(__dirname, 'infoFiles', 'rutinasCreadas');

    async downloadRutine(data) {
        function dividirCadena(string, separador) {
            let array = string.split(separador);
            let segundoArray = (array.slice((array.length / 2) + 1)).join(' ');
            array = (array.slice(0, (array.length / 2) + 1)).join(' ')
            return [array, segundoArray]
        }

        try {
            console.log(data);
            const doc = new jsPDF({ orientation: "landscape", });
            doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

            let fileName = '';
            if (data.dataRutine.assignedTo.key === 0) {
                fileName = data.dataRutine.name;
                doc.setFontSize(17);
                doc.text(' ', 190, 18, null, 0)
            }
            else {
                fileName = data.dataRutine.assignedTo.text;
                doc.setFontSize(17);
                doc.text(String(fileName), 190, 19, null, 0)
            }

            if (data.dataRutine.startProgram !== null) {
                doc.setFontSize(13);
                doc.text(moment(data.dataRutine.startProgram).format('D/M/YY'), 209, 26, null, 0)
            }

            doc.setFontSize(12);
            if (data.serieOne[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieOne[1].firstExercise, ' ');
                doc.text(result[0], 18, 71, null, 0);
                doc.text(result[1], 18, 75, null, 0);
            } else {
                doc.text(data.serieOne[1].firstExercise, 18, 75, null, 0);
            }
            doc.text((String(data.serieOne[1].firstRep) === '0') ? '' : String(data.serieOne[1].firstRep), 96, 75, null, 0);
            doc.text((String(data.serieOne[1].firstWeight) === '0') ? '' : String(data.serieOne[1].firstWeight), 126, 75, null, 0);
            doc.text(data.serieOne[1].firstType, 146, 75, null, 0);

            if (data.serieOne[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieOne[2].secondExercise, ' ');
                doc.text(result[0], 18, 78, null, 0);
                doc.text(result[1], 18, 82, null, 0);
            } else {
                doc.text(data.serieOne[2].secondExercise, 18, 82, null, 0);
            }
            doc.text((String(data.serieOne[2].secondRep) === '0') ? '' : String(data.serieOne[2].secondRep), 96, 82, null, 0);
            doc.text((String(data.serieOne[2].secondWeight) === '0') ? '' : String(data.serieOne[2].secondWeight), 126, 82, null, 0);
            doc.text(data.serieOne[2].secondType, 146, 82, null, 0);

            if (data.serieOne[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieOne[3].thirdExercise, ' ');
                doc.text(result[0], 18, 86, null, 0);
                doc.text(result[1], 18, 90, null, 0);
            } else {
                doc.text(data.serieOne[3].thirdExercise, 18, 90, null, 0);
            }
            doc.text((String(data.serieOne[3].thirdRep) === '0') ? '' : String(data.serieOne[3].thirdRep), 96, 90, null, 0);
            doc.text((String(data.serieOne[3].thirdWeight) === '0') ? '' : String(data.serieOne[3].thirdWeight), 126, 90, null, 0);
            doc.text(data.serieOne[3].thirdType, 146, 90, null, 0);

            if (data.serieOne[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieOne[4].fourthExercise, ' ');
                doc.text(result[0], 18, 93, null, 0);
                doc.text(result[1], 18, 97, null, 0);
            } else {
                doc.text(data.serieOne[4].fourthExercise, 18, 97, null, 0);
            }
            doc.text((String(data.serieOne[4].fourthRep) === '0') ? '' : String(data.serieOne[4].fourthRep), 96, 97, null, 0);
            doc.text((String(data.serieOne[4].fourthWeight) === '0') ? '' : String(data.serieOne[4].fourthWeight), 126, 97, null, 0);
            doc.text(data.serieOne[4].fourthType, 146, 97, null, 0);

            if (data.serieTwo[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[1].firstExercise, ' ');
                doc.text(result[0], 18, 119, null, 0);
                doc.text(result[1], 18, 123, null, 0);
            } else {
                doc.text(data.serieTwo[1].firstExercise, 18, 123, null, 0);
            }
            doc.text((String(data.serieTwo[1].firstRep) === '0') ? '' : String(data.serieTwo[1].firstRep), 96, 123, null, 0);
            doc.text((String(data.serieTwo[1].firstWeight) === '0') ? '' : String(data.serieTwo[1].firstWeight), 126, 123, null, 0);
            doc.text(data.serieTwo[1].firstType, 146, 123, null, 0);

            if (data.serieTwo[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[2].secondExercise, ' ');
                doc.text(result[0], 18, 126, null, 0);
                doc.text(result[1], 18, 130, null, 0);
            } else {
                doc.text(data.serieTwo[2].secondExercise, 18, 130, null, 0);
            }
            doc.text((String(data.serieTwo[2].secondRep) === '0') ? '' : String(data.serieTwo[2].secondRep), 96, 130, null, 0);
            doc.text((String(data.serieTwo[2].secondWeight) === '0') ? '' : String(data.serieTwo[2].secondWeight), 126, 130, null, 0);
            doc.text(data.serieTwo[2].secondType, 146, 130, null, 0);

            if (data.serieTwo[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[3].thirdExercise, ' ');
                doc.text(result[0], 18, 133.5, null, 0);
                doc.text(result[1], 18, 137, null, 0);
            } else {
                doc.text(data.serieTwo[3].thirdExercise, 18, 137, null, 0);
            }
            doc.text((String(data.serieTwo[3].thirdRep) === '0') ? '' : String(data.serieTwo[3].thirdRep), 96, 137, null, 0);
            doc.text((String(data.serieTwo[3].thirdWeight) === '0') ? '' : String(data.serieTwo[3].thirdWeight), 126, 137, null, 0);
            doc.text(data.serieTwo[3].thirdType, 146, 137, null, 0);

            if (data.serieTwo[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[4].fourthExercise, ' ');
                doc.text(result[0], 18, 140, null, 0);
                doc.text(result[1], 18, 144, null, 0);
            } else {
                doc.text(data.serieTwo[4].fourthExercise, 18, 144, null, 0);
            }
            doc.text((String(data.serieTwo[4].fourthRep) === '0') ? '' : String(data.serieTwo[4].fourthRep), 96, 144, null, 0);
            doc.text((String(data.serieTwo[4].fourthWeight) === '0') ? '' : String(data.serieTwo[4].fourthWeight), 126, 144, null, 0);
            doc.text(data.serieTwo[4].fourthType, 146, 144, null, 0);

            if (data.serieThree[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieThree[1].firstExercise, ' ');
                doc.text(result[0], 18, 166, null, 0);
                doc.text(result[1], 18, 170, null, 0);
            } else {
                doc.text(data.serieThree[1].firstExercise, 18, 170, null, 0);
            }
            doc.text((String(data.serieThree[1].firstRep) === '0') ? '' : String(data.serieThree[1].firstRep), 96, 170, null, 0);
            doc.text((String(data.serieThree[1].firstWeight) === '0') ? '' : String(data.serieThree[1].firstWeight), 126, 170, null, 0);
            doc.text(data.serieThree[1].firstType, 146, 170, null, 0);

            if (data.serieThree[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieThree[2].secondExercise, ' ');
                doc.text(result[0], 18, 173, null, 0);
                doc.text(result[1], 18, 177, null, 0);
            } else {
                doc.text(data.serieThree[2].secondExercise, 18, 177, null, 0);
            }
            doc.text((String(data.serieThree[2].secondRep) === '0') ? '' : String(data.serieThree[2].secondRep), 96, 177, null, 0);
            doc.text((String(data.serieThree[2].secondWeight) === '0') ? '' : String(data.serieThree[2].secondWeight), 126, 177, null, 0);
            doc.text(data.serieThree[2].secondType, 146, 177, null, 0);

            if (data.serieThree[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieThree[3].thirdExercise, ' ');
                doc.text(result[0], 18, 181, null, 0);
                doc.text(result[1], 18, 185, null, 0);
            } else {
                doc.text(data.serieThree[3].thirdExercise, 18, 185, null, 0);
            }
            doc.text((String(data.serieThree[3].thirdRep) === '0') ? '' : String(data.serieThree[3].thirdRep), 96, 185, null, 0);
            doc.text((String(data.serieThree[3].thirdWeight) === '0') ? '' : String(data.serieThree[3].thirdWeight), 126, 185, null, 0);
            doc.text(data.serieThree[3].thirdType, 146, 185, null, 0);

            if (data.serieThree[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieThree[4].fourthExercise, ' ');
                doc.text(result[0], 18, 188, null, 0);
                doc.text(result[1], 18, 192, null, 0);
            } else {
                doc.text(data.serieThree[4].fourthExercise, 18, 192, null, 0);
            }
            doc.text((String(data.serieThree[4].fourthRep) === '0') ? '' : String(data.serieThree[4].fourthRep), 96, 192, null, 0);
            doc.text((String(data.serieThree[4].fourthWeight) === '0') ? '' : String(data.serieThree[4].fourthWeight), 126, 192, null, 0);
            doc.text(data.serieThree[4].fourthType, 146, 192, null, 0);


            doc.save(fileName + '.pdf');
        } catch (error) {
            throw error
        }
    }

    async savePDF(data) {
        function dividirCadena(string, separador) {
            let array = string.split(separador);
            let segundoArray = (array.slice((array.length / 2) + 1)).join(' ');
            array = (array.slice(0, (array.length / 2) + 1)).join(' ')
            return [array, segundoArray]
        }

        try {
            let databaseController = new Database();
            let folderMonth;
            const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };
            const doc = new jsPDF({ orientation: "landscape", });
            doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

            let fileName = data.dataRutine.key;
            if (data.dataRutine.assignedTo.key === 0) {
                doc.setFontSize(17);
                doc.text(' ', 190, 18, null, 0)
            }
            else {
                doc.setFontSize(17);
                doc.text(String(data.dataRutine.assignedTo.text), 190, 19, null, 0)
            }


            if (data.dataRutine.startProgram !== null) {
                doc.setFontSize(13);
                doc.text(moment(data.dataRutine.startProgram).format('D/M/YY'), 209, 26, null, 0);
                folderMonth = `${formatMonth[(moment(data.dataRutine.startProgram).month() + 1)]}-${moment(data.dataRutine.startProgram).year()}`
                await databaseController.valFolder(folderMonth);
            } else {
                folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
                await databaseController.valFolder(folderMonth);
            }


            doc.setFontSize(12);
            if (data.firstSerie[1].firstExercise.length > 31) {
                let result = dividirCadena(data.firstSerie[1].firstExercise, ' ');
                doc.text(result[0], 18, 71, null, 0);
                doc.text(result[1], 18, 75, null, 0);
            } else {
                doc.text(data.firstSerie[1].firstExercise, 18, 75, null, 0);
            }
            doc.text((String(data.firstSerie[1].firstRep) === '0') ? '' : String(data.firstSerie[1].firstRep), 96, 75, null, 0);
            doc.text((String(data.firstSerie[1].firstWeight) === '0') ? '' : String(data.firstSerie[1].firstWeight), 126, 75, null, 0);
            doc.text(data.firstSerie[1].firstType, 146, 75, null, 0);

            if (data.firstSerie[2].secondExercise.length > 31) {
                let result = dividirCadena(data.firstSerie[2].secondExercise, ' ');
                doc.text(result[0], 18, 78, null, 0);
                doc.text(result[1], 18, 82, null, 0);
            } else {
                doc.text(data.firstSerie[2].secondExercise, 18, 82, null, 0);
            }
            doc.text((String(data.firstSerie[2].secondRep) === '0') ? '' : String(data.firstSerie[2].secondRep), 96, 82, null, 0);
            doc.text((String(data.firstSerie[2].secondWeight) === '0') ? '' : String(data.firstSerie[2].secondWeight), 126, 82, null, 0);
            doc.text(data.firstSerie[2].secondType, 146, 82, null, 0);

            if (data.firstSerie[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.firstSerie[3].thirdExercise, ' ');
                doc.text(result[0], 18, 86, null, 0);
                doc.text(result[1], 18, 90, null, 0);
            } else {
                doc.text(data.firstSerie[3].thirdExercise, 18, 90, null, 0);
            }
            doc.text((String(data.firstSerie[3].thirdRep) === '0') ? '' : String(data.firstSerie[3].thirdRep), 96, 90, null, 0);
            doc.text((String(data.firstSerie[3].thirdWeight) === '0') ? '' : String(data.firstSerie[3].thirdWeight), 126, 90, null, 0);
            doc.text(data.firstSerie[3].thirdType, 146, 90, null, 0);

            if (data.firstSerie[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.firstSerie[4].fourthExercise, ' ');
                doc.text(result[0], 18, 93, null, 0);
                doc.text(result[1], 18, 97, null, 0);
            } else {
                doc.text(data.firstSerie[4].fourthExercise, 18, 97, null, 0);
            }
            doc.text((String(data.firstSerie[4].fourthRep) === '0') ? '' : String(data.firstSerie[4].fourthRep), 96, 97, null, 0);
            doc.text((String(data.firstSerie[4].fourthWeight) === '0') ? '' : String(data.firstSerie[4].fourthWeight), 126, 97, null, 0);
            doc.text(data.firstSerie[4].fourthType, 146, 97, null, 0);

            if (data.secondSerie[1].firstExercise.length > 31) {
                let result = dividirCadena(data.secondSerie[1].firstExercise, ' ');
                doc.text(result[0], 18, 119, null, 0);
                doc.text(result[1], 18, 123, null, 0);
            } else {
                doc.text(data.secondSerie[1].firstExercise, 18, 123, null, 0);
            }
            doc.text((String(data.secondSerie[1].firstRep) === '0') ? '' : String(data.secondSerie[1].firstRep), 96, 123, null, 0);
            doc.text((String(data.secondSerie[1].firstWeight) === '0') ? '' : String(data.secondSerie[1].firstWeight), 126, 123, null, 0);
            doc.text(data.secondSerie[1].firstType, 146, 123, null, 0);

            if (data.secondSerie[2].secondExercise.length > 31) {
                let result = dividirCadena(data.secondSerie[2].secondExercise, ' ');
                doc.text(result[0], 18, 126, null, 0);
                doc.text(result[1], 18, 130, null, 0);
            } else {
                doc.text(data.secondSerie[2].secondExercise, 18, 130, null, 0);
            }
            doc.text((String(data.secondSerie[2].secondRep) === '0') ? '' : String(data.secondSerie[2].secondRep), 96, 130, null, 0);
            doc.text((String(data.secondSerie[2].secondWeight) === '0') ? '' : String(data.secondSerie[2].secondWeight), 126, 130, null, 0);
            doc.text(data.secondSerie[2].secondType, 146, 130, null, 0);

            if (data.secondSerie[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.secondSerie[3].thirdExercise, ' ');
                doc.text(result[0], 18, 133, null, 0);
                doc.text(result[1], 18, 137, null, 0);
            } else {
                doc.text(data.secondSerie[3].thirdExercise, 18, 137, null, 0);
            }
            doc.text((String(data.secondSerie[3].thirdRep) === '0') ? '' : String(data.secondSerie[3].thirdRep), 96, 137, null, 0);
            doc.text((String(data.secondSerie[3].thirdWeight) === '0') ? '' : String(data.secondSerie[3].thirdWeight), 126, 137, null, 0);
            doc.text(data.secondSerie[3].thirdType, 146, 137, null, 0);

            if (data.secondSerie[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.secondSerie[4].fourthExercise, ' ');
                doc.text(result[0], 18, 140, null, 0);
                doc.text(result[1], 18, 144, null, 0);
            } else {
                doc.text(data.secondSerie[4].fourthExercise, 18, 144, null, 0);
            }
            doc.text((String(data.secondSerie[4].fourthRep) === '0') ? '' : String(data.secondSerie[4].fourthRep), 96, 144, null, 0);
            doc.text((String(data.secondSerie[4].fourthWeight) === '0') ? '' : String(data.secondSerie[4].fourthWeight), 126, 144, null, 0);
            doc.text(data.secondSerie[4].fourthType, 146, 144, null, 0);

            if (data.thirdSerie[1].firstExercise.length > 31) {
                let result = dividirCadena(data.thirdSerie[1].firstExercise, ' ');
                doc.text(result[0], 18, 166, null, 0);
                doc.text(result[1], 18, 170, null, 0);
            } else {
                doc.text(data.thirdSerie[1].firstExercise, 18, 170, null, 0);
            }
            doc.text((String(data.thirdSerie[1].firstRep) === '0') ? '' : String(data.thirdSerie[1].firstRep), 96, 170, null, 0);
            doc.text((String(data.thirdSerie[1].firstWeight) === '0') ? '' : String(data.thirdSerie[1].firstWeight), 126, 170, null, 0);
            doc.text(data.thirdSerie[1].firstType, 146, 170, null, 0);

            if (data.thirdSerie[2].secondExercise.length > 31) {
                let result = dividirCadena(data.thirdSerie[2].secondExercise, ' ');
                doc.text(result[0], 18, 173, null, 0);
                doc.text(result[1], 18, 177, null, 0);
            } else {
                doc.text(data.thirdSerie[2].secondExercise, 18, 177, null, 0);
            }
            doc.text((String(data.thirdSerie[2].secondRep) === '0') ? '' : String(data.thirdSerie[2].secondRep), 96, 177, null, 0);
            doc.text((String(data.thirdSerie[2].secondWeight) === '0') ? '' : String(data.thirdSerie[2].secondWeight), 126, 177, null, 0);
            doc.text(data.thirdSerie[2].secondType, 146, 177, null, 0);

            if (data.thirdSerie[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.thirdSerie[3].thirdExercise, ' ');
                doc.text(result[0], 18, 181, null, 0);
                doc.text(result[1], 18, 185, null, 0);
            } else {
                doc.text(data.thirdSerie[3].thirdExercise, 18, 185, null, 0);
            }
            doc.text((String(data.thirdSerie[3].thirdRep) === '0') ? '' : String(data.thirdSerie[3].thirdRep), 96, 185, null, 0);
            doc.text((String(data.thirdSerie[3].thirdWeight) === '0') ? '' : String(data.thirdSerie[3].thirdWeight), 126, 185, null, 0);
            doc.text(data.thirdSerie[3].thirdType, 146, 185, null, 0);

            if (data.thirdSerie[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.thirdSerie[4].fourthExercise, ' ');
                doc.text(result[0], 18, 188, null, 0);
                doc.text(result[1], 18, 192, null, 0);
            } else {
                doc.text(data.thirdSerie[4].fourthExercise, 18, 192, null, 0);
            }
            doc.text((String(data.thirdSerie[4].fourthRep) === '0') ? '' : String(data.thirdSerie[4].fourthRep), 96, 192, null, 0);
            doc.text((String(data.thirdSerie[4].fourthWeight) === '0') ? '' : String(data.thirdSerie[4].fourthWeight), 126, 192, null, 0);
            doc.text(data.thirdSerie[4].fourthType, 146, 192, null, 0);

            // Guarda el PDF en la base de datos
            await fs.writeFile(path.join(this.pathRutines, folderMonth, `${fileName}.pdf`), new Buffer(doc.output('arraybuffer')), (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }

    async loadPDF(data) {
        function dividirCadena(string, separador) {
            let array = string.split(separador);
            let segundoArray = (array.slice((array.length / 2) + 1)).join(' ');
            array = (array.slice(0, (array.length / 2) + 1)).join(' ')
            return [array, segundoArray]
        }

        try {
            const doc = new jsPDF({ orientation: "landscape", });
            doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

            if (data.dataRutine.assignedTo.key !== 0) {
                doc.setFontSize(20);
                doc.text(String(data.dataRutine.assignedTo.text), 190, 19, { renderingMode: 'invisible' }, 0)
            }

            if (data.dataRutine.startProgram !== null) {
                doc.setFontSize(13);
                doc.text(moment(data.dataRutine.startProgram).format('D/M/YY'), 209, 26, null, 0)
            }

            doc.setFontSize(12);
            if (data.serieOne[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieOne[1].firstExercise, ' ');
                doc.text(result[0], 18, 71, null, 0);
                doc.text(result[1], 18, 75, null, 0);
            } else {
                doc.text(data.serieOne[1].firstExercise, 18, 75, null, 0);
            }
            doc.text((String(data.serieOne[1].firstRep) === '0') ? '' : String(data.serieOne[1].firstRep), 96, 75, null, 0);
            doc.text((String(data.serieOne[1].firstWeight) === '0') ? '' : String(data.serieOne[1].firstWeight), 126, 75, null, 0);
            doc.text(data.serieOne[1].firstType, 146, 75, null, 0);

            if (data.serieOne[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieOne[2].secondExercise, ' ');
                doc.text(result[0], 18, 78, null, 0);
                doc.text(result[1], 18, 82, null, 0);
            } else {
                doc.text(data.serieOne[2].secondExercise, 18, 82, null, 0);
            }
            doc.text((String(data.serieOne[2].secondRep) === '0') ? '' : String(data.serieOne[2].secondRep), 96, 82, null, 0);
            doc.text((String(data.serieOne[2].secondWeight) === '0') ? '' : String(data.serieOne[2].secondWeight), 126, 82, null, 0);
            doc.text(data.serieOne[2].secondType, 146, 82, null, 0);

            if (data.serieOne[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieOne[3].thirdExercise, ' ');
                doc.text(result[0], 18, 86, null, 0);
                doc.text(result[1], 18, 90, null, 0);
            } else {
                doc.text(data.serieOne[3].thirdExercise, 18, 90, null, 0);
            }
            doc.text((String(data.serieOne[3].thirdRep) === '0') ? '' : String(data.serieOne[3].thirdRep), 96, 90, null, 0);
            doc.text((String(data.serieOne[3].thirdWeight) === '0') ? '' : String(data.serieOne[3].thirdWeight), 126, 90, null, 0);
            doc.text(data.serieOne[3].thirdType, 146, 90, null, 0);

            if (data.serieOne[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieOne[4].fourthExercise, ' ');
                doc.text(result[0], 18, 93, null, 0);
                doc.text(result[1], 18, 97, null, 0);
            } else {
                doc.text(data.serieOne[4].fourthExercise, 18, 97, null, 0);
            }
            doc.text((String(data.serieOne[4].fourthRep) === '0') ? '' : String(data.serieOne[4].fourthRep), 96, 97, null, 0);
            doc.text((String(data.serieOne[4].fourthWeight) === '0') ? '' : String(data.serieOne[4].fourthWeight), 126, 97, null, 0);
            doc.text(data.serieOne[4].fourthType, 146, 97, null, 0);

            if (data.serieTwo[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[1].firstExercise, ' ');
                doc.text(result[0], 18, 119, null, 0);
                doc.text(result[1], 18, 123, null, 0);
            } else {
                doc.text(data.serieTwo[1].firstExercise, 18, 123, null, 0);
            }
            doc.text((String(data.serieTwo[1].firstRep) === '0') ? '' : String(data.serieTwo[1].firstRep), 96, 123, null, 0);
            doc.text((String(data.serieTwo[1].firstWeight) === '0') ? '' : String(data.serieTwo[1].firstWeight), 126, 123, null, 0);
            doc.text(data.serieTwo[1].firstType, 146, 123, null, 0);

            if (data.serieTwo[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[2].secondExercise, ' ');
                doc.text(result[0], 18, 126, null, 0);
                doc.text(result[1], 18, 130, null, 0);
            } else {
                doc.text(data.serieTwo[2].secondExercise, 18, 130, null, 0);
            }
            doc.text((String(data.serieTwo[2].secondRep) === '0') ? '' : String(data.serieTwo[2].secondRep), 96, 130, null, 0);
            doc.text((String(data.serieTwo[2].secondWeight) === '0') ? '' : String(data.serieTwo[2].secondWeight), 126, 130, null, 0);
            doc.text(data.serieTwo[2].secondType, 146, 130, null, 0);

            if (data.serieTwo[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[3].thirdExercise, ' ');
                doc.text(result[0], 18, 133.5, null, 0);
                doc.text(result[1], 18, 137, null, 0);
            } else {
                doc.text(data.serieTwo[3].thirdExercise, 18, 137, null, 0);
            }
            doc.text((String(data.serieTwo[3].thirdRep) === '0') ? '' : String(data.serieTwo[3].thirdRep), 96, 137, null, 0);
            doc.text((String(data.serieTwo[3].thirdWeight) === '0') ? '' : String(data.serieTwo[3].thirdWeight), 126, 137, null, 0);
            doc.text(data.serieTwo[3].thirdType, 146, 137, null, 0);

            if (data.serieTwo[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[4].fourthExercise, ' ');
                doc.text(result[0], 18, 140, null, 0);
                doc.text(result[1], 18, 144, null, 0);
            } else {
                doc.text(data.serieTwo[4].fourthExercise, 18, 144, null, 0);
            }
            doc.text((String(data.serieTwo[4].fourthRep) === '0') ? '' : String(data.serieTwo[4].fourthRep), 96, 144, null, 0);
            doc.text((String(data.serieTwo[4].fourthWeight) === '0') ? '' : String(data.serieTwo[4].fourthWeight), 126, 144, null, 0);
            doc.text(data.serieTwo[4].fourthType, 146, 144, null, 0);

            if (data.serieThree[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieThree[1].firstExercise, ' ');
                doc.text(result[0], 18, 166, null, 0);
                doc.text(result[1], 18, 170, null, 0);
            } else {
                doc.text(data.serieThree[1].firstExercise, 18, 170, null, 0);
            }
            doc.text((String(data.serieThree[1].firstRep) === '0') ? '' : String(data.serieThree[1].firstRep), 96, 170, null, 0);
            doc.text((String(data.serieThree[1].firstWeight) === '0') ? '' : String(data.serieThree[1].firstWeight), 126, 170, null, 0);
            doc.text(data.serieThree[1].firstType, 146, 170, null, 0);

            if (data.serieThree[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieThree[2].secondExercise, ' ');
                doc.text(result[0], 18, 173, null, 0);
                doc.text(result[1], 18, 177, null, 0);
            } else {
                doc.text(data.serieThree[2].secondExercise, 18, 177, null, 0);
            }
            doc.text((String(data.serieThree[2].secondRep) === '0') ? '' : String(data.serieThree[2].secondRep), 96, 177, null, 0);
            doc.text((String(data.serieThree[2].secondWeight) === '0') ? '' : String(data.serieThree[2].secondWeight), 126, 177, null, 0);
            doc.text(data.serieThree[2].secondType, 146, 177, null, 0);

            if (data.serieThree[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieThree[3].thirdExercise, ' ');
                doc.text(result[0], 18, 181, null, 0);
                doc.text(result[1], 18, 185, null, 0);
            } else {
                doc.text(data.serieThree[3].thirdExercise, 18, 185, null, 0);
            }
            doc.text((String(data.serieThree[3].thirdRep) === '0') ? '' : String(data.serieThree[3].thirdRep), 96, 185, null, 0);
            doc.text((String(data.serieThree[3].thirdWeight) === '0') ? '' : String(data.serieThree[3].thirdWeight), 126, 185, null, 0);
            doc.text(data.serieThree[3].thirdType, 146, 185, null, 0);

            if (data.serieThree[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieThree[4].fourthExercise, ' ');
                doc.text(result[0], 18, 188, null, 0);
                doc.text(result[1], 18, 192, null, 0);
            } else {
                doc.text(data.serieThree[4].fourthExercise, 18, 192, null, 0);
            }
            doc.text((String(data.serieThree[4].fourthRep) === '0') ? '' : String(data.serieThree[4].fourthRep), 96, 192, null, 0);
            doc.text((String(data.serieThree[4].fourthWeight) === '0') ? '' : String(data.serieThree[4].fourthWeight), 126, 192, null, 0);
            doc.text(data.serieThree[4].fourthType, 146, 192, null, 0);

            doc.addPage('a4', 'landscape');
            doc.addImage(plantillaPDF2, 'JPEG', 0, 0, 300, 200);

            return doc.output('blob');

        } catch (error) {
            throw error;
        }
    }

    async editRutine(data) {
        function dividirCadena(string, separador) {
            let array = string.split(separador);
            let segundoArray = (array.slice((array.length / 2) + 1)).join(' ');
            array = (array.slice(0, (array.length / 2) + 1)).join(' ')
            return [array, segundoArray]
        }

        try {
            let databaseController = new Database();
            let folderMonth;
            const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };
            const doc = new jsPDF({ orientation: "landscape", });
            doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

            let fileName = data.dataRutine.key;
            if (data.dataRutine.assignedTo.key === 0) {
                doc.setFontSize(17);
                doc.text(' ', 190, 18, null, 0)
            }
            else {
                doc.setFontSize(17);
                doc.text(String(data.dataRutine.assignedTo.text), 190, 19, null, 0)
            }

            if (data.dataRutine.startProgram !== null) {
                doc.setFontSize(13);
                doc.text(moment(data.dataRutine.startProgram).format('D/M/YY'), 209, 26, null, 0);
                folderMonth = `${formatMonth[(moment(data.dataRutine.startProgram).month() + 1)]}-${moment(data.dataRutine.startProgram).year()}`
                await databaseController.valFolder(folderMonth);
            } else {
                folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
                await databaseController.valFolder(folderMonth);
            }

            doc.setFontSize(12);
            if (data.serieOne[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieOne[1].firstExercise, ' ');
                doc.text(result[0], 18, 71, null, 0);
                doc.text(result[1], 18, 75, null, 0);
            } else {
                doc.text(data.serieOne[1].firstExercise, 18, 75, null, 0);
            }
            doc.text((String(data.serieOne[1].firstRep) === '0') ? '' : String(data.serieOne[1].firstRep), 96, 75, null, 0);
            doc.text((String(data.serieOne[1].firstWeight) === '0') ? '' : String(data.serieOne[1].firstWeight), 126, 75, null, 0);
            doc.text(data.serieOne[1].firstType, 146, 75, null, 0);

            if (data.serieOne[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieOne[2].secondExercise, ' ');
                doc.text(result[0], 18, 78, null, 0);
                doc.text(result[1], 18, 82, null, 0);
            } else {
                doc.text(data.serieOne[2].secondExercise, 18, 82, null, 0);
            }
            doc.text((String(data.serieOne[2].secondRep) === '0') ? '' : String(data.serieOne[2].secondRep), 96, 82, null, 0);
            doc.text((String(data.serieOne[2].secondWeight) === '0') ? '' : String(data.serieOne[2].secondWeight), 126, 82, null, 0);
            doc.text(data.serieOne[2].secondType, 146, 82, null, 0);

            if (data.serieOne[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieOne[3].thirdExercise, ' ');
                doc.text(result[0], 18, 86, null, 0);
                doc.text(result[1], 18, 90, null, 0);
            } else {
                doc.text(data.serieOne[3].thirdExercise, 18, 90, null, 0);
            }
            doc.text((String(data.serieOne[3].thirdRep) === '0') ? '' : String(data.serieOne[3].thirdRep), 96, 90, null, 0);
            doc.text((String(data.serieOne[3].thirdWeight) === '0') ? '' : String(data.serieOne[3].thirdWeight), 126, 90, null, 0);
            doc.text(data.serieOne[3].thirdType, 146, 90, null, 0);

            if (data.serieOne[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieOne[4].fourthExercise, ' ');
                doc.text(result[0], 18, 93, null, 0);
                doc.text(result[1], 18, 97, null, 0);
            } else {
                doc.text(data.serieOne[4].fourthExercise, 18, 97, null, 0);
            }
            doc.text((String(data.serieOne[4].fourthRep) === '0') ? '' : String(data.serieOne[4].fourthRep), 96, 97, null, 0);
            doc.text((String(data.serieOne[4].fourthWeight) === '0') ? '' : String(data.serieOne[4].fourthWeight), 126, 97, null, 0);
            doc.text(data.serieOne[4].fourthType, 146, 97, null, 0);

            if (data.serieTwo[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[1].firstExercise, ' ');
                doc.text(result[0], 18, 119, null, 0);
                doc.text(result[1], 18, 123, null, 0);
            } else {
                doc.text(data.serieTwo[1].firstExercise, 18, 123, null, 0);
            }
            doc.text((String(data.serieTwo[1].firstRep) === '0') ? '' : String(data.serieTwo[1].firstRep), 96, 123, null, 0);
            doc.text((String(data.serieTwo[1].firstWeight) === '0') ? '' : String(data.serieTwo[1].firstWeight), 126, 123, null, 0);
            doc.text(data.serieTwo[1].firstType, 146, 123, null, 0);

            if (data.serieTwo[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[2].secondExercise, ' ');
                doc.text(result[0], 18, 126, null, 0);
                doc.text(result[1], 18, 130, null, 0);
            } else {
                doc.text(data.serieTwo[2].secondExercise, 18, 130, null, 0);
            }
            doc.text((String(data.serieTwo[2].secondRep) === '0') ? '' : String(data.serieTwo[2].secondRep), 96, 130, null, 0);
            doc.text((String(data.serieTwo[2].secondWeight) === '0') ? '' : String(data.serieTwo[2].secondWeight), 126, 130, null, 0);
            doc.text(data.serieTwo[2].secondType, 146, 130, null, 0);

            if (data.serieTwo[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[3].thirdExercise, ' ');
                doc.text(result[0], 18, 133.5, null, 0);
                doc.text(result[1], 18, 137, null, 0);
            } else {
                doc.text(data.serieTwo[3].thirdExercise, 18, 137, null, 0);
            }
            doc.text((String(data.serieTwo[3].thirdRep) === '0') ? '' : String(data.serieTwo[3].thirdRep), 96, 137, null, 0);
            doc.text((String(data.serieTwo[3].thirdWeight) === '0') ? '' : String(data.serieTwo[3].thirdWeight), 126, 137, null, 0);
            doc.text(data.serieTwo[3].thirdType, 146, 137, null, 0);

            if (data.serieTwo[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieTwo[4].fourthExercise, ' ');
                doc.text(result[0], 18, 140, null, 0);
                doc.text(result[1], 18, 144, null, 0);
            } else {
                doc.text(data.serieTwo[4].fourthExercise, 18, 144, null, 0);
            }
            doc.text((String(data.serieTwo[4].fourthRep) === '0') ? '' : String(data.serieTwo[4].fourthRep), 96, 144, null, 0);
            doc.text((String(data.serieTwo[4].fourthWeight) === '0') ? '' : String(data.serieTwo[4].fourthWeight), 126, 144, null, 0);
            doc.text(data.serieTwo[4].fourthType, 146, 144, null, 0);

            if (data.serieThree[1].firstExercise.length > 31) {
                let result = dividirCadena(data.serieThree[1].firstExercise, ' ');
                doc.text(result[0], 18, 166, null, 0);
                doc.text(result[1], 18, 170, null, 0);
            } else {
                doc.text(data.serieThree[1].firstExercise, 18, 170, null, 0);
            }
            doc.text((String(data.serieThree[1].firstRep) === '0') ? '' : String(data.serieThree[1].firstRep), 96, 170, null, 0);
            doc.text((String(data.serieThree[1].firstWeight) === '0') ? '' : String(data.serieThree[1].firstWeight), 126, 170, null, 0);
            doc.text(data.serieThree[1].firstType, 146, 170, null, 0);

            if (data.serieThree[2].secondExercise.length > 31) {
                let result = dividirCadena(data.serieThree[2].secondExercise, ' ');
                doc.text(result[0], 18, 173, null, 0);
                doc.text(result[1], 18, 177, null, 0);
            } else {
                doc.text(data.serieThree[2].secondExercise, 18, 177, null, 0);
            }
            doc.text((String(data.serieThree[2].secondRep) === '0') ? '' : String(data.serieThree[2].secondRep), 96, 177, null, 0);
            doc.text((String(data.serieThree[2].secondWeight) === '0') ? '' : String(data.serieThree[2].secondWeight), 126, 177, null, 0);
            doc.text(data.serieThree[2].secondType, 146, 177, null, 0);

            if (data.serieThree[3].thirdExercise.length > 31) {
                let result = dividirCadena(data.serieThree[3].thirdExercise, ' ');
                doc.text(result[0], 18, 181, null, 0);
                doc.text(result[1], 18, 185, null, 0);
            } else {
                doc.text(data.serieThree[3].thirdExercise, 18, 185, null, 0);
            }
            doc.text((String(data.serieThree[3].thirdRep) === '0') ? '' : String(data.serieThree[3].thirdRep), 96, 185, null, 0);
            doc.text((String(data.serieThree[3].thirdWeight) === '0') ? '' : String(data.serieThree[3].thirdWeight), 126, 185, null, 0);
            doc.text(data.serieThree[3].thirdType, 146, 185, null, 0);

            if (data.serieThree[4].fourthExercise.length > 31) {
                let result = dividirCadena(data.serieThree[4].fourthExercise, ' ');
                doc.text(result[0], 18, 188, null, 0);
                doc.text(result[1], 18, 192, null, 0);
            } else {
                doc.text(data.serieThree[4].fourthExercise, 18, 192, null, 0);
            }
            doc.text((String(data.serieThree[4].fourthRep) === '0') ? '' : String(data.serieThree[4].fourthRep), 96, 192, null, 0);
            doc.text((String(data.serieThree[4].fourthWeight) === '0') ? '' : String(data.serieThree[4].fourthWeight), 126, 192, null, 0);
            doc.text(data.serieThree[4].fourthType, 146, 192, null, 0);


            await fs.writeFile(path.join(this.pathRutines, folderMonth, `${fileName}.pdf`), new Buffer(doc.output('arraybuffer')), (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error
        }
    }

}

