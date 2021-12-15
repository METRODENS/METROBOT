/* 
Metro Dens Whatsapp Bot                       
Telegram: 
Facebook: 
Licensed under the  GPL-3.0 License;
Coded By Adeesa Indumina
*/ 
let DataPack = require('metro-bot-pro');
let SewQueen = require('metro-bot-pro/sources/dc/handler');
let Details = require('metro-bot-pro/sources/dc/Details');
const { DataTypes } = require('sequelize');

const FiltersDB = Details.DATABASE.define('filter', {
    chat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pattern: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    regex: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
});

async function getFilter(jid = null, filter = null) {
    var Wher = {chat: jid};
    if (filter !== null) Wher.push({pattern: filter});
    var Msg = await FiltersDB.findAll({
        where: Wher
    });

    if (Msg.length < 1) {
        return false;
    } else {
        return Msg;
    }
}


async function setFilter(jid = null, filter = null, tex = null, regx = false) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            pattern: filter
        }
    });

    if (Msg.length < 1) {
        return await FiltersDB.create({ chat: jid, pattern: filter, text: tex, regex: regx });
    } else {
        return await Msg[0].update({ chat: jid, pattern: filter, text: tex, regex: regx });
    }
}

async function deleteFilter(jid = null, filter) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            pattern: filter
        }
    });
    if (Msg.length < 1) {
        return false;
    } else {
        return await Msg[0].destroy();
    }
}

module.exports = {
    FiltersDB: FiltersDB,
    getFilter: getFilter,
    setFilter: setFilter,
    deleteFilter: deleteFilter
};
