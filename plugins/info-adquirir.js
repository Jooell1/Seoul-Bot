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
β βγ πππ€π¨ππ₯ππ₯ ππ ππ’π§ γ β
β β₯ π·πΎπ»π°, πΏπ°ππ° π°π³πππΈππΈπ π΄π» π±πΎπ, ππ πΏππ΄π²πΈπΎ π΄π π³π΄ πΉπΆπΆπ/ 4πππ³/ πΎ $π·πΆπΆπΆ π°ππΆ.
β    π°πππΈ π»π΄π π³π΄πΉπΎ π΄π» π²πΎπ½ππ°π²ππΎ π³π΄ πΌπΈ π³ππ΄ΓπΎ:
β β₯ [π€΄π»] π²ππ΄π°π³πΎπ: *Joel*
β β₯ [#οΈβ£] π½πΎΒ° π³π΄π» π²ππ΄π°π³πΎπ: *Wa.me/+5493515051965*
β β₯ [π¨βπ¦―] ππ΄π»πΎπ²πΈπ³π°π³: 
β   *${speed}* 
β   *ππππππππππππ*
β βγ α΄α΄κ°α΄Κα΄-Κα΄α΄  α·¦ γ β
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π°π³πππΈππΈπ π΄π» π±πΎπ',
body: 'α΄α΄κ°α΄Κα΄-Κα΄α΄  α·¦',         
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
