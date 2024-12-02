const express = require('express');
const cors = require('cors');
var admin = require("firebase-admin");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert("./serviceAccountKey.json"),
    databaseURL: "https://cyiot-95525-default-rtdb.firebaseio.com/"
});

app.use(cors());
app.use(express.json());

app.get('/data', (_, response) => {
    admin.database()
        .ref('data')
        .once('value')
        .then(snapshot => {
            const data = [];
            snapshot.forEach(childSnapshot => {
                const item = childSnapshot.val();
                const [latitude, longitude] = item.location.split(',').map(Number);

                data.push({
                    ...item,
                    location: { _latitude: latitude, _longitude: longitude },
                    uid: childSnapshot.key,
                });
            });
            response.json(data);
        })
        .catch(error => {
            console.error("Erro ao buscar dados do Realtime Database:", error);
            response.status(500).json({ error: "Erro ao buscar os dados" });
        });
});

app.listen(8080, () => {
    console.log('API rodando na porta 8080');
});
