import { Client } from './controllerClients';
import moment from 'moment';
import { GeneratorPDF } from './pdf';
const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Rutines {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    dataRutines = path.join(__dirname, 'infoFiles', 'dataClients', 'rutines.json');
    pathRutines = path.join(__dirname, 'infoFiles', 'rutinasCreadas');

    async validateRutine(rutineName) { // Valida si ya existe una rutina con el mismo nombre
        try {
            let rutines = fs2.readFileSync(this.dataRutines);
            rutines = JSON.parse(rutines);

            let exists = false;
            rutines.forEach(rutine => {
                let arrayRutine = Object.values(rutine.name);
                if (arrayRutine.includes(rutineName)) return exists = true;
            });
            if (exists) return { type: 'error', message: 'Rutina ya existente' }
            else return { type: 'success' }
        } catch (error) {
            throw error;
        }
    }

    async createRutine(dataRutine) {
        try {
            // let result = await this.validateRutine(dataRutine.name)
            // if (result.type === 'error') return result
            // else {
            // Formateamos como queremos que se guarde la rutina en el .JSON
            // let rutina = { dataRutine, firstSerie, secondSerie, thirdSerie }

            let rutines = fs2.readFileSync(this.dataRutines);
            rutines = JSON.parse(rutines);
            rutines.rutines.push(dataRutine);
            rutines.info.totalCreated = rutines.info.totalCreated + 1;
            rutines = JSON.stringify(rutines);

            await fs.writeFile(path.join(this.data, `rutines.json`), rutines, (err) => {
                if (err) throw err;
            });

            // Verificamos si a la rutina se le asigno un cliente:
            if (dataRutine.assignedTo.key !== 0) {
                let controllerClient = new Client();
                await controllerClient.addRutineToClient(dataRutine.assignedTo.key, dataRutine);
            }
            return { type: 'success', message: 'Rutina creada con éxito' }
            // }
        } catch (error) {
            throw error;
        }
    }

    async getAllRutines() {
        try {
            let rutines = await fs2.readFileSync(this.dataRutines);
            rutines = JSON.parse(rutines);
            rutines = rutines.rutines;
            return rutines
        } catch (error) {
            throw error;
        }
    }

    async getInfoRutines() {
        try {
            let rutines = await fs2.readFileSync(this.dataRutines);
            rutines = JSON.parse(rutines);
            rutines = rutines.info;
            return rutines
        } catch (error) {
            throw error;
        }
    }

    async deleteRutine(rutina) {
        const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };
        try {
            let data = await fs2.readFileSync(this.dataRutines);
            data = JSON.parse(data);

            let rutines = data.rutines.filter(rutine => rutine.key !== rutina.key);
            data.rutines = rutines;
            data = JSON.stringify(data);
            await fs.writeFile(path.join(this.data, `rutines.json`), data, (err) => {
                if (err) throw err;
            });

            if (rutina.startProgram !== null) {
                let folderMonth = `${formatMonth[(moment(rutina.startProgram).month() + 1)]}-${moment(rutina.startProgram).year()}`
                await fs.unlink(path.join(this.pathRutines, folderMonth, `${rutina.key}.pdf`), function (err) {
                    if (err) return console.log(err);
                });
            } else {
                let folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
                await fs.unlink(path.join(this.pathRutines, folderMonth, `${rutina.key}.pdf`), function (err) {
                    if (err) return console.log(err);
                });
            }
        } catch (error) {
            throw error;
        }
    }

    async filterRutines(data) {
        try {
            let rutines = await fs2.readFileSync(this.dataRutines);
            rutines = JSON.parse(rutines);
            rutines = rutines.rutines.filter(rutine => (rutine.name).toLowerCase().includes(data.search.toLowerCase()) || (rutine.assignedTo.text).toLowerCase().includes(data.search.toLowerCase()));
            if (Number(data.month) > 0) {
                return rutines = rutines.filter(rutine => rutine.startProgram !== null && (moment(rutine.startProgram).month() + 1) === Number(data.month))
            }

            return rutines
        } catch (error) {
            throw error;
        }
    }

    async editRutine(rutineEdited, type) {
        const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };

        try {
            const controllerPDF = new GeneratorPDF();
            let data = await fs2.readFileSync(this.dataRutines);
            data = JSON.parse(data);

            data.rutines = data.rutines.filter(item => item.key !== rutineEdited.key);
            data.rutines.push(rutineEdited);
            data = JSON.stringify(data);

            await fs.writeFile(path.join(this.data, `rutines.json`), data, (err) => {
                if (err) throw err;
            });


            //Editamos archivo PDF ya guardado en base de datos
            if (rutineEdited.startProgram !== null) {
                let folderMonth = `${formatMonth[(moment(rutineEdited.startProgram).month() + 1)]}-${moment(rutineEdited.startProgram).year()}`
                await fs.unlink(path.join(this.pathRutines, folderMonth, `${rutineEdited.key}.pdf`), function (err) {
                    if (err) return console.log(err);
                });
            } else {
                let folderMonth = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`
                await fs.unlink(path.join(this.pathRutines, folderMonth, `${rutineEdited.key}.pdf`), function (err) {
                    if (err) return console.log(err);
                });
            }
            await controllerPDF.loadPDF(rutineEdited, 'savedb');


            if (rutineEdited.assignedTo.key !== 0) {
                let controllerClient = new Client();
                await controllerClient.editRutineClient(rutineEdited);
            }

        } catch (error) {
            throw error;
        }
    }
}