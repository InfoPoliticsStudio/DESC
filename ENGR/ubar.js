  const universityMap = {
    "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง": { short: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", color: "#F16322" },
    "มหาวิทยาลัยธรรมศาสตร์": { short: "มหาวิทยาลัยธรรมศาสตร์", color: "#FFD13F" },
    "มหาวิทยาลัยเชียงใหม่": { short: "มหาวิทยาลัยเชียงใหม่", color: "#6b69b1" },
    "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา": { short: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา", color: "#513300" },
    "มหาวิทยาลัยนเรศวร": { short: "มหาวิทยาลัยนเรศวร", color: "#ff6600" },
    "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ": { short: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ", color: "#ed6721" },
    "TCAS": { short: "TCAS", color: "#1a477f" }
  };

  const tcasGroup = ["","รอตัดสินใจ", "รอผล", "*", null, undefined];

  const TOTAL = 27;

  async function loadUniversityData() {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw8r-o-DHqfU5cCdMtj95mFv2NmnHGFuIjYqtxwAaT_0nnj6406HzaRfFksoNYFvO8/exec');
    const data = await response.json();

    const counts = {};

    data.forEach(item => {
      let uni = item.university?.trim() || "";

      if (tcasGroup.includes(uni)) {
        uni = "TCAS";
      }

      if (!universityMap[uni]) return;

      counts[uni] = (counts[uni] || 0) + 1;
    });

    const barRow = document.getElementById('barRow');
    const legendContainer = document.getElementById('legendContainer');

    const usedUniversities = new Set();

    // เรียงข้อมูลจากมากไปน้อยก่อนแสดง bar
    Object.entries(counts)
      .sort((a, b) => b[1] - a[1]) // b[1] - a[1] = มากไปน้อย
      .forEach(([name, count]) => {
        const { short, color } = universityMap[name];
        usedUniversities.add(name);

        const percent = ((count / TOTAL) * 100).toFixed(2);

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${percent}%`;
        bar.style.backgroundColor = color;
        bar.textContent = `${count}`;
        barRow.appendChild(bar);
    });

    usedUniversities.forEach(name => {
      const { short, color } = universityMap[name];

      const legendItem = document.createElement('div');
      legendItem.className = 'legend-item';

      const circle = document.createElement('div');
      circle.className = 'legend-circle';
      circle.style.backgroundColor = color;

      legendItem.appendChild(circle);
      legendItem.appendChild(document.createTextNode(short));
      legendContainer.appendChild(legendItem);
    });
  }

  loadUniversityData();
