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
let str = `Β‘Hola ${taguser} soy un bot privado, me llamo πππππ-π±ππ.
β γ PRINCIPAL : γ 
ββ­βββββββββ
βββ£ .sticker: Transforma una imagen o video en sticker
βββ£ .attp: Transforma un texto a un sticker multicolor
βββ£ .menu: Muestra los comandos del bot
βββ£ .ping: Ver la velocidad del bot
βββ£ .owner: DueΓ±o del bot
ββ°βββββββββ
βββββββββββ
β γ GRUPOS : γ 
ββ­βββββββββ
βββ£  .notify: Envia un mensaje con una mencion invisible (tambien se puede usar: noti, notificar, avisar, aviso)
βββ£  .todos: Envia un mensaje mencionando asi: @
βββ£  .tagall: Mencionar con texto
βββ£  .kick @user: Sacar un numero 
βββ£  .grupo: Abrir/Cerrar grupo
βββ£  .daradmin: Dar administrador
βββ£  .quitaradmin: Sacar administrador
βββ£  .formarpareja: Formar una pajera al lazar
βββ£  .warn @user: Dar advertencia a una persona
βββ£  .fantasmas: Personas inactivas en el grupo
ββ°βββββββββ
βββββββββββ
β γ AUDIOS : γ 
ββ­βββββββββ
βββ£π _Quien es tu sempai botsito 7w7_
βββ£π _Te diagnostico con gay_
βββ£π _A nadie le importa_
βββ£π _Fiesta del admin_
βββ£π _Fiesta del administrador_ 
βββ£π _Vivan los novios_
βββ£π _Feliz cumpleaΓ±os_
βββ£π _Noche de paz_
βββ£π _Buenos dias_
βββ£π _Buenos tardes_
βββ£π _Buenos noches_
βββ£π _Audio hentai_
βββ£π _Chica lgante_
βββ£π _Feliz navidad_
βββ£π _Vete a la vrg_
βββ£π _Pasa pack Bot_
βββ£π _Atencion grupo_
βββ£π _Marica quien_
βββ£π _Murio el grupo_
βββ£π _Oh me vengo_
βββ£π _tio que rico_
βββ£π _Viernes_
βββ£π _Baneado_
βββ£π _Sexo_
βββ£π _Hola_
βββ£π _Un pato_
βββ£π _Nyanpasu_
βββ£π _Te amo_
βββ£π _Yamete_
βββ£π _BaΓ±ate_
βββ£π _Es puto_
βββ£π _La biblia_
βββ£π _Onichan_
βββ£π _Mierda de Bot_
βββ£π _Siuuu_
βββ£π _Rawr_
βββ£π _UwU_
βββ£π _:c_
βββ£π _a_
βββ£π _Que mira bobo_
ββ°βββββββββ
βββββββββββ
β γ DESCARGAS/BΓSQUEDA : γ 
ββ­βββββββββ
βββ£  .play: Descargar una cancion en Mp3 o Mp4
βββ£  .ytmp3: Descarga un video en mp3
βββ£  .ytmp4: Descarga un video en mp4
βββ£  .google: Busca cualquier informacion
ββ°βββββββββ
βββββββββββ`.trim()
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: 'π§Ώα΄α΄‘Ι΄α΄Κπ' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: 'π?α΄α΄Η«α΄ΙͺΚΙͺΚβ' }, type: 1 }]
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
title: 'π§Ώπππππ-π±πππ',
body: null,
thumbnail: img,
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π π³π΄π» π±πΎπ π΄πππ° ππΈπ΄π½π³πΎ π΄π½ππΈπ°π³πΎ, πΏπΎπ π΅π°ππΎπ π΄ππΏπ΄ππ΄...*', m)
}}
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
