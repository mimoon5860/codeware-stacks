// import mongoose from "mongoose";

// class Connection {
//     public conn: mongoose.Connection;
//     constructor() {
//         this.conn = mongoose.connection;
//         this.dbCon();
//     }

//     private dbCon() {
//         this.conn.on('error', () => console.error.bind(console, 'connection error'));
//         this.conn.once('open', () => console.info('Connection for transaction is successful'));
//     }
// }

// export default Connection;