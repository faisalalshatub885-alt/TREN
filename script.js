/**
 * IRON LEGACY - Ultra Interaction Engine
 * Logic: Magnetic Buttons, Smooth Reveal, and Global Hover States
 */

class PremiumUI {
    constructor() {
        this.shortcuts = document.querySelectorAll('.nav-shortcut');
        this.init();
    }

    init() {
        this.initMagneticEffect();
        this.initScrollStagger();
    }

    // 1. تأثير الانجذاب المغناطيسي للأزرار
    initMagneticEffect() {
        this.shortcuts.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                
                // حساب مسافة الماوس عن مركز الزر
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // تحريك الزر بنسبة 30% من مسافة الماوس (لخلق تأثير الجذب)
                // وتحريك النص الداخلي بنسبة 50% (لخلق تأثير العمق Parallax)
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                
                const text = btn.querySelector('.nav-text');
                if (text) {
                    text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                }
                
                btn.style.borderColor = 'var(--primary)';
            });

            btn.addEventListener('mouseleave', () => {
                // إعادة الزر لمكانه الأصلي بنعومة
                btn.style.transform = `translate(0px, 0px)`;
                const text = btn.querySelector('.nav-text');
                if (text) {
                    text.style.transform = `translate(0px, 0px)`;
                }
                btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        });
    }

    // 2. ظهور الأزرار واحد تلو الآخر عند تحميل الصفحة (Stagger Animation)
    initScrollStagger() {
        this.shortcuts.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                btn.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.2, 1)';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0px)';
            }, 100 * index); // تأخير بسيط لكل زر عن الذي قبله
        });
    }
}

// تشغيل التأثيرات
new PremiumUI();