import { Client } from './index';
import { Attedance } from './attendance.controller';
import moment from 'moment';
const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Estadisticas {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    statisticsPath = path.join(__dirname, 'infoFiles', 'dataClients', 'statistics.json');

    async getAllData() {
        try {

        } catch (error) {
            throw error;
        }
    }

    async getTotals() {
        try {

            let controllerClient = new Client();
            let result = await controllerClient.getAllClients();

            let mujeres = result.filter(client => client.gender === 'Femenino');
            let hombres = result.filter(client => client.gender === 'Masculino');
            let otros = result.filter(client => client.gender !== 'Femenino' && client.gender !== 'Masculino');

            return [mujeres.length, hombres.length, otros.length];

        } catch (error) {
            throw error;
        }
    }

    async getAttendante() {
        try {
            const attendanceController = new Attedance();
            const year = new Date().getFullYear();

            let attendanceData = await attendanceController.getAttendance();

            let enero = attendanceData.filter(e => e.info.year === year && e.info.month === 1);
            let febrero = attendanceData.filter(e => e.info.year === year && e.info.month === 2);
            let marzo = attendanceData.filter(e => e.info.year === year && e.info.month === 3);
            let abril = attendanceData.filter(e => e.info.year === year && e.info.month === 4);
            let mayo = attendanceData.filter(e => e.info.year === year && e.info.month === 5);
            let junio = attendanceData.filter(e => e.info.year === year && e.info.month === 6);
            let julio = attendanceData.filter(e => e.info.year === year && e.info.month === 7);
            let agosto = attendanceData.filter(e => e.info.year === year && e.info.month === 8);
            let septiembre = attendanceData.filter(e => e.info.year === year && e.info.month === 9);
            let octubre = attendanceData.filter(e => e.info.year === year && e.info.month === 10);
            let noviembre = attendanceData.filter(e => e.info.year === year && e.info.month === 11);
            let diciembre = attendanceData.filter(e => e.info.year === year && e.info.month === 12);

            let result = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
            return result
        } catch (error) {
            throw error;
        }
    }

    async saveNewClient(gender) {
        try {
            let buffer = await fs2.readFileSync(this.statisticsPath);
            let data = JSON.parse(buffer);

            let month = (moment().month() + 1);
            let year = new Date().getFullYear()

            if (gender === 'Masculino') {
                let result = data.masculinos.filter(e => (e.year === year) && (e.month === month));
                if (result.length < 1) data.masculinos.push({ year, month, cantidad: 1 })
                else result[0].cantidad += 1;
            }
            else if (gender === 'Femenino') {
                let result = data.femeninos.filter(e => (e.year === year) && (e.month === month));
                if (result.length < 1) data.femeninos.push({ year, month, cantidad: 1 })
                else result[0].cantidad += 1;
            }

            data = JSON.stringify(data);

            await fs.writeFile(path.join(this.data, `statistics.json`), data, (err) => {
                if (err) throw err;
            });


        } catch (error) {
            throw error;
        }
    }

    async getNewClients() {
        try {
            let buffer = await fs2.readFileSync(this.statisticsPath);
            let data = JSON.parse(buffer);
            const year = new Date().getFullYear();

            function newClients(type) {
                let result;
                if (type === 'femeninos') {
                    let enero = data.femeninos.filter(e => (e.month === 1 && e.year === year))
                    let febrero = data.femeninos.filter(e => (e.month === 2 && e.year === year))
                    let marzo = data.femeninos.filter(e => (e.month === 3 && e.year === year))
                    let abril = data.femeninos.filter(e => (e.month === 4 && e.year === year))
                    let mayo = data.femeninos.filter(e => (e.month === 5 && e.year === year))
                    let junio = data.femeninos.filter(e => (e.month === 6 && e.year === year))
                    let julio = data.femeninos.filter(e => (e.month === 7 && e.year === year))
                    let agosto = data.femeninos.filter(e => (e.month === 8 && e.year === year))
                    let septiembre = data.femeninos.filter(e => (e.month === 9 && e.year === year))
                    let octubre = data.femeninos.filter(e => (e.month === 10 && e.year === year))
                    let noviembre = data.femeninos.filter(e => (e.month === 11 && e.year === year))
                    let diciembre = data.femeninos.filter(e => (e.month === 12 && e.year === year))
                    result = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
                }
                else if (type === 'masculinos') {
                    let enero = data.masculinos.filter(e => (e.month === 1 && e.year === year))
                    let febrero = data.masculinos.filter(e => (e.month === 2 && e.year === year))
                    let marzo = data.masculinos.filter(e => (e.month === 3 && e.year === year))
                    let abril = data.masculinos.filter(e => (e.month === 4 && e.year === year))
                    let mayo = data.masculinos.filter(e => (e.month === 5 && e.year === year))
                    let junio = data.masculinos.filter(e => (e.month === 6 && e.year === year))
                    let julio = data.masculinos.filter(e => (e.month === 7 && e.year === year))
                    let agosto = data.masculinos.filter(e => (e.month === 8 && e.year === year))
                    let septiembre = data.masculinos.filter(e => (e.month === 9 && e.year === year))
                    let octubre = data.masculinos.filter(e => (e.month === 10 && e.year === year))
                    let noviembre = data.masculinos.filter(e => (e.month === 11 && e.year === year))
                    let diciembre = data.masculinos.filter(e => (e.month === 12 && e.year === year))
                    result = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
                }
                return result
            }

            let masculinos = newClients('masculinos');
            let femeninos = newClients('femeninos');

            return { masculinos, femeninos };

        } catch (error) {
            throw error;
        }
    }

    async saveRecaudo(month, year, newData) {
        try {
            let buffer = await fs2.readFileSync(this.statisticsPath);
            let data = JSON.parse(buffer);

            if (data.totalRecaudado[year] === undefined) data.totalRecaudado = { ...data.totalRecaudado, [year]: [{ month: month, monto: 0 }] }
            let arrayRecaudo = data.totalRecaudado[String(year)].filter(e => e.month !== month);

            let total = 0;
            newData.forEach(element => total += Number(element.payment));

            arrayRecaudo.push({
                month: month,
                monto: total
            })

            data.totalRecaudado = { ...data.totalRecaudado, [year]: arrayRecaudo };

            data = JSON.stringify(data);

            await fs.writeFile(path.join(this.data, `statistics.json`), data, (err) => {
                if (err) throw err;
            });

        } catch (error) {
            throw error;
        }
    }

    async getRecaudo() {
        try {
            let buffer = await fs2.readFileSync(this.statisticsPath);
            let data = JSON.parse(buffer);

            if (data.totalRecaudado === undefined) return;

            else return data.totalRecaudado
            // const year = new Date().getFullYear();
            // const month = moment().month(+1);

            // console.log(year);
            // console.log(month);


        } catch (error) {
            throw error;
        }
    }
}