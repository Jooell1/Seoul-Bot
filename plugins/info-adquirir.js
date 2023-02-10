import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 𝗘𝗟 𝗕𝗢𝗧 〙 ═
╠➥ 𝙷𝙾𝙻𝙰, 𝙿𝙰𝚁𝙰 𝙰𝙳𝚀𝚄𝙸𝚁𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃, 𝚂𝚄 𝙿𝚁𝙴𝙲𝙸𝙾 𝙴𝚂 𝙳𝙴 𝟹𝟶𝟶💎/ 4𝚄𝚂𝙳/ 𝙾 $𝟷𝟶𝟶𝟶 𝙰𝚁𝙶.
╠   𝙰𝚀𝚄𝙸 𝙻𝙴𝚂 𝙳𝙴𝙹𝙾 𝙴𝙻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾 𝙳𝙴 𝙼𝙸 𝙳𝚄𝙴Ñ𝙾:
╠➥ [🤴🏻] 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: *Joel*
╠➥ [#️⃣] 𝙽𝙾° 𝙳𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: *Wa.me/+5493515051965*
╠➥ [👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
╠  *${speed}* 
╠  *𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
╠═〘 ᴍᴀꜰᴜʏᴜ-ʙᴏᴛ  ᷦ 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙰𝙳𝚀𝚄𝙸𝚁𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴍᴀꜰᴜʏᴜ-ʙᴏᴛ  ᷦ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Jooell1/Mafuyu-bot`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(Adquirir|adquirir|bot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
