import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
{await m.reply('β _Cargando..._\nβ°β°β°β±β±β±β±β±β±')}
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: 'π΅ πππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: 'π₯ πππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π πππ ππππππππππ π' }, type: 1 }, ]    
let texto1 = `*βββπ πππππππ ππππ πβββ*\n
β π *ππΈπππ»πΎ:* ${title}
β π *πΏππ±π»πΈπ²π°π³πΎ:* ${publishedTime}
β β *π³πππ°π²πΈπΎπ½:* ${durationH}
β π *ππΈπππ°π:* ${viewH}
β π *π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${description}
β π *π»πΈπ½πΊ:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'β πΏ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β π *ππΈπππ»πΎ:* ${title}\nβ π *πΏππ±π»πΈπ²π°π³πΎ:* ${published}\nβ π *ππΈπππ°π:* ${views}\nβ π *π»πΈπ½πΊ:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π πππ ππππππππππ π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
