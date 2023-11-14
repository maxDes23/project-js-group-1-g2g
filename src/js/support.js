import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const supOrgs = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../img/support/savechld.png', import.meta.url).href,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../img/support/hope.png', import.meta.url).href,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../img/support/united.png', import.meta.url).href,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../img/support/medical.png', import.meta.url).href,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../img/support/msf.png', import.meta.url).href,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../img/support/razom.png', import.meta.url).href,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../img/support/aah.png', import.meta.url).href,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../img/support/vision.png', import.meta.url).href,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../img/support/prytula.png', import.meta.url).href,
  },
];

supOrgs.sort((a, b) =>
  a.title === 'UNITED24' ? 1 : b.title === 'UNITED24' ? -1 : 0
);

const supportList = document.querySelector('.splide__list');
// console.log(supportList);

supOrgs.forEach(supOrg => {
  const li = `<li class="splide__slide">
    <a href="${supOrg.url}" target="_blank" rel="noopener noreferrer">
      <img src="${supOrg.img}" alt="${supOrg.title}" class="org-logo">
    </a>
  </li>`;

  supportList.insertAdjacentHTML('beforeend', li);
});

const slider = new Splide('#sliderOne', {
  perPage: 6,
  gap: '20px',
  pagination: false,
  direction: 'ttb',
  height: '292px',
  dynamicSlides: true,
  rewind: true,
  label: 'Support to Ukraine',
});

slider.mount();

const arrow = document.querySelector('.splide__arrow.splide__arrow--next');
const rotateSvg = document.getElementById('rotate-svg');
const originalSvg = rotateSvg.innerHTML;
const supportArrow = document.querySelector('.support-arrow-ico')


arrow.addEventListener('click', onArrowClick)
  
function onArrowClick() {

    const currentIcon = supportArrow.getAttribute('href')
    const parts = currentIcon.split('#');
    const path = parts[0];
    const currentFragment = parts[1];
    
    if (currentFragment === 'icon-ar-up') {
        supportArrow.setAttribute('href', path + '#icon-ar-down');
    } else {
        supportArrow.setAttribute('href', path + '#icon-ar-up');
    }
  }
