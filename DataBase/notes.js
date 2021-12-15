/* 
Metro Bot Whatsapp Bot                       
Telegram: 
Facebook: 
Licensed under the  GPL-3.0 License;
Coded By Adeesa Indumina
*/ 
let DataPack = require('metro-bot-pro');
let SewQueen = require('metro-bot-pro/sources/dc/handler');
let Details = require('metro-bot-pro/sources/dc/Details');
const { DataTypes } = require('sequelize');
const NotesDB = Details.DATABASE.define('notes', {
    note: { type: DataTypes.TEXT, allowNull: false }
});
async function getNotes() {
    const Notes = await NotesDB.findAll()
    return Notes
}
async function saveNote(note) {
    return await NotesDB.create({ note });
}
async function deleteAllNotes() {
    return await NotesDB.destroy({
        where: {},
        truncate: true
 })}
module.exports = { NotesDB, getNotes, saveNote, deleteAllNotes };
