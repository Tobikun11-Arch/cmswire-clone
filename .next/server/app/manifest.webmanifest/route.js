(()=>{var e={};e.id=337,e.ids=[337],e.modules={397:(e,i,t)=>{var r;(()=>{var o={226:function(o,n){!function(a,s){"use strict";var l="function",u="undefined",c="object",d="string",b="major",p="model",f="name",w="type",m="vendor",h="version",g="architecture",v="console",y="mobile",x="tablet",_="smarttv",k="wearable",R="embedded",P="Amazon",O="Apple",E="ASUS",j="BlackBerry",S="Browser",A="Chrome",T="Firefox",q="Google",C="Huawei",N="Microsoft",$="Motorola",D="Opera",U="Samsung",M="Sharp",z="Sony",I="Xiaomi",B="Zebra",G="Facebook",H="Chromium OS",L="Mac OS",F=function(e,i){var t={};for(var r in e)i[r]&&i[r].length%2==0?t[r]=i[r].concat(e[r]):t[r]=e[r];return t},X=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},W=function(e,i){return typeof e===d&&-1!==V(i).indexOf(V(e))},V=function(e){return e.toLowerCase()},Z=function(e,i){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof i===u?e:e.substring(0,350)},K=function(e,i){for(var t,r,o,n,a,u,d=0;d<i.length&&!a;){var b=i[d],p=i[d+1];for(t=r=0;t<b.length&&!a&&b[t];)if(a=b[t++].exec(e))for(o=0;o<p.length;o++)u=a[++r],typeof(n=p[o])===c&&n.length>0?2===n.length?typeof n[1]==l?this[n[0]]=n[1].call(this,u):this[n[0]]=n[1]:3===n.length?typeof n[1]!==l||n[1].exec&&n[1].test?this[n[0]]=u?u.replace(n[1],n[2]):void 0:this[n[0]]=u?n[1].call(this,u,n[2]):void 0:4===n.length&&(this[n[0]]=u?n[3].call(this,u.replace(n[1],n[2])):s):this[n]=u||s;d+=2}},J=function(e,i){for(var t in i)if(typeof i[t]===c&&i[t].length>0){for(var r=0;r<i[t].length;r++)if(W(i[t][r],e))return"?"===t?s:t}else if(W(i[t],e))return"?"===t?s:t;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,h],[/opios[\/ ]+([\w\.]+)/i],[h,[f,D+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[f,D]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[f,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[f,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[f,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure "+S],h],[/\bfocus\/([\w\.]+)/i],[h,[f,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[f,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[f,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[f,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[h,[f,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 "+S],h],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[f,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,G],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[f,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[f,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,A+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[f,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[f,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[h,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[f,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,h],[/(cobalt)\/([\w\.]+)/i],[f,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,V]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",V]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,V]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[m,U],[w,x]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[m,U],[w,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[m,O],[w,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[m,O],[w,x]],[/(macintosh);/i],[p,[m,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[m,M],[w,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[m,C],[w,x]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[m,C],[w,y]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[m,I],[w,y]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[m,I],[w,x]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[m,"OPPO"],[w,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[m,"Vivo"],[w,y]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[p,[m,"Realme"],[w,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[m,$],[w,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[m,$],[w,x]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[m,"LG"],[w,x]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[m,"LG"],[w,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[m,"Lenovo"],[w,x]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[m,"Nokia"],[w,y]],[/(pixel c)\b/i],[p,[m,q],[w,x]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[m,q],[w,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[m,z],[w,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[m,z],[w,x]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[m,"OnePlus"],[w,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[m,P],[w,x]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[m,P],[w,y]],[/(playbook);[-\w\),; ]+(rim)/i],[p,m,[w,x]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[m,j],[w,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[m,E],[w,x]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[m,E],[w,y]],[/(nexus 9)/i],[p,[m,"HTC"],[w,x]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[p,/_/g," "],[w,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[m,"Acer"],[w,x]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[m,"Meizu"],[w,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,p,[w,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,p,[w,x]],[/(surface duo)/i],[p,[m,N],[w,x]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[m,"Fairphone"],[w,y]],[/(u304aa)/i],[p,[m,"AT&T"],[w,y]],[/\bsie-(\w*)/i],[p,[m,"Siemens"],[w,y]],[/\b(rct\w+) b/i],[p,[m,"RCA"],[w,x]],[/\b(venue[\d ]{2,7}) b/i],[p,[m,"Dell"],[w,x]],[/\b(q(?:mv|ta)\w+) b/i],[p,[m,"Verizon"],[w,x]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[m,"Barnes & Noble"],[w,x]],[/\b(tm\d{3}\w+) b/i],[p,[m,"NuVision"],[w,x]],[/\b(k88) b/i],[p,[m,"ZTE"],[w,x]],[/\b(nx\d{3}j) b/i],[p,[m,"ZTE"],[w,y]],[/\b(gen\d{3}) b.+49h/i],[p,[m,"Swiss"],[w,y]],[/\b(zur\d{3}) b/i],[p,[m,"Swiss"],[w,x]],[/\b((zeki)?tb.*\b) b/i],[p,[m,"Zeki"],[w,x]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],p,[w,x]],[/\b(ns-?\w{0,9}) b/i],[p,[m,"Insignia"],[w,x]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[m,"NextBook"],[w,x]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],p,[w,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],p,[w,y]],[/\b(ph-1) /i],[p,[m,"Essential"],[w,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[m,"Envizen"],[w,x]],[/\b(trio[-\w\. ]+) b/i],[p,[m,"MachSpeed"],[w,x]],[/\btu_(1491) b/i],[p,[m,"Rotor"],[w,x]],[/(shield[\w ]+) b/i],[p,[m,"Nvidia"],[w,x]],[/(sprint) (\w+)/i],[m,p,[w,y]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[m,N],[w,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[m,B],[w,x]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[m,B],[w,y]],[/smart-tv.+(samsung)/i],[m,[w,_]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[m,U],[w,_]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[w,_]],[/(apple) ?tv/i],[m,[p,O+" TV"],[w,_]],[/crkey/i],[[p,A+"cast"],[m,q],[w,_]],[/droid.+aft(\w)( bui|\))/i],[p,[m,P],[w,_]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[m,M],[w,_]],[/(bravia[\w ]+)( bui|\))/i],[p,[m,z],[w,_]],[/(mitv-\w{5}) bui/i],[p,[m,I],[w,_]],[/Hbbtv.*(technisat) (.*);/i],[m,p,[w,_]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,Z],[p,Z],[w,_]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,_]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,p,[w,v]],[/droid.+; (shield) bui/i],[p,[m,"Nvidia"],[w,v]],[/(playstation [345portablevi]+)/i],[p,[m,z],[w,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[m,N],[w,v]],[/((pebble))app/i],[m,p,[w,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[m,O],[w,k]],[/droid.+; (glass) \d/i],[p,[m,q],[w,k]],[/droid.+; (wt63?0{2,3})\)/i],[p,[m,B],[w,k]],[/(quest( 2| pro)?)/i],[p,[m,G],[w,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[w,R]],[/(aeobc)\b/i],[p,[m,P],[w,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[p,[w,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[w,x]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,x]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,y]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[f,[h,J,Q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[f,"Windows"],[h,J,Q]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,L],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,h],[/\(bb(10);/i],[h,[f,j]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[f,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[f,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,H],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,h],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,h]]},ee=function(e,i){if(typeof e===c&&(i=e,e=s),!(this instanceof ee))return new ee(e,i).getResult();var t=typeof a!==u&&a.navigator?a.navigator:s,r=e||(t&&t.userAgent?t.userAgent:""),o=t&&t.userAgentData?t.userAgentData:s,n=i?F(Y,i):Y,v=t&&t.userAgent==r;return this.getBrowser=function(){var e,i={};return i[f]=s,i[h]=s,K.call(i,r,n.browser),i[b]=typeof(e=i[h])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:s,v&&t&&t.brave&&typeof t.brave.isBrave==l&&(i[f]="Brave"),i},this.getCPU=function(){var e={};return e[g]=s,K.call(e,r,n.cpu),e},this.getDevice=function(){var e={};return e[m]=s,e[p]=s,e[w]=s,K.call(e,r,n.device),v&&!e[w]&&o&&o.mobile&&(e[w]=y),v&&"Macintosh"==e[p]&&t&&typeof t.standalone!==u&&t.maxTouchPoints&&t.maxTouchPoints>2&&(e[p]="iPad",e[w]=x),e},this.getEngine=function(){var e={};return e[f]=s,e[h]=s,K.call(e,r,n.engine),e},this.getOS=function(){var e={};return e[f]=s,e[h]=s,K.call(e,r,n.os),v&&!e[f]&&o&&"Unknown"!=o.platform&&(e[f]=o.platform.replace(/chrome os/i,H).replace(/macos/i,L)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===d&&e.length>350?Z(e,350):e,this},this.setUA(r),this};ee.VERSION="1.0.35",ee.BROWSER=X([f,h,b]),ee.CPU=X([g]),ee.DEVICE=X([p,m,w,v,y,_,x,k,R]),ee.ENGINE=ee.OS=X([f,h]),typeof n!==u?(o.exports&&(n=o.exports=ee),n.UAParser=ee):t.amdO?void 0!==(r=(function(){return ee}).call(i,t,i,e))&&(e.exports=r):typeof a!==u&&(a.UAParser=ee);var ei=typeof a!==u&&(a.jQuery||a.Zepto);if(ei&&!ei.ua){var et=new ee;ei.ua=et.getResult(),ei.ua.get=function(){return et.getUA()},ei.ua.set=function(e){et.setUA(e);var i=et.getResult();for(var t in i)ei.ua[t]=i[t]}}}("object"==typeof window?window:this)}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var t=n[e]={exports:{}},r=!0;try{o[e].call(t.exports,t,t.exports,a),r=!1}finally{r&&delete n[e]}return t.exports}a.ab=__dirname+"/",e.exports=a(226)})()},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1243:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"URLPattern",{enumerable:!0,get:function(){return t}});let t="undefined"==typeof URLPattern?void 0:URLPattern},2079:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"unstable_rootParams",{enumerable:!0,get:function(){return c}});let r=t(1617),o=t(4971),n=t(9294),a=t(3033),s=t(8388),l=t(2609),u=new WeakMap;async function c(){let e=n.workAsyncStorage.getStore();if(!e)throw Object.defineProperty(new r.InvariantError("Missing workStore in unstable_rootParams"),"__NEXT_ERROR_CODE",{value:"E615",enumerable:!1,configurable:!0});let i=a.workUnitAsyncStorage.getStore();if(!i)throw Object.defineProperty(Error(`Route ${e.route} used \`unstable_rootParams()\` in Pages Router. This API is only available within App Router.`),"__NEXT_ERROR_CODE",{value:"E641",enumerable:!1,configurable:!0});switch(i.type){case"unstable-cache":case"cache":throw Object.defineProperty(Error(`Route ${e.route} used \`unstable_rootParams()\` inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`),"__NEXT_ERROR_CODE",{value:"E642",enumerable:!1,configurable:!0});case"prerender":case"prerender-ppr":case"prerender-legacy":return function(e,i,t){let r=i.fallbackRouteParams;if(r){let n=!1;for(let i in e)if(r.has(i)){n=!0;break}if(n){if("prerender"===t.type){let i=u.get(e);if(i)return i;let r=(0,s.makeHangingPromise)(t.renderSignal,"`unstable_rootParams`");return u.set(e,r),r}return function(e,i,t,r){let n=u.get(e);if(n)return n;let a={...e},s=Promise.resolve(a);return u.set(e,s),Object.keys(e).forEach(n=>{l.wellKnownProperties.has(n)||(i.has(n)?Object.defineProperty(a,n,{get(){let e=(0,l.describeStringPropertyAccess)("unstable_rootParams",n);"prerender-ppr"===r.type?(0,o.postponeWithTracking)(t.route,e,r.dynamicTracking):(0,o.throwToInterruptStaticGeneration)(e,t,r)},enumerable:!0}):s[n]=e[n])}),s}(e,r,i,t)}}return Promise.resolve(e)}(i.rootParams,e,i);default:return Promise.resolve(i.rootParams)}}},2127:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),!function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{resolveManifest:function(){return a},resolveRobots:function(){return o},resolveRouteData:function(){return s},resolveSitemap:function(){return n}});let r=t(7341);function o(e){let i="";for(let t of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,r.resolveArray)(t.userAgent||["*"]))i+=`User-Agent: ${e}
`;if(t.allow)for(let e of(0,r.resolveArray)(t.allow))i+=`Allow: ${e}
`;if(t.disallow)for(let e of(0,r.resolveArray)(t.disallow))i+=`Disallow: ${e}
`;t.crawlDelay&&(i+=`Crawl-delay: ${t.crawlDelay}
`),i+="\n"}return e.host&&(i+=`Host: ${e.host}
`),e.sitemap&&(0,r.resolveArray)(e.sitemap).forEach(e=>{i+=`Sitemap: ${e}
`}),i}function n(e){let i=e.some(e=>Object.keys(e.alternates??{}).length>0),t=e.some(e=>{var i;return!!(null==(i=e.images)?void 0:i.length)}),r=e.some(e=>{var i;return!!(null==(i=e.videos)?void 0:i.length)}),o="";for(let l of(o+='<?xml version="1.0" encoding="UTF-8"?>\n',o+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',t&&(o+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),r&&(o+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),i?o+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':o+=">\n",e)){var n,a,s;o+="<url>\n",o+=`<loc>${l.url}</loc>
`;let e=null==(n=l.alternates)?void 0:n.languages;if(e&&Object.keys(e).length)for(let i in e)o+=`<xhtml:link rel="alternate" hreflang="${i}" href="${e[i]}" />
`;if(null==(a=l.images)?void 0:a.length)for(let e of l.images)o+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)o+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;o+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(o+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(o+=`<priority>${l.priority}</priority>
`),o+="</url>\n"}return o+"</urlset>\n"}function a(e){return JSON.stringify(e)}function s(e,i){return"robots"===i?o(e):"sitemap"===i?n(e):"manifest"===i?a(e):""}},2174:(e,i)=>{"use strict";function t(){throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'),"__NEXT_ERROR_CODE",{value:"E183",enumerable:!1,configurable:!0})}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageResponse",{enumerable:!0,get:function(){return t}})},2944:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"connection",{enumerable:!0,get:function(){return u}});let r=t(9294),o=t(3033),n=t(4971),a=t(23),s=t(8388),l=t(8719);function u(){let e=r.workAsyncStorage.getStore(),i=o.workUnitAsyncStorage.getStore();if(e){if(i&&"after"===i.phase&&!(0,l.isRequestAPICallableInsideAfter)())throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E186",enumerable:!1,configurable:!0});if(e.forceStatic)return Promise.resolve(void 0);if(i){if("cache"===i.type)throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E111",enumerable:!1,configurable:!0});if("unstable-cache"===i.type)throw Object.defineProperty(Error(`Route ${e.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E1",enumerable:!1,configurable:!0})}if(e.dynamicShouldError)throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E562",enumerable:!1,configurable:!0});if(i){if("prerender"===i.type)return(0,s.makeHangingPromise)(i.renderSignal,"`connection()`");"prerender-ppr"===i.type?(0,n.postponeWithTracking)(e.route,"connection",i.dynamicTracking):"prerender-legacy"===i.type&&(0,n.throwToInterruptStaticGeneration)("connection",e,i)}(0,n.trackDynamicDataInDynamicRender)(e,i)}return Promise.resolve(void 0)}},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3182:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),!function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{isBot:function(){return o},userAgent:function(){return a},userAgentFromString:function(){return n}});let r=function(e){return e&&e.__esModule?e:{default:e}}(t(397));function o(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function n(e){return{...(0,r.default)(e),isBot:void 0!==e&&o(e)}}function a({headers:e}){return n(e.get("user-agent")||void 0)}},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3381:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:function(){return e[t]}})})}(t(4871),i)},3426:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"NextResponse",{enumerable:!0,get:function(){return d}});let r=t(3158),o=t(6608),n=t(7912),a=t(3763),s=t(3158),l=Symbol("internal response"),u=new Set([301,302,303,307,308]);function c(e,i){var t;if(null==e?void 0:null==(t=e.request)?void 0:t.headers){if(!(e.request.headers instanceof Headers))throw Object.defineProperty(Error("request.headers must be an instance of Headers"),"__NEXT_ERROR_CODE",{value:"E119",enumerable:!1,configurable:!0});let t=[];for(let[r,o]of e.request.headers)i.set("x-middleware-request-"+r,o),t.push(r);i.set("x-middleware-override-headers",t.join(","))}}class d extends Response{constructor(e,i={}){super(e,i);let t=this.headers,u=new Proxy(new s.ResponseCookies(t),{get(e,o,n){switch(o){case"delete":case"set":return(...n)=>{let a=Reflect.apply(e[o],e,n),l=new Headers(t);return a instanceof s.ResponseCookies&&t.set("x-middleware-set-cookie",a.getAll().map(e=>(0,r.stringifyCookie)(e)).join(",")),c(i,l),a};default:return a.ReflectAdapter.get(e,o,n)}}});this[l]={cookies:u,url:i.url?new o.NextURL(i.url,{headers:(0,n.toNodeOutgoingHttpHeaders)(t),nextConfig:i.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[l].cookies}static json(e,i){let t=Response.json(e,i);return new d(t.body,t)}static redirect(e,i){let t="number"==typeof i?i:(null==i?void 0:i.status)??307;if(!u.has(t))throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'),"__NEXT_ERROR_CODE",{value:"E529",enumerable:!1,configurable:!0});let r="object"==typeof i?i:{},o=new Headers(null==r?void 0:r.headers);return o.set("Location",(0,n.validateURL)(e)),new d(null,{...r,headers:o,status:t})}static rewrite(e,i){let t=new Headers(null==i?void 0:i.headers);return t.set("x-middleware-rewrite",(0,n.validateURL)(e)),c(i,t),new d(null,{...i,headers:t})}static next(e){let i=new Headers(null==e?void 0:e.headers);return i.set("x-middleware-next","1"),c(e,i),new d(null,{...e,headers:i})}}},4525:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),!function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{ImageResponse:function(){return r.ImageResponse},NextRequest:function(){return o.NextRequest},NextResponse:function(){return n.NextResponse},URLPattern:function(){return s.URLPattern},after:function(){return l.after},connection:function(){return u.connection},unstable_rootParams:function(){return c.unstable_rootParams},userAgent:function(){return a.userAgent},userAgentFromString:function(){return a.userAgentFromString}});let r=t(2174),o=t(6268),n=t(3426),a=t(3182),s=t(1243),l=t(3381),u=t(2944),c=t(2079)},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4871:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"after",{enumerable:!0,get:function(){return o}});let r=t(9294);function o(e){let i=r.workAsyncStorage.getStore();if(!i)throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"),"__NEXT_ERROR_CODE",{value:"E468",enumerable:!1,configurable:!0});let{afterContext:t}=i;return t.after(e)}},4983:(e,i,t)=>{"use strict";t.r(i),t.d(i,{patchFetch:()=>f,routeModule:()=>c,serverHooks:()=>p,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>b});var r={};t.r(r),t.d(r,{GET:()=>u});var o=t(6559),n=t(8088),a=t(7719),s=t(4525),l=t(2127);async function u(){let e=await {name:"Next.js PWA",short_name:"NextPWA",description:"A Progressive Web App built with Next.js",start_url:"/",display:"standalone",background_color:"#ffffff",theme_color:"#000000",icons:[{src:"/bloglogo.webp",sizes:"192x192",type:"image/png"},{src:"/bloglogo.webp",sizes:"512x512",type:"image/png"}]},i=(0,l.resolveRouteData)(e,"manifest");return new s.NextResponse(i,{headers:{"Content-Type":"application/manifest+json","Cache-Control":"public, max-age=0, must-revalidate"}})}let c=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/manifest.webmanifest/route",pathname:"/manifest.webmanifest",filename:"manifest",bundlePath:"app/manifest.webmanifest/route"},resolvedPagePath:"next-metadata-route-loader?filePath=C%3A%5CUsers%5Cjoene%5COneDrive%5CDesktop%5CTobi%20File%5CInternship%5CBetr%20Beta%20Internship%5Ccmswire-blog-clone%5Capp%5Cmanifest.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"",userland:r}),{workAsyncStorage:d,workUnitAsyncStorage:b,serverHooks:p}=c;function f(){return(0,a.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:b})}},6487:()=>{},6559:(e,i,t)=>{"use strict";e.exports=t(4870)},8335:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var i=require("../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[51],()=>t(4983));module.exports=r})();