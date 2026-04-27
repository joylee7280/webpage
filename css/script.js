// 等待網頁載入完成
document.addEventListener('DOMContentLoaded', () => {
  console.log("Joy's Portfolio is ready!");

  // 範例：點擊按鈕時的平滑捲動效果 (如果瀏覽器不支援 CSS scroll-behavior)
  const viewWorkBtn = document.getElementById('viewWork');

  viewWorkBtn.addEventListener('click', (e) => {
    console.log("Navigating to projects...");
  });
});