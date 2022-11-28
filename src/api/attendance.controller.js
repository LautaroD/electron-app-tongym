import moment from 'moment';
const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Attedance {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    attendancePath = path.join(__dirname, 'infoFiles', 'dataClients', 'attendance.json');

    async saveAttendance(data, month, year) {
        try {
            let list = await fs2.readFileSync(this.attendancePath);
            list = JSON.parse(list);

            list = list.filter(e => ((Object.values(e.info)).includes(year) && (Object.values(e.info)).includes(month)) === false)

            list.push(data);
            list = list.flat(Infinity)

            list = JSON.stringify(list);

            await fs.writeFile(path.join(this.data, `attendance.json`), list, (err) => {
                if (err) throw err;
            });

        } catch (error) {
            throw error;
        }
    }

    async getAttendance() {
        try {
            let buffer = await fs2.readFileSync(this.attendancePath);
            let data = JSON.parse(buffer);
            return data
        } catch (error) {
            throw error;
        }
    }

    async checkMonth() {
        try {
            let buffer = await fs2.readFileSync(this.attendancePath);
            let data = JSON.parse(buffer);

            let año = new Date().getFullYear();
            let mes = moment().month() + 1;

            if (data.length < 1) {
                await fs.writeFile(path.join(this.data, `attendance.json`), JSON.stringify([{ info: { year: año, month: mes }, client: [] }]), (err) => {
                    if (err) throw err;
                });
            }

        } catch (error) {
            throw error;
        }
    }

}