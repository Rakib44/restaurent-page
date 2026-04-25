// ===========================
// UTILS & NOTIFICATIONS
// ===========================
function showNotification(message) {
    // Remove existing notifications first to avoid overlap
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #D4501A;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-family: 'Hind Siliguri', sans-serif;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// MODAL MANAGEMENT
// ===========================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function submitReservation(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    const selects = form.querySelectorAll('select');
    
    const name    = inputs[0].value;
    const phone   = inputs[1].value;
    const date    = inputs[2].value;
    const time    = selects[0].value;
    const guests  = selects[1].value;
    const note    = form.querySelector('textarea').value;

    // Format date nicely (e.g. 20 April 2026)
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

    let message = `*টেবিল বুকিং রিকোয়েস্ট - Chef Time*\n\n`;
    message += `নাম: ${name}\n`;
    message += `ফোন: ${phone}\n`;
    message += `তারিখ: ${formattedDate}\n`;
    message += `সময়: ${time}\n`;
    message += `অতিথি সংখ্যা: ${guests} জন\n`;
    if (note) message += `বিশেষ অনুরোধ: ${note}\n`;

    const whatsappUrl = `https://wa.me/8801734940927?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    form.reset();
    closeModal('reservationModal');
    showNotification(`ধন্যবাদ ${name}! হোয়াটসঅ্যাপে বুকিং পাঠানো হচ্ছে...`);
}

// ===========================
// NAVIGATION & INTERACTIONS
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const WHATSAPP_NUMBER = '8801734940927';
    const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // WhatsApp Order Buttons
    const orderTriggers = ['orderBtnNav', 'orderBtn', 'startOrderBtn'];
    orderTriggers.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                const message = encodeURIComponent('আসসালামু আলাইকুম, আমি Chef Time থেকে খাবার অর্ডার করতে চাই।');
                window.open(WHATSAPP_BASE_URL + message, '_blank');
            });
        }
    });

    // Modal Close Listeners (Generic)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            const modal = e.target.closest('.modal');
            if (modal) closeModal(modal.id);
        }
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.show');
            if (activeModal) closeModal(activeModal.id);
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar Shadow
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none';
        }
    });

    // Operating Hours Status
    function updateOperatingStatus() {
        const hour = new Date().getHours();
        const isOpen = hour >= 10 && hour < 23;
        
        const heroStatusBadge = document.querySelector('.hero-status-badge');
        if (heroStatusBadge) {
            const badgeDot = heroStatusBadge.querySelector('.badge-dot');
            if (badgeDot) {
                badgeDot.className = isOpen ? 'badge-dot badge-open' : 'badge-dot badge-closed';
            }
        }
    }
    updateOperatingStatus();
    setInterval(updateOperatingStatus, 60000);

    // Initial Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');

            // Close all open items
            document.querySelectorAll('.faq-item.active').forEach(item => {
                item.classList.remove('active');
            });

            // If it wasn't already open, open it
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.bestseller-item, .menu-category, .gallery-card, .info-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Menu Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCategories.forEach(category => {
                if (filterValue === 'all' || category.getAttribute('data-cat') === filterValue) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
});

// ===========================
// QUICK VIEW & WHATSAPP ORDER
// ===========================
function openQuickView(name, price, image, description) {
    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    document.getElementById('qvName').textContent = name;
    document.getElementById('qvPrice').textContent = `৳${price}`;
    document.getElementById('qvImage').src = image;
    document.getElementById('qvDescription').textContent = description;
    
    // Reset quantity
    const qvQty = document.getElementById('qvQuantity');
    if (qvQty) qvQty.textContent = '1';
    
    openModal('quickViewModal');
}

function updateQvQuantity(change) {
    const qvQty = document.getElementById('qvQuantity');
    let qty = parseInt(qvQty.textContent);
    qty = Math.max(1, qty + change);
    qvQty.textContent = qty;
}

function orderViaWhatsApp() {
    const name = document.getElementById('qvName').textContent;
    const price = document.getElementById('qvPrice').textContent;
    const qty = document.getElementById('qvQuantity').textContent;
    const note = document.getElementById('qvSpecialNote').value;
    
    let message = `আসসালামু আলাইকুম! আমি Chef Time থেকে অর্ডার করতে চাই:\n\n`;
    message += `খাবার: ${name}\n`;
    message += `পরিমাণ: ${qty}টি\n`;
    message += `দাম: ${price} (প্রতিটি)\n`;
    if (note) message += `বিশেষ অনুরোধ: ${note}\n`;
    
    const whatsappUrl = `https://wa.me/8801734940927?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal('quickViewModal');
}
