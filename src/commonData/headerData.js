const MenuItem = function(item, href, incl, hrefs) {
    this.item = item;
    this.href = href;
    this.incl = incl;
    this.hrefs = hrefs;
  }
const menuRus = [
    new MenuItem('О нас', '/mock-address/change-me'),
    new MenuItem('Услуги', '/mock-address/change-me', ['Услуга 1', 'Услуга 2', 'Услуга 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
    new MenuItem('Вакансии', '/mock-address/change-me'),
    new MenuItem('Новости', '/mock-address/change-me'),
    new MenuItem('Соглашения', '/mock-address/change-me', ['Соглашение 1', 'Соглашение 2', 'Соглашение 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
  ];
  const menuEng = [
    new MenuItem('Home', '/mock-address/change-me'),
    new MenuItem('About Us', '/mock-address/change-me'),
    new MenuItem('Services', '/mock-address/change-me', ['Service 1', 'Service 2', 'Service 3'], ['/mock-address/change-me', "/mock-address/change-me", '/mock-address/change-me']),
    new MenuItem('Careers', '/mock-address/change-me'),
    new MenuItem('News', '/mock-address/change-me'),
    new MenuItem('Documentation', '/mock-address/change-me')
  ];
  const markupEng1 = {
    cl: '',
    menu: menuEng,
    btn1: 'Login',
    href1: '/mock-address/change-me',
    btn2: 'Register',
    href2: '/mock-address/change-me',
    login: 1
  }
  const markupEng2 = {
    cl: '',
    menu: menuEng,
    btn1: 'Login',
    href1: '/mock-address/change-me',
    btn2: 'Register',
    href2: '/mock-address/change-me'
  }
  const markupRus = {
    cl: '',
    menu: menuRus,
    btn1: 'войти',
    href1: 'sign-in.html',
    btn2: 'зарегистрироваться',
    href2: 'registration.html'
  }
const headerData = {
  markupEng1,
  markupEng2,
  markupRus
}
console.log(JSON.stringify(headerData));
const json = JSON.stringify(headerData);
const jsonParse = JSON.parse(json);
console.log(jsonParse);