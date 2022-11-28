import { Client } from './index';
import { Attedance } from './attendance.controller';
const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Estadisticas {

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
}