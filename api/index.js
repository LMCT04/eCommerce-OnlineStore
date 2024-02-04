const app = require('./src/app.js')
const { conn } = require('./src/db.js')
const PORT = process.env.PORT ?? 1234

app.listen(PORT,async () => {
    // await conn.sync({ force: true });    // CUANDO ESTOY EN DESAROLLO, LA DB SE ACTUALIZA BORRANDO Y CREANDO
    await conn.sync({ alter: true });    // CUANDO ESTOY EN PRODUCCION, LA DB SE ACTUALIZA SIN PERDER LOS DATOS, SINO ADAPTANDO
    console.log(`server listening on port http://localhost:${PORT}`);
})