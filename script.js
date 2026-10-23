
/* =====================================
   SAHNE AYARLARI
   YENİ SAHNELERİ BURAYA EKLE
   ===================================== */

const scenes = [
    {
        image: "images/1.png",
        title: "Sana bir şey anlatacağım...",
        message: "Zamanını ayırır mısın? Biraz konuşalım."
    },

    {
        image: "images/3.png",
        title: "Çok güzelsin...",
        message: "Seninle gurur duyuyorum."
    },

    {
        image: "images/4.png",
        title: "Biliyorum...",
        message: "O kadar savaş verdin, o kadar yıprattılar ki seni."
    },

    {
        image: "images/1.png",
        title: "AMA SEN...",
        message: "Sen bunca şeye rağmen dimdik ayakta durdun."
    },

    {
        image: "images/2.png",
        title: "TIRNAKLARINLA KAZIDIN.",
        message: "Tırnaklarınla kazıyarak başardın her şeyi. (Protez tırnaklarımız olayyyy!)"
    },

    {
        image: "images/1.png",
        title: "Her yönünle...",
        message: "Sen var ya, çok güzelsin. Her yönünle."
    },

    {
        image: "images/2.png",
        title: "Sadece dış görünüşün mü?",
        message: "Sana sürekli çok güzelsin diyorum. Ama bunu sadece fiziksel açıdan mı söylediğimi sanıyorsun?"
    },

    {
        image: "images/1.png",
        title: "Hayır, asla.",
        message: "Her anlamda çok güzelsin. Kişiliğinle, karakterinle, varlığınla..."
    },

    {
        image: "images/4.png",
        title: "Canın yanınca...",
        message: "Senin canını yakıyorlar ya, Shou gibi deliriyorum."
    },

    {
        image: "images/4.png",
        title: "Keşke engelleyebilsem.",
        message: "Sana zarar veren, canını yakan herkese öfkeleniyorum."
    },

    {
        image: "images/4.png",
        title: "Keşke elimden gelse...",
        message: "Canının yanmasına engel olmak istiyorum ama bazen elimden hiçbir şey gelmiyor."
    },

    {
        image: "images/1.png",
        title: "Ama şunu bil...",
        message: "Bunları engelleyemesem de bilmeni istiyorum ki her zaman yanında olacağım."
    },

    {
        image: "images/1.png",
        title: "Birlikte aşarız.",
        message: "Bir şey olduğunda koş, anlat bana. Dinlerim. Beraber çözümünü ararız. Beraber savaşırız her şeyle."
    },

    {
        image: "images/1.png",
        title: "Hep gül, olur mu?",
        message: "Her şeye inat gül. Çünkü sana gülmek çok yakışıyor."
    },

    {
        image: "images/baykus.png",
        title: "Gecenin karanlığında...",
        message: "Gece ne kadar karanlık olursa olsun, baykuş yolunu bulurmuş."
    },

    {
        image: "images/baykus.png",
        title: "Sonra sen geldin.",
        message: "Ben de zifiri karanlık dünyamda kaybolmuştum. Sonra geldin, dünyama bir ışık tuttun. Bana yol gösterdin."
    },

    {
        image: "images/kaktus.png",
        title: "Dikenlerin ardında...",
        message: "Biliyor musun, kaktüsün dikenleri susuz kaldığı için değil, susuzluğa dayanmak zorunda kaldığı için vardır."
    },

    {
        image: "images/kaktus.png",
        title: "Seni anlıyorum.",
        message: "Sen de öylesin. Senin de duvarların var. Ve bu duvarların sebebi, sana sürekli zarar verilmesi. Hayatı boyunca incinmemiş birinin duvarları olmaz."
    },

    {
        image: "images/2.png",
        title: "Ben kimim ki?",
        message: "Benim bu dünyada çok fazla yeteneğim ya da vasfım yok. Çok yakışıklı bir erkek değilim. Çok yetenekli de değilim."
    },

    {
        image: "images/2.png",
        title: "Ama bir hayalim var.",
        message: "Ben yalnızca iyi bir mühendis olmaya çalışan; dürüst, dostlarına ve sevdiklerine bu dünyada cenneti yaşatmaya çalışan aciz bir kulum."
    },

    {
        image: "images/2.png",
        title: "Küçücük bir mesajın bile...",
        message: "Ama biliyorum, az da olsa bana değer veriyorsun. Sabah senin günaydın mesajınla uyanınca beni o gün hiçbir şey üzemez. İyi geceler mesajınla uyuyunca da hiç kâbus görmüyorum."
    },

    {
        image: "images/1.png",
        title: "Tek dileğim...",
        message: "Tek arzum, senin de çok mutlu olman. Hep gül. Tek amacım sana iyi gelebilmek."
    },

    {
        image: "images/1.png",
        title: "Sen zaten harikasın.",
        message: "Zaten tek başına tüm bunları başarabiliyorsun. Harika bir insansın. Hiçbir şey için başkasına ihtiyacın yok."
    },

    {
        image: "images/1.png",
        title: "İYİ Kİ VARSIN",
        message: "Sözün özü: İYİ Kİ VARSIN, KAJU."
    },

    {
        image: "images/1.png",
        title: "İYİ Kİ VARSIN",
        message: "Bu rezalet çağda var olup parladığın için İYİ Kİ VARSIN."
    },

    {
        image: "images/1.png",
        title: "GÜL, BAKİM.",
        message: "Yüzünden o güzel gülüşünü hiç kimsenin silmesine izin verme."
    },

    {
        image: "images/1.png",
        title: "Bir şey daha...",
        message: "Sana çok değer veriyorum. Benim en değerlimsin."
    },

    {
        image: "images/1.png",
        title: "NOKTA",
        message: "NOKTALARIN ÖNEMİNİ UNUTMADIM. NOKTA."
    }
];


/* =====================================
   BUTON AYARLARI
   ===================================== */

const BUTTON_TEXT = "Devam et →";
const FINAL_BUTTON_TEXT = "Baştan oku ↻";

// İlk tıklamada butonun kaçıp kaçmayacağını belirler.
const ESCAPE_ONCE = true;


/* =====================================
   SİTE MANTIĞI
   ===================================== */

const imageElement = document.getElementById("character-image");
const titleElement = document.getElementById("story-title");
const messageElement = document.getElementById("story-message");
const buttonElement = document.getElementById("continue-button");

let currentScene = 0;
let escapedOnce = false;


/* Bir sahneyi ekranda gösterir. */

function showScene(index) {
    const scene = scenes[index];

    imageElement.src = scene.image;
    imageElement.alt = scene.title;

    titleElement.textContent = scene.title;
    messageElement.textContent = scene.message;

    buttonElement.textContent =
        index === scenes.length - 1
            ? FINAL_BUTTON_TEXT
            : BUTTON_TEXT;
}


/* Butonun bir kere yer değiştirmesi. */

function escapeButtonOnce() {
    if (!ESCAPE_ONCE || escapedOnce) {
        return false;
    }

    escapedOnce = true;

    const buttonRect = buttonElement.getBoundingClientRect();

    const maxX = Math.max(
        0,
        window.innerWidth - buttonRect.width - 20
    );

    const maxY = Math.max(
        0,
        window.innerHeight - buttonRect.height - 20
    );

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    buttonElement.style.position = "fixed";
    buttonElement.style.left = `${newX}px`;
    buttonElement.style.top = `${newY}px`;
    buttonElement.style.margin = "0";

    return true;
}


/* Butona basıldığında çalışır. */

buttonElement.addEventListener("click", () => {

    // İlk tıklamada yalnızca buton kaçar.
    if (escapeButtonOnce()) {
        return;
    }

    // Son sahnedeysek hikâyeyi başa sar.
    if (currentScene >= scenes.length - 1) {
        currentScene = 0;
        escapedOnce = false;

        buttonElement.style.position = "";
        buttonElement.style.left = "";
        buttonElement.style.top = "";
        buttonElement.style.margin = "";

        showScene(currentScene);
        return;
    }

    // Bir sonraki sahneye geç.
    currentScene++;
    showScene(currentScene);
});


/* İlk sahneyi aç. */

showScene(currentScene);
