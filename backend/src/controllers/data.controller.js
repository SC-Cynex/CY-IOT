const admin = require('../config/firebase');

const getData = async (req, res) => {
    try {
        const snapshot = await admin.database().ref('data').once('value');
        let data = [];

        snapshot.forEach(childSnapshot => {
            const item = childSnapshot.val();
            const [latitude, longitude] = item.location?.split(',').map(Number) || [null, null];

            const colorId = item.colorId || '';
            let message = item.message || '';
            let colorCode = '';

            switch (colorId) {
                case 1:
                case 2:
                    message = "Freios em temperatura normal";
                    colorCode = "#00FFFF";
                    break;
                case 3:
                    message = "Leve aumento na temperatura";
                    colorCode = "#7FFF00";
                    break;
                case 4:
                    message = "Temperatura moderada";
                    colorCode = "#FFFF00";
                    break;
                case 5:
                    message = "Temperatura alta";
                    colorCode = "#FFA500";
                    break;
                case 6:
                    message = "Temperatura muito alta";
                    colorCode = "#FF4500";
                    break;
                case 7:
                case 8:
                    message = "ATENÇÃO, FREIO SUPERAQUECENDO";
                    colorCode = "#8B0000";
                    break;
                default:
                    message = "Sem informações de temperatura";
                    colorCode = "#000000";
            }

            data.push({
                id: childSnapshot.key,
                altitude: item.alt || 0,
                speed: item.speed || 0,
                temperature: item.temp || 0,
                satellites: item.sat || 0,
                height: item.height || 0,
                accuracy: item.hdop || 0,
                latitude: latitude,
                longitude: longitude,
                colorId: colorId,
                colorCode: colorCode,
                message: message,
                time: new Date(item.time),
                formattedTime: new Date(item.time).toLocaleString('pt-BR', {
                    timeZone: 'America/Sao_Paulo',
                }),
            });
        });

        data.sort((a, b) => b.time - a.time);
        data = data.map(item => {
            delete item.time;
            return item;
        });

        res.status(200).json(data);
    } catch (error) {
        console.error("Erro ao buscar dados do Realtime Database:", error);
        res.status(500).json({ error: "Erro ao buscar os dados" });
    }
};

module.exports = {
    getData,
};

const calculateColorId = (temperature, speed) => {
    if (temperature >= 250) {
        return 8;
    } else if (temperature < 20) {
        return 1;
    } else {
        const tempRange = 250 - 20;
        const normalizedTemp = (temperature - 20) / tempRange;

        const maxSpeed = 150;
        const normalizedSpeed = Math.min(speed / maxSpeed, 1);

        const tempWeight = 0.7;
        const speedWeight = 0.3;

        const weightedValue = (normalizedTemp * tempWeight) + (normalizedSpeed * speedWeight);
        const colorId = weightedValue * (8 - 1) + 1;

        return Math.round(Math.min(8, Math.max(1, colorId)));
    }
};



const insertData = async (req, res) => {
    try {
        const { location, speed, temp, alt, time } = req.body;
        if (
            typeof location !== 'string' ||
            isNaN(Number(speed)) ||
            isNaN(Number(temp)) ||
            isNaN(Number(alt)) ||
            typeof time !== 'string'
        ) {
            return res.status(400).json({ error: 'Dados inválidos fornecidos' });
        }

        const [latitude, longitude] = location
            .replace('[', '')
            .replace(']', '')
            .split(',')
            .map(coord => parseFloat(coord.trim()));

        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ error: 'Localização inválida' });
        }

        const altitude = Number(alt);
        const temperature = Number(temp);
        const speedValue = Number(speed);

        const colorId = calculateColorId(temperature, speedValue);

        const currentDate = new Date().toISOString();

        const data = {
            location: `${latitude},${longitude}`,
            speed: speedValue,
            alt: altitude,
            temp: temperature,
            colorId,
            time: currentDate,
        };

        const newEntryRef = admin.database().ref('data').push();
        await newEntryRef.set(data);

        res.status(201).json({ message: 'Dados inseridos com sucesso', data });
    } catch (error) {
        console.error('Erro ao inserir dados no Realtime Database:', error);
        res.status(500).json({ error: 'Erro ao inserir os dados' });
    }
};


module.exports = {
    getData,
    insertData,
};
