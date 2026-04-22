document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll animation for cards
    const cards = document.querySelectorAll('.card');
    
    // Add a simple intersection observer for lazy fade-ins if needed later
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // === FUNCTION: Fetch BMT Weather from Open-Meteo ===
    async function fetchBMTWeather() {
        try {
            // Tọa độ của Buôn Ma Thuột (Vĩ độ ~12.6667, Kinh độ ~108.0383)
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.6667&longitude=108.0383&current_weather=true');
            const data = await response.json();
            
            if (data && data.current_weather) {
                const temp = data.current_weather.temperature;
                const tempElement = document.getElementById('bmt-temp');
                if (tempElement) {
                    tempElement.textContent = `${temp}°C`;
                }
            }
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu thời tiết:', error);
        }
    }

    // === GỌI HÀM VÀ ĐẶT LỊCH ===
    // Lấy dữ liệu ngay khi tải trang
    fetchBMTWeather();

    // Cập nhật sau mỗi 60.000 ms (1 phút)
    setInterval(fetchBMTWeather, 60000);

});
