import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `¡Hola ${taguser} soy un bot privado, me llamo 𝚂𝚎𝚘𝚞𝚕-𝙱𝚘𝚝.
╔ 「 PRINCIPAL : 」 
║╭—————————
║├‣ .sticker: Transforma una imagen o video en sticker
║├‣ .attp: Transforma un texto a un sticker multicolor
║├‣ .menu: Muestra los comandos del bot
║├‣ .ping: Ver la velocidad del bot
║├‣ .owner: Dueño del bot
║╰—————————
╚══════════
╔ 「 GRUPOS : 」 
║╭—————————
║├‣  .notify: Envia un mensaje con una mencion invisible (tambien se puede usar: noti, notificar, avisar, aviso)
║├‣  .todos: Envia un mensaje mencionando asi: @
║├‣  .tagall: Mencionar con texto
║├‣  .kick @user: Sacar un numero 
║├‣  .grupo: Abrir/Cerrar grupo
║├‣  .daradmin: Dar administrador
║├‣  .quitaradmin: Sacar administrador
║├‣  .formarpareja: Formar una pajera al lazar
║├‣  .warn @user: Dar advertencia a una persona
║├‣  .fantasmas: Personas inactivas en el grupo
║╰—————————
╚══════════
╔ 「 AUDIOS : 」 
║╭—————————
║├‣🔊 _Quien es tu sempai botsito 7w7_
║├‣🔊 _Te diagnostico con gay_
║├‣🔊 _A nadie le importa_
║├‣🔊 _Fiesta del admin_
║├‣🔊 _Fiesta del administrador_ 
║├‣🔊 _Vivan los novios_
║├‣🔊 _Feliz cumpleaños_
║├‣🔊 _Noche de paz_
║├‣🔊 _Buenos dias_
║├‣🔊 _Buenos tardes_
║├‣🔊 _Buenos noches_
║├‣🔊 _Audio hentai_
║├‣🔊 _Chica lgante_
║├‣🔊 _Feliz navidad_
║├‣🔊 _Vete a la vrg_
║├‣🔊 _Pasa pack Bot_
║├‣🔊 _Atencion grupo_
║├‣🔊 _Marica quien_
║├‣🔊 _Murio el grupo_
║├‣🔊 _Oh me vengo_
║├‣🔊 _tio que rico_
║├‣🔊 _Viernes_
║├‣🔊 _Baneado_
║├‣🔊 _Sexo_
║├‣🔊 _Hola_
║├‣🔊 _Un pato_
║├‣🔊 _Nyanpasu_
║├‣🔊 _Te amo_
║├‣🔊 _Yamete_
║├‣🔊 _Bañate_
║├‣🔊 _Es puto_
║├‣🔊 _La biblia_
║├‣🔊 _Onichan_
║├‣🔊 _Mierda de Bot_
║├‣🔊 _Siuuu_
║├‣🔊 _Rawr_
║├‣🔊 _UwU_
║├‣🔊 _:c_
║├‣🔊 _a_
║├‣🔊 _Que mira bobo_
║╰—————————
╚══════════
╔ 「 DESCARGAS/BÚSQUEDA : 」 
║╭—————————
║├‣  .play: Descargar una cancion en Mp3 o Mp4
║├‣  .ytmp3: Descarga un video en mp3
║├‣  .ytmp4: Descarga un video en mp4
║├‣  .google: Busca cualquier informacion
║╰—————————
╚══════════`.trim()
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: '🧿ᴏᴡɴᴇʀ🏓' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: '🔮ᴀᴅǫᴜɪʀɪʀ⛄' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '🧿𝚂𝚎𝚘𝚞𝚕-𝙱𝚘𝚝🏓',
body: null,
thumbnail: img,
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂𝚃𝙰 𝚂𝙸𝙴𝙽𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙿𝙴𝚁𝙴...*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
