import moment from "moment";
const fs = window.require('fs').promises;
const path = window.require('path');

export class Database {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    dataClients = path.join(__dirname, 'infoFiles', 'dataClients', 'clients.json');
    dataExercises = path.join(__dirname, 'infoFiles', 'dataClients', 'exercises.json');
    dataRutines = path.join(__dirname, 'infoFiles', 'rutinasCreadas');

    async validateDirectories(nameDirectory) {
        try {
            // Cada vez que se ejecuta comprueba que existan los directorios 
            // esenciales para el funcionamiento. Si no existen los crea.
            let arrayFiles = await fs.readdir(__dirname);

            if (!arrayFiles.includes('infoFiles')) {
                await fs.mkdir(path.join(__dirname, 'infoFiles'));
                this.validateDirectories('dataClients');
            }
            else if (nameDirectory === 'dataClients') {
                let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles'));
                if (!arrayFiles.includes('dataClients')) {
                    await fs.mkdir(path.join(__dirname, 'infoFiles', 'dataClients'));
                    let initialData = JSON.stringify([]);
                    await fs.writeFile(path.join(this.data, `clients.json`), initialData, (err) => {
                        if (err) throw err;
                    });
                    await fs.writeFile(path.join(this.data, `rutines.json`), initialData, (err) => {
                        if (err) throw err;
                    });
                    await fs.writeFile(path.join(this.data, `exercises.json`), initialData, (err) => {
                        if (err) throw err;
                    });
                    await fs.writeFile(path.join(this.data, `medicalForms.json`), initialData, (err) => {
                        if (err) throw err;
                    });
                    this.validateDirectories('rutinasCreadas');
                }
            }
            else if (nameDirectory === 'rutinasCreadas') {
                let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles'));
                if (!arrayFiles.includes('rutinasCreadas')) {
                    await fs.mkdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas'));
                }
                this.validateDirectories('medicalForm');
            }
            let files = await fs.readdir(this.data);
            if (!files.includes('medicalForms.json')) {
                await fs.writeFile(path.join(this.data, `medicalForms.json`), JSON.stringify([]), (err) => {
                    if (err) throw err;
                });
            }
        } catch (error) {
            throw error;
        }
    }

    async newMonth() {
        // Comprueba si existe el folder donde se guardaran las rutinas creadas durante ese mes y año
        const formatMonth = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' }

        try {
            if ((moment().date() === 6)) {
                let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas'));
                let folderName = `${formatMonth[(moment().month() + 1)]}-${moment().year()}`;

                if (!arrayFiles.includes(folderName)) {
                    await fs.mkdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas', `${folderName}`));
                }
            }
        } catch (error) {
            throw error;
        }
    }

    async valFolder(folderDate) {
        // Comprueba si existe el folder donde se guardaran las rutinas creadas durante ese mes y año
        try {

            let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas'));
            if (!arrayFiles.includes(folderDate)) await fs.mkdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas', `${folderDate}`));
            else return

        } catch (error) {
            throw error;
        }
    }
}


