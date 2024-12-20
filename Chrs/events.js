const students = {
    "1": {
        name: "ณัฐปิยังกูร โภคินชลิตพงศ์",
        imageUrl: "https://i.postimg.cc/1XDwtQRs/34514.jpg",
        password: "1509966544414"
    },
    "2": {
        name: "ปริญญากร สิงห์แก้ว",
        imageUrl: "https://i.postimg.cc/T1TYVMqR/34599.jpg",
        password: "1509966520612"
    },
    "3": {
        name: "สุทธชัย ส่องแสง",
        imageUrl: "https://i.postimg.cc/JzQZrFVj/image.png",
        password: "1509966565284"
    },
    "4": {
        name: "จิรันธนิน เตชะตุ้ย",
        imageUrl: "https://i.postimg.cc/m204G1hv/34776.jpg",
        password: "1509966547626"
    },
    "5": {
        name: "วาริศ จันทร์ปิง",
        imageUrl: "https://i.postimg.cc/wx2PVyhX/35878.jpg",
        password: "1509966512911"
    },
    "6": {
        name: "พีรวิชญ์ จิ๋วแก้ว",
        imageUrl: "https://i.postimg.cc/g0KqWRc4/36127.jpg",
        password: "1500701371378"
    },
    "7": {
        name: "ศิวัช พุกพูลทรัพย์",
        imageUrl: "https://i.postimg.cc/DwG3Bff7/37131.jpg",
        password: "1500701372650"
    },
    "8": {
        name: "ศิโรธร บุญแฮด",
        imageUrl: "https://i.postimg.cc/K8b4PWFp/37275.jpg",
        password: "1509966561793"
    },
    "9": {
        name: "ปวีณ์สุดา จันทร์อุธร",
        imageUrl: "https://i.postimg.cc/DfsX1LLZ/37327.jpg",
        password: "1509966576413"
    },
    "10": {
        name: "รัฐภูมิ วงค์แก้ว",
        imageUrl: "https://i.postimg.cc/YCVrXyww/37341.jpg",
        password: "1509966563737"
    },
    "11": {
        name: "ภูริช เย็นขุนทด",
        imageUrl: "https://i.postimg.cc/Gh6gNDz6/37434.jpg",
        password: "1509966537108"
    },
    "12": {
        name: "กรกนก เสมสะอาด",
        imageUrl: "https://i.postimg.cc/432W6hK8/37643.jpg",
        password: "1102900107293"
    },
    "13": {
        name: "ณภัทร ปัญโญ",
        imageUrl: "https://admission.reg.cmu.ac.th/tcas/picture/c2d1250dc83fab89118eaefd0efeef04.jpg",
        password: "1234"
    },
    "14": {
        name: "นงนภัส ทองเชื้อ",
        imageUrl: "https://i.postimg.cc/bwDx7FdR/38739.jpg",
        password: "1509966541857"
    },
    "15": {
        name: "ญาดาณัฐ อุจะรัตน",
        imageUrl: "https://i.postimg.cc/Pfv2sxcD/38793.jpg",
        password: "1104300986166"
    },
    "16": {
        name: "พลภูมิ ว่องเจริญ",
        imageUrl: "https://i.postimg.cc/9Q5kNTQz/39492.jpg",
        password: "1104700159399"
    },
    "17": {
        name: "ศิรเมศร์ พิศาลอนันภูมิกร",
        imageUrl: "https://i.postimg.cc/zXS115PJ/41394.jpg",
        password: "1104300972874"
    },
    "18": {
        name: "สุนทร ทรัพย์เมือง",
        imageUrl: "https://i.postimg.cc/QdFGK5dM/42468.jpg",
        password: "1629900774585"
    },
    "19": {
        name: "ภูริ ธาราวิไลสุขสกุล",
        imageUrl: "https://i.postimg.cc/0NZBtyQ4/42473.jpg",
        password: "1509966528028"
    },
    "20": {
        name: "เศรษฐวัฒน์ เห็มชาติ",
        imageUrl: "https://i.postimg.cc/8csd11Tj/42500.jpg",
        password: "1449900840016"
    },
    "21": {
        name: "พัชราพร กันทาหงษ์",
        imageUrl: "https://i.postimg.cc/3wND03yh/42892.jpg",
        password: "1500701376141"
    },
    "22": {
        name: "ธนกฤต เมืองจันทร์",
        imageUrl: "https://i.postimg.cc/3JbhJ7Hm/42985.jpg",
        password: "1509966572221"
    },
    "23": {
        name: "เทพทัต ประสบจตุรพร",
        imageUrl: "https://i.postimg.cc/zBfpBmNH/43066.jpg",
        password: "1100401336767"
    },
    "24": {
        name: "โจฮันนา ธัญญารัตน์ นิโคลโล",
        imageUrl: "https://i.postimg.cc/bNFGXKCF/44313.jpg",
        password: "5579700001209"
    },
    "25": {
        name: "ณภัทร เป็งเฟือย",
        imageUrl: "https://i.postimg.cc/y8j74986/45326.jpg",
        password: "1509966537132"
    },
    "26": {
        name: "ณัฐนันท์ สวนกุหลาบ",
        imageUrl: "https://i.postimg.cc/5yBZ5dH9/45403.jpg",
        password: "1369900775690"
    },
    "27": {
        name: "ปภินวิช มูลเมือง",
        imageUrl: "https://i.postimg.cc/CLJ2w4k2/45405.jpg",
        password: "1500701388696"
    }
};


const wishes = [
  "สุขสันต์วันพิเศษ ขอให้มีความสุขมากๆ",
  "ขอให้เจริญรุ่งเรืองในทุกสิ่งที่ทำ",
  "สุขภาพแข็งแรง มีความสุขในทุกๆ วัน",
  "ขอให้โชคดีในทุกการเริ่มต้นใหม่",
  "ความสุขจงอยู่รอบตัวคุณ",
  "ขอให้สมหวังในทุกความตั้งใจ",
  "ขอให้คุณพบเจอแต่สิ่งดีๆ ในชีวิต",
  "ขอให้มีพลังใจที่เต็มเปี่ยมเสมอ",
  "โชคลาภและความสำเร็จจงเป็นของคุณ",
  "ขอให้ปีนี้เป็นปีที่ดีที่สุดของคุณ",
  "ทุกวันคือวันที่เต็มไปด้วยรอยยิ้ม",
  "โชคดีตลอดปี สุขสันต์ตลอดไป",
  "ขอให้คุณมีกำลังใจในการทำสิ่งใหม่",
  "ขอให้คุณได้รับสิ่งที่คุณสมควรได้รับ",
  "ความสุขจงแวดล้อมคุณตลอดเวลา",
  "ขอให้คุณเติมเต็มความฝันได้สำเร็จ",
  "วันไหนๆ ก็ขอให้เป็นวันที่สดใส",
  "ขอให้ความรักและความสุขอยู่กับคุณ",
  "ขอให้ทุกวันเป็นวันที่มีความหมาย",
  "สิ่งดีๆ จะมาหาคุณเสมอ",
  "ขอให้คุณมีชีวิตที่สดใสและสวยงาม",
  "โชคดีในทุกการเดินทางของชีวิต",
  "ขอให้ทุกวันมีแต่ความสงบและสุขใจ",
  "ขอให้ความสำเร็จอยู่ใกล้มือคุณ",
  "สุขภาพดี ร่างกายแข็งแรงอยู่เสมอ",
  "ขอให้มีชีวิตที่ราบรื่นและมีความสุข",
  "ขอให้ความสุขเติบโตในใจคุณทุกวัน",
  "ความรัก ความอบอุ่นจงอยู่รอบตัวคุณ",
  "ทุกก้าวย่างคือความก้าวหน้าในชีวิต",
  "ขอให้สมหวังในทุกสิ่งที่คุณต้องการ",
  "ขอให้คุณพบกับสิ่งดีๆ ทุกๆ วัน",
  "ความสำเร็จจงเป็นของคุณในเร็ววัน",
  "ขอให้ทุกอุปสรรคกลายเป็นโอกาส",
  "ขอให้จิตใจคุณเต็มไปด้วยความหวัง",
  "ขอให้คุณเปล่งประกายความสุขทุกวัน",
  "ขอให้คุณกล้าหาญในทุกก้าวของชีวิต",
  "ขอให้โชคลาภและโอกาสดีๆ เป็นของคุณ",
  "ขอให้ชีวิตคุณเต็มไปด้วยความรัก",
  "ความสุขและความสงบจงอยู่ในใจคุณ",
  "ขอให้คุณมีเพื่อนดีๆ อยู่รอบกายเสมอ",
  "ความสุขจงเกิดขึ้นทุกเช้าเย็น",
  "ขอให้คุณก้าวไปข้างหน้าด้วยความมั่นใจ",
  "ขอให้ชีวิตของคุณเปี่ยมไปด้วยพลัง",
  "ทุกวันคือโอกาสใหม่สำหรับคุณ",
  "ขอให้ความปรารถนาดีล้อมรอบคุณ",
  "ขอให้คุณมีความสุขในทุกวินาทีของชีวิต",
  "สุขภาพแข็งแรง ใจเบิกบานเสมอ",
  "ขอให้ทุกวันเป็นวันที่ดีที่สุดในชีวิตคุณ",
  "ขอให้ความฝันกลายเป็นจริงทุกประการ"
];


function getRandomWish() {
  return wishes[Math.floor(Math.random() * wishes.length)];
}

function showStudentCard() {
  const studentId = document.getElementById("student-id").value;
  const student = students[studentId];

  if (student) {
    document.getElementById("event-card").style.display = "block";
    document.getElementById("student-image").src = student.imageUrl;
    document.getElementById("student-name").innerText = student.name;
    document.getElementById("student-wish").innerText = getRandomWish();
  } else {
    alert("ไม่พบนักเรียนเลขที่นี้");
  }
}
