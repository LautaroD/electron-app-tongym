import { plantillaPDF, plantillaPDF2 } from '../assets';
import moment from 'moment';
import { Database } from './db';
const { jsPDF } = require("jspdf"); // will automatically load the node version
const fs = window.require('fs');
const path = window.require('path');

export class GeneratorPDF {
    pathRutines = path.join(__dirname, 'infoFiles', 'rutinasCreadas');

    async loadPDF(data, type) {
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

            let renderMode = ''
            if (type === 'preview') renderMode = 'invisible';
            else if (type === 'download') renderMode = null;
            else if (type === 'savedb') renderMode = null;

            const doc = new jsPDF({ orientation: "landscape", });
            doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

            let fileName = data.key;
            if (data.assignedTo.key !== 0) {
                doc.setFontSize(20);
                doc.text(String(data.assignedTo.text), 190, 19, { renderingMode: renderMode }, 0)
                fileName = data.assignedTo.text;
            }

            if (data.startProgram !== null) {
                doc.setFontSize(13);
                doc.text(moment(data.startProgram).format('D/M/YY'), 209, 26, null, 0);
                folderMonth = `${formatMonth[(moment(data.startProgram).month() + 1)]}-${moment(data.startProgram).year()}`
                await databaseController.valFolder(folderMonth);
            } else {
                folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
                await databaseController.valFolder(folderMonth);
            }

            // DIA UNO - SERIE 1
            doc.setFontSize(12);
            if (data.dayOne.dayOneFirst[1].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneFirst[1].exercise, ' ');
                doc.text(result[0], 18, 71, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 75, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneFirst[1].exercise, 18, 75, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneFirst[1].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[1].rep), 96, 75, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneFirst[1].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[1].weight), 126, 75, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneFirst[1].type, 146, 75, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneFirst[2].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneFirst[2].exercise, ' ');
                doc.text(result[0], 18, 78, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 82, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneFirst[2].exercise, 18, 82, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneFirst[2].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[2].rep), 96, 82, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneFirst[2].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[2].weight), 126, 82, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneFirst[2].type, 146, 82, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneFirst[3].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneFirst[3].exercise, ' ');
                doc.text(result[0], 18, 86, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 90, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneFirst[3].exercise, 18, 90, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneFirst[3].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[3].rep), 96, 90, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneFirst[3].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[3].weight), 126, 90, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneFirst[3].type, 146, 90, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneFirst[4].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneFirst[4].exercise, ' ');
                doc.text(result[0], 18, 93, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 97, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneFirst[4].exercise, 18, 97, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneFirst[4].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[4].rep), 96, 97, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneFirst[4].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[4].weight), 126, 97, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneFirst[4].type, 146, 97, { renderingMode: renderMode }, 0);
            //=======================================

            // DIA UNO - SERIE 2
            if (data.dayOne.dayOneSecond[1].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneSecond[1].exercise, ' ');
                doc.text(result[0], 18, 119, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 123, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneSecond[1].exercise, 18, 122, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneSecond[1].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[1].rep), 96, 123, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneSecond[1].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[1].weight), 126, 123, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneSecond[1].type, 146, 123, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneSecond[2].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneSecond[2].exercise, ' ');
                doc.text(result[0], 18, 126, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 130, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneSecond[2].exercise, 18, 130, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneSecond[2].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[2].rep), 96, 130, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneSecond[2].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[2].weight), 126, 130, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneSecond[2].type, 146, 130, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneSecond[3].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneSecond[3].exercise, ' ');
                doc.text(result[0], 18, 133.5, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 137, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneSecond[3].exercise, 18, 137, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneSecond[3].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[3].rep), 96, 137, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneSecond[3].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[3].weight), 126, 137, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneSecond[3].type, 146, 137, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneSecond[4].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneSecond[4].exercise, ' ');
                doc.text(result[0], 18, 140, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 144, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneSecond[4].exercise, 18, 144, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneSecond[4].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[4].rep), 96, 144, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneSecond[4].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[4].weight), 126, 144, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneSecond[4].type, 146, 144, { renderingMode: renderMode }, 0);
            //====================================

            // DIA UNO - SERIE 3
            if (data.dayOne.dayOneThird[1].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneThird[1].exercise, ' ');
                doc.text(result[0], 18, 166, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 170, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneThird[1].exercise, 18, 170, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneThird[1].rep) === '0') ? '' : String(data.dayOne.dayOneThird[1].rep), 96, 170, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneThird[1].weight) === '0') ? '' : String(data.dayOne.dayOneThird[1].weight), 126, 170, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneThird[1].type, 146, 170, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneThird[2].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneThird[2].exercise, ' ');
                doc.text(result[0], 18, 173, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 177, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneThird[2].exercise, 18, 177, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneThird[2].rep) === '0') ? '' : String(data.dayOne.dayOneThird[2].rep), 96, 177, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneThird[2].weight) === '0') ? '' : String(data.dayOne.dayOneThird[2].weight), 126, 177, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneThird[2].type, 146, 177, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneThird[3].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneThird[3].exercise, ' ');
                doc.text(result[0], 18, 181, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 185, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneThird[3].exercise, 18, 185, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneThird[3].rep) === '0') ? '' : String(data.dayOne.dayOneThird[3].rep), 96, 185, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneThird[3].weight) === '0') ? '' : String(data.dayOne.dayOneThird[3].weight), 126, 185, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneThird[3].type, 146, 185, { renderingMode: renderMode }, 0);

            if (data.dayOne.dayOneThird[4].exercise.length > 31) {
                let result = dividirCadena(data.dayOne.dayOneThird[4].exercise, ' ');
                doc.text(result[0], 18, 188, { renderingMode: renderMode }, 0);
                doc.text(result[1], 18, 192, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayOne.dayOneThird[4].exercise, 18, 192, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayOne.dayOneThird[4].rep) === '0') ? '' : String(data.dayOne.dayOneThird[4].rep), 96, 192, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayOne.dayOneThird[4].weight) === '0') ? '' : String(data.dayOne.dayOneThird[4].weight), 126, 192, { renderingMode: renderMode }, 0);
            doc.text(data.dayOne.dayOneThird[4].type, 146, 192, { renderingMode: renderMode }, 0);
            // ====================================

            doc.addPage('a4', 'landscape');
            doc.addImage(plantillaPDF2, 'JPEG', 0, 0, 300, 200);

            // DIA DOS - SERIE 1
            if (data.dayTwo.dayTwoFirst[1].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[1].exercise, ' ');
                doc.text(result[0], 11, 28.5, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 33, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[1].exercise, 11, 33, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoFirst[1].rep) === '0') ? '' : String(data.dayTwo.dayTwoFirst[1].rep), 74, 33, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoFirst[1].weight) === '0') ? '' : String(data.dayTwo.dayTwoFirst[1].weight), 89, 33, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoFirst[1].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[1].type, ' ');
                doc.text(result[0], 100, 28.5, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 33, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[1].type, 100, 33, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoFirst[2].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[2].exercise, ' ');
                doc.text(result[0], 11, 39, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 44.5, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[2].exercise, 11, 44.5, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoFirst[2].rep) === '0') ? '' : String(data.dayTwo.dayTwoFirst[2].rep), 74, 45, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoFirst[2].weight) === '0') ? '' : String(data.dayTwo.dayTwoFirst[2].weight), 89, 45, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoFirst[2].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[2].type, ' ');
                doc.text(result[0], 100, 39, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 45, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[2].type, 100, 45, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoFirst[3].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[3].exercise, ' ');
                doc.text(result[0], 11, 51, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 56, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[3].exercise, 11, 56, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoFirst[3].rep) === '0') ? '' : String(data.dayTwo.dayTwoFirst[3].rep), 74, 56, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoFirst[3].weight) === '0') ? '' : String(data.dayTwo.dayTwoFirst[3].weight), 89, 56, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoFirst[3].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[2].type, ' ');
                doc.text(result[0], 100, 51, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 56, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[3].type, 100, 56, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoFirst[4].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[4].exercise, ' ');
                doc.text(result[0], 11, 62, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 67, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[4].exercise, 11, 67, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoFirst[4].rep) === '0') ? '' : String(data.dayTwo.dayTwoFirst[4].rep), 74, 67, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoFirst[4].weight) === '0') ? '' : String(data.dayTwo.dayTwoFirst[4].weight), 89, 67, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoFirst[4].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoFirst[4].type, ' ');
                doc.text(result[0], 100, 62, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 67, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoFirst[4].type, 100, 67, { renderingMode: renderMode }, 0);
            }
            // =============================

            // DIA DOS - SERIE 2
            if (data.dayTwo.dayTwoSecond[1].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[1].exercise, ' ');
                doc.text(result[0], 11, 90, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 95, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[1].exercise, 11, 95, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoSecond[1].rep) === '0') ? '' : String(data.dayTwo.dayTwoSecond[1].rep), 74, 95, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoSecond[1].weight) === '0') ? '' : String(data.dayTwo.dayTwoSecond[1].weight), 89, 95, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoSecond[1].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[1].type, ' ');
                doc.text(result[0], 100, 90, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 95, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[1].type, 100, 95, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoSecond[2].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[2].exercise, ' ');
                doc.text(result[0], 11, 102, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 107, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[2].exercise, 11, 107, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoSecond[2].rep) === '0') ? '' : String(data.dayTwo.dayTwoSecond[2].rep), 74, 107, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoSecond[2].weight) === '0') ? '' : String(data.dayTwo.dayTwoSecond[2].weight), 89, 107, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoSecond[2].type.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[2].type, ' ');
                doc.text(result[0], 100, 102, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 107, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[2].type, 100, 107, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoSecond[3].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[3].exercise, ' ');
                doc.text(result[0], 11, 113, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 118, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[3].exercise, 11, 118, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoSecond[3].rep) === '0') ? '' : String(data.dayTwo.dayTwoSecond[3].rep), 74, 118, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoSecond[3].weight) === '0') ? '' : String(data.dayTwo.dayTwoSecond[3].weight), 89, 118, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoSecond[3].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[3].type, ' ');
                doc.text(result[0], 100, 113, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 118, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[3].type, 100, 118, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoSecond[4].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[4].exercise, ' ');
                doc.text(result[0], 11, 124, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 129, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[4].exercise, 11, 129, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoSecond[4].rep) === '0') ? '' : String(data.dayTwo.dayTwoSecond[4].rep), 74, 129, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoSecond[4].weight) === '0') ? '' : String(data.dayTwo.dayTwoSecond[4].weight), 89, 129, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoSecond[4].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoSecond[4].type, ' ');
                doc.text(result[0], 100, 124, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 129, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoSecond[4].type, 100, 129, { renderingMode: renderMode }, 0);
            }
            // =============================

            // DIA DOS - SERIE 3
            if (data.dayTwo.dayTwoThird[1].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[1].exercise, ' ');
                doc.text(result[0], 11, 152, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 157, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[1].exercise, 11, 157, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoThird[1].rep) === '0') ? '' : String(data.dayTwo.dayTwoThird[1].rep), 74, 157, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoThird[1].weight) === '0') ? '' : String(data.dayTwo.dayTwoThird[1].weight), 89, 157, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoThird[1].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[1].type, ' ');
                doc.text(result[0], 100, 152, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 157, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[1].type, 100, 157, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoThird[2].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[2].exercise, ' ');
                doc.text(result[0], 11, 164, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 169, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[2].exercise, 11, 169, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoThird[2].rep) === '0') ? '' : String(data.dayTwo.dayTwoThird[2].rep), 74, 169, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoThird[2].weight) === '0') ? '' : String(data.dayTwo.dayTwoThird[2].weight), 89, 169, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoThird[2].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[2].type, ' ');
                doc.text(result[0], 100, 164, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 169, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[2].type, 100, 169, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoThird[3].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[3].exercise, ' ');
                doc.text(result[0], 11, 176, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 181, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[3].exercise, 11, 181, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoThird[3].rep) === '0') ? '' : String(data.dayTwo.dayTwoThird[3].rep), 74, 181, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoThird[3].weight) === '0') ? '' : String(data.dayTwo.dayTwoThird[3].weight), 89, 181, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoThird[3].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[3].type, ' ');
                doc.text(result[0], 100, 176, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 181, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[3].type, 100, 181, { renderingMode: renderMode }, 0);
            }

            if (data.dayTwo.dayTwoThird[4].exercise.length > 19) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[4].exercise, ' ');
                doc.text(result[0], 11, 186, { renderingMode: renderMode }, 0);
                doc.text(result[1], 11, 191, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[4].exercise, 11, 191, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayTwo.dayTwoThird[4].rep) === '0') ? '' : String(data.dayTwo.dayTwoThird[4].rep), 74, 191, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayTwo.dayTwoThird[4].weight) === '0') ? '' : String(data.dayTwo.dayTwoThird[4].weight), 89, 191, { renderingMode: renderMode }, 0);
            if (data.dayTwo.dayTwoThird[4].type.length > 18) {
                let result = dividirCadena(data.dayTwo.dayTwoThird[4].type, ' ');
                doc.text(result[0], 100, 186, { renderingMode: renderMode }, 0);
                doc.text(result[1], 100, 191, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayTwo.dayTwoThird[4].type, 100, 191, { renderingMode: renderMode }, 0);
            }
            // =========================


            // DIA TRES - SERIE 1
            if (data.dayThree.dayThreeFirst[1].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[1].exercise, ' ');
                doc.text(result[0], 155, 28, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 33, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[1].exercise, 155, 33, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeFirst[1].rep) === '0') ? '' : String(data.dayThree.dayThreeFirst[1].rep), 219, 33, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeFirst[1].weight) === '0') ? '' : String(data.dayThree.dayThreeFirst[1].weight), 234, 33, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeFirst[1].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[1].type, ' ');
                doc.text(result[0], 245, 28, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 33, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[1].type, 245, 33, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeFirst[2].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[2].exercise, ' ');
                doc.text(result[0], 155, 40, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 45, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[2].exercise, 155, 45, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeFirst[2].rep) === '0') ? '' : String(data.dayThree.dayThreeFirst[2].rep), 219, 45, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeFirst[2].weight) === '0') ? '' : String(data.dayThree.dayThreeFirst[2].weight), 234, 45, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeFirst[2].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[2].type, ' ');
                doc.text(result[0], 245, 40, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 45, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[2].type, 245, 45, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeFirst[3].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[3].exercise, ' ');
                doc.text(result[0], 155, 51, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 56, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[3].exercise, 155, 56, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeFirst[3].rep) === '0') ? '' : String(data.dayThree.dayThreeFirst[3].rep), 219, 56, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeFirst[3].weight) === '0') ? '' : String(data.dayThree.dayThreeFirst[3].weight), 234, 56, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeFirst[3].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[3].type, ' ');
                doc.text(result[0], 245, 51, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 56, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[3].type, 245, 56, { renderingMode: renderMode }, 0);
            }


            if (data.dayThree.dayThreeFirst[4].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[4].exercise, ' ');
                doc.text(result[0], 155, 62, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 67, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[4].exercise, 155, 67, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeFirst[4].rep) === '0') ? '' : String(data.dayThree.dayThreeFirst[4].rep), 219, 67, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeFirst[4].weight) === '0') ? '' : String(data.dayThree.dayThreeFirst[4].weight), 234, 67, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeFirst[4].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeFirst[4].type, ' ');
                doc.text(result[0], 245, 62, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 67, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeFirst[4].type, 245, 67, { renderingMode: renderMode }, 0);
            }
            // =============================

            // DIA TRES - SERIE 2
            if (data.dayThree.dayThreeSecond[1].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[1].exercise, ' ');
                doc.text(result[0], 155, 90, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 95, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[1].exercise, 155, 95, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeSecond[1].rep) === '0') ? '' : String(data.dayThree.dayThreeSecond[1].rep), 219, 95, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeSecond[1].weight) === '0') ? '' : String(data.dayThree.dayThreeSecond[1].weight), 234, 95, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeSecond[1].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[1].type, ' ');
                doc.text(result[0], 245, 90, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 95, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[1].type, 245, 95, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeSecond[2].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[2].exercise, ' ');
                doc.text(result[0], 155, 102, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 107, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[2].exercise, 155, 107, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeSecond[2].rep) === '0') ? '' : String(data.dayThree.dayThreeSecond[2].rep), 219, 107, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeSecond[2].weight) === '0') ? '' : String(data.dayThree.dayThreeSecond[2].weight), 234, 107, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeSecond[2].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[2].type, ' ');
                doc.text(result[0], 245, 102, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 107, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[2].type, 245, 107, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeSecond[3].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[3].exercise, ' ');
                doc.text(result[0], 155, 113, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 118, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[3].exercise, 155, 118, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeSecond[3].rep) === '0') ? '' : String(data.dayThree.dayThreeSecond[3].rep), 219, 118, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeSecond[3].weight) === '0') ? '' : String(data.dayThree.dayThreeSecond[3].weight), 234, 118, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeSecond[3].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[3].type, ' ');
                doc.text(result[0], 245, 113, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 118, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[3].type, 245, 118, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeSecond[4].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[4].exercise, ' ');
                doc.text(result[0], 155, 124, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 129, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[4].exercise, 155, 129, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeSecond[3].rep) === '0') ? '' : String(data.dayThree.dayThreeSecond[3].rep), 219, 129, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeSecond[4].weight) === '0') ? '' : String(data.dayThree.dayThreeSecond[4].weight), 234, 129, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeSecond[4].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeSecond[4].type, ' ');
                doc.text(result[0], 245, 124, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 129, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeSecond[4].type, 245, 129, { renderingMode: renderMode }, 0);
            }
            // =============================

            // DIA TRES - SERIE 3
            if (data.dayThree.dayThreeThird[1].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeThird[1].exercise, ' ');
                doc.text(result[0], 155, 152, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 157, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[1].exercise, 155, 157, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeThird[1].rep) === '0') ? '' : String(data.dayThree.dayThreeThird[1].rep), 219, 157, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeThird[1].weight) === '0') ? '' : String(data.dayThree.dayThreeThird[1].weight), 234, 157, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeThird[1].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeThird[1].type, ' ');
                doc.text(result[0], 245, 152, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 157, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[1].type, 245, 157, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeThird[2].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeThird[2].exercise, ' ');
                doc.text(result[0], 155, 164, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 169, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[2].exercise, 155, 169, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeThird[2].rep) === '0') ? '' : String(data.dayThree.dayThreeThird[2].rep), 219, 169, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeThird[2].weight) === '0') ? '' : String(data.dayThree.dayThreeThird[2].weight), 234, 169, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeThird[2].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeThird[2].type, ' ');
                doc.text(result[0], 245, 164, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 169, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[2].type, 245, 169, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeThird[3].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeThird[3].exercise, ' ');
                doc.text(result[0], 155, 176, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 181, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[3].exercise, 155, 181, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeThird[3].rep) === '0') ? '' : String(data.dayThree.dayThreeThird[3].rep), 219, 181, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeThird[3].weight) === '0') ? '' : String(data.dayThree.dayThreeThird[3].weight), 234, 181, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeThird[3].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeThird[3].type, ' ');
                doc.text(result[0], 245, 176, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 181, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[3].type, 245, 181, { renderingMode: renderMode }, 0);
            }

            if (data.dayThree.dayThreeThird[4].exercise.length > 19) {
                let result = dividirCadena(data.dayThree.dayThreeThird[4].exercise, ' ');
                doc.text(result[0], 155, 186, { renderingMode: renderMode }, 0);
                doc.text(result[1], 155, 191, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[4].exercise, 155, 191, { renderingMode: renderMode }, 0);
            }
            doc.text((String(data.dayThree.dayThreeThird[4].rep) === '0') ? '' : String(data.dayThree.dayThreeThird[4].rep), 219, 191, { renderingMode: renderMode }, 0);
            doc.text((String(data.dayThree.dayThreeThird[4].weight) === '0') ? '' : String(data.dayThree.dayThreeThird[4].weight), 234, 191, { renderingMode: renderMode }, 0);
            if (data.dayThree.dayThreeThird[4].type.length > 18) {
                let result = dividirCadena(data.dayThree.dayThreeThird[4].type, ' ');
                doc.text(result[0], 245, 186, { renderingMode: renderMode }, 0);
                doc.text(result[1], 245, 191, { renderingMode: renderMode }, 0);
            } else {
                doc.text(data.dayThree.dayThreeThird[4].type, 245, 191, { renderingMode: renderMode }, 0);
            }

            if (type === 'preview') return doc.output('blob');
            else if (type === 'download') return doc.save(fileName + '.pdf');
            else if (type === 'savedb') {
                fileName = data.key;
                await fs.writeFile(path.join(this.pathRutines, folderMonth, `${fileName}.pdf`), new Buffer(doc.output('arraybuffer')), (err) => {
                    if (err) throw err;
                });
            }


        } catch (error) {
            throw error;
        }
    }

    // async editRutine(data) {
    //     function dividirCadena(string, separador) {
    //         let array = string.split(separador);
    //         let segundoArray = (array.slice((array.length / 2) + 1)).join(' ');
    //         array = (array.slice(0, (array.length / 2) + 1)).join(' ')
    //         return [array, segundoArray]
    //     }

    //     try {
    //         let databaseController = new Database();
    //         let folderMonth;
    //         const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };
    //         const doc = new jsPDF({ orientation: "landscape", });
    //         doc.addImage(plantillaPDF, 'JPEG', 0, 0, 300, 200);

    //         let fileName = data.dataRutine.key;
    //         if (data.dataRutine.assignedTo.key === 0) {
    //             doc.setFontSize(17);
    //             doc.text(' ', 190, 18, null, 0)
    //         }
    //         else {
    //             doc.setFontSize(17);
    //             doc.text(String(data.dataRutine.assignedTo.text), 190, 19, null, 0)
    //         }

    //         if (data.dataRutine.startProgram !== null) {
    //             doc.setFontSize(13);
    //             doc.text(moment(data.dataRutine.startProgram).format('D/M/YY'), 209, 26, null, 0);
    //             folderMonth = `${formatMonth[(moment(data.dataRutine.startProgram).month() + 1)]}-${moment(data.dataRutine.startProgram).year()}`
    //             await databaseController.valFolder(folderMonth);
    //         } else {
    //             folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
    //             await databaseController.valFolder(folderMonth);
    //         }

    //         doc.setFontSize(12);
    //         if (data.dayOne.dayOneFirst[1].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneFirst[1].exercise, ' ');
    //             doc.text(result[0], 18, 71, null, 0);
    //             doc.text(result[1], 18, 75, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneFirst[1].exercise, 18, 75, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneFirst[1].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[1].rep), 96, 75, null, 0);
    //         doc.text((String(data.dayOne.dayOneFirst[1].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[1].weight), 126, 75, null, 0);
    //         doc.text(data.dayOne.dayOneFirst[1].type, 146, 75, null, 0);

    //         if (data.dayOne.dayOneFirst[2].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneFirst[2].exercise, ' ');
    //             doc.text(result[0], 18, 78, null, 0);
    //             doc.text(result[1], 18, 82, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneFirst[2].exercise, 18, 82, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneFirst[2].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[2].rep), 96, 82, null, 0);
    //         doc.text((String(data.dayOne.dayOneFirst[2].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[2].weight), 126, 82, null, 0);
    //         doc.text(data.dayOne.dayOneFirst[2].type, 146, 82, null, 0);

    //         if (data.dayOne.dayOneFirst[3].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneFirst[3].exercise, ' ');
    //             doc.text(result[0], 18, 86, null, 0);
    //             doc.text(result[1], 18, 90, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneFirst[3].exercise, 18, 90, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneFirst[3].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[3].rep), 96, 90, null, 0);
    //         doc.text((String(data.dayOne.dayOneFirst[3].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[3].weight), 126, 90, null, 0);
    //         doc.text(data.dayOne.dayOneFirst[3].type, 146, 90, null, 0);

    //         if (data.dayOne.dayOneFirst[4].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneFirst[4].exercise, ' ');
    //             doc.text(result[0], 18, 93, null, 0);
    //             doc.text(result[1], 18, 97, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneFirst[4].exercise, 18, 97, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneFirst[4].rep) === '0') ? '' : String(data.dayOne.dayOneFirst[4].rep), 96, 97, null, 0);
    //         doc.text((String(data.dayOne.dayOneFirst[4].weight) === '0') ? '' : String(data.dayOne.dayOneFirst[4].weight), 126, 97, null, 0);
    //         doc.text(data.dayOne.dayOneFirst[4].type, 146, 97, null, 0);

    //         if (data.dayOne.dayOneSecond[1].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneSecond[1].exercise, ' ');
    //             doc.text(result[0], 18, 119, null, 0);
    //             doc.text(result[1], 18, 123, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneSecond[1].exercise, 18, 123, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneSecond[1].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[1].rep), 96, 123, null, 0);
    //         doc.text((String(data.dayOne.dayOneSecond[1].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[1].weight), 126, 123, null, 0);
    //         doc.text(data.dayOne.dayOneSecond[1].type, 146, 123, null, 0);

    //         if (data.dayOne.dayOneSecond[2].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneSecond[2].exercise, ' ');
    //             doc.text(result[0], 18, 126, null, 0);
    //             doc.text(result[1], 18, 130, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneSecond[2].exercise, 18, 130, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneSecond[2].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[2].rep), 96, 130, null, 0);
    //         doc.text((String(data.dayOne.dayOneSecond[2].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[2].weight), 126, 130, null, 0);
    //         doc.text(data.dayOne.dayOneSecond[2].type, 146, 130, null, 0);

    //         if (data.dayOne.dayOneSecond[3].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneSecond[3].exercise, ' ');
    //             doc.text(result[0], 18, 133.5, null, 0);
    //             doc.text(result[1], 18, 137, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneSecond[3].exercise, 18, 137, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneSecond[3].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[3].rep), 96, 137, null, 0);
    //         doc.text((String(data.dayOne.dayOneSecond[3].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[3].weight), 126, 137, null, 0);
    //         doc.text(data.dayOne.dayOneSecond[3].type, 146, 137, null, 0);

    //         if (data.dayOne.dayOneSecond[4].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneSecond[4].exercise, ' ');
    //             doc.text(result[0], 18, 140, null, 0);
    //             doc.text(result[1], 18, 144, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneSecond[4].exercise, 18, 144, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneSecond[4].rep) === '0') ? '' : String(data.dayOne.dayOneSecond[4].rep), 96, 144, null, 0);
    //         doc.text((String(data.dayOne.dayOneSecond[4].weight) === '0') ? '' : String(data.dayOne.dayOneSecond[4].weight), 126, 144, null, 0);
    //         doc.text(data.dayOne.dayOneSecond[4].type, 146, 144, null, 0);

    //         if (data.dayOne.dayOneThird[1].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneThird[1].exercise, ' ');
    //             doc.text(result[0], 18, 166, null, 0);
    //             doc.text(result[1], 18, 170, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneThird[1].exercise, 18, 170, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneThird[1].rep) === '0') ? '' : String(data.dayOne.dayOneThird[1].rep), 96, 170, null, 0);
    //         doc.text((String(data.dayOne.dayOneThird[1].weight) === '0') ? '' : String(data.dayOne.dayOneThird[1].weight), 126, 170, null, 0);
    //         doc.text(data.dayOne.dayOneThird[1].type, 146, 170, null, 0);

    //         if (data.dayOne.dayOneThird[2].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneThird[2].exercise, ' ');
    //             doc.text(result[0], 18, 173, null, 0);
    //             doc.text(result[1], 18, 177, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneThird[2].exercise, 18, 177, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneThird[2].rep) === '0') ? '' : String(data.dayOne.dayOneThird[2].rep), 96, 177, null, 0);
    //         doc.text((String(data.dayOne.dayOneThird[2].weight) === '0') ? '' : String(data.dayOne.dayOneThird[2].weight), 126, 177, null, 0);
    //         doc.text(data.dayOne.dayOneThird[2].type, 146, 177, null, 0);

    //         if (data.dayOne.dayOneThird[3].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneThird[3].exercise, ' ');
    //             doc.text(result[0], 18, 181, null, 0);
    //             doc.text(result[1], 18, 185, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneThird[3].exercise, 18, 185, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneThird[3].rep) === '0') ? '' : String(data.dayOne.dayOneThird[3].rep), 96, 185, null, 0);
    //         doc.text((String(data.dayOne.dayOneThird[3].weight) === '0') ? '' : String(data.dayOne.dayOneThird[3].weight), 126, 185, null, 0);
    //         doc.text(data.dayOne.dayOneThird[3].type, 146, 185, null, 0);

    //         if (data.dayOne.dayOneThird[4].exercise.length > 31) {
    //             let result = dividirCadena(data.dayOne.dayOneThird[4].exercise, ' ');
    //             doc.text(result[0], 18, 188, null, 0);
    //             doc.text(result[1], 18, 192, null, 0);
    //         } else {
    //             doc.text(data.dayOne.dayOneThird[4].exercise, 18, 192, null, 0);
    //         }
    //         doc.text((String(data.dayOne.dayOneThird[4].rep) === '0') ? '' : String(data.dayOne.dayOneThird[4].rep), 96, 192, null, 0);
    //         doc.text((String(data.dayOne.dayOneThird[4].weight) === '0') ? '' : String(data.dayOne.dayOneThird[4].weight), 126, 192, null, 0);
    //         doc.text(data.dayOne.dayOneThird[4].type, 146, 192, null, 0);


    //         await fs.writeFile(path.join(this.pathRutines, folderMonth, `${fileName}.pdf`), new Buffer(doc.output('arraybuffer')), (err) => {
    //             if (err) throw err;
    //         });
    //     } catch (error) {
    //         throw error
    //     }
    // }

}

