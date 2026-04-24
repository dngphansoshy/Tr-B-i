document.getElementById('roll-btn').addEventListener('click', function() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const btn = this;

    btn.disabled = true;
    btn.innerText = "Đang lắc...";

    // Thêm hiệu ứng xoay
    dice1.classList.add('result-3');
    dice2.classList.add('result-6');

    // Sau khi xúc xắc dừng (2 giây)
    setTimeout(() => {
        document.getElementById('dice-screen').classList.add('hidden');

        // Hiện thư mời
        setTimeout(() => {
            document.getElementById('dice-screen').style.display = 'none';
            document.getElementById('invitation-screen').classList.remove('hidden');
        }, 1000);
    }, 2500);
    const container = document.getElementById('invitationContainer');
    const backgroundEffect = document.getElementById('backgroundEffect');

    container.addEventListener('mousemove', (e) => {
        // Lấy vị trí chuột so với container
        const x = e.clientX;
        const y = e.clientY;

        // Cập nhật vị trí của quầng sáng radial-gradient
        backgroundEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(147, 51, 234, 0.45) 0%, rgba(18, 0, 47, 0) 55%)`;
    });

    // Reset vị trí quầng sáng khi chuột rời khỏi container (nếu cần)
    container.addEventListener('mouseleave', () => {
        backgroundEffect.style.background = `radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 0%, rgba(18, 0, 47, 0) 60%)`;
    });
});