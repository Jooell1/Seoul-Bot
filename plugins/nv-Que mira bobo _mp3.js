import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Que mira bobo.mp4'
conn.sendFile(m.chat, vn, 'Que mira bobo.mp4', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Que mira bobo|anda paya|anda pa lla|anda pa alla bobo/
handler.command = new RegExp
export default handler
