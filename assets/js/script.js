/**
 * 5-BOOK DESK INTERACTIVE ENGINE (THEMED SCROLLSPY & SPARKLES)
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Desk Studio Engine Ready.');

    // 1. 3D Tilt Effect บนรูปโพลารอยด์
    const polaroid = document.querySelector('.polaroid-interactive');
    if (polaroid) {
        polaroid.addEventListener('mousemove', (e) => {
            const rect = polaroid.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            polaroid.style.transform = `perspective(900px) rotateX(${y * -0.06}deg) rotateY(${x * 0.06}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        polaroid.addEventListener('mouseleave', () => {
            polaroid.style.transform = 'perspective(900px) rotate(-2deg) scale3d(1, 1, 1)';
        });
    }

    // 2. ScrollSpy ไฮไลต์ตามธีมสีของแต่ละเล่ม
    const books = document.querySelectorAll('.binder-book-instance');
    const tabs = document.querySelectorAll('.attached-side-tabs .tab-btn');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let currentId = '';
        books.forEach(book => {
            const bookTop = book.offsetTop - 160;
            if (window.scrollY >= bookTop) {
                currentId = book.getAttribute('id');
            }
        });

        // อัปเดตแท็บด้านข้าง
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
            if (tab.getAttribute('href') === `#${currentId}`) {
                tab.classList.add('active-tab');
            }
        });

        // อัปเดตเมนูใน Navbar ตามธีมสี
        navLinks.forEach(link => {
            const themeClass = link.getAttribute('data-theme');
            link.classList.remove('active-blue', 'active-purple', 'active-green', 'active-pink', 'active-yellow');
            if (link.getAttribute('href') === `#${currentId}` && themeClass) {
                link.classList.add(themeClass);
            }
        });
    });

    const chips = document.querySelectorAll('.clean-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.style.transform = 'scale(1.15)';
            setTimeout(() => {
                chip.style.transform = 'scale(1)';
            }, 150);
        });
    });
});