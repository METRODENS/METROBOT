/* 
 MetroDens Whatsapp Bot                       
                        
 Licensed under the  GPL-3.0 License;
 
 Coded By Adeesa Indumina
*/ 
let DataPack = require('Metro-Dens-pro');
let MetroDens = require('Metro-Dens-pro/sources/dc/handler');
let Details = require('Metro-Dens-pro/sources/dc/Details');
let {sendMessagettp} = require('Metro-Dens-pro/sources/dc/cmd/ttp')
let {SetUPImageInSEWQUEEN} = require('Metro-Dens-pro/sources/dc/cmd/setimg')
let {sendMessagelogolist} = require('Metro-Dens-pro/sources/dc/cmd/TextList')
let {sendMessagelogores, sendMessagepngres} = require('Metro-Dens-pro/sources/dc/cmd/textmaker')
let WorkType = Details.WORKTYPE == 'public' ? false : true
var { FancyText, fancyList } = require("fancy-Metro-amdi")
let { MessageType, Mimetype } = require('@AdeesaIndumina/MetroDens-web');
var LOGODISC = '';
var des = '';
if (Details.LANG == 'SI') {
   des = 'ඉමෝජි පින්තූර බවට පත් කරයි'
   LOGODISC = '350 කට අදික ඌ ලෝගො සෑදීම සදහා යොදා ගන්න.අනිවාරයෙන් වචන දෙකක් යෙදිය යුතු අතර වචන දෙක / මගින් වෙන් කරන්න.\n🎲උදා:- .textlogo SEW / QUEEN'
} else {
   des = "You Can Png From Any Emoji"
   LOGODISC = '350+ Text To Image and Logo Maker... Need Two Words And Split Them Using /\neg : .textlogo Metro / Dens '
}
MetroDens['IntroduceCMD']({
        pattern: 'ettp ?(.*)', 
        fromMe: WorkType, 
        disc: 'ttp and 250+ sticker making command...\n*Usage:-* .attp Metro'
       }, 
(async (MetroDens, input) => {
 await sendMessagettp(MetroDens, input)
}));
MetroDens['IntroduceCMD']({
        pattern: 'png ?(.*)', 
        fromMe: WorkType, 
        disc: des
        }, 
(async (MetroDens, input) => { 
await sendMessagepngres(MetroDens, input)
})); 
MetroDens['IntroduceCMD']({
        pattern: 'textlogo ?(.*)', 
        fromMe: WorkType, 
        disc: LOGODISC
        }, 
(async (MetroDens, input) => { 
await sendMessagelogolist(MetroDens, input)
await sendMessagelogores(MetroDens, input)
})); 
MetroDens['IntroduceCMD']({
        pattern: 'fancy ?(.*)', 
        fromMe: WorkType, 
        disc: '118+ Fancy Text Maker With Unlimited Access'
        }, 
(async (MetroDens, input) => { 
if(input[1].includes('//--//')) {
var text = input[1].split('//--//')[1]
var type = input[1].split('//--//')[0]
var fancy = await FancyText(text)
await MetroDens.client.sendMessage(MetroDens.jid, fancy[type], MessageType.text)
} else {
var list = await fancyList(input[1])
await MetroDens.client.sendMessage(MetroDens.jid, list, MessageType.listMessage)
}
}));

MetroDens['IntroduceCMD']({
        pattern: 'setimg ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true
        }, 
(async (MetroDens, input) => { 
await SetUPImageInSEWQUEEN(MetroDens, input)
})); 