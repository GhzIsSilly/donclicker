 (() => {
            const btn = document.getElementById('btn');
            const img = document.getElementById('mainImg');
            const overlay = document.getElementById('overlay');
            const counterEl = document.getElementById('counter');
            const pluralEl = document.getElementById('plural');

            let count = 0;
            let hideTimer;
            
            const sounds = ['squek.mp3', 'lowtier.mp3', 'limbus.mp3', 'esquir.mp3', 'stagger.mp3', 'vcdon1.wav', 'vcdon2.wav'];

            function randomSound() {
                const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]); // rumus gak reset + random juga SIMPAN DINOTEPAD
                audio.volume = 0.8;
                audio.play().catch(() => {});
            }

            function toggleOverlay(show) {
                clearTimeout(hideTimer);
                overlay.classList.toggle('visible', show);
            }

            function squeeze() {
                img.style.transition = 'none';
                img.style.transform = 'scale(1,1)';
                img.offsetHeight;
                img.style.transition = 'transform 0.04s ease-out';
                img.style.transform = 'scaleX(1.4) scaleY(0.4)';
                setTimeout(() => {
                    img.style.transition = 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)';
                    img.style.transform = 'scale(1,1)';
                }, 80);
            }

            function updateCounter() {
                count++;
                counterEl.textContent = count;
                pluralEl.textContent = count === 1 ? '' : 's';
            }

            function pat(e) {
                e.preventDefault();
                updateCounter();
                squeeze();
                randomSound();
                toggleOverlay(true);
                hideTimer = setTimeout(() => toggleOverlay(false), 350);
            }

            btn.addEventListener('click', pat);
            btn.addEventListener('touchstart', pat, { passive: false });
            btn.setAttribute('tabindex', '0');
            btn.setAttribute('role', 'button');
            btn.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') pat(e);
            });
        })();