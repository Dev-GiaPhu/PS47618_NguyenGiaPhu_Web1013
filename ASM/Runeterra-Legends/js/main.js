/* HERO BACKGROUND */

const backgrounds = [
    "images/background/bg1.jpg",
    "images/background/bg2.jpg",
    "images/background/bg3.png",
    "images/background/bg4.png",
    "images/background/bg5.png",
    "images/background/bg6.png",
    "images/background/bg7.png",
    "images/background/bg8.png",
    "images/background/bg9.png"
];

const heroBg = document.getElementById("heroBg");
const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

heroBg.style.backgroundImage =
`linear-gradient(rgba(3,5,18,0.15), rgba(3,5,18,0.8)), url('${randomBg}')`;


/* CUSTOM CURSOR */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

function bindCursorHover(){
    document.querySelectorAll(
        "a, button, .champion_card, .gallery_item, .region_card, .stat_card"
    ).forEach(function(el){
        el.onmouseenter = function(){
            cursor.classList.add("active");
        };

        el.onmouseleave = function(){
            cursor.classList.remove("active");
        };
    });
}

bindCursorHover();


/* NAVBAR */

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav_link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

const activeObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            navLinks.forEach(function(link){
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
},{
    threshold:0.35
});

sections.forEach(function(section){
    activeObserver.observe(section);
});


/* REGIONS DATA */

const regions = [
    {
        name:"Demacia",
        slug:"demacia",
        desc:"Vương quốc của danh dự, ánh sáng và những chiến binh bảo vệ công lý.",
        tags:["Honor","Light","Petricite"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/36c564338d66ac2000a3d6c091dd78c443230623.webm?accountingTag=LoL",
        type:"video",
        pos:"center 45%",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/demacia_emblem.png",
        info:{
            Honor:"Danh dự là cốt lõi của Demacia.",
            Light:"Ánh sáng đại diện cho công lý và niềm tin.",
            Petricite:"Petricite là loại đá kháng ma thuật của Demacia."
        }
    },
    {
        name:"Noxus",
        slug:"noxus",
        desc:"Đế quốc mạnh mẽ, nơi sức mạnh và tham vọng quyết định vị thế.",
        tags:["Power","Empire","Ambition"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/329c91313054076a869a6ceb95c995107320e334.webm?accountingTag=LoL",
        type:"video",
        pos:"45% -50px",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/noxus_emblem.png",
        info:{
            Power:"Ở Noxus, kẻ mạnh có quyền vươn lên.",
            Empire:"Noxus là đế quốc bành trướng bằng chiến tranh.",
            Ambition:"Tham vọng là linh hồn của Noxus."
        }
    },
    {
        name:"Ionia",
        slug:"ionia",
        desc:"Vùng đất huyền bí, nơi linh hồn, thiên nhiên và kiếm thuật hòa làm một.",
        tags:["Spirit","Balance","Blade"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/a9b6b551e2589189615eb4f7d56a17862ff3a882.webm?accountingTag=LoL",
        type:"video",
        pos:"75% 20px",
        size:"130%",
        icon:"https://universe.leagueoflegends.com/images/iona_emblem.png",
        info:{
            Spirit:"Ionia tràn đầy năng lượng linh hồn.",
            Balance:"Cân bằng là triết lý sống của Ionia.",
            Blade:"Kiếm thuật Ionia mềm mại nhưng chết người."
        }
    },
    {
        name:"Freljord",
        slug:"freljord",
        desc:"Xứ sở băng giá với những bộ tộc cổ xưa và quyền năng nguyên thủy.",
        tags:["Iceborn","Tribes","True Ice"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/aa302815ab40524f8382dbc9865d6cbd7df0b9f9.webm?accountingTag=LoL",
        type:"video",
        pos:"75% -5px",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/freljord_emblem.png",
        info:{
            Iceborn:"Iceborn là những người mang sức mạnh băng cổ đại.",
            Tribes:"Các bộ tộc Freljord luôn đấu tranh để sinh tồn.",
            "True Ice":"True Ice là băng ma thuật nguy hiểm."
        }
    },
    {
        name:"Shurima",
        slug:"shurima",
        desc:"Đế chế sa mạc cổ đại, nơi những vị thần chiến binh từng thống trị.",
        tags:["Ascended","Sun Disc","Empire"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/903a0dc3286518114b68113d0778e5299a26a729.webm?accountingTag=LoL",
        type:"video",
        pos:"80% 75%",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/shurima_emblem.png",
        info:{
            Ascended:"Ascended là những chiến binh được nâng lên thành bán thần.",
            "Sun Disc":"Sun Disc là biểu tượng quyền năng của Shurima.",
            Empire:"Shurima từng là đế chế huy hoàng."
        }
    },
    {
        name:"Piltover",
        slug:"piltover",
        desc:"Thành phố tiến bộ, công nghệ Hextech và những phát minh rực rỡ.",
        tags:["Progress","Hextech","Innovation"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/2b8b859578a41fc8a9272dacc0bdd6405a248c10.webm?accountingTag=LoL",
        type:"video",
        pos:"25% 50%",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/piltover_emblem.png",
        info:{
            Progress:"Piltover đại diện cho tiến bộ.",
            Hextech:"Hextech kết hợp khoa học và ma thuật.",
            Innovation:"Sáng tạo là nền tảng của Piltover."
        }
    },
    {
        name:"Zaun",
        slug:"zaun",
        desc:"Thành phố ngầm hỗn loạn, nơi hóa chất và phát minh sinh tồn cùng nhau.",
        tags:["Chemtech","Chaos","Undercity"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/7feffff28f5a4df3f58438b83d4553b37ae647e0.webm?accountingTag=LoL",
        type:"video",
        pos:"75% 5px",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/zaun_emblem.png",
        info:{
            Chemtech:"Chemtech là công nghệ hóa học nguy hiểm.",
            Chaos:"Zaun hỗn loạn nhưng cực kỳ sáng tạo.",
            Undercity:"Zaun là thành phố ngầm dưới Piltover."
        }
    },
    {
        name:"Bilgewater",
        slug:"bilgewater",
        desc:"Thành phố cảng của hải tặc, săn quái biển và kho báu.",
        tags:["Pirates","Sea","Fortune"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/d9beea1a5d1cfc7ec6bbc100d3fb522175930f38.webm?accountingTag=LoL",
        type:"video",
        pos:"center 50%",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/bilgewater_emblem.png",
        info:{
            Pirates:"Bilgewater là thiên đường của hải tặc.",
            Sea:"Biển cả là linh hồn của Bilgewater.",
            Fortune:"Kho báu và vận may luôn gọi tên nơi này."
        }
    },
    {
        name:"Shadow Isles",
        slug:"shadow-isles",
        desc:"Quần đảo bị nguyền rủa, nơi sương đen và linh hồn vất vưởng.",
        tags:["Mist","Undead","Curse"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/9648da1fe76a45096b7095940d7991269d97d351.webm?accountingTag=LoL",
        type:"video",
        pos:"75% 10px",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/shadow_isles_emblem.png",
        info:{
            Mist:"Black Mist nuốt chửng sự sống.",
            Undead:"Shadow Isles đầy linh hồn bất tử.",
            Curse:"Lời nguyền đã biến nơi này thành vùng đất chết."
        }
    },
    {
        name:"Targon",
        slug:"targon",
        desc:"Ngọn núi thiêng nơi con người chạm tới các thực thể vũ trụ.",
        tags:["Celestial","Aspects","Mountain"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/d00f9e798c7e63fed1eaa8b92770f280d0c7f241.webm?accountingTag=LoL",
        type:"video",
        pos:"100% center",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/mt_targon_emblem.png",
        info:{
            Celestial:"Targon gắn với sức mạnh thiên giới.",
            Aspects:"Aspects là hiện thân của các ý niệm vũ trụ.",
            Mountain:"Mount Targon là thử thách định mệnh."
        }
    },
    {
        name:"Bandle City",
        slug:"bandle-city",
        desc:"Vùng đất kỳ ảo của Yordle, cổng dịch chuyển và phép màu.",
        tags:["Yordle","Magic","Portals"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/84d14187e66ee28277609d55a3db93b96ae2a34c.webm?accountingTag=LoL",
        type:"video",
        pos:"30% -50px",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/bandle_city_emblem.png",
        info:{
            Yordle:"Yordle là cư dân đặc trưng của Bandle City.",
            Magic:"Ma thuật nơi này kỳ lạ và khó đoán.",
            Portals:"Các cổng dịch chuyển nối Bandle City với Runeterra."
        }
    },
    {
        name:"Ixtal",
        slug:"ixtal",
        desc:"Vùng đất nguyên tố ẩn mình trong rừng sâu với ma thuật cổ xưa.",
        tags:["Elements","Jungle","Arcology"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/670a63d489e907098afeafd2ce42a81e8e64bfcb.webm?accountingTag=LoL",
        type:"video",
        pos:"30% center",
        size:"120%",
        icon:"https://universe.leagueoflegends.com/images/ixtal_emblem.png",
        info:{
            Elements:"Ixtal nổi tiếng với ma thuật nguyên tố.",
            Jungle:"Rừng rậm bao phủ và bảo vệ Ixtal.",
            Arcology:"Ixtal là nền văn minh cổ xưa và bí ẩn."
        }
    },
    {
        name:"The Void",
        slug:"void",
        desc:"Khoảng không ngoài thực tại, nơi sinh vật hư không luôn muốn nuốt chửng thế giới.",
        tags:["Void","Horror","Evolution"],
        bg:"https://cmsassets.rgpub.io/sanity/files/dsfx7636/universe/d02e1a8e54aa5b4ea0bcbb430c5e1bb697400fa5.webm?accountingTag=LoL",
        type:"video",
        pos:"60% 50%",
        size:"120%",
        icon:"https://static.wikia.nocookie.net/leagueoflegends/images/c/cb/Void_Crest.png/revision/latest/scale-to-width-down/268?cb=20180801201707",
        info:{
            Void:"Void là chiều không gian xa lạ.",
            Horror:"Sinh vật Void mang cảm giác kinh hoàng.",
            Evolution:"Void tiến hóa để săn mồi và tồn tại."
        }
    }

    // ,
    // {
    //     name:"Runeterra",
    //     slug:"runeterra",
    //     desc:"Những huyền thoại không bị giới hạn bởi một vùng đất duy nhất.",
    //     tags:["Legends","Wanderers","Mystery"],
    //     bg:"https://map.leagueoflegends.com/meta-image.jpg",
    //     type:"image",
    //     pos:"center center",
    //     icon:"images/regions/icons/runeterra.png",
    //     info:{
    //         Legends:"Runeterra chứa những huyền thoại tự do.",
    //         Wanderers:"Những kẻ du hành đi qua nhiều vùng đất.",
    //         Mystery:"Bí ẩn của Runeterra vẫn chưa được kể hết."
    //     }
    // }
];


/* CHAMPION DATA */

let champions = [];
let championIndex = 0;
let ddragonVersion = "15.24.1";

const championsGrid = document.getElementById("championsGrid");

const fallbackChampions = [
    {
        id:"Ahri",
        name:"Ahri",
        role:"Mage · Assassin",
        region:"Ionia",
        img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        pos:"58% center",
        bio:"Linh hồn cáo huyền bí, thao túng cảm xúc và hút lấy linh hồn kẻ thù.",
        stats:[["Magic",90],["Agility",82],["Power",74]],
        lorCards:[]
    },
    {
        id:"Yasuo",
        name:"Yasuo",
        role:"Fighter · Assassin",
        region:"Ionia",
        img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
        pos:"80% center",
        bio:"Kiếm sĩ Ionia bị ám ảnh bởi tội lỗi, đường gió và con đường chuộc lỗi.",
        stats:[["Blade",95],["Wind",88],["Will",70]],
        lorCards:[]
    },
    {
        id:"Jinx",
        name:"Jinx",
        role:"Marksman",
        region:"Zaun",
        img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        pos:"70% center",
        bio:"Xạ thủ hỗn loạn từ Zaun, sống vì vụ nổ, điên loạn và sự tàn phá.",
        stats:[["Chaos",99],["Fire",93],["Defense",45]],
        lorCards:[]
    }
];

const regionMap = {
    Aatrox:"Runeterra", Ahri:"Ionia", Akali:"Ionia", Akshan:"Shurima", Alistar:"Runeterra",
    Ambessa:"Noxus", Amumu:"Shurima", Anivia:"Freljord", Annie:"Runeterra", Aphelios:"Targon",
    Ashe:"Freljord", AurelionSol:"Targon", Aurora:"Freljord", Azir:"Shurima", Bard:"Runeterra",
    Belveth:"The Void", Blitzcrank:"Zaun", Brand:"Runeterra", Braum:"Freljord", Briar:"Noxus",
    Caitlyn:"Piltover", Camille:"Piltover", Cassiopeia:"Noxus", Chogath:"The Void", Corki:"Bandle City",
    Darius:"Noxus", Diana:"Targon", DrMundo:"Zaun", Draven:"Noxus", Ekko:"Zaun",
    Elise:"Shadow Isles", Evelynn:"Runeterra", Ezreal:"Piltover", Fiddlesticks:"Runeterra", Fiora:"Demacia",
    Fizz:"Bilgewater", Galio:"Demacia", Gangplank:"Bilgewater", Garen:"Demacia", Gnar:"Freljord",
    Gragas:"Freljord", Graves:"Bilgewater", Gwen:"Shadow Isles", Hecarim:"Shadow Isles", Heimerdinger:"Piltover",
    Hwei:"Ionia", Illaoi:"Bilgewater", Irelia:"Ionia", Ivern:"Ionia", Janna:"Zaun",
    JarvanIV:"Demacia", Jax:"Runeterra", Jayce:"Piltover", Jhin:"Ionia", Jinx:"Zaun",
    Kaisa:"The Void", Kalista:"Shadow Isles", Karma:"Ionia", Karthus:"Shadow Isles", Kassadin:"The Void",
    Katarina:"Noxus", Kayle:"Demacia", Kayn:"Ionia", Kennen:"Bandle City", Khazix:"The Void",
    Kindred:"Runeterra", Kled:"Noxus", KogMaw:"The Void", KSante:"Shurima", Leblanc:"Noxus",
    LeeSin:"Ionia", Leona:"Targon", Lillia:"Ionia", Lissandra:"Freljord", Lucian:"Demacia",
    Lulu:"Bandle City", Lux:"Demacia", Malphite:"Ixtal", Malzahar:"The Void", Maokai:"Shadow Isles",
    MasterYi:"Ionia", Milio:"Ixtal", MissFortune:"Bilgewater", MonkeyKing:"Ionia", Mordekaiser:"Noxus",
    Morgana:"Demacia", Naafiri:"Shurima", Nami:"Runeterra", Nasus:"Shurima", Nautilus:"Bilgewater",
    Neeko:"Ixtal", Nidalee:"Ixtal", Nilah:"Bilgewater", Nocturne:"Runeterra", Nunu:"Freljord",
    Olaf:"Freljord", Orianna:"Piltover", Ornn:"Freljord", Pantheon:"Targon", Poppy:"Demacia",
    Pyke:"Bilgewater", Qiyana:"Ixtal", Quinn:"Demacia", Rakan:"Ionia", Rammus:"Shurima",
    RekSai:"The Void", Rell:"Noxus", Renata:"Zaun", Renekton:"Shurima", Rengar:"Ixtal",
    Riven:"Noxus", Rumble:"Bandle City", Ryze:"Runeterra", Samira:"Noxus", Sejuani:"Freljord",
    Senna:"Shadow Isles", Seraphine:"Piltover", Sett:"Ionia", Shaco:"Runeterra", Shen:"Ionia",
    Shyvana:"Demacia", Singed:"Zaun", Sion:"Noxus", Sivir:"Shurima", Skarner:"Ixtal",
    Smolder:"Runeterra", Sona:"Demacia", Soraka:"Targon", Swain:"Noxus", Sylas:"Demacia",
    Syndra:"Ionia", TahmKench:"Runeterra", Taliyah:"Shurima", Talon:"Noxus", Taric:"Targon",
    Teemo:"Bandle City", Thresh:"Shadow Isles", Tristana:"Bandle City", Trundle:"Freljord", Tryndamere:"Freljord",
    TwistedFate:"Bilgewater", Twitch:"Zaun", Udyr:"Freljord", Urgot:"Zaun", Varus:"Ionia",
    Vayne:"Demacia", Veigar:"Bandle City", Velkoz:"The Void", Vex:"Shadow Isles", Vi:"Piltover",
    Viego:"Shadow Isles", Viktor:"Zaun", Vladimir:"Noxus", Volibear:"Freljord", Warwick:"Zaun",
    Xayah:"Ionia", Xerath:"Shurima", XinZhao:"Demacia", Yone:"Ionia", Yorick:"Shadow Isles",
    Yuumi:"Bandle City", Zac:"Zaun", Zed:"Ionia", Zeri:"Zaun", Ziggs:"Zaun",
    Zilean:"Shurima", Zoe:"Targon", Zyra:"Ixtal"
};

const roleNameMap = {
    Fighter:"Fighter",
    Tank:"Tank",
    Mage:"Mage",
    Assassin:"Assassin",
    Marksman:"Marksman",
    Support:"Support"
};


/* LEGENDS OF RUNETERRA CARD DATA */

const lorSets = [
    "set1",
    "set2",
    "set3",
    "set4",
    "set5",
    "set6",
    "set6cde",
    "set7",
    "set7b",
    "set8",
    "set9"
];

let lorCards = [];
const customLoRCards = {
    Yasuo:[
        "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01IO015.png",
        "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01IO015T1.png"
    ],

    Ahri:[
        "https://dd.b.pvp.net/latest/set6/en_us/img/cards/06IO004.png",
        "https://dd.b.pvp.net/latest/set6/en_us/img/cards/06IO004T1.png"
    ],

    Jinx:[
        "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01PZ040.png",
        "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01PZ040T1.png"
    ],

    MasterYi:[
        "https://dd.b.pvp.net/latest/set6/en_us/img/cards/06IO008.png",
        "https://dd.b.pvp.net/latest/set6/en_us/img/cards/06IO008T1.png"
    ]
};

function normalizeCardName(name){
    return String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

async function loadLoRCards(){
    const allCards = [];

    for(const setName of lorSets){
        try{
            const url = `https://raw.communitydragon.org/latest/plugins/lor/${setName}/en_us/data/${setName}-en_us.json`;
            const res = await fetch(url);

            if(!res.ok) continue;

            const data = await res.json();
            allCards.push(...data);
        }catch(error){
            console.log("Không tải được bộ card:", setName);
        }
    }

    lorCards = allCards.filter(function(card){
        return card.name &&
               card.assets &&
               card.assets[0] &&
               card.assets[0].gameAbsolutePath;
    });
}

function getLoRCardImage(card){
    return card.img || "";
}

function attachLoRCardsToChampions(){
    champions.forEach(function(champ){
        if(customLoRCards[champ.id]){
            champ.lorCards = customLoRCards[champ.id].map(function(url, index){
                return {
                    name: champ.name + " Card " + (index + 1),
                    img: url
                };
            });
        }else{
            champ.lorCards = [];
        }
    });
}

async function loadChampions(){
    try{
        const versionRes = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
        const versions = await versionRes.json();

        ddragonVersion = versions[0];

        const champRes = await fetch(`https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion.json`);
        const champJson = await champRes.json();

        champions = Object.values(champJson.data).map(function(champ){
            const role = champ.tags.map(tag => roleNameMap[tag] || tag).join(" · ");
            const region = regionMap[champ.id] || "Runeterra";

            return {
                id: champ.id,
                name: champ.name,
                role: role || "Champion",
                region: region,
                img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`,
                pos: getChampionPosition(champ.id),
                bio: champ.blurb,
                stats: [
                    ["Attack", Math.min(100, champ.info.attack * 10)],
                    ["Magic", Math.min(100, champ.info.magic * 10)],
                    ["Defense", Math.min(100, champ.info.defense * 10)]
                ],
                lorCards:[]
            };
        });

        const wantedFirst = ["Ahri","Yasuo","Jinx"];
        champions.sort(function(a,b){
            const ia = wantedFirst.indexOf(a.id);
            const ib = wantedFirst.indexOf(b.id);

            if(ia !== -1 || ib !== -1){
                return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
            }

            return a.name.localeCompare(b.name);
        });

    }catch(error){
        champions = fallbackChampions;
    }

    await loadLoRCards();
    attachLoRCardsToChampions();

    document.getElementById("championCount").textContent = champions.length;
    document.getElementById("regionCount").textContent = regions.length;

    renderChampions("init");
    renderGallery();
}


function getChampionPosition(id){
    const positions = {
        Yasuo:"80% center",
        Jinx:"70% center",
        Ahri:"58% center",
        Lux:"48% center",
        Zed:"55% center",
        Irelia:"50% center",
        Ashe:"48% center",
        Morgana:"50% center",
        Akali:"52% center",
        Darius:"50% center",
        Azir:"50% center",
        Leona:"50% center"
    };

    return positions[id] || "50% center";
}


function createChampionCard(champ, i){
    const isMobile = window.innerWidth <= 900;

    const article = document.createElement("article");
    article.className = "champion_card";

    if(isMobile || i === 1){
        article.classList.add("featured");
    }

    article.dataset.name = champ.name;
    article.dataset.id = champ.id;
    article.dataset.cardIndex = "0";

    const firstLoRCard =
        champ.lorCards && champ.lorCards.length
        ? champ.lorCards[0].assets[0].gameAbsolutePath
        : "";

    article.innerHTML = `
        <div class="card_inner">

            <div class="card_front">
                <div class="card_bg_img">
                    <img src="${champ.img}" alt="${champ.name}" style="--pos:${champ.pos}">
                </div>

                <div class="card_shimmer"></div>
                <div class="card_overlay"></div>
                <div class="card_frame_tl"></div>
                <div class="card_frame_br"></div>

                <div class="card_body">
                    <div class="card_top">
                        <span class="champ_num">${String(((championIndex + i) % champions.length) + 1).padStart(2,"0")}</span>
                        <button class="champ_region" data-region="${champ.region.toLowerCase().replaceAll(" ","-")}">
                            ${champ.region}
                        </button>
                    </div>

                    <div class="card_bottom">
                        <span class="champ_role">${champ.role}</span>
                        <h3 class="champ_name">${champ.name}</h3>
                        <p class="champ_bio">${champ.bio}</p>

                        <div class="champ_stats">
                            ${champ.stats.map(function(stat){
                                return `
                                    <div class="stat">
                                        <span>${stat[0]}</span>
                                        <div class="stat_bar">
                                            <div style="--w:${stat[1]}%"></div>
                                        </div>
                                        <b class="stat_value">${stat[1]}</b>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </div>
                </div>
            </div>

            <div class="card_back">
                ${
                    firstLoRCard
                    ? `<img class="lor_card_img" src="${firstLoRCard}" alt="${champ.name} LoR Card">`
                    : `<div class="lor_card_empty">Chưa có thẻ bài LoR</div>`
                }
            </div>

        </div>
    `;

    return article;
}


function getVisibleChampions(){
    const isMobile = window.innerWidth <= 900;
    const totalCards = isMobile ? 1 : 3;
    const result = [];

    for(let i = 0; i < totalCards; i++){
        result.push(champions[(championIndex + i) % champions.length]);
    }

    return result;
}


function renderChampions(direction = "init"){
    if(!champions.length) return;

    const oldCards = Array.from(championsGrid.querySelectorAll(".champion_card"));
    const oldRects = new Map();

    oldCards.forEach(function(card){
        oldRects.set(card.dataset.id, {
            rect: card.getBoundingClientRect(),
            html: card.innerHTML,
            className: card.className
        });
    });

    const oldIds = oldCards.map(card => card.dataset.id);

    championsGrid.innerHTML = "";

    const visible = getVisibleChampions();

    visible.forEach(function(champ, i){
        const card = createChampionCard(champ, i);
        championsGrid.appendChild(card);
    });

    const newCards = Array.from(championsGrid.querySelectorAll(".champion_card"));

    if(direction !== "init"){
        animateChampionMovement(oldRects, oldIds, newCards, direction);
    }

    bindChampionTilt();
    bindChampionCardFlip();
    bindChampionRegionButtons();
    bindCursorHover();
}


function animateChampionMovement(oldRects, oldIds, newCards, direction){
    const duration = 720;
    const easing = "cubic-bezier(.22,.8,.22,1)";

    newCards.forEach(function(card){
        const newRect = card.getBoundingClientRect();
        const oldData = oldRects.get(card.dataset.id);

        if(oldData){
            const oldRect = oldData.rect;
            const dx = oldRect.left - newRect.left;
            const dy = oldRect.top - newRect.top;
            const sx = oldRect.width / newRect.width;
            const sy = oldRect.height / newRect.height;
            card.animate([
                {
                    transform:`translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
                    opacity:1
                },
                {
                    transform:"translate(0,0) scale(1,1)",
                    opacity:1
                }
            ],{
                duration:duration,
                easing:easing
            });
        }else{
            const fromX = direction === "next" ? "120%" : "-120%";

            card.animate([
                {
                    transform:`translateX(${fromX}) scale(.35)`,
                    opacity:0
                },
                {
                    transform:"translateX(0) scale(1)",
                    opacity:1
                }
            ],{
                duration:duration,
                easing:easing
            });
        }
    });

    oldIds.forEach(function(id){
        const stillVisible = newCards.some(card => card.dataset.id === id);

        if(!stillVisible){
            const oldData = oldRects.get(id);
            if(!oldData) return;

            const oldRect = oldData.rect;
            const clone = document.createElement("article");

            clone.className = oldData.className + " carousel_clone";
            clone.innerHTML = oldData.html;

            clone.style.left = oldRect.left + "px";
            clone.style.top = oldRect.top + "px";
            clone.style.width = oldRect.width + "px";
            clone.style.height = oldRect.height + "px";

            document.body.appendChild(clone);

            const toX = direction === "next" ? "-120%" : "120%";

            clone.animate([
                {
                    transform:"translateX(0) scale(1)",
                    opacity:1
                },
                {
                    transform:`translateX(${toX}) scale(.35)`,
                    opacity:0
                }
            ],{
                duration:duration,
                easing:easing
            });

            setTimeout(function(){
                clone.remove();
            }, duration);
        }
    });
}


document.getElementById("nextChampion").addEventListener("click", function(){
    championIndex = (championIndex + 1) % champions.length;
    renderChampions("next");
});

document.getElementById("prevChampion").addEventListener("click", function(){
    championIndex = (championIndex - 1 + champions.length) % champions.length;
    renderChampions("prev");
});

let resizeTimer;

window.addEventListener("resize", function(){
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function(){
        renderChampions("init");
    }, 180);
});


/* TILT */

function bindChampionTilt(){
    document.querySelectorAll(".champion_card").forEach(function(card){
        card.onmousemove = function(e){
            if(card.classList.contains("card_flipped")) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = ((y - cy) / cy) * -7;
            const ry = ((x - cx) / cx) * 7;

            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            card.style.setProperty("--mx", (x / rect.width * 100) + "%");
            card.style.setProperty("--my", (y / rect.height * 100) + "%");
        };

        card.onmouseleave = function(){
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            card.style.setProperty("--mx","50%");
            card.style.setProperty("--my","100%");
        };
    });
}


/* CHAMPION CARD FLIP */

function bindChampionCardFlip(){
    document.querySelectorAll(".champion_card").forEach(function(card){
        card.onclick = function(e){
            if(e.target.closest(".champ_region")) return;

            e.stopPropagation();

            const champ = champions.find(function(c){
                return c.id === card.dataset.id;
            });

            if(!champ) return;

            const back = card.querySelector(".card_back");
            if(!back) return;

            let cards = champ.lorCards || [];

            if(cards.length === 0){
                back.innerHTML = `
                    <div class="lor_card_empty">
                        Chưa tìm thấy thẻ bài Runeterra của ${champ.name}
                    </div>
                `;

                card.classList.toggle("card_flipped");
                return;
            }

            let currentIndex = Number(card.dataset.cardIndex || 0);

            if(!card.classList.contains("card_flipped")){
                currentIndex = 0;
                card.classList.add("card_flipped");
            }

            const currentCard = cards[currentIndex];
            const imgSrc = getLoRCardImage(currentCard);

            back.innerHTML = `
                <img
                    class="lor_card_img"
                    src="${imgSrc}"
                    alt="${currentCard.name}"
                >
            `;

            currentIndex++;

            if(currentIndex >= cards.length){
                card.dataset.cardIndex = "0";

                setTimeout(function(){
                    if(card.classList.contains("card_flipped")){
                        card.classList.remove("card_flipped");
                    }
                }, 900);
            }else{
                card.dataset.cardIndex = String(currentIndex);
            }
        };
    });
}


/* MODAL */

const championModal = document.getElementById("championModal");
const championModalClose = document.getElementById("championModalClose");
const modalChampionImg = document.getElementById("modalChampionImg");
const modalChampionName = document.getElementById("modalChampionName");
const modalChampionRole = document.getElementById("modalChampionRole");
const modalChampionBio = document.getElementById("modalChampionBio");
const modalChampionStats = document.getElementById("modalChampionStats");

function bindChampionModal(){
    document.querySelectorAll(".champion_card").forEach(function(card){
        card.onclick = function(e){
            if(e.target.classList.contains("champ_region")) return;
        };
    });
}

championModalClose.addEventListener("click", closeChampionModal);

championModal.addEventListener("click", function(e){
    if(e.target === championModal){
        closeChampionModal();
    }
});

function closeChampionModal(){
    championModal.classList.remove("active");
    document.body.style.overflow = "";
}


/* CHAMPION REGION BUTTON */

function bindChampionRegionButtons(){
    document.querySelectorAll(".champ_region").forEach(function(btn){
        btn.onclick = function(e){
            e.stopPropagation();

            const region = btn.dataset.region;
            const target = document.querySelector("." + region);

            if(target){
                document.getElementById("regions").scrollIntoView({
                    behavior:"smooth"
                });

                setTimeout(function(){
                    target.classList.add("region_focus");

                    setTimeout(function(){
                        target.classList.remove("region_focus");
                    }, 1400);
                }, 700);
            }
        };
    });
}


/* RENDER REGIONS */

function renderRegions(){
    const grid = document.getElementById("regionsGrid");

    grid.innerHTML = regions.map(function(region, index){
        const regionMedia =
            region.type === "video"
            ? `
                <video class="region_bg_video" autoplay muted loop playsinline style=" object-position:${region.pos || "center center"}; --video-scale:${region.size || "100%"};">
                    <source src="${region.bg}" type="${region.videoType || "video/mp4"}">
                </video>
            `
            : `
                <div class="region_bg" style="
                    background-image:url('${region.bg}');
                    background-position:${region.pos || "center center"};  
                    background-size:${region.size || "cover"};
                "></div>
            `;

        return `
            <article class="region_card reveal_up ${region.slug}" style="--delay:${index * 0.04}s">
                ${regionMedia}
                <div class="region_gradient"></div>

                <img src="${region.icon}" class="region_icon" alt="${region.name} icon">

                <div class="region_content">
                    <span class="region_num">${String(index + 1).padStart(2,"0")}</span>
                    <h3 class="region_name">${region.name}</h3>
                    <p class="region_desc">${region.desc}</p>

                    <div class="region_tags">
                        ${region.tags.map(function(tag){
                            return `<button data-info="${region.info[tag] || region.desc}">${tag}</button>`;
                        }).join("")}
                    </div>

                    <div class="region_detail"></div>
                </div>
            </article>
        `;
    }).join("");

    bindRegionDetails();
    bindCursorHover();
}


function bindRegionDetails(){
    document.querySelectorAll(".region_tags button").forEach(function(btn){
        btn.onclick = function(){
            const card = btn.closest(".region_card");
            const detail = card.querySelector(".region_detail");
            const isActive = btn.classList.contains("active");

            card.querySelectorAll(".region_tags button").forEach(function(otherBtn){
                otherBtn.classList.remove("active");
            });

            if(isActive){
                btn.classList.remove("active");
                detail.classList.remove("show");
                detail.textContent = "";
            }else{
                btn.classList.add("active");
                detail.textContent = btn.dataset.info;
                detail.classList.add("show");
            }
        };
    });
}

renderRegions();


/* REVEAL */

function setupReveal(){
    const revealEls = document.querySelectorAll(".reveal_up");

    const revealObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    },{
        threshold:0.12
    });

    revealEls.forEach(function(el){
        revealObserver.observe(el);
    });
}

setupReveal();


/* STATS COUNTER */

function setupCounter(){
    const statNums = document.querySelectorAll(".stat_num[data-target]");

    const counterObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting && !entry.target.dataset.counted){
                entry.target.dataset.counted = "1";

                const target = parseInt(entry.target.dataset.target);
                const duration = 2000;
                const start = performance.now();

                function tick(now){
                    const progress = Math.min((now - start) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);

                    entry.target.textContent = Math.round(target * ease);

                    if(progress < 1){
                        requestAnimationFrame(tick);
                    }else{
                        entry.target.textContent = target;
                    }
                }

                requestAnimationFrame(tick);
            }
        });
    },{
        threshold:0.6
    });

    statNums.forEach(function(el){
        counterObserver.observe(el);
    });
}

setupCounter();


/* GALLERY */

function renderGallery(){
    const gallery = document.getElementById("galleryGrid");
    const picks = champions.slice(0, 12);

    gallery.innerHTML = picks.map(function(champ, index){
        const aspects = [1.4, .9, 1.2, 1, 1.3, .85];

        return `
            <div class="gallery_item reveal_up" style="--delay:${index * 0.04}s; --aspect:${aspects[index % aspects.length]}">
                <img src="${champ.img}" alt="${champ.name}" style="object-position:${champ.pos}">
                <div class="gallery_overlay"><span>${champ.name}</span></div>
            </div>
        `;
    }).join("");

    bindGallery();
    bindCursorHover();
    setupReveal();
}


function bindGallery(){
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    document.querySelectorAll(".gallery_item").forEach(function(item){
        item.onclick = function(){
            const img = item.querySelector("img");
            const caption = item.querySelector(".gallery_overlay span");

            lightboxImg.src = img.src;
            lightboxCaption.textContent = caption ? caption.textContent : "";
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
            bindCursorHover();
        };
    });

    lightbox.onclick = function(e){
        if(e.target === lightbox || e.target === lightboxClose){
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }
    };
}


/* PARTICLES */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", function(){
    resize();
    createParticles();
});

function createParticles(){
    particles = [];

    const count = Math.floor(window.innerWidth * window.innerHeight / 14000);

    for(let i = 0; i < count; i++){
        particles.push({
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height,
            size:Math.random() * 1.8 + .3,
            speedX:(Math.random() - .5) * .35,
            speedY:(Math.random() - .5) * .35,
            alpha:Math.random() * .6 + .1,
            hue:Math.random() > .6 ? "232,196,106" : "56,189,248"
        });
    }
}

createParticles();

function drawParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(function(p){
        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x < 0 || p.x > canvas.width){
            p.speedX *= -1;
        }

        if(p.y < 0 || p.y > canvas.height){
            p.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();


/* SOFT CLICK */

document.addEventListener("click", function(e){
    const click = document.createElement("span");

    click.className = "soft_click";
    click.style.left = e.clientX + "px";
    click.style.top = e.clientY + "px";

    document.body.appendChild(click);

    setTimeout(function(){
        click.remove();
    }, 800);
});


/* CUSTOM CHAMPION SHOWCASE LAYOUT
   Chỉnh danh sách này để thêm tướng theo ý bạn.
   Mỗi object có: id, name, region, title, icon, background, position, bio, cards[]
*/
const championShowcaseList = [
    {
        id:"Tristana",
        name:"Tristana",
        region:"Thành Phố Bandle",
        title:"Yordle Tinh Quái",
        role:"Marksman",
        icon:"https://universe.leagueoflegends.com/images/bandle_city_emblem.png",
        background:"https://dd.b.pvp.net/latest/set5/vi_vn/img/cards/05BC133-full.png",
        position:"center center",
        bio:"Hãy tận dụng sức mạnh từ những đồng minh đa khu vực của bạn và tiếp thêm sức mạnh cho họ trong chuyến phiêu lưu khắp chốn Runeterra.",
        cards:[
            "https://dd.b.pvp.net/latest/set5/vi_vn/img/cards/05BC133.png",
            "https://dd.b.pvp.net/latest/set5/vi_vn/img/cards/05BC133T1.png"
        ],
        stats:[["Attack",70],["Magic",30],["Defense",40]]
    },
    {
        id:"Yasuo",
        name:"Yasuo",
        region:"Ionia",
        title:"Kẻ Bất Dung Thứ",
        role:"Fighter · Assassin",
        icon:"https://universe.leagueoflegends.com/images/iona_emblem.png",
        background:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
        position:"80% center",
        bio:"Một kiếm sĩ Ionia đi theo đường gió, mang trong mình lỗi lầm cũ và khát vọng chuộc tội qua từng nhát kiếm.",
        cards:[
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01IO015.png",
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01IO015T1.png"
        ],
        stats:[["Attack",80],["Magic",40],["Defense",40]]
    },
    {
        id:"Ahri",
        name:"Ahri",
        region:"Ionia",
        title:"Hồ Ly Chín Đuôi",
        role:"Mage · Assassin",
        icon:"https://universe.leagueoflegends.com/images/iona_emblem.png",
        background:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        position:"58% center",
        bio:"Ahri là vastaya có khả năng thao túng cảm xúc và ký ức, luôn kiếm tìm bản chất thật của chính mình.",
        cards:[
            "https://dd.b.pvp.net/latest/set6/vi_vn/img/cards/06IO004.png",
            "https://dd.b.pvp.net/latest/set6/vi_vn/img/cards/06IO004T1.png"
        ],
        stats:[["Attack",30],["Magic",90],["Defense",40]]
    },
    {
        id:"Jinx",
        name:"Jinx",
        region:"Zaun",
        title:"Khẩu Pháo Nổi Loạn",
        role:"Marksman",
        icon:"https://universe.leagueoflegends.com/images/zaun_emblem.png",
        background:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        position:"72% center",
        bio:"Jinx sống vì sự hỗn loạn, tiếng nổ và những trò đùa nguy hiểm khiến cả Piltover phải khiếp sợ.",
        cards:[
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01PZ040.png",
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01PZ040T1.png"
        ],
        stats:[["Attack",90],["Magic",40],["Defense",30]]
    },
    {
        id:"MasterYi",
        name:"Master Yi",
        region:"Ionia",
        title:"Kiếm Sư Wuju",
        role:"Assassin · Fighter",
        icon:"https://universe.leagueoflegends.com/images/iona_emblem.png",
        background:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
        position:"55% center",
        bio:"Bậc thầy Wuju tìm kiếm sự cân bằng giữa tốc độ, kỷ luật và trách nhiệm gìn giữ một môn phái đã gần như biến mất.",
        cards:[
            "https://dd.b.pvp.net/latest/set6/vi_vn/img/cards/06IO008.png",
            "https://dd.b.pvp.net/latest/set6/vi_vn/img/cards/06IO008T1.png"
        ],
        stats:[["Attack",90],["Magic",20],["Defense",35]]
    },
    {
        id:"Lux",
        name:"Lux",
        region:"Demacia",
        title:"Tiểu Thư Ánh Sáng",
        role:"Mage",
        icon:"https://universe.leagueoflegends.com/images/demacia_emblem.png",
        background:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
        position:"48% center",
        bio:"Lux sinh ra trong gia tộc danh giá của Demacia nhưng lại nắm giữ thứ ma thuật mà quê hương cô luôn sợ hãi.",
        cards:[
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01DE042.png",
            "https://dd.b.pvp.net/latest/set1/vi_vn/img/cards/01DE042T1.png"
        ],
        stats:[["Attack",20],["Magic",90],["Defense",35]]
    }
];

const championRibbonGlow = "https://playruneterra.com/assets/ccc9b55ec5fec88d1a616e7dec4795282a3aba52/static/image/general/champion-card-ribbon-glow.png";
const championFrameGlow = "https://playruneterra.com/assets/ccc9b55ec5fec88d1a616e7dec4795282a3aba52/static/image/general/champion-card-frame-glow.png";
let championCardMode = false;
let championLoRIndex = 0;
let championFlipPulse = false;

function getCurrentChampion(){
    return champions[(championIndex + champions.length) % champions.length];
}

function renderChampions(direction = "init"){
    if(!champions.length) return;

    const champ = getCurrentChampion();
    const cardList = champ.cards || champ.lorCards || [];
    const safeCardIndex = cardList.length ? championLoRIndex % cardList.length : 0;
    const activeCard = cardList[safeCardIndex] || "";
    const cardModeClass = championCardMode ? "is_card_mode" : "";
    const pulseClass = championFlipPulse ? "is_flipping" : "";

    championsGrid.innerHTML = `
        <article class="champion_showcase ${cardModeClass} ${pulseClass}" data-id="${champ.id}">
            <div class="showcase_stage" style="--bg:url('${champ.background || champ.img}'); --bg-pos:${champ.position || champ.pos || "center center"};">
                <div class="showcase_main_bg" style="background-image:url('${champ.background || champ.img}'); background-position:${champ.position || champ.pos || "center center"};"></div>
                <div class="showcase_frame_line"></div>

                <div class="showcase_card_focus">
                    ${activeCard ? `
                        <div class="showcase_lor_card" data-action="cycle-card">
                            <img class="showcase_card_img" src="${activeCard}" alt="${champ.name} card">
                            <img class="showcase_frame_glow" src="${championFrameGlow}" alt="">
                            <img class="showcase_ribbon_glow" src="${championRibbonGlow}" alt="">
                        </div>
                    ` : `
                        <div class="showcase_lor_card empty_card" data-action="cycle-card">
                            <span>Chưa có thẻ bài</span>
                        </div>
                    `}
                </div>

                <div class="showcase_info_panel">
                    <div class="showcase_icon_wrap">
                        <img src="${champ.icon}" alt="${champ.region}">
                    </div>
                    <div class="showcase_meta">
                        <span>${champ.region}</span>
                        <b>·</b>
                        <h3>${champ.name}</h3>
                        <b>·</b>
                        <span>${champ.title || champ.role}</span>
                    </div>
                    <p>${champ.bio}</p>
                </div>
            </div>

            <div class="showcase_dots">
                ${champions.map(function(_, index){
                    return `<button class="showcase_dot ${index === championIndex ? "active" : ""}" data-index="${index}"></button>`;
                }).join("")}
            </div>
        </article>
    `;

    const showcase = championsGrid.querySelector(".champion_showcase");
    const lorCard = championsGrid.querySelector(".showcase_lor_card");

    if(showcase){
        showcase.animate([
            {opacity:.65, transform: direction === "next" ? "translateX(30px)" : direction === "prev" ? "translateX(-30px)" : "translateY(20px)"},
            {opacity:1, transform:"translateX(0) translateY(0)"}
        ],{duration:520, easing:"cubic-bezier(.22,.8,.22,1)"});
    }

    if(lorCard){
        lorCard.onclick = function(e){
            e.stopPropagation();
            cycleChampionCard();
        };

        lorCard.onmousemove = function(e){
            const rect = lorCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rx = ((y - rect.height / 2) / (rect.height / 2)) * -7;
            const ry = ((x - rect.width / 2) / (rect.width / 2)) * 7;
            lorCard.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
        };

        lorCard.onmouseleave = function(){
            lorCard.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
        };
    }

    document.querySelectorAll(".showcase_dot").forEach(function(dot){
        dot.onclick = function(){
            championIndex = Number(dot.dataset.index);
            championLoRIndex = 0;
            renderChampions("init");
        };
    });

    bindCursorHover();
    setupReveal();
}

function cycleChampionCard(){
    const champ = getCurrentChampion();
    const cardList = champ.cards || champ.lorCards || [];

    if(!cardList.length) return;

    if(!championCardMode){
        championCardMode = true;
        championLoRIndex = 0;
    }else{
        championLoRIndex++;
        if(championLoRIndex >= cardList.length){
            championCardMode = false;
            championLoRIndex = 0;
        }
    }

    championFlipPulse = true;
    renderChampions("flip");

    setTimeout(function(){
        championFlipPulse = false;
        const el = document.querySelector(".champion_showcase");
        if(el) el.classList.remove("is_flipping");
    }, 760);
}

function bindChampionTilt(){
    const showcase = document.querySelector(".champion_showcase");
    if(!showcase) return;

    const stage = showcase.querySelector(".showcase_stage");
    if(!stage) return;

    stage.onmousemove = function(e){
        if(e.target.closest(".showcase_lor_card")) return;
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y - rect.height / 2) / (rect.height / 2)) * -2.5;
        const ry = ((x - rect.width / 2) / (rect.width / 2)) * 2.5;
        stage.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    stage.onmouseleave = function(){
        stage.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
    };
}

function loadChampions(){
    champions = championShowcaseList.map(function(champ){
        return {
            id: champ.id,
            name: champ.name,
            region: champ.region,
            title: champ.title,
            role: champ.role || "Champion",
            icon: champ.icon,
            background: champ.background,
            img: champ.background,
            position: champ.position || "center center",
            pos: champ.position || "center center",
            bio: champ.bio,
            cards: champ.cards || [],
            lorCards: (champ.cards || []).map(function(url, index){
                return {name: champ.name + " Card " + (index + 1), img:url};
            }),
            stats: champ.stats || [["Attack",50],["Magic",50],["Defense",50]]
        };
    });

    championIndex = 0;
    championCardMode = false;
    championLoRIndex = 0;

    document.getElementById("championCount").textContent = champions.length;
    document.getElementById("regionCount").textContent = regions.length;

    renderChampions("init");
    renderGallery();
}


/* START */

loadChampions();