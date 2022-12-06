import moment from "moment";
const fs = window.require('fs').promises;
const path = window.require('path');

export class Database {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    dataClients = path.join(__dirname, 'infoFiles', 'dataClients', 'clients.json');
    dataExercises = path.join(__dirname, 'infoFiles', 'dataClients', 'exercises.json');
    dataRutines = path.join(__dirname, 'infoFiles', 'rutinasCreadas');

    async validateDirectories() {
        try {
            // Cada vez que se ejecuta comprueba que existan los directorios 
            // vitales para el funcionamiento. Si no existen los crea.
            let arrayFiles = await fs.readdir(__dirname);

            if (!arrayFiles.includes('infoFiles')) {
                await fs.mkdir(path.join(__dirname, 'infoFiles'));
                this.validateDirectories();
            }

            arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles'));

            if (!arrayFiles.includes('dataClients')) {
                await fs.mkdir(path.join(__dirname, 'infoFiles', 'dataClients'));
            }
            let initialData = JSON.stringify([]);
            let files = await fs.readdir(this.data);

            if (!files.includes('clients.json')) {
                await fs.writeFile(path.join(this.data, `clients.json`), initialData, (err) => {
                    if (err) throw err;
                });
            }

            if (!files.includes('exercises.json')) {
                await fs.writeFile(path.join(this.data, `exercises.json`), initialData, (err) => {
                    if (err) throw err;
                });
            }

            if (!files.includes('medicalForms.json')) {
                await fs.writeFile(path.join(this.data, `medicalForms.json`), initialData, (err) => {
                    if (err) throw err;
                });
            }

            if (!arrayFiles.includes('rutinasCreadas')) {
                await fs.mkdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas'));
            }

            if (!files.includes('medicalForms.json')) {
                await fs.writeFile(path.join(this.data, `medicalForms.json`), JSON.stringify([]), (err) => {
                    if (err) throw err;
                });
            }
            if (!files.includes('rutines.json')) {
                await fs.writeFile(path.join(this.data, `rutines.json`), JSON.stringify({ info: { totalCreated: 0 }, rutines: [] }), (err) => {
                    if (err) throw err;
                });
            }
            if (!files.includes('attendance.json')) {
                await fs.writeFile(path.join(this.data, 'attendance.json'), JSON.stringify([]), (err) => {
                    if (err) throw err;
                })
            }

            let year = new Date().getFullYear();
            let month = moment().month() + 1;
            if (!files.includes('statistics.json')) {
                await fs.writeFile(path.join(this.data, 'statistics.json'), JSON.stringify({ masculinos: [], femeninos: [], totalRecaudado: { [year]: [{ month: month, monto: 0 }] } }), (err) => {
                    if (err) throw err;
                })
            }
            return
        } catch (error) {
            throw error;
        }
    }
    // async validateDirectories(nameDirectory) {
    //     try {
    //         // Cada vez que se ejecuta comprueba que existan los directorios 
    //         // vitales para el funcionamiento. Si no existen los crea.
    //         let arrayFiles = await fs.readdir(__dirname);

    //         if (!arrayFiles.includes('infoFiles')) {
    //             await fs.mkdir(path.join(__dirname, 'infoFiles'));
    //             this.validateDirectories('dataClients');
    //         }
    //         else if (nameDirectory === 'dataClients') {
    //             let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles'));
    //             if (!arrayFiles.includes('dataClients')) {
    //                 await fs.mkdir(path.join(__dirname, 'infoFiles', 'dataClients'));
    //                 let initialData = JSON.stringify([]);
    //                 await fs.writeFile(path.join(this.data, `clients.json`), initialData, (err) => {
    //                     if (err) throw err;
    //                 });
    //                 await fs.writeFile(path.join(this.data, `exercises.json`), initialData, (err) => {
    //                     if (err) throw err;
    //                 });
    //                 await fs.writeFile(path.join(this.data, `medicalForms.json`), initialData, (err) => {
    //                     if (err) throw err;
    //                 });
    //                 this.validateDirectories('rutinasCreadas');
    //             }
    //         }
    //         else if (nameDirectory === 'rutinasCreadas') {
    //             let arrayFiles = await fs.readdir(path.join(__dirname, 'infoFiles'));
    //             if (!arrayFiles.includes('rutinasCreadas')) {
    //                 await fs.mkdir(path.join(__dirname, 'infoFiles', 'rutinasCreadas'));
    //             }
    //             this.validateDirectories('medicalForm');
    //         }
    //         let files = await fs.readdir(this.data);
    //         if (!files.includes('medicalForms.json')) {
    //             await fs.writeFile(path.join(this.data, `medicalForms.json`), JSON.stringify([]), (err) => {
    //                 if (err) throw err;
    //             });
    //             this.validateDirectories('attendance');
    //         }
    //         else if (!files.includes('rutines.json')) {
    //             await fs.writeFile(path.join(this.data, `rutines.json`), JSON.stringify({ info: { totalCreated: 0 }, rutines: [] }), (err) => {
    //                 if (err) throw err;
    //             });
    //             this.validateDirectories('attendance');
    //         }
    //         else if (!files.includes('attendance.json')) {
    //             await fs.writeFile(path.join(this.data, 'attendance.json'), JSON.stringify([]), (err) => {
    //                 if (err) throw err;
    //             })
    //             this.validateDirectories('attendance');
    //         }
    //         else if (!files.includes('statistics.json')) {
    //             await fs.writeFile(path.join(this.data, 'statistics.json'), JSON.stringify({ "masculinos": [], "femeninos": [] }), (err) => {
    //                 if (err) throw err;
    //             })
    //             this.validateDirectories('attendance');
    //         }
    //         return
    //     } catch (error) {
    //         throw error;
    //     }
    // }

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


