const petik = '```'
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)=> {
	return`
ββπ¨βπ» *C O N N E C T  W I T H  M E*

β YouTube : Reza https://youtu.be/_De5EgwBPM8
β Instagram : instagram.com/reteam.id
β WhatsApp : wa.me/6288217843188

ββ *INDONESIA TIME*
${petik}ββ¦β WIB : ${timuu}
ββ¦β WITA : ${wita}
ββ WIT : ${wit}${petik}
                          
ββ *TODAY*
${petik}ββ¦β${ucapannya2}
ββ¦βJam : ${timuu}
ββ¦βHari : ${thisDay}
ββ Tanggal : ${ini_tanggal}${petik}

ββ *DEVICE*
${petik}ββ¦βWhatsapp : ${wa_version}
ββ¦βMerk HP : ${device_manufacturer}
ββ¦βVersi HP : ${device_model}
ββ¦βVersi OS : ${os_version}
ββ¦βRAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
ββ¦βMCC : ${mcc}
ββ MNC : ${mnc}${petik}

βββγ *BOT INFO* γ
${petik}ββ¦β Owner : ${ownername}
ββ¦βMode : ${status}
ββ¦βPrefix : ${prefix}
ββ¦βTotal Hit : ${hit_today.length}
ββ¦βPersonal Chat : ${totalchat.length - ini_gcchat.lenght}
ββ¦βTotal All Chat : ${totalchat.length}
ββ¦βGroup Chat : ${ini_gcchat}
ββ¦βBrowser : Chrome
ββ¦βServer : Baileys
ββ¦βVersion : 3.5.2${petik}
${petik}ββ¦βSpeed :${petik} ${latensiii} 
${petik}ββ ${tekss}${petik}


ββ *LIST MENU* β
β
${petik}ββ Allmenu 
ββ Convertmenu
ββ Asupanmenu
ββ Downloadmenu
ββ Funmenu
ββ Makermenu
ββ Othermenu
ββ Ownermenu
ββ Storagemenu
ββ Tagmenu
ββ Upmenu
ββ Set_sticker_cmd
ββ Gacha_cecan
ββ Telegram_sticker
ββ Image_effect${petik}

ββ *ABOUT* β
β
${petik}ββ Source
ββ ThanksTo
ββ Group_support
ββ Ownerbot${petik}

β _Creator BotWea Β© 2K21_ β
`
}
const convert = (prefix) => {
	return`ββ *CONVERT MENU* β
β
${petik}ββ ${prefix}toimg
ββ ${prefix}tomp3
ββ ${prefix}tomp4
ββ ${prefix}slow
ββ ${prefix}tupai
ββ ${prefix}fast
ββ ${prefix}reverse
ββ ${prefix}tourl${petik}
`
}
const download = (prefix) => {
	return`ββ *DOWNLOAD MENU* β
β
${petik}ββ ${prefix}ytsearch${petik} _query_
${petik}ββ ${prefix}igstalk${petik} _username_
${petik}ββ ${prefix}ghstalk${petik} _username_
${petik}ββ ${prefix}play${petik} _query_
${petik}ββ ${prefix}playmp4${petik} _query_
${petik}ββ ${prefix}video${petik} _query_
${petik}ββ ${prefix}ytmp3${petik} _link_
${petik}ββ ${prefix}ytmp4${petik} _link_
${petik}ββ ${prefix}ig${petik} _link_
${petik}ββ ${prefix}igphoto${petik} _link_
${petik}ββ ${prefix}igvideo${petik} _link_
${petik}ββ ${prefix}igtv${petik} _link_
${petik}ββ ${prefix}igreels${petik} _link_
${petik}ββ ${prefix}twitter${petik} _link_
${petik}ββ ${prefix}tiktokwm${petik} _link_
${petik}ββ ${prefix}tiktoknowm${petik} _link_
${petik}ββ ${prefix}tiktokaudio${petik} _link_
${petik}ββ ${prefix}fb${petik} _link_
${petik}ββ ${prefix}brainly${petik} _query_
${petik}ββ ${prefix}image${petik} _query_
${petik}ββ ${prefix}pinterest${petik} _query_
${petik}ββ ${prefix}pinterest2${petik} _query_
${petik}ββ ${prefix}playstore${petik} _query_
${petik}ββ ${prefix}gcwa${petik} _query_
${petik}ββ ${prefix}lirik${petik} _query_
${petik}ββ ${prefix}komiku${petik} _query_
${petik}ββ ${prefix}otaku${petik} _query_
${petik}ββ ${prefix}anime${petik} _random_
`
}
const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return` ββββγ *WhatsApp* γββββ
    
ββπ¨βπ» *C O N N E C T  W I T H  M E*

β YouTube : https://youtu.be/_De5EgwBPM8
β Instagram : instagram.com/reteam.id
β WhatsApp : wa.me/6288217843188

ββ *INDONESIA TIME*
${petik}ββ¦β WIB : ${timuu}
ββ¦β WITA : ${wita}
ββ WIT : ${wit}${petik}
                          
ββ *TODAY*
${petik}ββ¦β${ucapannya2}
ββ¦βJam : ${timuu}
ββ¦βHari : ${thisDay}
ββ Tanggal : ${ini_tanggal}${petik}

ββ *DEVICE*
${petik}ββ¦βWhatsapp : ${wa_version}
ββ¦βMerk HP : ${device_manufacturer}
ββ¦βVersi HP : ${device_model}
ββ¦βVersi OS : ${os_version}
ββ¦βRAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
ββ¦βMCC : ${mcc}
ββ MNC : ${mnc}${petik}

βββγ *BOT INFO* γ
${petik}ββ¦βMode : ${status}
ββ¦βPrefix : ${prefix}
ββ¦βTotal Hit : ${hit_today.length}
ββ¦βPersonal Chat : ${totalchat.length - ini_gcchat.lenght}
ββ¦βTotal All Chat : ${totalchat.length}
ββ¦βGroup Chat : ${ini_gcchat}
ββ¦βBrowser : Chrome
ββ¦βServer : Baileys
ββ¦βVersion : 3.5.2${petik}
${petik}ββ¦βSpeed :${petik} ${latensiii} 
${petik}ββ ${tekss}${petik}

βββγ *CONVERT MENU* γ
β
${petik}ββ¦ ${prefix}toimg
ββ¦ ${prefix}tomp3
ββ¦ ${prefix}tomp4
ββ¦ ${prefix}slow
ββ¦ ${prefix}tupai
ββ¦ ${prefix}fast
ββ¦ ${prefix}reverse
ββ¦ ${prefix}tourl${petik}
β
ββγ *DOWNLOAD MENU* γ
β
${petik}ββ¦ ${prefix}ytsearch${petik} _query_
${petik}ββ¦ ${prefix}igstalk${petik} _username_
${petik}ββ¦ ${prefix}ghstalk${petik} _username_
${petik}ββ¦ ${prefix}play${petik} _query_
${petik}ββ¦ ${prefix}playmp4${petik} _query_
${petik}ββ¦ ${prefix}video${petik} _query_
${petik}ββ¦ ${prefix}ytmp3${petik} _link_
${petik}ββ¦ ${prefix}ytmp4${petik} _link_
${petik}ββ¦ ${prefix}ig${petik} _link_
${petik}ββ¦ ${prefix}igphoto${petik} _link_
${petik}ββ¦ ${prefix}igvideo${petik} _link_
${petik}ββ¦ ${prefix}igtv${petik} _link_
${petik}ββ¦ ${prefix}igreels${petik} _link_
${petik}ββ¦ ${prefix}twitter${petik} _link_
${petik}ββ¦ ${prefix}tiktokwm${petik} _link_
${petik}ββ¦ ${prefix}tiktoknowm${petik} _link_
${petik}ββ¦ ${prefix}tiktokaudio${petik} _link_
${petik}ββ¦ ${prefix}fb${petik} _link_
${petik}ββ¦ ${prefix}brainly${petik} _query_
${petik}ββ¦ ${prefix}image${petik} _query_
${petik}ββ¦ ${prefix}pinterest${petik} _query_
${petik}ββ¦ ${prefix}pinterest2${petik} _query_
${petik}ββ¦ ${prefix}playstore${petik} _query_
${petik}ββ¦ ${prefix}gcwa${petik} _query_
${petik}ββ¦ ${prefix}lirik${petik} _query_
${petik}ββ¦ ${prefix}komiku${petik} _query_
${petik}ββ¦ ${prefix}anime${petik} _random_
β
ββγ *FUN MENU* γ
β
${petik} ββ¦ ${prefix}start
ββ¦ ${prefix}leave
ββ¦ ${prefix}skip
ββ¦ ${prefix}jelajah
ββ¦ ${prefix}adventure
ββ¦ ${prefix}nambang
ββ¦ ${prefix}nebang
ββ¦ ${prefix}mancing
ββ¦ ${prefix}lebur
ββ¦ ${prefix}jualikan
ββ¦ ${prefix}jualcoal
ββ¦ ${prefix}jualstone
ββ¦ ${prefix}jualingot
ββ¦ ${prefix}jualkayu
ββ¦ ${prefix}slot
ββ¦ ${prefix}inventory
ββ¦ ${prefix}dompet
ββ¦ ${prefix}suit
ββ¦ ${prefix}judi
ββ¦ ${prefix}fitnah
ββ¦ ${prefix}absen
ββ¦ ${prefix}absensi
ββ¦ ${prefix}tebakgambar
ββ¦ ${prefix}caklontong
ββ¦ ${prefix}family100
ββ¦ ${prefix}tebakanime
ββ¦ ${prefix}suit
ββ¦ ${prefix}fitnahpc${petik} text|balasan
${petik}ββ¦ ${prefix}kontak${petik} 62xxx|text
${petik}ββ¦ ${prefix}tictactoe${petik} @user
${petik}ββ¦ ${prefix}delttt${petik}
${petik}ββ¦ ${prefix}voting${petik} @user|reason|time
${petik}ββ¦ ${prefix}delvote${petik}
${petik}ββ¦ ${prefix}jadibot${petik}
${petik}ββ¦ ${prefix}stopjadibot${petik}
${petik}ββ¦ ${prefix}listbot${petik}
β
ββγ *TEXTPRO MENU* γ
β
${petik}ββ¦ ${prefix}halloween2${petik} text|text2
${petik}ββ¦ ${prefix}horror${petik} text|text2
${petik}ββ¦ ${prefix}game8bit${petik} text|text2
${petik}ββ¦ ${prefix}layered${petik} text|text2
${petik}ββ¦ ${prefix}glitch2${petik} text|text2
${petik}ββ¦ ${prefix}coolg${petik} text|text2
${petik}ββ¦ ${prefix}coolwg${petik} text|text2
${petik}ββ¦ ${prefix}realistic${petik} text|text2
${petik}ββ¦ ${prefix}space3d${petik} text|text2
${petik}ββ¦ ${prefix}gtiktok${petik} text|text2
${petik}ββ¦ ${prefix}stone${petik} text|text2
${petik}ββ¦ ${prefix}marvel${petik} text|text2
${petik}ββ¦ ${prefix}marvel2${petik} text|text2
${petik}ββ¦ ${prefix}pornhub${petik} text|text2
${petik}ββ¦ ${prefix}avengers${petik} text|text2
${petik}ββ¦ ${prefix}metalr${petik} text|text2
${petik}ββ¦ ${prefix}metalg${petik} text|text2
${petik}ββ¦ ${prefix}metalg2${petik} text|text2
${petik}ββ¦ ${prefix}halloween2${petik} text|text2
${petik}ββ¦ ${prefix}lion${petik} text|text2
${petik}ββ¦ ${prefix}wolf_bw${petik} text|text2
${petik}ββ¦ ${prefix}wolf_g${petik} text|text2
${petik}ββ¦ ${prefix}ninja${petik} text|text2
${petik}ββ¦ ${prefix}3dsteel${petik} text|text2
${petik}ββ¦ ${prefix}horror2${petik} text|text2
${petik}ββ¦ ${prefix}lava${petik} text|text2
${petik}ββ¦ ${prefix}bagel${petik} text|text2
${petik}ββ¦ ${prefix}blackpink${petik} text
${petik}ββ¦ ${prefix}rainbow2${petik} text
${petik}ββ¦ ${prefix}water_pipe${petik} text
${petik}ββ¦ ${prefix}halloween${petik} text
${petik}ββ¦ ${prefix}sketch${petik} text
${petik}ββ¦ ${prefix}sircuit${petik} text
${petik}ββ¦ ${prefix}discovery${petik} text
${petik}ββ¦ ${prefix}metallic2${petik} text
${petik}ββ¦ ${prefix}fiction${petik} text
${petik}ββ¦ ${prefix}demon${petik} text
${petik}ββ¦ ${prefix}transformer${petik} text
${petik}ββ¦ ${prefix}berry${petik} text
${petik}ββ¦ ${prefix}thunder${petik} text
${petik}ββ¦ ${prefix}magma${petik} text
${petik}ββ¦ ${prefix}3dstone${petik} text
${petik}ββ¦ ${prefix}neon${petik} text
${petik}ββ¦ ${prefix}glitch${petik} text
${petik}ββ¦ ${prefix}harry_potter${petik} text
${petik}ββ¦ ${prefix}embossed${petik} text
${petik}ββ¦ ${prefix}broken${petik} text
${petik}ββ¦ ${prefix}papercut${petik} text
${petik}ββ¦ ${prefix}gradient${petik} text
${petik}ββ¦ ${prefix}glossy${petik} text
${petik}ββ¦ ${prefix}watercolor${petik} text
${petik}ββ¦ ${prefix}multicolor${petik} text
${petik}ββ¦ ${prefix}neon_devil${petik} text
${petik}ββ¦ ${prefix}underwater${petik} text
${petik}ββ¦ ${prefix}bear${petik} text
${petik}ββ¦ ${prefix}wonderfulg${petik} text
${petik}ββ¦ ${prefix}christmas${petik} text
${petik}ββ¦ ${prefix}neon_light${petik} text
${petik}ββ¦ ${prefix}snow${petik} text
${petik}ββ¦ ${prefix}cloudsky${petik} text
${petik}ββ¦ ${prefix}luxury2${petik} text
${petik}ββ¦ ${prefix}gradient2${petik} text
${petik}ββ¦ ${prefix}summer${petik} text
${petik}ββ¦ ${prefix}writing${petik} text
${petik}ββ¦ ${prefix}engraved${petik} text
${petik}ββ¦ ${prefix}summery${petik} text
${petik}ββ¦ ${prefix}3dglue${petik} text
${petik}ββ¦ ${prefix}metaldark${petik} text
${petik}ββ¦ ${prefix}neonlight${petik} text
${petik}ββ¦ ${prefix}oscar${petik} text
${petik}ββ¦ ${prefix}minion${petik} text
${petik}ββ¦ ${prefix}holographic${petik} text
${petik}ββ¦ ${prefix}purple${petik} text
${petik}ββ¦ ${prefix}glossyb${petik} text
${petik}ββ¦ ${prefix}deluxe2${petik} text
${petik}ββ¦ ${prefix}glossyc${petik} text
${petik}ββ¦ ${prefix}fabric${petik} text
${petik}ββ¦ ${prefix}neonc${petik} text
${petik}ββ¦ ${prefix}newyear${petik} text
${petik}ββ¦ ${prefix}newyear2${petik} text
${petik}ββ¦ ${prefix}metals${petik} text
${petik}ββ¦ ${prefix}xmas${petik} text
${petik}ββ¦ ${prefix}blood${petik} text
${petik}ββ¦ ${prefix}darkg${petik} text
${petik}ββ¦ ${prefix}joker${petik} text
${petik}ββ¦ ${prefix}wicker${petik} text
${petik}ββ¦ ${prefix}natural${petik} text
${petik}ββ¦ ${prefix}firework${petik} text
${petik}ββ¦ ${prefix}skeleton${petik} text
${petik}ββ¦ ${prefix}balloon${petik} text
${petik}ββ¦ ${prefix}balloon2${petik} text
${petik}ββ¦ ${prefix}balloon3${petik} text
${petik}ββ¦ ${prefix}balloon4${petik} text
${petik}ββ¦ ${prefix}balloon5${petik} text
${petik}ββ¦ ${prefix}balloon6${petik} text
${petik}ββ¦ ${prefix}balloon7${petik} text
${petik}ββ¦ ${prefix}steel${petik} text
${petik}ββ¦ ${prefix}gloss${petik} text
${petik}ββ¦ ${prefix}denim${petik} text
${petik}ββ¦ ${prefix}decorate${petik} text
${petik}ββ¦ ${prefix}decorate2${petik} text
${petik}ββ¦ ${prefix}peridot${petik} text
${petik}ββ¦ ${prefix}rock${petik} text
${petik}ββ¦ ${prefix}glass${petik} text
${petik}ββ¦ ${prefix}glass2${petik} text
${petik}ββ¦ ${prefix}glass3${petik} text
${petik}ββ¦ ${prefix}glass4${petik} text
${petik}ββ¦ ${prefix}glass5${petik} text
${petik}ββ¦ ${prefix}glass6${petik} text
${petik}ββ¦ ${prefix}glass7${petik} text
${petik}ββ¦ ${prefix}glass8${petik} text
${petik}ββ¦ ${prefix}captain_as2${petik} text
${petik}ββ¦ ${prefix}robot${petik} text
${petik}ββ¦ ${prefix}equalizer${petik} text
${petik}ββ¦ ${prefix}toxic${petik} text
${petik}ββ¦ ${prefix}sparkling${petik} text
${petik}ββ¦ ${prefix}sparkling2${petik} text
${petik}ββ¦ ${prefix}sparkling3${petik} text
${petik}ββ¦ ${prefix}sparkling4${petik} text
${petik}ββ¦ ${prefix}sparkling5${petik} text
${petik}ββ¦ ${prefix}sparkling6${petik} text
${petik}ββ¦ ${prefix}sparkling7${petik} text
${petik}ββ¦ ${prefix}decorative${petik} text
${petik}ββ¦ ${prefix}chocolate${petik} text
${petik}ββ¦ ${prefix}strawberry${petik} text
${petik}ββ¦ ${prefix}koifish${petik} text
${petik}ββ¦ ${prefix}bread${petik} text
${petik}ββ¦ ${prefix}matrix${petik} text
${petik}ββ¦ ${prefix}blood2${petik} text
${petik}ββ¦ ${prefix}neonligth2${petik} text
${petik}ββ¦ ${prefix}thunder2${petik} text
${petik}ββ¦ ${prefix}3dbox${petik} text
${petik}ββ¦ ${prefix}neon2${petik} text
${petik}ββ¦ ${prefix}roadw${petik} text
${petik}ββ¦ ${prefix}bokeh${petik} text
${petik}ββ¦ ${prefix}gneon${petik} text
${petik}ββ¦ ${prefix}advanced${petik} text
${petik}ββ¦ ${prefix}dropwater${petik} text
${petik}ββ¦ ${prefix}wall${petik} text
${petik}ββ¦ ${prefix}chrismast${petik} text
${petik}ββ¦ ${prefix}honey${petik} text
${petik}ββ¦ ${prefix}drug${petik} text
${petik}ββ¦ ${prefix}marble${petik} text
${petik}ββ¦ ${prefix}marble2${petik} text
${petik}ββ¦ ${prefix}ice${petik} text
${petik}ββ¦ ${prefix}juice${petik} text
${petik}ββ¦ ${prefix}rusty${petik} text
${petik}ββ¦ ${prefix}abstra${petik} text
${petik}ββ¦ ${prefix}biscuit${petik} text
${petik}ββ¦ ${prefix}wood${petik} text
${petik}ββ¦ ${prefix}scifi${petik} text
${petik}ββ¦ ${prefix}metalr${petik} text
${petik}ββ¦ ${prefix}purpleg${petik} text
${petik}ββ¦ ${prefix}shiny${petik} text 
${petik}ββ¦ ${prefix}jewelry${petik} text
${petik}ββ¦ ${prefix}jewelry2${petik} text
${petik}ββ¦ ${prefix}jewelry3${petik} text
${petik}ββ¦ ${prefix}jewelry4${petik} text
${petik}ββ¦ ${prefix}jewelry5${petik} text
${petik}ββ¦ ${prefix}jewelry6${petik} text
${petik}ββ¦ ${prefix}jewelry7${petik} text
${petik}ββ¦ ${prefix}jewelry8${petik} text
${petik}ββ¦ ${prefix}metalh${petik} text
${petik}ββ¦ ${prefix}golden${petik} text
${petik}ββ¦ ${prefix}glitter${petik} text
${petik}ββ¦ ${prefix}glitter2${petik} text
${petik}ββ¦ ${prefix}glitter3${petik} text
${petik}ββ¦ ${prefix}glitter4${petik} text
${petik}ββ¦ ${prefix}glitter5${petik} text
${petik}ββ¦ ${prefix}glitter6${petik} text
${petik}ββ¦ ${prefix}glitter7${petik} text
${petik}ββ¦ ${prefix}metale${petik} text
${petik}ββ¦ ${prefix}carbon${petik} text
${petik}ββ¦ ${prefix}candy${petik} text
${petik}ββ¦ ${prefix}metalb${petik} text
${petik}ββ¦ ${prefix}gemb${petik} text
${petik}ββ¦ ${prefix}3dchrome${petik} text
${petik}ββ¦ ${prefix}metalb2${petik} text
${petik}ββ¦ ${prefix}metalg${petik} text
${petik}ββ¦ ${prefix}metalg${petik} text
β
ββγ *MAKER MENU* γ
β
${petik}ββ¦ ${prefix}sticker${petik}
${petik}ββ¦ ${prefix}smeme${petik} atas|bawah
${petik}ββ¦ ${prefix}ktpmaker${petik}
${petik}ββ¦ ${prefix}attp${petik}
${petik}ββ¦ ${prefix}ttp${petik}
${petik}ββ¦ ${prefix}ttp1${petik}
${petik}ββ¦ ${prefix}ttp2${petik}
${petik}ββ¦ ${prefix}ttp3${petik}
${petik}ββ¦ ${prefix}ttp4${petik}
${petik}ββ¦ ${prefix}swm${petik} author|packname
${petik}ββ¦ ${prefix}take${petik} author|packname
${petik}ββ¦ ${prefix}fdeface${petik}
${petik}ββ¦ ${prefix}amongus${petik} 
${petik}ββ¦ ${prefix}tweettrump${petik} text
${petik}ββ¦ ${prefix}cmm${petik} text
${petik}ββ¦ ${prefix}kanna${petik} text
${petik}ββ¦ ${prefix}nulis${petik} text
${petik}ββ¦ ${prefix}tahta${petik} text
${petik}ββ¦ ${prefix}ytgold${petik} text
${petik}ββ¦ ${prefix}ytsilver${petik}
${petik}ββ¦ ${prefix}emoji${petik} πΌ
β
ββ γ *IMAGE EFFECT* γ
β
${petik}ββ¦ ${prefix}trigger
ββ¦ ${prefix}gay
ββ¦ ${prefix}glass
ββ¦ ${prefix}passed
ββ¦ ${prefix}jail
ββ¦ ${prefix}comrade
ββ¦ ${prefix}hijau
ββ¦ ${prefix}biru
ββ¦ ${prefix}greyscale
ββ¦ ${prefix}invert
ββ¦ ${prefix}invert_greyscale
ββ¦ ${prefix}red
ββ¦ ${prefix}blurple
ββ¦ ${prefix}blurple2
ββ¦ ${prefix}wasted
ββ¦ ${prefix}pelangi
ββ¦ ${prefix}sepia
ββ¦ ${prefix}wanted
ββ¦ ${prefix}utatoo
ββ¦ ${prefix}unsharpen
ββ¦ ${prefix}thanos
ββ¦ ${prefix}sniper
ββ¦ ${prefix}sharpen
ββ¦ ${prefix}scary
ββ¦ ${prefix}rip
ββ¦ ${prefix}rejected
ββ¦ ${prefix}redple
ββ¦ ${prefix}posterize
ββ¦ ${prefix}ps4
ββ¦ ${prefix}pixelize
ββ¦ ${prefix}missionpassed
ββ¦ ${prefix}moustache
ββ¦ ${prefix}lookwhatkarenhave
ββ¦ ${prefix}instagram
ββ¦ ${prefix}glitch
ββ¦ ${prefix}frame
ββ¦ ${prefix}fire
ββ¦ ${prefix}distort
ββ¦ ${prefix}dictator
ββ¦ ${prefix}deepfry
ββ¦ ${prefix}ddungeon
ββ¦ ${prefix}circle
ββ¦ ${prefix}challenger
ββ¦ ${prefix}burn
ββ¦ ${prefix}brazzers
ββ¦ ${prefix}beautiful${petik}
β
ββγ *GROUP MENU* γ
β
${petik}ββ¦ ${prefix}add${petik} 62***
${petik}ββ¦ ${prefix}kick${petik} _@user_
${petik}ββ¦ ${prefix}radd${petik} _reply pesan @user_
${petik}ββ¦ ${prefix}rkick${petik} _reply pesan @user_
${petik}ββ¦ ${prefix}ping${petik}
${petik}ββ¦ ${prefix}welcome${petik} _on / off_
${petik}ββ¦ ${prefix}nsfw${petik} _on / off_
${petik}ββ¦ ${prefix}antilink${petik} _on / off_
${petik}ββ¦ ${prefix}autoread${petik} <query> on / off
${petik}ββ¦ ${prefix}antibug${petik} on / off
${petik}ββ¦ ${prefix}antidelete${petik} on / off
${petik}ββ¦ ${prefix}anticall${petik} on / off
${petik}ββ¦ ${prefix}autoketik${petik} on / off
${petik}ββ¦ ${prefix}autovn${petik} on / off
${petik}ββ¦ ${prefix}antihidetag${petik} on / off
${petik}ββ¦ ${prefix}autobio${petik} on / off
${petik}ββ¦ ${prefix}register${petik} on / off
${petik}ββ¦ ${prefix}autorespon${petik} on / off
${petik}ββ¦ ${prefix}get${petik} _link_
${petik}ββ¦ ${prefix}getpp${petik} _@user_
${petik}ββ¦ ${prefix}getname${petik} _reply_
${petik}ββ¦ ${prefix}size${petik} _reply media_
${petik}ββ¦ ${prefix}colongsw${petik} _reply sw_
${petik}ββ¦ ${prefix}getbio${petik} _@user_
${petik}ββ¦ ${prefix}tagall
ββ¦ ${prefix}listonline
ββ¦ ${prefix}caripesan${petik} query
${petik}ββ¦ ${prefix}caripesan2${petik} _query_
${petik}ββ¦ ${prefix}searchmsg${petik} _query|total_
${petik}ββ¦ ${prefix}sider${petik} _reply pesan bot_
${petik}ββ¦ ${prefix}del${petik} _reply pesan bot_
${petik}ββ¦ ${prefix}q${petik} _reply pesan_
${petik}ββ¦ ${prefix}afk${petik} _reason_
${petik}ββ¦ ${prefix}getsider${petik} _reply pesan bot_
${petik}ββ¦ ${prefix}promoteall
ββ¦ ${prefix}ppcouple
ββ¦ ${prefix}setname
ββ¦ ${prefix}revoke
ββ¦ ${prefix}setdesk
ββ¦ ${prefix}spam${petik} text|jumlah
${petik}ββ¦ ${prefix}demoteall
ββ¦ ${prefix}admin
ββ¦ ${prefix}listpc
ββ¦ ${prefix}listgroup
ββ¦ ${prefix}hentai
ββ¦ ${prefix}jadian
ββ¦ ${prefix}trapnime
ββ¦ ${prefix}sewa add/del waktu
ββ¦ ${prefix}listsewa
ββ¦ ${prefix}ceksewa
ββ¦ ${prefix}premium add 62xxx waktu
ββ¦ ${prefix}cekpremium
ββ¦ ${prefix}listprem
ββ¦ ${prefix}belipremium
ββ¦ ${prefix}sewabot
ββ¦ ${prefix}verify
ββ¦ ${prefix}limit
ββ¦ ${prefix}profile
ββ¦ ${prefix}buylimit
ββ¦ ${prefix}buyglimit
ββ¦ ${prefix}awoo
ββ¦ ${prefix}megumin${petik}
β
ββγ *OWNER MENU* γ
β
${petik}ββ¦ ${prefix}off
ββ¦ ${prefix}on
ββ¦ ${prefix}buggc
ββ¦ ${prefix}bc
ββ¦ ${prefix}bcimage
ββ¦ ${prefix}bcgif
ββ¦ ${prefix}bcvideo
ββ¦ ${prefix}bcaudio
ββ¦ ${prefix}bcsticker
ββ¦ ${prefix}ban
ββ¦ ${prefix}unban
ββ¦ ${prefix}block
ββ¦ ${prefix}unblock
ββ¦ ${prefix}status
ββ¦ ${prefix}clearall
ββ¦ ${prefix}self
ββ¦ ${prefix}public
ββ¦ ${prefix}join
ββ¦ ${prefix}out
ββ¦ ${prefix}clearall
ββ¦ ${prefix}readall
ββ¦ ${prefix}unreadall
ββ¦ ${prefix}archive
ββ¦ ${prefix}unarchive
ββ¦ ${prefix}pin
ββ¦ ${prefix}delthischat
ββ¦ ${prefix}unpin${petik}
${petik}ββ¦ ${prefix}setthumb
ββ¦ ${prefix}settarget
ββ¦ ${prefix}setfakeimg
ββ¦ ${prefix}setreply${petik}
${petik}ββ¦ ${prefix}term${petik} _code_
${petik}ββ¦ x or >${petik} _code_
${petik}ββ¦ $ ${petik} _termux code_
${petik}ββ¦ => ${petik} _eval async_
β
ββγ *SET STC CMD* γ
β
${petik}ββ¦ ${prefix}set_stc_menu${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_ping${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_gclose${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_gopen${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_itos${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_toimg${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_self${petik} _<query>_
${petik}ββ¦ ${prefix}set_stc_public${petik} _<query>_
β
ββγ *STORAGE  MENU* γ
β
${petik}ββ¦ ${prefix}addstik 
ββ¦ ${prefix}addimg 
ββ¦ ${prefix}addvid 
ββ¦ ${prefix}addvn   
ββ¦ ${prefix}liststick
ββ¦ ${prefix}listimg
ββ¦ ${prefix}listvid
ββ¦ ${prefix}listvn
ββ¦ ${prefix}addrespon
ββ¦ ${prefix}delrespon
ββ¦ ${prefix}listrespon${petik}
β
ββγ *TAG  MENU* γ
β
${petik}ββ¦ ${prefix}hidetag
ββ¦ ${prefix}kontag
ββ¦ ${prefix}sticktag
ββ¦ ${prefix}totag${petik}
β
ββγ *UP ESWE* γ
β
${petik}ββ¦ ${prefix}upswteks
ββ¦ ${prefix}upswimage
ββ¦ ${prefix}upswvideo${petik}
β
ββγ *NSFW & SFW* γ
β
${petik}ββ¦ ${prefix}ahegao
ββ¦ ${prefix}ass
ββ¦ ${prefix}bdsm
ββ¦ ${prefix}blowjob
ββ¦ ${prefix}blowjob2
ββ¦ ${prefix}cuckold
ββ¦ ${prefix}cum
ββ¦ ${prefix}ero
ββ¦ ${prefix}femdom
ββ¦ ${prefix}foot
ββ¦ ${prefix}gangbang
ββ¦ ${prefix}glasses
ββ¦ ${prefix}jahy
ββ¦ ${prefix}manga
ββ¦ ${prefix}masturbation
ββ¦ ${prefix}neko
ββ¦ ${prefix}orgy
ββ¦ ${prefix}panties
ββ¦ ${prefix}pussy
ββ¦ ${prefix}tentacles
ββ¦ ${prefix}thighs
ββ¦ ${prefix}yuri
ββ¦ ${prefix}feet
ββ¦ ${prefix}lewdkemo
ββ¦ ${prefix}woof
ββ¦ ${prefix}gasm
ββ¦ ${prefix}solo
ββ¦ ${prefix}8ball
ββ¦ ${prefix}goose
ββ¦ ${prefix}avatar
ββ¦ ${prefix}hololewd
ββ¦ ${prefix}gecg
ββ¦ ${prefix}holo
ββ¦ ${prefix}fox_girl
ββ¦ ${prefix}tits
ββ¦ ${prefix}eroyuri
ββ¦ ${prefix}holoyero
ββ¦ ${prefix}lizard
ββ¦ ${prefix}keta
ββ¦ ${prefix}eron
ββ¦ ${prefix}erok
ββ¦ ${prefix}kemonomimi
ββ¦ ${prefix}cum_jpg
ββ¦ ${prefix}nsfw_avatar
ββ¦ ${prefix}erofeet
ββ¦ ${prefix}meow
ββ¦ ${prefix}wallpaper
ββ¦ ${prefix}waifu
ββ¦ ${prefix}trap
ββ¦ ${prefix}lewd
ββ¦ ${prefix}pussy_jpg
ββ¦ ${prefix}futanari
ββ¦ ${prefix}lewdk
ββ¦ ${prefix}solog
ββ¦ ${prefix}smug
ββ¦ ${prefix}cum
ββ¦ ${prefix}slap
ββ¦ ${prefix}les
ββ¦ ${prefix}erokemo
ββ¦ ${prefix}bj
ββ¦ ${prefix}pwankg
ββ¦ ${prefix}pat
ββ¦ ${prefix}poke
ββ¦ ${prefix}feed
ββ¦ ${prefix}nsfw_neko_gif
ββ¦ ${prefix}pussy
ββ¦ ${prefix}feetg
ββ¦ ${prefix}baka
ββ¦ ${prefix}hug
ββ¦ ${prefix}kiss
ββ¦ ${prefix}tickle
ββ¦ ${prefix}spank
ββ¦ ${prefix}kuni
ββ¦ ${prefix}classic
ββ¦ ${prefix}boobs
ββ¦ ${prefix}anal
ββ¦ ${prefix}ngif
ββ¦ ${prefix}cuddle
ββ¦ ${prefix}zettai${petik}
β
ββ γ *STC  MENU* γ
β
${petik}ββ¦ ${prefix}awoawo
ββ¦ ${prefix}benedict
ββ¦ ${prefix}chat
ββ¦ ${prefix}dbfly
ββ¦ ${prefix}dino_kuning
ββ¦ ${prefix}doge
ββ¦ ${prefix}gojosatoru
ββ¦ ${prefix}hope_boy
ββ¦ ${prefix}jisoo
ββ¦ ${prefix}kr_robot
ββ¦ ${prefix}kucing
ββ¦ ${prefix}lonte
ββ¦ ${prefix}manusia_lidi
ββ¦ ${prefix}menjamet
ββ¦ ${prefix}meow
ββ¦ ${prefix}nicholas
ββ¦ ${prefix}patrick
ββ¦ ${prefix}popoci
ββ¦ ${prefix}sponsbob
ββ¦ ${prefix}kawan_sponsbob
ββ¦ ${prefix}tyni${petik}
β
ββγ *CECAN  MENU* γ 
β
${petik}ββ¦ ${prefix}china
ββ¦ ${prefix}indonesia
ββ¦ ${prefix}malaysia
ββ¦ ${prefix}thailand
ββ¦ ${prefix}korea
ββ¦ ${prefix}japan
ββ¦ ${prefix}vietnam
ββ¦ ${prefix}jenni
ββ¦ ${prefix}jiso
ββ¦ ${prefix}lisa
ββ¦ ${prefix}rose${petik}
β
ββγ *QUOTES  MENU* γ 
β
ββ¦ ${petik}${prefix}katailham${petik}  
ββ¦ ${petik}${prefix}dare${petik}   
ββ¦ ${petik}${prefix}truth${petik}  
ββ¦ ${petik}${prefix}katabijak_lucu${petik}   
ββ¦ ${petik}${prefix}katacaklontong${petik}  
ββ¦ ${petik}${prefix}katadilan${petik}  
β
ββγ *COGAN  MENU* γ 
β
ββ¦ ${petik}${prefix}baekhyung${petik}  
ββ¦ ${petik}${prefix}dohkyungsoo${petik}  
ββ¦ ${petik}${prefix}huangzitao${petik}  
ββ¦ ${petik}${prefix}jhope${petik}  
ββ¦ ${petik}${prefix}jimin${petik} 
ββ¦ ${petik}${prefix}jungkook${petik} 
ββ¦ ${petik}${prefix}kimjondae${petik}  
ββ¦ ${petik}${prefix}kimjong${petik}  
ββ¦ ${petik}${prefix}kimjunmyeon${petik}  
ββ¦ ${petik}${prefix}kimminseok${petik} 
ββ¦ ${petik}${prefix}kimnanjoon${petik}  
ββ¦ ${petik}${prefix}kimseok${petik}  
ββ¦ ${petik}${prefix}kimtaehyung${petik}  
ββ¦ ${petik}${prefix}luhan${petik}  
ββ¦ ${petik}${prefix}ohsehun${petik} 
ββ¦ ${petik}${prefix}parkchanyeol${petik} 
ββ¦ ${petik}${prefix}suga${petik}  
ββ¦ ${petik}${prefix}wuyifan${petik}
β
ββγ *ASUPAN  MENU* γ
β
${petik}ββ¦ ${prefix}rikagusriani 
ββ¦ ${prefix}ukhty 
ββ¦ ${prefix}santuy 
ββ¦ ${prefix}geayubi   
ββ¦ ${prefix}bocil
ββ¦ ${prefix}asupan
ββ¦ ${prefix}chika 
ββ¦ ${prefix}delvira 
ββ¦ ${prefix}ayu   
ββ¦ ${prefix}bunga
ββ¦ ${prefix}aura
ββ¦ ${prefix}nisa 
ββ¦ ${prefix}ziva 
ββ¦ ${prefix}yana   
ββ¦ ${prefix}viona
ββ¦ ${prefix}syania
ββ¦ ${prefix}riri   
ββ¦ ${prefix}syifa
ββ¦ ${prefix}mama_gina
ββ¦ ${prefix}alcakenya 
ββ¦ ${prefix}mangayutri${petik}
β
ββγ *ANIME  MENU* γ
β
ββ¦ ${petik}${prefix}anna${petik}
ββ¦ ${petik}${prefix}asuna_yuki${petik} 
ββ¦ ${petik}${prefix}ayuzawa${petik} 
ββ¦ ${petik}${prefix}chitoge${petik} 
ββ¦ ${petik}${prefix}emilia${petik}
ββ¦ ${petik}${prefix}erza${petik} 
ββ¦ ${petik}${prefix}hinata${petik} 
ββ¦ ${petik}${prefix}inori${petik} 
ββ¦ ${petik}${prefix}kaga_kouko${petik} 
ββ¦ ${petik}${prefix}kaori_miyazono${petik} 
ββ¦ ${petik}${prefix}kotori_minami${petik}
ββ¦ ${petik}${prefix}mikasa${petik} 
ββ¦ ${petik}${prefix}mio_akiyama${petik} 
ββ¦ ${petik}${prefix}mizore_sirayuki${petik} 
ββ¦ ${petik}${prefix}nakiri_alice${petik} 
ββ¦ ${petik}${prefix}naruto${petik} 
ββ¦ ${petik}${prefix}riyas_gremori${petik}
ββ¦ ${petik}${prefix}sakura${petik} 
ββ¦ ${petik}${prefix}sasuke${petik} 
ββ¦ ${petik}${prefix}sento_isuzu${petik} 
ββ¦ ${petik}${prefix}shana${petik} 
ββ¦ ${petik}${prefix}shiina${petik} 
ββ¦ ${petik}${prefix}shinka${petik}
ββ¦ ${petik}${prefix}winry${petik}
ββ¦ ${petik}${prefix}yukino${petik} 
ββ¦ ${petik}${prefix}yuzuki${petik} 
ββ¦ ${petik}${prefix}akame${petik}
ββ¦ ${petik}${prefix}mikosiba${petik}
β
βββγ MENU BOT γ

ββββγ *WhatsApp* γββββ
`
}

const fun = (prefix) => {
	return`ββ  *FUN & GAME MENU* β
β
${petik}ββ ${prefix}start
ββ ${prefix}leave
ββ ${prefix}skip
ββ ${prefix}jelajah
ββ ${prefix}adventure
ββ ${prefix}nambang
ββ ${prefix}nebang
ββ ${prefix}mancing
ββ ${prefix}lebur
ββ ${prefix}jualikan
ββ ${prefix}jualcoal
ββ ${prefix}jualstone
ββ ${prefix}jualingot
ββ ${prefix}jualkayu
ββ ${prefix}slot
ββ ${prefix}inventory
ββ ${prefix}dompet
ββ ${prefix}suit
ββ ${prefix}judi
ββ ${prefix}fitnah
ββ ${prefix}absen
ββ ${prefix}absensi
ββ ${prefix}tebakgambar
ββ ${prefix}caklontong
ββ ${prefix}family100
ββ ${prefix}tebakanime
ββ ${prefix}fitnahpc${petik} text|balasan
${petik}ββ ${prefix}kontak${petik} 62xxx|text
${petik}ββ ${prefix}tictactoe${petik} @user
${petik}ββ ${prefix}delttt${petik}
${petik}ββ ${prefix}voting${petik}
${petik}ββ ${prefix}delvote${petik}
${petik}ββ ${prefix}jadibot${petik}
${petik}ββ ${prefix}stopjadibot${petik}
${petik}ββ ${prefix}listbot${petik}
`
}

const maker = (prefix) => {
	return`ββ  *MAKER MENU* β
β
${petik}ββ ${prefix}sticker${petik}
${petik}ββ ${prefix}smeme${petik}
${petik}ββ ${prefix}ktpmaker${petik}
${petik}ββ ${prefix}attp${petik}
${petik}ββ ${prefix}ttp${petik}
${petik}ββ ${prefix}ttp1${petik}
${petik}ββ ${prefix}ttp2${petik}
${petik}ββ ${prefix}ttp3${petik}
${petik}ββ ${prefix}ttp4${petik}
${petik}ββ ${prefix}swm${petik} author|packname
${petik}ββ ${prefix}take${petik} author|packname
${petik}ββ ${prefix}fdeface${petik}
${petik}ββ ${prefix}amongus${petik} 
${petik}ββ ${prefix}tweettrump${petik} text
${petik}ββ ${prefix}cmm${petik} text
${petik}ββ ${prefix}kanna${petik} text
${petik}ββ ${prefix}nulis${petik} text
${petik}ββ ${prefix}tahta${petik} text
${petik}ββ ${prefix}ytgold${petik} text
${petik}ββ ${prefix}ytsilver${petik}
${petik}ββ ${prefix}emoji${petik} πΌ
`
}

const textpro = (prefix) => {
	return`ββ  *TEXTPRO MENU* β
β
${petik}ββ ${prefix}halloween2${petik} text|text2
${petik}ββ ${prefix}horror${petik} text|text2
${petik}ββ ${prefix}game8bit${petik} text|text2
${petik}ββ ${prefix}layered${petik} text|text2
${petik}ββ ${prefix}glitch2${petik} text|text2
${petik}ββ ${prefix}coolg${petik} text|text2
${petik}ββ ${prefix}coolwg${petik} text|text2
${petik}ββ ${prefix}realistic${petik} text|text2
${petik}ββ ${prefix}space3d${petik} text|text2
${petik}ββ ${prefix}gtiktok${petik} text|text2
${petik}ββ ${prefix}stone${petik} text|text2
${petik}ββ ${prefix}marvel${petik} text|text2
${petik}ββ ${prefix}marvel2${petik} text|text2
${petik}ββ ${prefix}pornhub${petik} text|text2
${petik}ββ ${prefix}avengers${petik} text|text2
${petik}ββ ${prefix}metalr${petik} text|text2
${petik}ββ ${prefix}metalg${petik} text|text2
${petik}ββ ${prefix}metalg2${petik} text|text2
${petik}ββ ${prefix}halloween2${petik} text|text2
${petik}ββ ${prefix}lion${petik} text|text2
${petik}ββ ${prefix}wolf_bw${petik} text|text2
${petik}ββ ${prefix}wolf_g${petik} text|text2
${petik}ββ ${prefix}ninja${petik} text|text2
${petik}ββ ${prefix}3dsteel${petik} text|text2
${petik}ββ ${prefix}horror2${petik} text|text2
${petik}ββ ${prefix}lava${petik} text|text2
${petik}ββ ${prefix}bagel${petik} text|text2
${petik}ββ ${prefix}blackpink${petik} text
${petik}ββ ${prefix}rainbow2${petik} text
${petik}ββ ${prefix}water_pipe${petik} text
${petik}ββ ${prefix}halloween${petik} text
${petik}ββ ${prefix}sketch${petik} text
${petik}ββ ${prefix}sircuit${petik} text
${petik}ββ ${prefix}discovery${petik} text
${petik}ββ ${prefix}metallic2${petik} text
${petik}ββ ${prefix}fiction${petik} text
${petik}ββ ${prefix}demon${petik} text
${petik}ββ ${prefix}transformer${petik} text
${petik}ββ ${prefix}berry${petik} text
${petik}ββ ${prefix}thunder${petik} text
${petik}ββ ${prefix}magma${petik} text
${petik}ββ ${prefix}3dstone${petik} text
${petik}ββ ${prefix}neon${petik} text
${petik}ββ ${prefix}glitch${petik} text
${petik}ββ ${prefix}harry_potter${petik} text
${petik}ββ ${prefix}embossed${petik} text
${petik}ββ ${prefix}broken${petik} text
${petik}ββ ${prefix}papercut${petik} text
${petik}ββ ${prefix}gradient${petik} text
${petik}ββ ${prefix}glossy${petik} text
${petik}ββ ${prefix}watercolor${petik} text
${petik}ββ ${prefix}multicolor${petik} text
${petik}ββ ${prefix}neon_devil${petik} text
${petik}ββ ${prefix}underwater${petik} text
${petik}ββ ${prefix}bear${petik} text
${petik}ββ ${prefix}wonderfulg${petik} text
${petik}ββ ${prefix}christmas${petik} text
${petik}ββ ${prefix}neon_light${petik} text
${petik}ββ ${prefix}snow${petik} text
${petik}ββ ${prefix}cloudsky${petik} text
${petik}ββ ${prefix}luxury2${petik} text
${petik}ββ ${prefix}gradient2${petik} text
${petik}ββ ${prefix}summer${petik} text
${petik}ββ ${prefix}writing${petik} text
${petik}ββ ${prefix}engraved${petik} text
${petik}ββ ${prefix}summery${petik} text
${petik}ββ ${prefix}3dglue${petik} text
${petik}ββ ${prefix}metaldark${petik} text
${petik}ββ ${prefix}neonlight${petik} text
${petik}ββ ${prefix}oscar${petik} text
${petik}ββ ${prefix}minion${petik} text
${petik}ββ ${prefix}holographic${petik} text
${petik}ββ ${prefix}purple${petik} text
${petik}ββ ${prefix}glossyb${petik} text
${petik}ββ ${prefix}deluxe2${petik} text
${petik}ββ ${prefix}glossyc${petik} text
${petik}ββ ${prefix}fabric${petik} text
${petik}ββ ${prefix}neonc${petik} text
${petik}ββ ${prefix}newyear${petik} text
${petik}ββ ${prefix}newyear2${petik} text
${petik}ββ ${prefix}metals${petik} text
${petik}ββ ${prefix}xmas${petik} text
${petik}ββ ${prefix}blood${petik} text
${petik}ββ ${prefix}darkg${petik} text
${petik}ββ ${prefix}joker${petik} text
${petik}ββ ${prefix}wicker${petik} text
${petik}ββ ${prefix}natural${petik} text
${petik}ββ ${prefix}firework${petik} text
${petik}ββ ${prefix}skeleton${petik} text
${petik}ββ ${prefix}balloon${petik} text
${petik}ββ ${prefix}balloon2${petik} text
${petik}ββ ${prefix}balloon3${petik} text
${petik}ββ ${prefix}balloon4${petik} text
${petik}ββ ${prefix}balloon5${petik} text
${petik}ββ ${prefix}balloon6${petik} text
${petik}ββ ${prefix}balloon7${petik} text
${petik}ββ ${prefix}steel${petik} text
${petik}ββ ${prefix}gloss${petik} text
${petik}ββ ${prefix}denim${petik} text
${petik}ββ ${prefix}decorate${petik} text
${petik}ββ ${prefix}decorate2${petik} text
${petik}ββ ${prefix}peridot${petik} text
${petik}ββ ${prefix}rock${petik} text
${petik}ββ ${prefix}glass${petik} text
${petik}ββ ${prefix}glass2${petik} text
${petik}ββ ${prefix}glass3${petik} text
${petik}ββ ${prefix}glass4${petik} text
${petik}ββ ${prefix}glass5${petik} text
${petik}ββ ${prefix}glass6${petik} text
${petik}ββ ${prefix}glass7${petik} text
${petik}ββ ${prefix}glass8${petik} text
${petik}ββ ${prefix}captain_as2${petik} text
${petik}ββ ${prefix}robot${petik} text
${petik}ββ ${prefix}equalizer${petik} text
${petik}ββ ${prefix}toxic${petik} text
${petik}ββ ${prefix}sparkling${petik} text
${petik}ββ ${prefix}sparkling2${petik} text
${petik}ββ ${prefix}sparkling3${petik} text
${petik}ββ ${prefix}sparkling4${petik} text
${petik}ββ ${prefix}sparkling5${petik} text
${petik}ββ ${prefix}sparkling6${petik} text
${petik}ββ ${prefix}sparkling7${petik} text
${petik}ββ ${prefix}decorative${petik} text
${petik}ββ ${prefix}chocolate${petik} text
${petik}ββ ${prefix}strawberry${petik} text
${petik}ββ ${prefix}koifish${petik} text
${petik}ββ ${prefix}bread${petik} text
${petik}ββ ${prefix}matrix${petik} text
${petik}ββ ${prefix}blood2${petik} text
${petik}ββ ${prefix}neonligth2${petik} text
${petik}ββ ${prefix}thunder2${petik} text
${petik}ββ ${prefix}3dbox${petik} text
${petik}ββ ${prefix}neon2${petik} text
${petik}ββ ${prefix}roadw${petik} text
${petik}ββ ${prefix}bokeh${petik} text
${petik}ββ ${prefix}gneon${petik} text
${petik}ββ ${prefix}advanced${petik} text
${petik}ββ ${prefix}dropwater${petik} text
${petik}ββ ${prefix}wall${petik} text
${petik}ββ ${prefix}chrismast${petik} text
${petik}ββ ${prefix}honey${petik} text
${petik}ββ ${prefix}drug${petik} text
${petik}ββ ${prefix}marble${petik} text
${petik}ββ ${prefix}marble2${petik} text
${petik}ββ ${prefix}ice${petik} text
${petik}ββ ${prefix}juice${petik} text
${petik}ββ ${prefix}rusty${petik} text
${petik}ββ ${prefix}abstra${petik} text
${petik}ββ ${prefix}biscuit${petik} text
${petik}ββ ${prefix}wood${petik} text
${petik}ββ ${prefix}scifi${petik} text
${petik}ββ ${prefix}metalr${petik} text
${petik}ββ ${prefix}purpleg${petik} text
${petik}ββ ${prefix}shiny${petik} text 
${petik}ββ ${prefix}jewelry${petik} text
${petik}ββ ${prefix}jewelry2${petik} text
${petik}ββ ${prefix}jewelry3${petik} text
${petik}ββ ${prefix}jewelry4${petik} text
${petik}ββ ${prefix}jewelry5${petik} text
${petik}ββ ${prefix}jewelry6${petik} text
${petik}ββ ${prefix}jewelry7${petik} text
${petik}ββ ${prefix}jewelry8${petik} text
${petik}ββ ${prefix}metalh${petik} text
${petik}ββ ${prefix}golden${petik} text
${petik}ββ ${prefix}glitter${petik} text
${petik}ββ ${prefix}glitter2${petik} text
${petik}ββ ${prefix}glitter3${petik} text
${petik}ββ ${prefix}glitter4${petik} text
${petik}ββ ${prefix}glitter5${petik} text
${petik}ββ ${prefix}glitter6${petik} text
${petik}ββ ${prefix}glitter7${petik} text
${petik}ββ ${prefix}metale${petik} text
${petik}ββ ${prefix}carbon${petik} text
${petik}ββ ${prefix}candy${petik} text
${petik}ββ ${prefix}metalb${petik} text
${petik}ββ ${prefix}gemb${petik} text
${petik}ββ ${prefix}3dchrome${petik} text
${petik}ββ ${prefix}metalb2${petik} text
${petik}ββ ${prefix}metalg${petik} text
${petik}ββ ${prefix}metalg${petik} text
`
}


const other = (prefix) => {
	return`ββ  *GROUP MENU* β
β
${petik}ββ ${prefix}add${petik} 62xxx
${petik}ββ ${prefix}kick${petik} 62xxx
${petik}ββ ${prefix}ping${petik}
${petik}ββ ${prefix}antilink${petik} _on / off_
${petik}ββ ${prefix}get${petik} _link_
${petik}ββ ${prefix}getpp${petik} _@user_
${petik}ββ ${prefix}getbio${petik} _@user_
${petik}ββ ${prefix}getname${petik} _reply_
${petik}ββ ${prefix}size${petik} _reply media_
${petik}ββ ${prefix}colongsw${petik} _reply sw_
${petik}ββ ${prefix}tagall
ββ ${prefix}listonline
ββ ${prefix}caripesan${petik} query
${petik}ββ ${prefix}caripesan2${petik} _query_
${petik}ββ ${prefix}searchmsg${petik} _query|total_
${petik}ββ ${prefix}sider${petik} _reply pesan bot_
${petik}ββ ${prefix}del${petik} _reply pesan bot_
${petik}ββ ${prefix}q${petik} _reply pesan_
${petik}ββ ${prefix}afk${petik} _reason_
${petik}ββ ${prefix}getsider${petik} _reply pesan bot_
${petik}ββ ${prefix}tagall
ββ ${prefix}revoke
ββ ${prefix}setname
ββ ${prefix}ppcouple
ββ ${prefix}promoteall
ββ ${prefix}demoteall
ββ ${prefix}admin
ββ ${prefix}hentai
ββ ${prefix}jadian
ββ ${prefix}trapnime
ββ ${prefix}sewa add/del waktu
ββ ${prefix}listsewa
ββ ${prefix}ceksewa
ββ ${prefix}premium add @user waktu
ββ ${prefix}cekpremium
ββ ${prefix}listprem
ββ ${prefix}belipremium
ββ ${prefix}sewabot
ββ ${prefix}verify
ββ ${prefix}limit
ββ ${prefix}profile
ββ ${prefix}buylimit
ββ ${prefix}buyglimit
ββ ${prefix}blowjob
ββ ${prefix}awoo
ββ ${prefix}megumin${petik}
`
}

const ownermenu = (prefix) => {
	return`ββ  *OWNER MENU* β
β
${petik}ββ ${prefix}off
ββ ${prefix}on
ββ ${prefix}buggc
ββ ${prefix}bc
ββ ${prefix}bcimage
ββ ${prefix}bcgif
ββ ${prefix}bcvideo
ββ ${prefix}bcaudio
ββ ${prefix}bcsticker
ββ ${prefix}ban
ββ ${prefix}unban
ββ ${prefix}block
ββ ${prefix}unblock
ββ ${prefix}status
ββ ${prefix}clearall
ββ ${prefix}self
ββ ${prefix}public
ββ ${prefix}join 
ββ ${prefix}out
ββ ${prefix}readall
ββ ${prefix}unreadall
ββ ${prefix}archive
ββ ${prefix}unarchive
ββ ${prefix}pin
ββ ${prefix}delthischat
ββ ${prefix}unpin
ββ ${prefix}autoread <query> on / off
ββ ${prefix}setthumb
ββ ${prefix}settarget
ββ ${prefix}setfakeimg
ββ ${prefix}setreply${petik}
${petik}ββ ${prefix}term${petik} _code_
${petik}ββ $ ${petik} _termux code_
${petik}ββ => ${petik} _eval async_
${petik}ββ x or >${petik} _code_
`
}

const setStcCmd = (prefix) => {
	return`ββ  *SET STC CMD* β
β
${petik}ββ ${prefix}set_stc_menu
ββ ${prefix}set_stc_ping
ββ ${prefix}set_stc_gclose
ββ ${prefix}set_stc_gopen
ββ ${prefix}set_stc_itos
ββ ${prefix}set_stc_toimg
ββ ${prefix}set_stc_self
ββ ${prefix}set_stc_public${petik}

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`ββ  *STORAGE MENU* β
β
${petik}ββ ${prefix}addstik 
ββ ${prefix}addimg 
ββ ${prefix}addvid 
ββ ${prefix}addvn   
ββ ${prefix}liststick
ββ ${prefix}listimg
ββ ${prefix}listvid
ββ ${prefix}listvn
ββ ${prefix}addrespon
ββ ${prefix}delrespon
ββ ${prefix}listrespon${petik}
`
}
const cecanmenu = (prefix) => {
	return`ββ  *GACHA CECAN* β
β
${petik}ββ ${prefix}china
ββ ${prefix}indonesia
ββ ${prefix}malaysia
ββ ${prefix}thailand
ββ ${prefix}korea
ββ ${prefix}japan
ββ ${prefix}vietnam
ββ ${prefix}jenni
ββ ${prefix}jiso
ββ ${prefix}lisa
ββ ${prefix}rose${petik}
`
}

const tag = (prefix) => {
	return`ββ  *TAG MENU* β
β
${petik}ββ ${prefix}hidetag
ββ ${prefix}kontag
ββ ${prefix}sticktag
ββ ${prefix}totag${petik}
`
}

const upmenu = (prefix) => {
	return`ββ  *UP ESWE* β
β
${petik}ββ ${prefix}upswteks
ββ ${prefix}upswimage
ββ ${prefix}upswvideo${petik}
`
}
const nsfw = (prefix) => {
	return`ββ  *NSFW & SFW* β
β
${petik}ββ ${prefix}ahegao
ββ ${prefix}ass
ββ ${prefix}bdsm
ββ ${prefix}blowjob
ββ ${prefix}blowjob2
ββ ${prefix}cuckold
ββ ${prefix}cum
ββ ${prefix}ero
ββ ${prefix}femdom
ββ ${prefix}foot
ββ ${prefix}gangbang
ββ ${prefix}glasses
ββ ${prefix}jahy
ββ ${prefix}manga
ββ ${prefix}masturbation
ββ ${prefix}neko
ββ ${prefix}orgy
ββ ${prefix}panties
ββ ${prefix}pussy
ββ ${prefix}tentacles
ββ ${prefix}thighs
ββ ${prefix}yuri
ββ ${prefix}feet
ββ ${prefix}lewdkemo
ββ ${prefix}woof
ββ ${prefix}gasm
ββ ${prefix}solo
ββ ${prefix}8ball
ββ ${prefix}goose
ββ ${prefix}avatar
ββ ${prefix}hololewd
ββ ${prefix}gecg
ββ ${prefix}holo
ββ ${prefix}fox_girl
ββ ${prefix}tits
ββ ${prefix}eroyuri
ββ ${prefix}holoyero
ββ ${prefix}lizard
ββ ${prefix}keta
ββ ${prefix}eron
ββ ${prefix}erok
ββ ${prefix}kemonomimi
ββ ${prefix}cum_jpg
ββ ${prefix}nsfw_avatar
ββ ${prefix}erofeet
ββ ${prefix}meow
ββ ${prefix}wallpaper
ββ ${prefix}waifu
ββ ${prefix}trap
ββ ${prefix}lewd
ββ ${prefix}pussy_jpg
ββ ${prefix}futanari
ββ ${prefix}lewdk
ββ ${prefix}solog
ββ ${prefix}smug
ββ ${prefix}cum
ββ ${prefix}slap
ββ ${prefix}les
ββ ${prefix}erokemo
ββ ${prefix}bj
ββ ${prefix}pwankg
ββ ${prefix}pat
ββ ${prefix}poke
ββ ${prefix}feed
ββ ${prefix}nsfw_neko_gif
ββ ${prefix}pussy
ββ ${prefix}feetg
ββ ${prefix}baka
ββ ${prefix}hug
ββ ${prefix}kiss
ββ ${prefix}tickle
ββ ${prefix}spank
ββ ${prefix}kuni
ββ ${prefix}classic
ββ ${prefix}boobs
ββ ${prefix}anal
ββ ${prefix}ngif
ββ ${prefix}cuddle
ββ ${prefix}zettai${petik}
`
}
const asupan = (prefix) => {
	return`ββ  *ASUPAN MENU* β
β
${petik}ββ ${prefix}rikagusriani 
ββ ${prefix}ukhty 
ββ ${prefix}santuy 
ββ ${prefix}geayubi   
ββ ${prefix}bocil
ββ ${prefix}asupan
ββ ${prefix}chika 
ββ ${prefix}delvira 
ββ ${prefix}ayu   
ββ ${prefix}bunga
ββ ${prefix}aura
ββ ${prefix}nisa 
ββ ${prefix}ziva 
ββ ${prefix}yana   
ββ ${prefix}viona
ββ ${prefix}syania
ββ ${prefix}riri   
ββ ${prefix}syifa
ββ ${prefix}mama_gina
ββ ${prefix}alcakenya 
ββ ${prefix}mangayutri${petik}
`
}
const telestiker = (prefix) => {
	return`ββ  *STICKERS MENU* β
β
${petik}ββ ${prefix}awoawo
ββ ${prefix}benedict
ββ ${prefix}chat
ββ ${prefix}dbfly
ββ ${prefix}dino_kuning
ββ ${prefix}doge
ββ ${prefix}gojosatoru
ββ ${prefix}hope_boy
ββ ${prefix}jisoo
ββ ${prefix}kr_robot
ββ ${prefix}kucing
ββ ${prefix}lonte
ββ ${prefix}manusia_lidi
ββ ${prefix}menjamet
ββ ${prefix}meow
ββ ${prefix}nicholas
ββ ${prefix}patrick
ββ ${prefix}popoci
ββ ${prefix}sponsbob
ββ ${prefix}kawan_sponsbob
ββ ${prefix}tyni${petik}
`
}
const image_effect_menu = (prefix) => {
	return`ββ  *IMAGE EFFECT* β
β
${petik}ββ ${prefix}trigger
ββ ${prefix}gay
ββ ${prefix}glass
ββ ${prefix}passed
ββ ${prefix}jail
ββ ${prefix}comrade
ββ ${prefix}hijau
ββ ${prefix}biru
ββ ${prefix}greyscale
ββ ${prefix}invert
ββ ${prefix}invert_greyscale
ββ ${prefix}red
ββ ${prefix}blurple
ββ ${prefix}blurple2
ββ ${prefix}wasted
ββ ${prefix}pelangi
ββ ${prefix}wanted
ββ ${prefix}utatoo
ββ ${prefix}unsharpen
ββ ${prefix}thanos
ββ ${prefix}sniper
ββ ${prefix}sharpen
ββ ${prefix}scary
ββ ${prefix}rip
ββ ${prefix}rejected
ββ ${prefix}redple
ββ ${prefix}posterize
ββ ${prefix}ps4
ββ ${prefix}pixelize
ββ ${prefix}missionpassed
ββ ${prefix}moustache
ββ ${prefix}lookwhatkarenhave
ββ ${prefix}instagram
ββ ${prefix}glitch
ββ ${prefix}frame
ββ ${prefix}fire
ββ ${prefix}distort
ββ ${prefix}dictator
ββ ${prefix}deepfry
ββ ${prefix}ddungeon
ββ ${prefix}circle
ββ ${prefix}challenger
ββ ${prefix}burn
ββ ${prefix}brazzers
ββ ${prefix}beautiful
ββ ${prefix}sepia${petik}
`
}
const coganmenu = (prefix) => {
	return`ββ *GACHA COGAN* β
β
ββ ${petik}${prefix}baekhyung${petik}  
ββ ${petik}${prefix}dohkyungsoo${petik}  
ββ ${petik}${prefix}huangzitao${petik}  
ββ ${petik}${prefix}jhope${petik}  
ββ ${petik}${prefix}jimin${petik} 
ββ ${petik}${prefix}jungkook${petik} 
ββ ${petik}${prefix}kimjondae${petik}  
ββ ${petik}${prefix}kimjong${petik}  
ββ ${petik}${prefix}kimjunmyeon${petik}  
ββ ${petik}${prefix}kimminseok${petik} 
ββ ${petik}${prefix}kimnanjoon${petik}  
ββ ${petik}${prefix}kimseok${petik}  
ββ ${petik}${prefix}kimtaehyung${petik}  
ββ ${petik}${prefix}luhan${petik}  
ββ ${petik}${prefix}ohsehun${petik} 
ββ ${petik}${prefix}parkchanyeol${petik} 
ββ ${petik}${prefix}suga${petik}  
ββ ${petik}${prefix}wuyifan${petik}  
`
}

const quotesmenu = (prefix) => {
	return `ββ *QUOTES MENU* β
β
ββ ${petik}${prefix}katailham${petik}  
ββ ${petik}${prefix}dare${petik}   
ββ ${petik}${prefix}truth${petik}  
ββ ${petik}${prefix}katabijak_lucu${petik}   
ββ ${petik}${prefix}katacaklontong${petik}  
ββ ${petik}${prefix}katadilan${petik}  
`
}
const shopmenu = (prefix) => {
	return `ββ *SHOP MENU* β
β
ββ ${petik}${prefix}shop${petik}  
ββ ${petik}${prefix}price${petik}  
ββ ${petik}${prefix}pubg${petik}   
ββ ${petik}${prefix}ml${petik}   
ββ ${petik}${prefix}ff${petik}   
ββ ${petik}${prefix}aov${petik}   
ββ ${petik}${prefix}cod${petik}  
ββ ${petik}${prefix}sausage${petik}   
ββ ${petik}${prefix}lol${petik}  
ββ ${petik}${prefix}valo${petik}  
`
}
const animemenu = (prefix) => {
	return`ββ *ANIME MENU* β
β
ββ ${petik}${prefix}anna${petik}
ββ ${petik}${prefix}asuna_yuki${petik} 
ββ ${petik}${prefix}ayuzawa${petik} 
ββ ${petik}${prefix}chitoge${petik} 
ββ ${petik}${prefix}emilia${petik}
ββ ${petik}${prefix}erza${petik} 
ββ ${petik}${prefix}hinata${petik} 
ββ ${petik}${prefix}inori${petik} 
ββ ${petik}${prefix}kaga_kouko${petik} 
ββ ${petik}${prefix}kaori_miyazono${petik} 
ββ ${petik}${prefix}kotori_minami${petik}
ββ ${petik}${prefix}mikasa${petik} 
ββ ${petik}${prefix}mio_akiyama${petik} 
ββ ${petik}${prefix}mizore_sirayuki${petik} 
ββ ${petik}${prefix}nakiri_alice${petik} 
ββ ${petik}${prefix}naruto${petik} 
ββ ${petik}${prefix}riyas_gremori${petik}
ββ ${petik}${prefix}sakura${petik} 
ββ ${petik}${prefix}sasuke${petik} 
ββ ${petik}${prefix}sento_isuzu${petik} 
ββ ${petik}${prefix}shana${petik} 
ββ ${petik}${prefix}shiina${petik} 
ββ ${petik}${prefix}shinka${petik}
ββ ${petik}${prefix}winry${petik}
ββ ${petik}${prefix}yukino${petik} 
ββ ${petik}${prefix}yuzuki${petik} 
ββ ${petik}${prefix}akame${petik}
ββ ${petik}${prefix}mikosiba${petik}
`
}

const groupmenu = (prefix) => {
	return`ββ *GROUP MENU* β
β
${petik}ββ ${prefix}add${petik} 62***
${petik}ββ ${prefix}kick${petik} _@user_
${petik}ββ ${prefix}radd${petik} _reply pesan @user_
${petik}ββ ${prefix}rkick${petik} _reply pesan @user_
${petik}ββ ${prefix}ping${petik}
${petik}ββ ${prefix}nsfw${petik} _on / off_
${petik}ββ ${prefix}antilink${petik} _on / off_
${petik}ββ ${prefix}get${petik} _link_
${petik}ββ ${prefix}getpp${petik} _@user_
${petik}ββ ${prefix}getname${petik} _reply_
${petik}ββ ${prefix}size${petik} _reply media_
${petik}ββ ${prefix}colongsw${petik} _reply sw_
${petik}ββ ${prefix}getbio${petik} _@user_
${petik}ββ ${prefix}tagall
ββ ${prefix}listonline
ββ ${prefix}caripesan${petik} query
${petik}ββ ${prefix}caripesan2${petik} _query_
${petik}ββ ${prefix}searchmsg${petik} _query|total_
${petik}ββ ${prefix}sider${petik} _reply pesan bot_
${petik}ββ ${prefix}del${petik} _reply pesan bot_
${petik}ββ ${prefix}q${petik} _reply pesan_
${petik}ββ ${prefix}afk${petik} _reason_
${petik}ββ ${prefix}getsider${petik} _reply pesan bot_
${petik}ββ ${prefix}promoteall
ββ ${prefix}ppcouple
ββ ${prefix}setname
ββ ${prefix}revoke
ββ ${prefix}setdesk
ββ ${prefix}spam${petik} text|jumlah
${petik}ββ ${prefix}demoteall
ββ ${prefix}welcome on / off
ββ ${prefix}antibug on / off
ββ ${prefix}nsfw on / off
ββ ${prefix}antilink on / off
ββ ${prefix}antidelete on / off
ββ ${prefix}anticall on / off
ββ ${prefix}autoketik on / off
ββ ${prefix}autobio on / off
ββ ${prefix}antihidetag on / off
ββ ${prefix}autovn on / off
ββ ${prefix}register on / off
ββ ${prefix}autorespon on / off
ββ ${prefix}admin
ββ ${prefix}listpc
ββ ${prefix}listgroup
ββ ${prefix}hentai
ββ ${prefix}jadian
ββ ${prefix}trapnime
ββ ${prefix}sewa add/del waktu
ββ ${prefix}listsewa
ββ ${prefix}ceksewa
ββ ${prefix}premium add 62xxx waktu
ββ ${prefix}cekpremium
ββ ${prefix}listprem
ββ ${prefix}belipremium
ββ ${prefix}sewabot
ββ ${prefix}verify
ββ ${prefix}limit
ββ ${prefix}profile
ββ ${prefix}buylimit
ββ ${prefix}buyglimit
ββ ${prefix}awoo
ββ ${prefix}megumin${petik}
`
}
exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.textpromenu = textpro
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
exports.groupmenu = groupmenu
