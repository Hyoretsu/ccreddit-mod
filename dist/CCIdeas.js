(()=>{"use strict";const e="Cookie Clicker OC Ideas",i="https://hyoretsu.github.io/ccideas-mod/static/upgrades.png",o={aura:3,luminous:4,misfortune:0},r={default:"s are <b>twice</b> as efficient.",misfortune:"s are <b>6%</b> cheaper and <b>6%</b> more efficient, scaling with the current stage of Grandmapocalypse."},n=["Cursor","Grandma","Farm","Mine","Factory","Bank","Temple","Wizard tower","Shipment","Alchemy lab","Portal","Time machine","Antimatter condenser","Prism","Chancemaker","Fractal engine","Javascript console","Idleverse"],[t,a,s,u,l,m,c,d,g,h,p,f,b,y,k,w,v,q]=n,G=[...Game.ObjectsById.filter((e=>1===e.vanilla&&"Cursor"!==e.name)).map((e=>()=>{Game.Has("Aura gloves")&&e.level>=5&&Game.Unlock(e.tieredUpgrades.aura.name)})),...Game.ObjectsById.filter((e=>1===e.vanilla&&"Cursor"!==e.name)).map((e=>()=>{Game.Has("Luminous gloves")&&e.level>=10&&Game.Unlock(e.tieredUpgrades.luminous.name)}))],M=e=>{let i=e;return Game.Has("Misfortune #604")&&(i+=.01*Game.cookiesPs),i},T=e=>{let i=e;return Game.Has("Misfortune #600")&&(i*=1.01),Game.Has("Misfortune #601")&&(i*=1.06),i},A=6666666666666667e13,S=()=>{const e="aura";return[{name:"Auraven",quote:"Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.",building:a,tier:e},{name:"Hoe-Fu",quote:"Quite similar to Shovel-Fu, but with less breaking and more tilling.",building:s,tier:e},{name:"Planebreakers",quote:"By mining into the very fabric of reality itself, you found a way to get just a tiny bit more cookies.",building:u,tier:e},{name:"Perfect workers",quote:"Before you were using humans to work in your factories, but now you're using Nameks. Your productivity has increased by over 9000 percent!",building:l,tier:e},{name:"Aura banking",quote:"Overdraw into the 4th dimension!",building:m,tier:e},{name:"Aura-filled temples",quote:"After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.",building:c,tier:e},{name:"Conversion rates",quote:"Apparently by converting aura you get about twice the amount of mana. Gonna have to fire some people for that one.",building:d,tier:e},{name:"Aura-fueled ships",quote:"Having no need for aura themselves, your astronauts distilled it into their fuel, making it even more efficient.",building:g,tier:e},{name:"Qi-kies",quote:"Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi – qi-kies, if you will.",building:h,tier:e},{name:"Self inflection",quote:"By creating portals from qi, it seems that you can travel inside yourself. A little odd, but more cookies nonetheless.",building:p,tier:e},{name:"Aura travel",quote:"Through your comprehension of the Time Dao, you can now travel through time using your qi.",building:f,tier:e},{name:"Aura manipulators",quote:"There couldn't be that many consequences for manipulating the- [TRANSMISSION LOST].",building:b,tier:e},{name:"Aura prism",quote:"Light is energy, isn't it? Now you're making cookies out of aura.",building:y,tier:e},{name:"Aura dice",quote:"Yes, you've found a way to use your understanding of the world to affect your luck and get more cookies. *sigh* Don't you think you have enough luck already?",building:k,tier:e},{name:"Hilbert's Secret Technique",quote:"It's unreadable, just a whole lot of random squiggles.",building:w,tier:e},{name:"Aura hardware",quote:"It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",building:v,tier:e},{name:"Auraverse",quote:"It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world.",building:q,tier:e}]},C=()=>{const e="luminous";return[{name:"Luminous grandmas",quote:"Your grandmas have called their long-lost relatives to help them bake more cookies.",building:a,tier:e},{name:"Luminous seeds",quote:"Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",building:s,tier:e},{name:"Luminous refining",quote:"By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.",building:u,tier:e},{name:"Luminous labor",quote:"By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",building:l,tier:e},{name:"Luminous cash",quote:"You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",building:m,tier:e},{name:"Luminous temples",quote:"This strange powder shines. You put it all around your temples. Gods like shiny things.",building:c,tier:e},{name:"Luminous catalyst",quote:"Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.",building:d,tier:e},{name:"Luminous fuel",quote:"By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, it becomes highly more potent.",building:g,tier:e},{name:"Luminous transmutation",quote:"This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",building:h,tier:e},{name:"Luminous portal",quote:"The portal to heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",building:p,tier:e},{name:"Luminous travel",quote:"By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",building:f,tier:e},{name:"Luminous condensers",building:b,tier:e},{name:"Luminous prism",quote:"Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",building:y,tier:e},{name:"Luminous dice",quote:"Now there are sparks whenever you spawn cookies. It's entertaining, so people do it more often.",building:k,tier:e},{name:"Luminous fractals",building:w,tier:e},{name:"Luminous hardware",quote:"Hey, it works okay? RGB mice and keyboard boost computer performance.",building:v,tier:e},{name:"Luminous universe",quote:"Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!",building:q,tier:e}]},L=()=>{const e="misfortune",i=e=>Math.min(e.basePrice,60*Game.unbuffedCps*60*24),o=19101;return[{name:"Misfortune #501",quote:"The decay of a finger will leave 4 others still pointing.",building:t,tier:e,order:o},{name:"Misfortune #502",quote:"A wrinkle is a crack on the only home you have.",building:a,tier:e,order:o},{name:"Misfortune #503",quote:"Famine is inevitable.",building:s,tier:e,order:o},{name:"Misfortune #504",quote:"The collapse under your life's work.",building:u,tier:e,order:o},{name:"Misfortune #505",quote:"True worth is not in what you make yourself, but in what you make others do for you.",building:l,tier:e,order:o},{name:"Misfortune #506",quote:"The value of money means everything to a banker.",building:m,tier:e,order:o},{name:"Misfortune #507",quote:"No idol deserves worship.",building:c,tier:e,order:o},{name:"Misfortune #508",quote:"Magic is about two things — deceiving and pleasing.",building:d,tier:e,order:o},{name:"Misfortune #509",quote:"Every mile travelled maddens you just as much.",building:g,tier:e,order:o},{name:"Misfortune #510",quote:"You're turning diamonds into coal.",building:h,tier:e,order:o},{name:"Misfortune #511",quote:"Welcoming unwanted visitors.",building:p,tier:e,order:o},{name:"Misfortune #512",quote:"You cannot run from time.",building:f,tier:e,order:o},{name:"Misfortune #513",quote:"The world is made of what we take from it.",building:b,tier:e,order:o},{name:"Misfortune #514",quote:"Staring at endless darkness can blind you forever from the light.",building:y,tier:e,order:o},{name:"Misfortune #515",quote:"Life's the gamble you will never win.",building:k,tier:e,order:o},{name:"Misfortune #516",quote:"Losing yourself by finding others.",building:w,tier:e,order:o},{name:"Misfortune #517",quote:"If things are working in your computer, they won't in others'.",building:v,tier:e,order:o},{name:"Misfortune #518",quote:"There are too many of everyone, including you.",building:q,tier:e,order:o},{name:"Misfortune #600",description:"Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.",quote:"True poverty is counted in betrayals.",price:1e5*A,priceFunc:i,icon:[0,0],tier:e,order:o},{name:"Misfortune #601",description:"You gain <b>+6%</b> CpS.",quote:"Some people dream of escaping misery; others dream of cookies.",price:1e8*A,priceFunc:i,icon:[0,0],tier:e,order:o},{name:"Misfortune #602",description:"You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.",quote:"Help, I'm trapped in a CC mod!",price:1e11*A,priceFunc:i,icon:[0,0],tier:e,order:o},{name:"Misfortune #603",description:"You gain <b>more CpS</b> the more milk you have.",quote:"Believe the superstitions; black cats are bad luck.",price:1e14*A,priceFunc:i,icon:[1,0],tier:e,kitten:!0,order:o},{name:"Misfortune #604",description:"Clicking gains <b>+1% of your CpS</b>.",quote:"Remember to not stay in touch.",price:1e11*A,priceFunc:i,icon:[2,0],tier:e,order:o}]},H=()=>{[...S(),...C(),...L()].forEach((t=>{let a,s,u;const l=t.quote?`<q>${t.quote}</q>`:"";a=t.description?t.description+l:t.building+(r[t.tier]||r.default)+l,s=t.icon?[t.icon[0],t.icon[1],i]:[n.indexOf(t.building)+3,o[t.tier],i],u=t.price?t.price:Game.Objects[t.building].basePrice*Game.Tiers[t.tier].price;const m=new Game.Upgrade(t.name,a,u,s);m.mod=e,t.building?(t.order||("Cursor"===t.building?m.order=100:m.order=Math.floor(Game.Objects[t.building].tieredUpgrades[1].order)+.9999),Game.SetTier(t.building,t.tier)):(t.priceFunc&&(m.priceFunc=t.priceFunc),m.tier=t.tier),t.order&&(m.order=t.order),t.kitten&&(m.kitten=1),Game.Tiers[t.tier].upgrades.push(m)})),(o=>{o.forEach((o=>{const r=`${o.description}${o.quote?`<q>${o.quote}</q>`:""}`,n=[o.icon[0],o.icon[1],i],t=new Game.Upgrade(o.name,r,o.price,n);t.mod=e,t.pool="prestige",t.order=o.order,o.parents.forEach((e=>{t.parents.push(Game.Upgrades[e])})),[t.posX,t.posY]=o.position,Game.PrestigeUpgrades.push(t)}))})([{name:"Misfortune cookies",description:'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',quote:"These taste quite bad — but then again, what's even the point?",price:66666666666,icon:[0,1],parents:["Distilled essence of redoubled luck"],position:[75,495],order:644}])};let U;const F=e=>{const i=["Aura furnace","Aura oven","Aura seeds","Aura pickaxe","Aura cogs","Aura cash","Aura spells","Aura fuel","Aura transmutation","Aura portal","Aura condensers","Aura fractals","Aura universe"].indexOf(e);i>=0&&(U=["Aura oven","Auraven","Hoe-Fu","Planebreakers","Perfect workers","Aura banking","Conversion rates","Aura-fueled ships","Qi-kies","Self inflection","Aura manipulators","Hilbert's Secret Technique","Auraverse"][i])},j={init:()=>{(()=>{const e=[],i=[],o=[],r=[],n=[],t=[],a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href="https://hyoretsu.github.io/ccideas-mod/static/styles.css",document.getElementsByTagName("head")[0].appendChild(a);const s=Game.Tiers[Object.keys(Game.Tiers).length-3].price;let u=10;const l=()=>{u*=10},m={aura:{color:"#ff7e00",iconRow:3,name:"Aura",price:s*u,special:1,unlock:-1,upgrades:[]}};l();const c={luminous:{color:"#faedb9",iconRow:4,name:"Luminous",price:s*u,special:1,unlock:-1,upgrades:[]}};l();const d={misfortune:{color:"#7e5a40",iconRow:0,name:"Misfortune",price:A,special:1,unlock:-1,upgrades:[]}};Object.assign(Game.Tiers,m,c,d),e.push('if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}'),i.push("if(building.vanilla===1&&Game.Has(building.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:price*=0.98;break;case 2:price*=0.96;break;case 3:price*=0.94;break;}}if(Game.Has('Misfortune #600')){price*=0.99;}"),o.push("if(Game.Has('Misfortune #600')){price*=0.99}"),r.push("if(me.vanilla===1&&Game.Has(me.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:mult*=1.02;break;case 2:mult*=1.04;break;case 3:mult*=1.06;break;}}"),n.push("if(Game.Has('Misfortune #602')){percent+=1}"),t.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}"),Game.getNewTicker=new Function(`return ${Game.getNewTicker.toString().split("Game.TickerAge=Game.fps*10;").join(`${e.join("\n")}\n\nGame.TickerAge=Game.fps*10;`)}`)(),Game.modifyBuildingPrice=new Function(`return ${Game.modifyBuildingPrice.toString().split("return price").join(`${i.join("\n")}\n\nreturn price`)}`)(),Game.Upgrade.prototype.getPrice=new Function(`return ${Game.Upgrade.prototype.getPrice.toString().split(/\t{3}}/).join(`${o.join("\n")}\n}`)}`)(),Game.GetTieredCpsMult=new Function(`return ${Game.GetTieredCpsMult.toString().split("return mult").join(`${r.join("\n")}\n\nreturn mult`)}`)(),Game.LoadSave=new Function(`return ${Game.LoadSave.toString().split("var percent=5;").join(`var percent=5;\n\n${n.join("\n")}`)}`)(),Game.CalculateGains=new Function(`return ${Game.CalculateGains.toString().split("Game.cookiesMultByType['kittens']=catMult;").join(`${t.join("\n")}\n\nGame.cookiesMultByType['kittens']=catMult;`)}`)()})(),Game.registerHook("check",G),Game.registerHook("cookiesPerClick",M),Game.registerHook("cps",T),H()},save:()=>{const i={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.forEach((o=>{o.mod===e&&(o.bought&&i.boughtUpgrades.push(o.name),!o.bought&&o.unlocked&&i.unlockedUpgrades.push(o.name))})),JSON.stringify(i)},load:e=>{const i=JSON.parse(e);i.unlockedUpgrades.forEach((e=>{F(e),Game.Unlock(U||e)})),i.boughtUpgrades.forEach((e=>{F(e),Game.Upgrades[U||e].bought=1}))}};Game.registerMod(e,j)})();
//# sourceMappingURL=CCIdeas.js.map