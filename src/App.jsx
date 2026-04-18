import { useState } from "react";

const lessons = [
  {
    id: 1,
    emoji: "🔤",
    title: "Kores Alifbosi",
    subtitle: "Hangul (한글)",
    color: "#6366f1",
    light: "#eef2ff",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Barcha kores undosh va unli harflarni o'rganish",
          "Bo'g'in tuzilishini tushunish (받침 — batchim)",
          "Oddiy so'zlarni o'qish va yozishni mashq qilish",
        ],
      },
      {
        type: "text",
        title: "1. Hangul tarixi",
        content:
          "Hangul — Koreya yozuvi bo'lib, 1443-yilda qirol Sejong (세종대왕) tomonidan yaratilgan. Bu dunyodagi eng ilmiy va o'rganish oson alifbolardan biri. Hangulda har bir harf alohida emas, balki bo'g'in (syllable) shaklida yoziladi.",
      },
      {
        type: "table",
        title: "2. Undosh harflar (자음 — Jaeum)",
        headers: ["Harf", "Talaffuz", "Misol", "Ma'nosi"],
        rows: [
          ["ㄱ", "G/K", "가구 (gagu)", "mebel"],
          ["ㄴ", "N", "나무 (namu)", "daraxt"],
          ["ㄷ", "D/T", "다리 (dari)", "ko'prik"],
          ["ㄹ", "R/L", "라면 (ramyon)", "lapsha"],
          ["ㅁ", "M", "마음 (maeum)", "yurak"],
          ["ㅂ", "B/P", "바다 (bada)", "dengiz"],
          ["ㅅ", "S", "사람 (saram)", "odam"],
          ["ㅇ", "Tovushsiz/NG", "아이 (ai)", "bola"],
          ["ㅈ", "J", "자다 (jada)", "uxlamoq"],
          ["ㅊ", "Ch", "차 (cha)", "choy/mashina"],
          ["ㅋ", "K (kuchli)", "카페 (kape)", "kafe"],
          ["ㅌ", "T (kuchli)", "타다 (tada)", "minmoq"],
          ["ㅍ", "P (kuchli)", "파다 (pada)", "qazmoq"],
          ["ㅎ", "H", "하다 (hada)", "qilmoq"],
        ],
      },
      {
        type: "table",
        title: "🔴 Qo'shaloq undoshlar (쌍자음)",
        headers: ["Harf", "Talaffuz", "Misol", "Ma'nosi"],
        rows: [
          ["ㄲ", "KK (qattiq)", "까다 (kkada)", "qiyin/artmoq"],
          ["ㄸ", "TT (qattiq)", "따다 (ttada)", "uzib olmoq"],
          ["ㅃ", "PP (qattiq)", "빠르다 (ppareuda)", "tez"],
          ["ㅆ", "SS (qattiq)", "싸다 (ssada)", "arzon"],
          ["ㅉ", "JJ (qattiq)", "짜다 (jjada)", "sho'r"],
        ],
      },
      {
        type: "table",
        title: "3. Unli harflar (모음 — Moeum)",
        headers: ["Harf", "Talaffuz", "Izoh"],
        rows: [
          ["ㅏ", "A", "O'zbekcha 'a' kabi"],
          ["ㅓ", "Eo", "O'zbekcha 'o' ga yaqin"],
          ["ㅗ", "O", "Lab yumalanib aytiladi"],
          ["ㅜ", "U", "Lab oldinga cho'ziladi"],
          ["ㅡ", "Eu", "Labsiz 'u' — o'zbekchada yo'q"],
          ["ㅣ", "I", "O'zbekcha 'i' kabi"],
          ["ㅐ", "Ae", "E ga juda yaqin"],
          ["ㅔ", "E", "O'zbekcha 'e' kabi"],
          ["ㅑ", "Ya", "ya+a"],
          ["ㅕ", "Yeo", "y+eo"],
          ["ㅛ", "Yo", "y+o"],
          ["ㅠ", "Yu", "y+u"],
        ],
      },
      {
        type: "box",
        color: "#fef9c3",
        border: "#eab308",
        title: "💡 받침 (Batchim) nima?",
        content:
          "Batchim — bo'g'inning eng pastidagi undosh harf. Masalan: 밥 (bap)da ㅂ batchim. Batchim talaffuzga kuchli ta'sir qiladi: 밥이에요 (babieyo) — ㅂ keyingi bo'g'inga o'tib ketadi!",
      },
      {
        type: "table",
        title: "4. Ko'p ishlatiladigan so'zlar",
        headers: ["Kores", "Talaffuz", "Ma'nosi"],
        rows: [
          ["물", "mul", "suv"],
          ["밥", "bap", "guruch / ovqat"],
          ["사람", "saram", "odam, kishi"],
          ["한국", "hanguk", "Koreya"],
          ["학교", "hakkyo", "maktab"],
          ["사랑", "sarang", "sevgi"],
          ["친구", "chingu", "do'st"],
          ["선생님", "seonsaengnim", "o'qituvchi"],
          ["가족", "gajok", "oila"],
          ["나라", "nara", "mamlakat"],
        ],
      },
      {
        type: "practice",
        title: "📝 Mashqlar",
        items: [
          "Harflarni o'qing: 가나다라마바사아자차카타파하",
          "Unlilarni o'qing: 아야어여오요우유으이",
          "사랑 = sa+rang = sevgi",
          "한국 = han+guk = Koreya",
          "물 = mul = suv",
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "Barcha 14 undoshni bilaman",
          "5 qo'shaloq undoshni bilaman",
          "Barcha unlilarni bilaman",
          "Bo'g'in tuzilishini tushundim",
          "10 ta so'zni o'qiy olaman",
        ],
      },
    ],
  },
  {
    id: 2,
    emoji: "👋",
    title: "Salomlashish",
    subtitle: "인사하기",
    color: "#ec4899",
    light: "#fdf2f8",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Rasmiy va norasmiy salomlashishni o'rganish",
          "O'zini tanishtira olish",
          "Kasb, millat va yosh haqida gapirishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Salomlashish iboralari (인사말)",
        headers: ["Kores", "Talaffuz", "Ma'nosi"],
        rows: [
          ["안녕하세요", "annyeonghaseyo", "Salom (rasmiy)"],
          ["안녕히 가세요", "annyeonghi gaseyo", "Xayr (ketayotganga)"],
          ["안녕히 계세요", "annyeonghi gyeseyo", "Xayr (qolayotganga)"],
          ["안녕", "annyeong", "Salom/Xayr (norasmiy)"],
          ["처음 뵙겠습니다", "cheoeum boepgesseumnida", "Birinchi marta uchrashuv"],
          ["반갑습니다", "bangapseumnida", "Tanishganimdan xursandman"],
          ["잘 지냈어요?", "jal jinaesseoyo?", "Qandaysiz? (rasmiy)"],
          ["감사합니다", "gamsahamnida", "Rahmat (rasmiy)"],
          ["고맙습니다", "gomapseumnida", "Rahmat (oddiy)"],
          ["천만에요", "cheonmane yo", "Iltimos"],
        ],
      },
      {
        type: "dialog",
        title: "2. Tanishish dialogi",
        lines: [
          { speaker: "A", text: "안녕하세요! 처음 뵙겠습니다.", translation: "Salom! Birinchi marta ko'rishyapmiz." },
          { speaker: "B", text: "안녕하세요! 저는 김민준입니다.", translation: "Salom! Men Kim Minjunman." },
          { speaker: "A", text: "반갑습니다. 저는 아흐마드예요.", translation: "Tanishganimdan xursandman. Men Akhmadman." },
          { speaker: "B", text: "어느 나라 사람이에요?", translation: "Qaysi mamlakatdansiz?" },
          { speaker: "A", text: "저는 우즈베키스탄 사람이에요.", translation: "Men O'zbekistonlikman." },
        ],
      },
      {
        type: "table",
        title: "3. Mamlakat va millat nomlari",
        headers: ["Mamlakat", "Kores", "Talaffuz"],
        rows: [
          ["O'zbekiston", "우즈베키스탄", "Ujeubekiseuran"],
          ["Koreya", "한국", "Hanguk"],
          ["Amerika", "미국", "Miguk"],
          ["Rossiya", "러시아", "Reosia"],
          ["Xitoy", "중국", "Jungguk"],
          ["Yaponiya", "일본", "Ilbon"],
        ],
      },
      {
        type: "table",
        title: "4. Kasb nomlari",
        headers: ["Kasb", "Kores", "Talaffuz"],
        rows: [
          ["Talaba", "학생", "haksaeng"],
          ["O'qituvchi", "선생님", "seonsaengnim"],
          ["Shifokor", "의사", "uisa"],
          ["Muhandis", "엔지니어", "enjinieo"],
          ["Oshpaz", "요리사", "yorisa"],
          ["Biznesmen", "사업가", "sa'eobga"],
        ],
      },
      {
        type: "box",
        color: "#eff6ff",
        border: "#3b82f6",
        title: "📖 Grammatika: 이에요 / 예요",
        content: "Undosh + 이에요: 학생이에요 (Talabaман)\nUnli + 예요: 의사예요 (Shifokorman)\n저는 + [ism] + 이에요/예요: 저는 아흐마드예요 (Men Akhmadman)",
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "10 ta salomlashish iborasini bilaman",
          "O'zimni kores tilida tanishtira olaman",
          "Kasb va millat so'zlarini bilaman",
          "이에요/예요 grammatikasini tushundim",
        ],
      },
    ],
  },
  {
    id: 3,
    emoji: "🔢",
    title: "Sonlar va Sanash",
    subtitle: "숫자와 세기",
    color: "#10b981",
    light: "#ecfdf5",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Sino-kores va tub kores sonlarini o'rganish",
          "Ulardan qachon foydalanishni tushunish",
          "Narx, telefon raqam, yosh, sana aytishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Sino-kores sonlari (한자어 숫자)",
        headers: ["Son", "Kores", "Talaffuz"],
        rows: [
          ["0", "영/공", "yeong/gong"],
          ["1", "일", "il"],
          ["2", "이", "i"],
          ["3", "삼", "sam"],
          ["4", "사", "sa"],
          ["5", "오", "o"],
          ["6", "육", "yuk"],
          ["7", "칠", "chil"],
          ["8", "팔", "pal"],
          ["9", "구", "gu"],
          ["10", "십", "sip"],
          ["100", "백", "baek"],
          ["1,000", "천", "cheon"],
          ["10,000", "만", "man"],
        ],
      },
      {
        type: "table",
        title: "2. Tub kores sonlari (고유어 숫자)",
        headers: ["Son", "Kores", "Talaffuz"],
        rows: [
          ["1", "하나", "hana"],
          ["2", "둘", "dul"],
          ["3", "셋", "set"],
          ["4", "넷", "net"],
          ["5", "다섯", "daseot"],
          ["6", "여섯", "yeoseot"],
          ["7", "일곱", "ilgop"],
          ["8", "여덟", "yeodeol"],
          ["9", "아홉", "ahop"],
          ["10", "열", "yeol"],
          ["20", "스물", "seumul"],
          ["30", "서른", "seoreun"],
          ["40", "마흔", "maheun"],
          ["50", "쉰", "swin"],
        ],
      },
      {
        type: "box",
        color: "#fff7ed",
        border: "#f97316",
        title: "⚠️ Muhim qoida!",
        content: "Tub kores sonlari + sanash so'z qo'shilganda 1-4 o'zgaradi:\nhana → han, dul → du, set → se, net → ne\nMasalan: 한 개 (1 ta dona), 두 명 (2 kishi), 세 시 (3 soat)",
      },
      {
        type: "table",
        title: "3. Sanash so'zlari (단위명사)",
        headers: ["So'z", "Talaffuz", "Nima uchun", "Misol"],
        rows: [
          ["개", "gae", "Narsalar (dona)", "사과 두 개 — 2 ta olma"],
          ["명", "myeong", "Odamlar", "학생 세 명 — 3 nafar"],
          ["마리", "mari", "Hayvonlar", "고양이 한 마리 — 1 mushuk"],
          ["권", "gwon", "Kitoblar", "책 다섯 권 — 5 kitob"],
          ["잔", "jan", "Ichimliklar", "커피 두 잔 — 2 stakan"],
          ["병", "byeong", "Butilkalar", "물 한 병 — 1 butilka"],
          ["살", "sal", "Yosh", "스물 살 — 20 yosh"],
          ["층", "cheung", "Qavat", "삼 층 — 3-qavat"],
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "1-100 gacha sino-kores sonlarni bilaman",
          "1-99 gacha tub kores sonlarni bilaman",
          "8 ta sanash so'zini bilaman",
          "Narx aytishni bilaman",
        ],
      },
    ],
  },
  {
    id: 4,
    emoji: "⏰",
    title: "Vaqt va Kunlar",
    subtitle: "시간과 일과",
    color: "#f59e0b",
    light: "#fffbeb",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Soat aytish va so'rashni o'rganish",
          "Kun, oy, yil nomlarini o'rganish",
          "Kundalik tartibotni kores tilida ifodalash",
        ],
      },
      {
        type: "table",
        title: "1. Soat aytish",
        headers: ["Vaqt", "Kores", "Talaffuz"],
        rows: [
          ["Soat 1:00", "한 시", "han si"],
          ["Soat 2:30", "두 시 삼십 분", "du si samsip bun"],
          ["Soat 3:15", "세 시 십오 분", "se si sipo bun"],
          ["Soat 6:45", "여섯 시 사십오 분", "yeoseot si sasipo bun"],
          ["Soat 12:00", "열두 시", "yeoldu si"],
          ["Tong (AM)", "오전", "ojeon"],
          ["Kechqurun (PM)", "오후", "ohu"],
        ],
      },
      {
        type: "table",
        title: "2. Hafta kunlari (요일)",
        headers: ["Kun", "Kores", "Talaffuz"],
        rows: [
          ["Dushanba", "월요일", "woryoil"],
          ["Seshanba", "화요일", "hwayoil"],
          ["Chorshanba", "수요일", "suyoil"],
          ["Payshanba", "목요일", "mogyoil"],
          ["Juma", "금요일", "geumyoil"],
          ["Shanba", "토요일", "toyoil"],
          ["Yakshanba", "일요일", "iryoil"],
        ],
      },
      {
        type: "table",
        title: "3. Oy nomlari (월)",
        headers: ["Oy", "Kores", "Talaffuz"],
        rows: [
          ["Yanvar", "1월", "irwol"],
          ["Fevral", "2월", "iwol"],
          ["Mart", "3월", "samwol"],
          ["Aprel", "4월", "sawol"],
          ["May", "5월", "owol"],
          ["Iyun", "6월", "yuwol"],
          ["Iyul", "7월", "chirwol"],
          ["Avgust", "8월", "parwol"],
          ["Sentabr", "9월", "guwol"],
          ["Oktabr", "10월", "siwol"],
          ["Noyabr", "11월", "sibirwol"],
          ["Dekabr", "12월", "sibiwol"],
        ],
      },
      {
        type: "table",
        title: "4. Vaqt ifodalari",
        headers: ["Ma'nosi", "Kores", "Talaffuz"],
        rows: [
          ["Bugun", "오늘", "oneul"],
          ["Ertaga", "내일", "naeil"],
          ["Indinga", "모레", "more"],
          ["Kecha", "어제", "eoje"],
          ["Shu hafta", "이번 주", "ibeon ju"],
          ["Keyingi hafta", "다음 주", "daeum ju"],
          ["O'tgan hafta", "지난 주", "jinan ju"],
        ],
      },
      {
        type: "dialog",
        title: "5. Kundalik tartib namunasi",
        lines: [
          { speaker: "6:00", text: "일어나요", translation: "Turaman" },
          { speaker: "7:00", text: "아침을 먹어요", translation: "Nonushta qilaman" },
          { speaker: "8:00", text: "학교에 가요", translation: "Maktabga boraman" },
          { speaker: "12:00", text: "점심을 먹어요", translation: "Tushlik qilaman" },
          { speaker: "22:00", text: "자요", translation: "Uxlayman" },
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "Soat aytishni bilaman",
          "Hafta kunlarini bilaman",
          "Oy nomlarini bilaman",
          "Kundalik tartibotni ifodalay olaman",
        ],
      },
    ],
  },
  {
    id: 5,
    emoji: "👨‍👩‍👧‍👦",
    title: "Oila A'zolari",
    subtitle: "가족",
    color: "#8b5cf6",
    light: "#f5f3ff",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Oila a'zolari nomlarini o'rganish",
          "Oila haqida gaplashishni o'rganish",
          "Rasmiy va norasmiy murojaat shakllarini tushunish",
        ],
      },
      {
        type: "table",
        title: "1. Oila a'zolari nomlari",
        headers: ["A'zo", "O'z oilam", "Boshqa oila (hurmatli)"],
        rows: [
          ["Ota", "아버지", "아버님"],
          ["Ona", "어머니", "어머님"],
          ["Aka (erkak)", "형", "형님"],
          ["Opa (erkak)", "누나", "누님"],
          ["Aka (ayol)", "오빠", "오라버니"],
          ["Opa (ayol)", "언니", "언니"],
          ["Uka/Singil", "동생", "동생"],
          ["Buva", "할아버지", "할아버님"],
          ["Buvi", "할머니", "할머님"],
          ["Er", "남편", "남편분"],
          ["Xotin", "아내", "부인"],
          ["O'g'il", "아들", "아드님"],
          ["Qiz", "딸", "따님"],
        ],
      },
      {
        type: "dialog",
        title: "2. Oila haqida dialog",
        lines: [
          { speaker: "A", text: "가족이 몇 명이에요?", translation: "Oilangizda necha kishi bor?" },
          { speaker: "B", text: "네 명이에요. 아버지, 어머니, 형, 그리고 저예요.", translation: "4 kishi. Otam, onam, akam va men." },
          { speaker: "A", text: "형이 몇 살이에요?", translation: "Akangiz necha yoshda?" },
          { speaker: "B", text: "스물여덟 살이에요.", translation: "Yigirma sakkiz yoshda." },
        ],
      },
      {
        type: "practice",
        title: "3. Oila haqida foydali gaplar",
        items: [
          "저는 외동딸이에요 — Men yolg'iz qizman",
          "저는 막내예요 — Men eng kichik farzandman",
          "저는 장남이에요 — Men katta o'g'ilman",
          "부모님은 서울에 사세요 — Ota-onam Seulda yashaydi",
          "가족이 몇 명이에요? — Oilangizda necha kishi?",
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "Barcha oila a'zolari nomlarini bilaman",
          "Oila haqida qisqacha gapirishni bilaman",
          "Norasmiy va hurmatli shakllar farqini tushundim",
          "Egalik olmoshlarini bilaman",
        ],
      },
    ],
  },
  {
    id: 6,
    emoji: "🍜",
    title: "Oziq-ovqat va Restoran",
    subtitle: "음식과 식당",
    color: "#ef4444",
    light: "#fef2f2",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Asosiy kores taomlarini o'rganish",
          "Restoranda buyurtma berishni o'rganish",
          "Ta'm va afzalliklar haqida gaplashishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Mashhur kores taomları",
        headers: ["Kores", "Talaffuz", "Izoh"],
        rows: [
          ["비빔밥", "bibimbap", "Sabzavot va guruch aralashmasi"],
          ["불고기", "bulgogi", "Marinadlangan mol go'shti"],
          ["삼겹살", "samgyeopsal", "Cho'chqa qovurg'asi"],
          ["김치", "kimchi", "Achchiq fermentlangan sabzavot"],
          ["떡볶이", "tteokbokki", "Achchiq guruch pirog"],
          ["라면", "ramyon", "Tez pishiriladigan lapsha"],
          ["김치찌개", "kimchi jjigae", "Kimchi bilan sho'rva"],
          ["순두부찌개", "sundubu jjigae", "Yumshoq tofu bilan sho'rva"],
          ["볶음밥", "bokkeumbap", "Qovurilgan guruch"],
          ["냉면", "naengmyeon", "Sovuq lapsha — yozgi taom"],
        ],
      },
      {
        type: "dialog",
        title: "2. Restoran dialogi",
        lines: [
          { speaker: "Mijoz", text: "여기요!", translation: "Kechirasiz! (Ofitsiantni chaqirish)" },
          { speaker: "Ofitsiant", text: "네, 주문하시겠어요?", translation: "Ha, buyurtma berasizmi?" },
          { speaker: "Mijoz", text: "비빔밥 하나랑 물 주세요.", translation: "Bir bibimbap va suv bering." },
          { speaker: "Ofitsiant", text: "네, 잠깐만요.", translation: "Ha, bir daqiqa." },
          { speaker: "Mijoz", text: "계산해 주세요.", translation: "Hisob-kitob qiling." },
        ],
      },
      {
        type: "table",
        title: "3. Ta'm sifatlari",
        headers: ["Kores", "Talaffuz", "Ma'nosi"],
        rows: [
          ["맛있어요", "masiseoyo", "mazali"],
          ["맛없어요", "madeopsseoyo", "mazasiz"],
          ["매워요", "maeweoyo", "achimsiq"],
          ["달아요", "darayo", "shirin"],
          ["짜요", "jjayo", "sho'r"],
          ["셔요", "syeoyo", "nordon"],
          ["고소해요", "gosohaeyo", "yog'li-yoqimli"],
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "10 ta kores taomini bilaman",
          "Restoranda buyurtma bera olaman",
          "Ta'm so'zlarini bilaman",
          "Hisob so'rashni bilaman",
        ],
      },
    ],
  },
  {
    id: 7,
    emoji: "🗺️",
    title: "Yo'nalish va Transport",
    subtitle: "길 안내와 교통",
    color: "#0891b2",
    light: "#ecfeff",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Yo'nalish so'rashni va tushuntirishni o'rganish",
          "Transport vositalarini bilish",
          "Metro va avtobusda foydalanishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Yo'nalish so'zlari (방향)",
        headers: ["Yo'nalish", "Kores", "Talaffuz"],
        rows: [
          ["Chapga", "왼쪽", "oenjjok"],
          ["O'ngga", "오른쪽", "oreunjjok"],
          ["To'g'ri", "직진", "jikjin"],
          ["Orqaga", "뒤로", "dwiro"],
          ["Oldinga", "앞으로", "apeuro"],
          ["Ustida", "위에", "wie"],
          ["Pastida", "아래에", "araee"],
          ["Yonida", "옆에", "yeope"],
        ],
      },
      {
        type: "table",
        title: "2. Transport vositalari",
        headers: ["Transport", "Kores", "Talaffuz"],
        rows: [
          ["Metro", "지하철", "jihacheol"],
          ["Avtobus", "버스", "beoseu"],
          ["Taksi", "택시", "taeksi"],
          ["Poyezd", "기차", "gicha"],
          ["Samolyot", "비행기", "bihaenggi"],
          ["Velosiped", "자전거", "jajeongeo"],
          ["Mashina", "자동차", "jadongcha"],
          ["Yayov", "걸어서", "georeoseo"],
        ],
      },
      {
        type: "dialog",
        title: "3. Yo'l so'rash dialogi",
        lines: [
          { speaker: "A", text: "실례합니다. 명동역이 어디예요?", translation: "Kechirasiz. Myeongdong stantsiyasi qayerda?" },
          { speaker: "B", text: "저기 횡단보도에서 오른쪽으로 가세요.", translation: "U yerdagi yo'lda o'ngga boring." },
          { speaker: "B", text: "직진하면 왼쪽에 있어요.", translation: "To'g'ri borsangiz chapda bor." },
          { speaker: "A", text: "걸어서 얼마나 걸려요?", translation: "Yayov qancha vaqt ketadi?" },
          { speaker: "B", text: "5분 정도요.", translation: "Taxminan 5 daqiqa." },
        ],
      },
      {
        type: "table",
        title: "4. Foydali joy nomlari",
        headers: ["Joy", "Kores", "Talaffuz"],
        rows: [
          ["Metro stantsiyasi", "지하철역", "jihacheol-yeok"],
          ["Avtobus bekati", "버스 정류장", "beoseu jeongryujang"],
          ["Kasalxona", "병원", "byeongwon"],
          ["Dorixona", "약국", "yakguk"],
          ["Bank", "은행", "eunhaeng"],
          ["Aerport", "공항", "gonghang"],
          ["Mehmonxona", "호텔", "hotel"],
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "Yo'nalish so'zlarini bilaman",
          "Transport vositalarini bilaman",
          "Yo'l so'rashni bilaman",
          "Metro va avtobus iboralarini bilaman",
        ],
      },
    ],
  },
  {
    id: 8,
    emoji: "🛍️",
    title: "Xarid Qilish",
    subtitle: "쇼핑",
    color: "#db2777",
    light: "#fdf2f8",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Do'konda muloqot qilishni o'rganish",
          "Kiyim, rang va o'lchamlarni bilish",
          "Narx so'rash va savdolashishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Do'konda iboralar",
        headers: ["Ibora", "Kores", "Talaffuz"],
        rows: [
          ["Bu qancha?", "이거 얼마예요?", "igeo eolmayeyo?"],
          ["Arzonroq bering", "좀 깎아 주세요", "jom kkakka juseyo"],
          ["Ko'rib ko'rsam bo'ladimi?", "좀 봐도 돼요?", "jom bwado dwaeyo?"],
          ["Kiyib ko'rib bo'ladimi?", "입어봐도 돼요?", "ibeobbwado dwaeyo?"],
          ["Bu katta", "이거 커요", "igeo keoyo"],
          ["Bu kichik", "이거 작아요", "igeo jagayo"],
          ["Boshqa rang?", "다른 색 있어요?", "dareun saek isseoyo?"],
          ["Sotib olaman", "이거 살게요", "igeo salkkeyo"],
          ["Karta bilan", "카드로 할게요", "kadeuro halkkeyo"],
        ],
      },
      {
        type: "table",
        title: "2. Rang nomlari (색깔)",
        headers: ["Rang", "Kores", "Talaffuz"],
        rows: [
          ["Qizil", "빨간색", "ppalgan saek"],
          ["Ko'k", "파란색", "paran saek"],
          ["Yashil", "초록색", "choroksaek"],
          ["Sariq", "노란색", "noran saek"],
          ["Oq", "흰색", "hinsaek"],
          ["Qora", "검은색", "geomeunsaek"],
          ["Kulrang", "회색", "hoesaek"],
          ["Pushti", "분홍색", "bunhongsaek"],
        ],
      },
      {
        type: "dialog",
        title: "3. Kiyim do'konida dialog",
        lines: [
          { speaker: "Mijoz", text: "이 티셔츠 얼마예요?", translation: "Bu futbolka qancha?" },
          { speaker: "Do'kon", text: "이만 원이에요.", translation: "20,000 won." },
          { speaker: "Mijoz", text: "좀 비싸네요. 좀 깎아 주세요.", translation: "Biroz qimmat. Arzonroq qiling." },
          { speaker: "Do'kon", text: "그럼 만오천 원에 드릴게요.", translation: "Unda 15,000 won qilaman." },
          { speaker: "Mijoz", text: "이거 살게요. 카드로 할게요.", translation: "Buni olaman. Karta bilan to'layman." },
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "Do'konda asosiy iboralarni bilaman",
          "8 ta rangni bilaman",
          "Kiyim nomlarini bilaman",
          "Narx so'rashni bilaman",
        ],
      },
    ],
  },
  {
    id: 9,
    emoji: "🌤️",
    title: "Ob-havo va Fasllar",
    subtitle: "날씨와 계절",
    color: "#0284c7",
    light: "#f0f9ff",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "Ob-havo haqida gaplashishni o'rganish",
          "To'rt fasli bilish",
          "Ob-havo bilan bog'liq gaplarni tuzishni o'rganish",
        ],
      },
      {
        type: "table",
        title: "1. Ob-havo so'zlari",
        headers: ["Ma'nosi", "Kores", "Talaffuz"],
        rows: [
          ["Issiq", "더워요", "deowoyo"],
          ["Sovuq", "추워요", "chuwoyo"],
          ["Iliq", "따뜻해요", "ttatteutaeyo"],
          ["Salqin", "선선해요", "seonseonhaeyo"],
          ["Yomg'irli", "비가 와요", "biga wayo"],
          ["Qorli", "눈이 와요", "nuni wayo"],
          ["Bulutli", "흐려요", "heuryeoyo"],
          ["Ochiq", "맑아요", "malkayo"],
          ["Shamollik", "바람이 불어요", "barami bureoyo"],
          ["Tumanli", "안개가 껴요", "angaega kkyeoyo"],
        ],
      },
      {
        type: "table",
        title: "2. To'rt fasl (사계절)",
        headers: ["Fasl", "Kores", "Oy", "Xususiyat"],
        rows: [
          ["Bahor", "봄", "3-5 oy", "Iliq, ko'p gul"],
          ["Yoz", "여름", "6-8 oy","Issiq, ko'p yomg'ir"],
          ["Kuz", "가을", "9-11 oy", "Salqin, barglar rangi"],
          ["Qish", "겨울", "12-2 oy", "Sovuq, qor yog'adi"],
        ],
      },
      {
        type: "dialog",
        title: "3. Ob-havo dialogi",
        lines: [
          { speaker: "A", text: "오늘 날씨가 어때요?", translation: "Bugun havo qanday?" },
          { speaker: "B", text: "오늘은 맑고 따뜻해요.", translation: "Bugun ochiq va iliq." },
          { speaker: "B", text: "봄 날씨 같아요.", translation: "Bahordagidek." },
          { speaker: "A", text: "내일 날씨는요?", translation: "Ertaga havo qanday bo'ladi?" },
          { speaker: "B", text: "비가 온다고 했어요. 우산 가져 가세요.", translation: "Yomg'ir yog'adi deyishyapti. Soyabon olib boring." },
        ],
      },
      {
        type: "check",
        title: "✅ Nazorat savollari",
        items: [
          "10 ta ob-havo so'zini bilaman",
          "To'rt faslni bilaman",
          "Ob-havo haqida gaplar tuza olaman",
          "Harorat aytishni bilaman",
        ],
      },
    ],
  },
  {
    id: 10,
    emoji: "🎓",
    title: "TOPIK 1 Tayyorgarlik",
    subtitle: "시험 준비",
    color: "#7c3aed",
    light: "#f5f3ff",
    sections: [
      {
        type: "info",
        title: "📌 Dars maqsadi",
        items: [
          "TOPIK 1 imtihon formatini tushunish",
          "Asosiy so'zlar va iboralarni takrorlash",
          "Tinglab tushunish va o'qib tushunish mashq qilish",
        ],
      },
      {
        type: "table",
        title: "1. TOPIK 1 imtihoni formati",
        headers: ["Bo'lim", "Savol", "Vaqt", "Ball"],
        rows: [
          ["듣기 — Tinglab tushunish", "30 ta", "40 daqiqa", "100 ball"],
          ["읽기 — O'qib tushunish", "40 ta", "60 daqiqa", "100 ball"],
          ["Jami", "70 ta", "100 daqiqa", "200 ball"],
        ],
      },
      {
        type: "box",
        color: "#eff6ff",
        border: "#3b82f6",
        title: "📊 Darajalar:",
        content: "1-daraja: 80–139 ball\n2-daraja: 140–200 ball\n\nMaslahat: Kamida 80 ball yig'ing — bu 1-darajaga kirish uchun minimal ball!",
      },
      {
        type: "table",
        title: "2. Asosiy fe'llar takrori",
        headers: ["Fe'l", "Talaffuz", "Ma'nosi"],
        rows: [
          ["가다", "gada", "bormoq"],
          ["오다", "oda", "kelmoq"],
          ["먹다", "meokda", "yemoq"],
          ["마시다", "masida", "ichmoq"],
          ["자다", "jada", "uxlamoq"],
          ["공부하다", "gongbuhada", "o'qimoq"],
          ["일하다", "irhada", "ishlamoq"],
          ["말하다", "malhada", "gapirmoq"],
          ["보다", "boda", "ko'rmoq"],
          ["읽다", "ikda", "o'qimoq"],
        ],
      },
      {
        type: "practice",
        title: "3. Grammatika takrori",
        items: [
          "Hozirgi zamon: 가다 → 가요 (boraman)",
          "O'tgan zamon: 가다 → 갔어요 (bordim)",
          "Kelasi zamon: 내일 갈 거예요 (ertaga boraman)",
          "So'rash: 어디예요? (qayerda?)",
          "Miqdor: 얼마예요? (qancha?)",
        ],
      },
      {
        type: "box",
        color: "#fef9c3",
        border: "#eab308",
        title: "💡 30 kunlik tayyorgarlik rejasi",
        content: "1-hafta: Hangul takrori + Darslik 1-3 (kuniga 45 daqiqa)\n2-hafta: Darslik 4-6 + grammatika (kuniga 50 daqiqa)\n3-hafta: Darslik 7-9 + so'z boyitish (kuniga 50 daqiqa)\n4-hafta: Namuna testlar + Darslik 10 (kuniga 60 daqiqa)",
      },
      {
        type: "practice",
        title: "4. Foydali resurslar",
        items: [
          "topik.go.kr — rasmiy TOPIK sayti (o'tgan yillar testlari)",
          "dict.naver.com — kores-o'zbek lug'at",
          "Anki — flashcard dasturi (so'z yodlash)",
          "Talk To Me In Korean (TTMIK) — bepul darslar",
          "Duolingo Kores — kundalik 15 daqiqa mashq",
        ],
      },
      {
        type: "check",
        title: "✅ Kurs yakuniy nazorati",
        items: [
          "Hangul alifbosini to'liq bilaman",
          "TOPIK 1 format va ball tizimini tushundim",
          "Asosiy 500 so'zni bilaman",
          "Grammatika asoslarini bilaman",
          "Tinglab tushunish strategiyasini bilaman",
          "30 kunlik reja tuzildim",],
      },
    ],
  },
];

function SectionRenderer({ section, color }) {
  if (section.type === "info") {
    return (
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
        <div style={{ fontWeight: 700, color: "#334155", marginBottom: 8, fontSize: 14 }}>{section.title}</div>
        {section.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
            <span style={{ color, fontWeight: 700, fontSize: 14, marginTop: 1 }}>→</span>
            <span style={{ color: "#475569", fontSize: 13.5 }}>{item}</span>
          </div>
        ))}
      </div>
    );
  }
  if (section.type === "text") {
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontWeight: 700, color: "#1e293b", marginBottom: 6, fontSize: 14 }}>{section.title}</div>
        <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{section.content}</p>
      </div>
    );
  }
  if (section.type === "table") {
    return (
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, color: "#1e293b", marginBottom: 8, fontSize: 14 }}>{section.title}</div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr>
                {section.headers.map((h, i) => (
                  <th key={i} style={{ background: color, color: "#fff", padding: "8px 12px", textAlign: "left", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#f8fafc" }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: "7px 12px", borderBottom: "1px solid #e2e8f0", color: "#334155", fontWeight: ci === 0 ? 700 : 400, fontSize: ci === 0 ? 16 : 13 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (section.type === "dialog") {
    return (
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, color: "#1e293b", marginBottom: 8, fontSize: 14 }}>{section.title}</div>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
          {section.lines.map((line, i) => (
            <div key={i} style={{ marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ background: color, color: "#fff", borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{line.speaker}</span>
              <div>
                <div style={{ color: "#1e293b", fontWeight: 600, fontSize: 14 }}>{line.text}</div>
                <div style={{ color: "#64748b", fontSize: 12.5, fontStyle: "italic" }}>{line.translation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (section.type === "box") {
    return (
      <div style={{ background: section.color, border: `1.5px solid ${section.border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 14 }}>
        <div style={{ fontWeight: 700, color: "#1e293b", marginBottom: 6, fontSize: 14 }}>{section.title}</div>
        <div style={{ color: "#374151", fontSize: 13.5, lineHeight: 1.7, whiteSpace: "pre-line" }}>{section.content}</div>
      </div>
    );
  }
  if (section.type === "practice") {
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontWeight: 700, color: "#1e293b", marginBottom: 8, fontSize: 14 }}>{section.title}</div>
        {section.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 5, background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 7, padding: "6px 12p

x" }}>
            <span style={{ color: "#d97706", fontWeight: 700 }}>{i + 1}.</span>
            <span style={{ color: "#374151", fontSize: 13.5 }}>{item}</span>
          </div>
        ))}
      </div>
    );
  }
  if (section.type === "check") {
    return (
      <CheckList section={section} color={color} />
    );
  }
  return null;
}

function CheckList({ section, color }) {
  const [checked, setChecked] = useState(section.items.map(() => false));
  const all = checked.every(Boolean);
  return (
    <div style={{ background: "#f0fdf4", border: "1.5px solid #86efac", borderRadius: 10, padding: "12px 16px", marginBottom: 8 }}>
      <div style={{ fontWeight: 700, color: "#166534", marginBottom: 8, fontSize: 14 }}>{section.title}</div>
      {section.items.map((item, i) => (
        <div key={i} onClick={() => setChecked(c => c.map((v, j) => j === i ? !v : v))}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, cursor: "pointer" }}>
          <div style={{ width: 20, height: 20, border: `2px solid ${checked[i] ? color : "#94a3b8"}`, borderRadius: 5, background: checked[i] ? color : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
            {checked[i] && <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>✓</span>}
          </div>
          <span style={{ color: checked[i] ? "#166534" : "#475569", fontSize: 13.5, textDecoration: checked[i] ? "line-through" : "none" }}>{item}</span>
        </div>
      ))}
      {all && <div style={{ marginTop: 8, color: "#16a34a", fontWeight: 700, fontSize: 13 }}>🎉 Ajoyib! Darslikni tugatdingiz!</div>}
    </div>
  );
}

export default function App() {
  const [activeLesson, setActiveLesson] = useState(0);
  const lesson = lessons[activeLesson];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", minHeight: "100vh", background: "#f1f5f9", display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: "#0f172a", flexShrink: 0, display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ padding: "20px 16px 12px", borderBottom: "1px solid #1e293b" }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>🇰🇷 TOPIK 1</div>
          <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Kores tili darsligi</div>
        </div>
        {lessons.map((l, i) => (
          <button key={i} onClick={() => setActiveLesson(i)}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: activeLesson === i ? l.color : "transparent", border: "none", cursor: "pointer", textAlign: "left", transition: "background 0.15s", borderLeft: activeLesson === i ? `3px solid #fff` : "3px solid transparent" }}>
            <span style={{ fontSize: 16 }}>{l.emoji}</span>
            <div>
              <div style={{ color: "#fff", fontSize: 12, fontWeight: activeLesson === i ? 700 : 400 }}>{l.title}</div>
              <div style={{ color: activeLesson === i ? "rgba(255,255,255,0.7)" : "#64748b", fontSize: 10 }}>{l.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Header */}
        <div style={{ background: lesson.color, padding: "28px 32px", color: "#fff" }}>
          <div style={{ fontSize: 11, opacity: 0.75, marginBottom: 4 }}>DARSLIK {lesson.id} / 10</div>
          <div style={{ fontSize: 32 }}>{lesson.emoji}</div>
          <div style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>{lesson.title}</div>
          <div style={{ fontSize: 16, opacity: 0.85, marginTop: 2 }}>{lesson.subtitle}</div>

          {/* Nav dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
            {lessons.map((_, i) => (
              <button key={i} onClick={() => setActiveLesson(i)}
                style={{ width: i === activeLesson ? 24 : 8, height: 8, borderRadius: 4, background: i === activeLesson ? "#fff" : "rgba(255,255

,255,0.4)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s" }} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 32px", maxWidth: 800 }}>
          {lesson.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} color={lesson.color} />
          ))}

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {activeLesson > 0 && (
              <button onClick={() => setActiveLesson(a => a - 1)}
                style={{ flex: 1, padding: "12px", background: "#fff", border: `2px solid ${lesson.color}`, borderRadius: 10, color: lesson.color, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                ← Oldingi darslik
              </button>
            )}
            {activeLesson < lessons.length - 1 && (
              <button onClick={() => setActiveLesson(a => a + 1)}
                style={{ flex: 1, padding: "12px", background: lessons[activeLesson + 1].color, border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                Keyingi darslik →
              </button>
            )}
            {activeLesson === lessons.length - 1 && (
              <button onClick={() => setActiveLesson(0)}
                style={{ flex: 1, padding: "12px", background: "#7c3aed", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                🎉 Boshidan boshlash
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
