const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Exercises {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    dataExercises = path.join(__dirname, 'infoFiles', 'dataClients', 'exercises.json');

    async validateExercise(infoExercise) {
        try {
            let exercises = fs2.readFileSync(this.dataExercises);
            exercises = JSON.parse(exercises);

            let exists = false;
            exercises.forEach(exercise => {
                let arrayExercise = Object.values(exercise);
                if ((arrayExercise.includes(infoExercise.value))) return exists = true;
            });
            if (exists) return { type: 'error', message: 'Ejercicio ya creado' }
            else return { type: 'success' }

        } catch (error) {

        }
    }

    async createExercise(infoExercise) {
        try {
            let result = await this.validateExercise(infoExercise);
            if (result.type === 'error') return result
            else {
                let exercises = fs2.readFileSync(this.dataExercises);
                exercises = JSON.parse(exercises);

                exercises.push(infoExercise);
                exercises = JSON.stringify(exercises);

                await fs.writeFile(path.join(this.data, `exercises.json`), exercises, (err) => {
                    if (err) throw err;
                });
                return { type: 'success', message: 'Ejercicio creado con éxito' }
            }
        } catch (error) {

        }
    }

    async deleteExercise(infoExercise) {
        try {
            let exercises = fs2.readFileSync(this.dataExercises);
            exercises = JSON.parse(exercises);

            exercises = exercises.filter(exercise => exercise.key !== infoExercise.key);
            exercises = JSON.stringify(exercises);
            await fs.writeFile(path.join(this.data, `exercises.json`), exercises, (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }

    async getAllExercises() {
        try {
            let buffer = await fs2.readFileSync(this.dataExercises);
            let data = JSON.parse(buffer);
            return data
        } catch (error) {
            throw error;
        }
    }

    async updateExercise(infoExercise) {
        try {
            let exercises = fs2.readFileSync(this.dataExercises);
            exercises = JSON.parse(exercises);

            exercises = exercises.filter(exercise => exercise.key !== infoExercise.key);
            exercises.push(infoExercise);
            exercises = JSON.stringify(exercises);

            await fs.writeFile(path.join(this.data, `exercises.json`), exercises, (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }
}