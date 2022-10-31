const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class MedicalForms {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    pathMedicalForms = path.join(__dirname, 'infoFiles', 'dataClients', 'medicalForms.json');

    async getMedicalForms() {
        try {
            let planillasMedicas = await fs2.readFileSync(this.pathMedicalForms);
            planillasMedicas = JSON.parse(planillasMedicas);
            return planillasMedicas;
        } catch (error) {
            throw error;
        }
    }

    async addClient(clientKey) {
        try {
            let planillas = fs2.readFileSync(this.pathMedicalForms);
            planillas = JSON.parse(planillas);

            planillas.push(clientKey);
            planillas = JSON.stringify(planillas);

            await fs.writeFile(path.join(this.data, `medicalForms.json`), planillas, (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }

}