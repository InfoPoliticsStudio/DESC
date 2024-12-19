const students = {
    "34514": {
        name: "ณัฐปิยังกูร โภคินชลิตพงศ์",
        imageUrl: "https://i.postimg.cc/1XDwtQRs/34514.jpg",
        password: "1509966544414"
    },
    "34599": {
        name: "ปริญญากร สิงห์แก้ว",
        imageUrl: "https://i.postimg.cc/T1TYVMqR/34599.jpg",
        password: "1509966520612"
    },
    "34774": {
        name: "สุทธชัย ส่องแสง",
        imageUrl: "https://i.postimg.cc/JzQZrFVj/image.png",
        password: "1509966565284"
    },
    "34776": {
        name: "จิรันธนิน เตชะตุ้ย",
        imageUrl: "https://i.postimg.cc/m204G1hv/34776.jpg",
        password: "1509966547626"
    },
    "35878": {
        name: "วาริศ จันทร์ปิง",
        imageUrl: "https://i.postimg.cc/wx2PVyhX/35878.jpg",
        password: "1509966512911"
    },
    "36127": {
        name: "พีรวิชญ์ จิ๋วแก้ว",
        imageUrl: "https://i.postimg.cc/g0KqWRc4/36127.jpg",
        password: "1500701371378"
    },
    "37131": {
        name: "ศิวัช พุกพูลทรัพย์",
        imageUrl: "https://i.postimg.cc/DwG3Bff7/37131.jpg",
        password: "1500701372650"
    },
    "37275": {
        name: "ศิโรธร บุญแฮด",
        imageUrl: "https://i.postimg.cc/K8b4PWFp/37275.jpg",
        password: "1509966561793"
    },
    "37327": {
        name: "ปวีณ์สุดา จันทร์อุธร",
        imageUrl: "https://i.postimg.cc/DfsX1LLZ/37327.jpg",
        password: "1509966576413"
    },
    "37341": {
        name: "รัฐภูมิ วงค์แก้ว",
        imageUrl: "https://i.postimg.cc/YCVrXyww/37341.jpg",
        password: "1509966563737"
    },
    "37434": {
        name: "ภูริช เย็นขุนทด",
        imageUrl: "https://i.postimg.cc/Gh6gNDz6/37434.jpg",
        password: "1509966537108"
    },
    "37643": {
        name: "กรกนก เสมสะอาด",
        imageUrl: "https://i.postimg.cc/432W6hK8/37643.jpg",
        password: "1102900107293"
    },
    "37698": {
        name: "ณภัทร ปัญโญ",
        imageUrl: "https://admission.reg.cmu.ac.th/tcas/picture/c2d1250dc83fab89118eaefd0efeef04.jpg",
        password: "1234"
    },
    "38739": {
        name: "นงนภัส ทองเชื้อ",
        imageUrl: "https://i.postimg.cc/bwDx7FdR/38739.jpg",
        password: "1509966541857"
    },
    "38793": {
        name: "ญาดาณัฐ อุจะรัตน",
        imageUrl: "https://i.postimg.cc/Pfv2sxcD/38793.jpg",
        password: "1104300986166"
    },
    "39492": {
        name: "พลภูมิ ว่องเจริญ",
        imageUrl: "https://i.postimg.cc/9Q5kNTQz/39492.jpg",
        password: "1104700159399"
    },
    "41394": {
        name: "ศิรเมศร์ พิศาลอนันภูมิกร",
        imageUrl: "https://i.postimg.cc/zXS115PJ/41394.jpg",
        password: "1104300972874"
    },
    "42468": {
        name: "สุนทร ทรัพย์เมือง",
        imageUrl: "https://i.postimg.cc/QdFGK5dM/42468.jpg",
        password: "1629900774585"
    },
    "42473": {
        name: "ภูริ ธาราวิไลสุขสกุล",
        imageUrl: "https://i.postimg.cc/0NZBtyQ4/42473.jpg",
        password: "1509966528028"
    },
    "42500": {
        name: "เศรษฐวัฒน์ เห็มชาติ",
        imageUrl: "https://i.postimg.cc/8csd11Tj/42500.jpg",
        password: "1449900840016"
    },
    "42892": {
        name: "พัชราพร กันทาหงษ์",
        imageUrl: "https://i.postimg.cc/3wND03yh/42892.jpg",
        password: "1500701376141"
    },
    "42985": {
        name: "ธนกฤต เมืองจันทร์",
        imageUrl: "https://i.postimg.cc/3JbhJ7Hm/42985.jpg",
        password: "1509966572221"
    },
    "43066": {
        name: "เทพทัต ประสบจตุรพร",
        imageUrl: "https://i.postimg.cc/zBfpBmNH/43066.jpg",
        password: "1100401336767"
    },
    "44313": {
        name: "โจฮันนา ธัญญารัตน์ นิโคลโล",
        imageUrl: "https://i.postimg.cc/bNFGXKCF/44313.jpg",
        password: "5579700001209"
    },
    "45326": {
        name: "ณภัทร เป็งเฟือย",
        imageUrl: "https://i.postimg.cc/y8j74986/45326.jpg",
        password: "1509966537132"
    },
    "45403": {
        name: "ณัฐนันท์ สวนกุหลาบ",
        imageUrl: "https://i.postimg.cc/5yBZ5dH9/45403.jpg",
        password: "1369900775690"
    },
    "45405": {
        name: "ปภินวิช มูลเมือง",
        imageUrl: "https://i.postimg.cc/CLJ2w4k2/45405.jpg",
        password: "1500701388696"
    }
};

const membersContainer = document.getElementById("members");

for (const id in students) {
  const student = students[id];
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${student.imageUrl}" alt="${student.name}">
    <div class="info">
      <h2>${student.name}</h2>
    </div>
  `;

  membersContainer.appendChild(card);
}
