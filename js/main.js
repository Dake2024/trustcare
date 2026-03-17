document.addEventListener('DOMContentLoaded', () => {

  // ---- Мобильное меню ----
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  // ---- FAQ Аккордеон ----
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');
      const icon = trigger.querySelector('.accordion-icon');

      if (isOpen) {
        item.classList.remove('is-open');
        icon.textContent = '+';
      } else {
        item.classList.add('is-open');
        icon.textContent = '−';
      }
    });
  });

  // ---- Кнопки объёма в тарифах ----
  const volBtns = document.querySelectorAll('.pricing-vol');
  volBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pricing-card');
      card.querySelectorAll('.pricing-vol').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const price = card.querySelector('.pricing-card__num');
      if (price) price.textContent = btn.dataset.price;
    });
  });

  // ---- Отзывы ----
  const reviewsByTab = {
    big: [
      {
        company: 'Doctor Dent',
        author: 'Дарьяна, администратор клиники Doctor Dent',
        text: 'Перешли с бумажных договоров на TrustMe — теперь все подписываем онлайн. Процесс стал быстрее и удобнее для сотрудников и пациентов. Во время проверки сервис сильно выручил: все документы были в порядке и под рукой. Очень довольны переходом на цифровой формат.',
        video: 'https://www.youtube.com/embed/EJuar0wvemA?rel=0'
      },
      {
        company: 'Genesis Dentistry',
        author: '',
        text: 'TrustMe полностью избавил нашу клинику от бумажной волокиты. Теперь все документы с пациентами подписываются за пару кликов на смартфоне-быстро, удобно и современно. Это значительно упростило работу и позволило нам сосредоточиться на качестве лечения, а не на бумагах. Рекомендую TrustMe как эффективный и удобный сервис электронного документооборота.',
        video: 'https://www.youtube.com/embed/w9nkZ1-1G44?rel=0'
      },
      {
        company: 'Стоматология Tiara',
        author: '',
        text: 'С TrustMe мы работаем с 2023 года. В один-два клика мы составляем договор с пациентом, где всё приходит сообщением онлайн на телефон пациента. Он может сразу же ознакомиться с ним и подписать путём сообщения либо через eGov. Всё доступно, всё понятно. Это облегчило нам работу. Спасибо вам, что вы есть.',
        video: 'https://www.youtube.com/embed/3ticLsHN-Fs?rel=0'
      },
      {
        company: 'Aulet Personal',
        author: '',
        text: 'Мы выбрали TrustMe ради скорости и безопасности. Подписание договоров сократилось с трех дней до 10 минут. TrustMe обеспечивает юридически значимую и безопасную подпись, защищая обе стороны. Это быстро, комфортно и удобно. Мы очень довольны!',
        video: 'https://www.youtube.com/embed/oQeVQlDBPZA?rel=0'
      },
    ],
    education: [
      {
        company: 'Quantum Tech School',
        author: '',
        text: 'С компанией TrustMe мы сотрудничаем уже два года. Платформа очень удобная, интегрируется со многими нашими партнёрами. Очень рекомендую.',
        video: 'https://www.youtube.com/embed/sbzQzBMhS5k?rel=0'
      },
      {
        company: 'Quantum STEM School',
        author: '',
        text: 'Мы с ними сотрудничаем уже второй год. Пользуемся их услугой автоматического подписания договоров с клиентами. Классный сервис, суперподдержка, поэтому желаем ребятам процветания и дальнейшего роста.',
        video: 'https://www.youtube.com/embed/Xbh_EkugSQw?rel=0'
      },
    ],
    travel: [
      {
        company: 'AtaTravel',
        author: '',
        text: 'Мы работаем с TrustMe, потому что это безопасно и удобно. Все сделки онлайн, моментальные и надёжные, что особенно важно для наших туристов из разных городов Казахстана. Спасибо команде за поддержку!',
        video: 'https://www.youtube.com/embed/IFcL2qDz4zk?rel=0'
      },
      {
        company: 'Gelios',
        author: '',
        text: 'В 2023 году мы заключили договор с TrustMe. С этого момента наша работа стала намного проще: когда клиент даёт согласие на тур, мы можем заключить договор онлайн, дистанционно. Это очень удобно в наше время, когда ценится скорость и легитимность сделок. Рекомендуем TrustMe для эффективной работы!',
        video: 'https://www.youtube.com/embed/XX93eRkba98?rel=0'
      }
    ]
  };

  let currentTab = 'big';
  let currentReview = 0;

  function renderReview() {
    const currentList = reviewsByTab[currentTab];
    const r = currentList[currentReview];

    document.getElementById('currentReview').innerHTML = `
      <div class="review__company">${r.company}</div>
      ${r.author ? `<div class="review__author">${r.author}</div>` : ''}
      <p class="review__text">${r.text}</p>
    `;

    const videoFrame = document.getElementById('reviewVideo');
    if (videoFrame) videoFrame.src = r.video;
  }

  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const currentList = reviewsByTab[currentTab];
      currentReview = (currentReview - 1 + currentList.length) % currentList.length;
      renderReview();
    });

    nextBtn.addEventListener('click', () => {
      const currentList = reviewsByTab[currentTab];
      currentReview = (currentReview + 1) % currentList.length;
      renderReview();
    });
  }

  const tabs = document.querySelectorAll('.reviews__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      currentTab = tab.dataset.tab;
      currentReview = 0;
      renderReview();
    });
  });

  renderReview();

  // ---- Маска телефона ----
  const phoneInput = document.getElementById('phoneInput');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      let digits = this.value.replace(/\D/g, '');

      // Если начинается с 8, заменяем на 7
      if (digits.startsWith('8')) digits = '7' + digits.slice(1);
      // Если начинается не с 7, принудительно добавляем
      if (digits.length > 0 && digits[0] !== '7') digits = '7' + digits;

      // Обрезаем до 11 цифр (7 + 10)
      digits = digits.slice(0, 11);

      let formatted = '';
      if (digits.length > 0) formatted = '+7';
      if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
      if (digits.length >= 4) formatted += ')';
      if (digits.length > 4) formatted += ' ' + digits.slice(4, 7);
      if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
      if (digits.length > 9) formatted += '-' + digits.slice(9, 11);

      this.value = formatted;
    });

    phoneInput.addEventListener('keydown', function (e) {
      // Разрешаем: Backspace, Delete, Tab, Escape, стрелки
      if ([8, 9, 27, 46, 37, 38, 39, 40].includes(e.keyCode)) return;
      // Разрешаем Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      if ((e.ctrlKey || e.metaKey) && [65, 67, 86, 88].includes(e.keyCode)) return;
      // Блокируем всё, кроме цифр (клавиатура и numpad)
      if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });

    phoneInput.addEventListener('focus', function () {
      if (!this.value) this.value = '+7 (';
    });

    phoneInput.addEventListener('blur', function () {
      // Очищаем, если введено меньше 18 символов (неполный номер)
      const digits = this.value.replace(/\D/g, '');
      if (digits.length < 11) this.value = '';
    });
  }

  // ---- Модальное окно ----
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('show');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__overlay')) {
      modal.classList.remove('show');
    }
  });

  // ---- Отправка формы ----
  const form = document.querySelector('.modal__form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    const btn = this.querySelector('.modal__submit');

    btn.textContent = 'Отправляем...';
    btn.disabled = true;

    try {
      await fetch('http://localhost:8000/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs[0].value,
          phone: inputs[1].value,
          company: inputs[2].value,
          position: inputs[3].value,
        })
      });

      btn.textContent = 'Заявка отправлена!';

      setTimeout(() => {
        modal.classList.remove('show');
        btn.textContent = 'Отправить заявку';
        btn.disabled = false;
        form.reset();
      }, 2000);

    } catch {
      btn.textContent = '❌ Ошибка, попробуйте снова';
      btn.disabled = false;
    }
  });

});