module.exports = async (client, member) => {

const ModelWelcome = require("../database/models/bienvenidas")
const El_Canvas = require("canvas")
const Discord = require('discord.js')
let i = await ModelWelcome.findOne({ guildID: member.guild.id })
  if(!i) return;
  const channel = member.guild.channels.cache.get(i.channelID)
  if(!channel) return;

  channel.send(`Bienvenid@ ${member} a ${member.guild.name}`)
   
  const canvas = El_Canvas.createCanvas(800,360)
  const ctx = canvas.getContext("2d")
  
  
  const background = await El_Canvas.loadImage("https://media.discordapp.net/attachments/714919678333550623/752247127916281948/ais.jpg")
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  
  //Texto//
  ctx.font = "55px Arial"
  ctx.fillStyle = "#ed4b11"
  ctx.textAlign = "center"
  ctx.textBaselin = "hanging"
  ctx.fillText(`Bienvenid@ ${member.user.tag}!`, canvas.width/2, 85)
  


  //Avatar//
  const y= 120, radio= 100, x=canvas.width/2-radio
  
  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio +5, 0, Math.PI * 2, true)
  ctx.fillStyle = "#ed4b11"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  
  ctx.save()
  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()
  
  const imagen = await El_Canvas.loadImage(member.user.displayAvatarURL({dynamic: false, size: 2048, format:"png"}))
  ctx.drawImage(imagen, x, y, radio*2, radio*2)
  
  const atta = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
 channel.send(atta)
 }