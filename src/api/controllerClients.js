const fs = window.require('fs').promises;
const fs2 = window.require('fs');
const path = window.require('path');

export class Client {
    data = path.join(__dirname, 'infoFiles', 'dataClients');
    infoClients = path.join(__dirname, 'infoFiles', 'dataClients', 'clients.json');

    async validateClient(name, lastName) { // Valida si un cliente ya está creado o no
        let clients = fs2.readFileSync(this.infoClients);
        clients = JSON.parse(clients);

        let exists = false;
        clients.forEach(async client => {
            let arrayClient = Object.values(client);
            if ((arrayClient.includes(name)) && (arrayClient.includes(lastName))) return exists = true;
        });
        if (exists) return { type: 'error', message: 'Cliente ya registrado' }
        else return { type: 'success' }

    }

    async createClient(name, lastName, clientInfo) {
        try {
            let result = await this.validateClient(name, lastName);
            if (result.type === 'error') return result
            else {
                let clientes = fs2.readFileSync(this.infoClients);
                clientes = JSON.parse(clientes);

                clientes.push(clientInfo);
                clientes = JSON.stringify(clientes);

                await fs.writeFile(path.join(this.data, `clients.json`), clientes, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
                return { type: 'success', message: 'Cliente creado con éxito' }
            }
        } catch (error) {
            throw error;
        }
    }

    async updateClient(dataClient) {
        try {
            let clients = await fs2.readFileSync(this.infoClients);
            clients = JSON.parse(clients);

            clients = clients.filter(client => (dataClient.key) !== (client.key));
            clients.push(dataClient)
            clients = JSON.stringify(clients);

            await fs.writeFile(path.join(this.data, `clients.json`), clients, (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteClient(dataClient) {
        try {
            let clients = await fs2.readFileSync(this.infoClients);
            clients = JSON.parse(clients);

            clients = clients.filter(client => (dataClient[0].name + dataClient[0].lastName) !== (client.name + client.lastName));
            clients = JSON.stringify(clients);

            await fs.writeFile(path.join(this.data, `clients.json`), clients, (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }

    async addRutineToClient(clientKey, rutine) {
        try {
            let clientsAll = await fs2.readFileSync(this.infoClients);
            clientsAll = JSON.parse(clientsAll);

            // Buscamos el cliente al que se le asignó la rutina y se la agregamos
            let clients = clientsAll.filter(client => client.key === clientKey);
            clients[0].rutinas.push(rutine);

            // Agregamos el cliente que se le asignó la rutina a la base de datos
            clientsAll = clientsAll.filter(client => client.key !== clientKey);
            clientsAll.push(clients);
            clientsAll = clientsAll.flat(Infinity);
            clientsAll = JSON.stringify(clientsAll);

            await fs.writeFile(path.join(this.data, `clients.json`), clientsAll, (err) => {
                if (err) throw err;
            });
        } catch (error) {

        }
    }

    async editRutineClient(rutine) {
        try {
            let clientsAll = await fs2.readFileSync(this.infoClients);
            clientsAll = JSON.parse(clientsAll);

            //Buscamos el cliente al que se le editó la rutina
            let cliente = clientsAll.filter(item => item.key === rutine.assignedTo.key);

            //Buscamos entre las rutinas del cliente la que queremos editar
            let newRutinesClient = cliente[0].rutinas.filter(item => item.key !== rutine.key);
            newRutinesClient.push(rutine);
            cliente[0].rutinas = newRutinesClient;

            //Subimos el cliente con la rutina editada a la base de datos
            clientsAll = clientsAll.filter(client => client.key !== cliente[0].key)
            clientsAll.push(cliente)
            clientsAll = clientsAll.flat(Infinity);
            clientsAll = JSON.stringify(clientsAll);

            await fs.writeFile(path.join(this.data, `clients.json`), clientsAll, (err) => {
                if (err) throw err;
            });
        } catch (error) {
            throw error;
        }
    }

    async getAllClients() {
        try {
            let buffer = await fs2.readFileSync(this.infoClients);
            let data = JSON.parse(buffer);
            return data
        } catch (error) {
            throw error;
        }
    }

    async getOneClient(key) {
        try {
            let clients = await fs2.readFileSync(this.infoClients);
            clients = JSON.parse(clients);

            let client = clients.filter(client => client.key === key);
            return client
        } catch (error) {
            throw error;
        }
    }
}