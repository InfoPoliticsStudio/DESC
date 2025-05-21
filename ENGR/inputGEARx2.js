document.addEventListener("DOMContentLoaded", async function () {
  const apiUrl = "https://script.google.com/macros/s/AKfycbw8r-o-DHqfU5cCdMtj95mFv2NmnHGFuIjYqtxwAaT_0nnj6406HzaRfFksoNYFvO8/exec";
  let allData = [];

  const loader = document.querySelector(".loader");
  const userCardsContainer = document.getElementById("userCards");

  // แสดง Loader ก่อนโหลดข้อมูล
  loader.style.display = "flex";
  userCardsContainer.style.display = "none";

  try {
    const response = await fetch(apiUrl);
    allData = await response.json();
    renderProfiles(allData);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล:", error);
  } finally {
    // ซ่อน Loader เมื่อโหลดเสร็จ
    loader.style.display = "none";
    userCardsContainer.style.display = "grid";
  }

  document.querySelector("select").addEventListener("change", function () {
    const selectedUniversity = this.value;
    const filteredData = selectedUniversity === "0" ? allData : allData.filter(user => user.university === selectedUniversity);
    renderProfiles(filteredData);
  });

  function renderProfiles(data) {
    userCardsContainer.innerHTML = ""; // เคลียร์ข้อมูลเดิม

    data.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("profile-card");
      card.innerHTML = `
                    <img src="${user.img}" class="profile-img">
                    <div class="profile-info">
                        <h1>${user.name}</h1>
                        <p class="${user.round}">${user.tround}</p>
                        <div class="university">
                            <img src="${user.uimg}" style="width: 50px;">
                            <p>${user.university}</p>
                        </div>
                        <p>${user.prov}</p>
                        <p>${user.faculty}</p>
                        <p>${user.field}</p>
                        <p style="font-size: 12px;">${user.program}</p>
                        <div class="div">
                            <button onclick="window.open('${user.contact}', '_blank')">
                                <i class="fa-brands fa-facebook-f"></i>
                                <span>ติดต่อผ่าน Facebook</span>
                            </button>
                        </div>
                    </div>
                `;
      userCardsContainer.appendChild(card);
    });
  }
});
