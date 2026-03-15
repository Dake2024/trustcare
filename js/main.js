document.addEventListener('DOMContentLoaded', () => {

  // ---- Мобильное меню ----
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  // ---- FAQ Аккордеон ----
  // Клик закрывает открытый или открывает закрытый
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
      // Убираем активный только у кнопок в той же карточке
      const card = btn.closest('.pricing-card');
      card.querySelectorAll('.pricing-vol').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
  const reviewsData = [

  ];

  // ---- Стрелки в отзывах ----
  // Данные отзывов — потом заменить на реальные


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
        text: 'С TrustMe мы работаем с 2023 года.В один-два клика мы составляем договор с пациентом, где всё приходит сообщением онлайн на телефон пациента. Он может сразу же ознакомиться с ним и подписать путём сообщения либо через eGov. Всё доступно, всё понятно. Это облегчило нам работу. Спасибо вам, что вы есть.',
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
    if (videoFrame) {
      videoFrame.src = r.video;
    }
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


  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");

  document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("show");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__overlay")) {
      modal.classList.remove("show");
    }
  });

}); // закрывает DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pricing-vol");

  console.log("buttons found:", buttons.length);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pricing-card");
      const price = card.querySelector(".pricing-card__num");

      card.querySelectorAll(".pricing-vol").forEach((b) => {
        b.classList.remove("is-active");
      });

      btn.classList.add("is-active");
      price.textContent = btn.dataset.price;

      console.log("new price:", btn.dataset.price);
    });
  });
});