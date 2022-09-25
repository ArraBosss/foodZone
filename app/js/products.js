// const CATALOG = [

//   {
//     id: '001',
//     category: 'Пицца',
//     img: 'images/catalog/bbq-400x400.png',
//     name: 'BBQ',
//     description: 'Пицца на сливочной основе в сочетании с сыром, телятиной BBQ, беконом, шампиньонами, петрушкой и красным маринованным луком',
//     price: '215',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '002',
//     category: 'Пицца',
//     img: 'images/catalog/baffalo-400x400.png',
//     name: 'Баффало',
//     description: 'Пицца на томатной основе с моцареллой, говядиной, салями наполи, артишоками, базиликом и луком фри',
//     price: '205',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '003',
//     category: 'Пицца',
//     img: 'images/catalog/djavolo-400x400.png',
//     name: 'Дьяволо',
//     description: 'Пицца на томатной основе с моцареллой, салями наполи, луком, перцем чили и халапеньо',
//     price: '225',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '004',
//     category: 'Пицца',
//     img: 'images/catalog/dzhovanni-400x400.png',
//     name: 'Джованни',
//     description: 'Пицца на сливочной основе с моцареллой, грушей, кедровыми орешками, горгонзолой, базиликом и инжирным джемом',
//     price: '215',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '005',
//     category: 'Пицца',
//     img: 'images/catalog/chetyre-syra-400x400.png',
//     name: 'Четыре сыра',
//     description: 'Пицца на томатной или сливочной основе с моцареллой, горгонзолой, пармезаном и сыром фета',
//     price: '235',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '006',
//     category: 'Пицца',
//     img: 'images/catalog/margarita-400x400.png',
//     name: 'Маргарита',
//     description: 'Пицца на томатной основе с моцареллой и базиликом',
//     price: '185',
//     size: '30/40',
//     unit: 'см',
//     animation: 'rotate'
//   },

//   {
//     id: '007',
//     category: 'Сеты',
//     img: 'images/catalog/maxi-set-400x400.png',
//     name: 'Макси сет',
//     description: 'Феликс с тигровыми креветками, Филадельфия тунец, Ролл с гребешком, Унаги, Хьюстон и Гунканы с лососем, Гунканы с тунцом',
//     price: '900',
//     size: '1925',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '008',
//     category: 'Сеты',
//     img: 'images/catalog/tri-drakona-set-400x400.png',
//     name: 'Три дракона',
//     description: 'Зеленый, черный и красный драконы',
//     price: '650',
//     size: '835',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '009',
//     category: 'Сеты',
//     img: 'images/catalog/futomaki-set-400x400.png',
//     name: 'Футомаки сет',
//     description: 'Футомаки с лососем и тунцем, Балтимор с лососем, Тампопо',
//     price: '750',
//     size: '1200',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '010',
//     category: 'Роллы',
//     img: 'images/catalog/filadelfija-losos-400x400.png',
//     name: 'Филадельфия свежий лосось',
//     description: 'Лосось свежий, сыр филадельфия, икра тобико, огурец',
//     price: '250',
//     size: '300',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '011',
//     category: 'Роллы',
//     img: 'images/catalog/mito-tempura-tunec-400x400.png',
//     name: 'Мито темпура с тунцом',
//     description: 'Тунец, сыр филадельфия, авокадо, снежный краб, соус унаги',
//     price: '270',
//     size: '315',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '012',
//     category: 'Роллы',
//     img: 'images/catalog/nju-jork-400x400.png',
//     name: 'Нью-Йорк',
//     description: 'Лосось, сыр Филадельфия, авокадо, тобико, японский майонез',
//     price: '230',
//     size: '280',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '013',
//     category: 'Роллы',
//     img: 'images/catalog/unagi-400x400.png',
//     name: 'Унаги',
//     description: 'Угорь, лосось, огурец, сыр Филадельфия, соус унаги, кунжут',
//     price: '300',
//     size: '315',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '014',
//     category: 'Роллы',
//     img: 'images/catalog/california-losos-400x400.png',
//     name: 'Калифорния с лососем',
//     description: 'Лосось свежий, икра, авокадо, огурец, майонез японский',
//     price: '280',
//     size: '220',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '015',
//     category: 'Роллы',
//     img: 'images/catalog/hjuston-400x400.png',
//     name: 'Хьюстон',
//     description: 'Лосось, угорь, сыр Филадельфия, авокадо, соус унаги, кунжут',
//     price: '290',
//     size: '280',
//     unit: 'г',
//     animation: 'scale',
//     resize: 'product-card--resize'
//   },

//   {
//     id: '016',
//     category: 'Бургеры',
//     img: 'images/catalog/gamburger-400x400.png',
//     name: 'Гамбургер',
//     description: 'Бифштекс из натуральной говядины, лук, кусочек маринованного огурца, заправленные горчицей и кетчупом, в душистой булочке из пшеничной муки',
//     price: '69',
//     size: '100',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '017',
//     category: 'Бургеры',
//     img: 'images/catalog/chikenburger-400x400.png',
//     name: 'Чикенбургер',
//     description: 'Молотое куриное мясо в хрустящей панировке, и свежий салат, заправленный соусом, в булочке из пшеничной муки с семенами сезама',
//     price: '79',
//     size: '125',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '018',
//     category: 'Бургеры',
//     img: 'images/catalog/cheeseburger-400x400.png',
//     name: 'Чизбургер',
//     description: 'Бифштекс из натуральной говядины, сыр "Чеддер", кусочек маринованного огурца и лука, с горчицей и кетчупом, в булочке из пшеничной муки',
//     price: '89',
//     size: '120',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '019',
//     category: 'Бургеры',
//     img: 'images/catalog/royal-cheeseburger-400x400.png',
//     name: 'Рояль Чизбургер',
//     description: 'Бифштекс из натуральной говядины с кусочками сыра, заправленной горчицей, кетчупом, луком и двумя кусочкми маринованного огурчика',
//     price: '169',
//     size: '200',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '020',
//     category: 'Бургеры',
//     img: 'images/catalog/double-cheeseburger-400x400.png',
//     name: 'Дабл Чизбургер',
//     description: 'Два бифштекса из натуральной говядины, два кусочка сыра "Чеддер", лук, горчица, кетчуп, булочка',
//     price: '149',
//     size: '165',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '021',
//     category: 'Бургеры',
//     img: 'images/catalog/big-tasty-400x400.png',
//     name: 'Биг Тести',
//     description: 'Натуральная говядина в сочетании со свежими овощами и плавленым сыром Эмменталь',
//     price: '179',
//     size: '335',
//     unit: 'г',
//     animation: 'scale'
//   },

//   {
//     id: '022',
//     category: 'Паста',
//     img: 'images/catalog/bolognese-400x400.png',
//     name: 'Болоньезе',
//     description: 'Паста "Спагетти", соус "Болоньезе"(на основе говядины), перец черный, сыр "Пармезан"',
//     price: '169',
//     size: '290',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '023',
//     category: 'Паста',
//     img: 'images/catalog/carbonara-400x400.png',
//     name: 'Карбонара',
//     description: 'Паста "Спагетти", сливочный соус, бекон, сыр "Пармезан", перец черный',
//     price: '179',
//     size: '290',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '024',
//     category: 'Паста',
//     img: 'images/catalog/fettuccine-400x400.png',
//     name: 'Феттучини с лососем и грибами',
//     description: 'Феттучини, сливки, шампиньоны свежие, лосось, сыр "Пармезан"',
//     price: '199',
//     size: '300',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '025',
//     category: 'Салаты',
//     img: 'images/catalog/cezar-kurica-400x400.png',
//     name: 'Салат Цезарь',
//     description: 'Микс салата, яйцо перепелиное, помидор черри, куриное филе, бекон, пармезан, гренки, соус "Кобб"',
//     price: '169',
//     size: '350',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '026',
//     category: 'Салаты',
//     img: 'images/catalog/greek-400x400.png',
//     name: 'Салат Греческий',
//     description: 'Микс салата, помидор, огурец, болгарский перец, лук, сыр фета, маслины, прованские травы, соус "Италия"',
//     price: '145',
//     size: '350',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '027',
//     category: 'Салаты',
//     img: 'images/catalog/roast-beef-400x400.png',
//     name: 'Cалат с Ростбифом',
//     description: 'Телятина, битые огурцы, морковь, перец болгарский, сельдерей, листья шпината, руколы и салата айсберг, помидоры черри, соус "Тайский"',
//     price: '179',
//     size: '280',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '028',
//     category: 'Салаты',
//     img: 'images/catalog/cobb-400x400.png',
//     name: 'Кобб салат с курицей гриль',
//     description: 'Kуриная грудка-гриль, зерна кукурузы гриль, томаты, сыр с голубой плесенью, листья руколы, шпината и салата айсберг, заправка на основе французской горчицы',
//     price: '149',
//     size: '420',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '029',
//     category: 'Салаты',
//     img: 'images/catalog/chicken-mango-400x400.png',
//     name: 'Чике-манго салат',
//     description: 'Kуриная грудка-гриль, зерна кукурузы гриль, томаты, сыр с голубой плесенью, листья руколы, шпината и салата айсберг, заправка на основе французской горчицы',
//     price: '179',
//     size: '410',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '030',
//     category: 'Салаты',
//     img: 'images/catalog/pineapple-chutney-400x400.png',
//     name: 'Салат с ананасовым чатни',
//     description: 'Запеченое куриное филе, сыр Бри, обжаренный ананас с яблоком, имбирем, корицей и медом, а так же листья рукколы, шпината и салата айсберг, клюквенный соуc',
//     price: '159',
//     size: '400',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '031',
//     category: 'Снэки',
//     img: 'images/catalog/french-fries-400x400.png',
//     name: 'Картофель фри',
//     description: 'Порция хрустящих, золотистых, обжаренных в растительном фритюре и слегка посоленных соломок отборного картофеля',
//     price: '39',
//     size: '200',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '032',
//     category: 'Снэки',
//     img: 'images/catalog/chicken-strips-400x400.png',
//     name: 'Куриные стрипсы',
//     description: 'Кусочки 100% сочной, нежной курятины в хрустящей панировке',
//     price: '69',
//     size: '250',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '033',
//     category: 'Снэки',
//     img: 'images/catalog/rustic-potatoes-400x400.png',
//     name: 'Картофель по-деревенски',
//     description: 'Вкусные, обжаренные в растительном фритюре ломтики отборного картофеля со специями',
//     price: '49',
//     size: '250',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '034',
//     category: 'Десерты',
//     img: 'images/catalog/ice-cream-choko-400x400.png',
//     name: 'Мороженое Шоколадное',
//     description: 'Мороженое, политое нежным шоколадным топингом',
//     price: '59',
//     size: '50',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '035',
//     category: 'Десерты',
//     img: 'images/catalog/ice-cream-straw-400x400.png',
//     name: 'Мороженое Клубничное',
//     description: 'Мороженое, политое сладким клубничным топингом',
//     price: '59',
//     size: '50',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '036',
//     category: 'Десерты',
//     img: 'images/catalog/ice-cream-caram-400x400.png',
//     name: 'Мороженое Карамельное',
//     description: 'Мороженое, политое нежным карамельным топингом',
//     price: '59',
//     size: '50',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '037',
//     category: 'Напитки',
//     img: 'images/catalog/pina-colada-400x400.png',
//     name: 'Пина-колада',
//     description: 'Ром светлый - 50 мл, кокосовое молоко - 30 мл, сок ананасовый - 50 мл',
//     price: '89',
//     size: '130',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '038',
//     category: 'Напитки',
//     img: 'images/catalog/mojito-400x400.png',
//     name: 'Мохито',
//     description: 'Ром светлый - 45 мл, сок лайма - 20 мл, мята - 6 веточек, сироп сахарный - 10 мл, содовая - доверху',
//     price: '79',
//     size: '200',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '039',
//     category: 'Напитки',
//     img: 'images/catalog/sex-on-the-beach-400x400.png',
//     name: 'Секс на пляже',
//     description: 'Водка - 40 мл, щнапс персиковый - 20 мл, сок клюквенный - 40 мл, сок апельсиновый - 40 гр',
//     price: '99',
//     size: '140',
//     unit: 'г',
//     animation: 'rotate'
//   },

//   {
//     id: '040',
//     category: 'Напитки',
//     img: 'images/catalog/cola-05-400x400.png',
//     name: 'Кока-кола',
//     description: 'Прохладительный газированный напиток «Кока-Кола»',
//     price: '39',
//     size: '0.5',
//     unit: 'л',
//     animation: 'rotate'
//   },

//   {
//     id: '041',
//     category: 'Напитки',
//     img: 'images/catalog/sprajt-05-400x400.png',
//     name: 'Спрайт',
//     description: 'Прохладительный газированный напиток «Спрайт»',
//     price: '39',
//     size: '0.5',
//     unit: 'л',
//     animation: 'rotate'
//   },

//   {
//     id: '042',
//     category: 'Напитки',
//     img: 'images/catalog/fanta-05-400x400.png',
//     name: 'Фанта',
//     description: 'Прохладительный газированный напиток «Фанта»',
//     price: '39',
//     size: '0.5',
//     unit: 'л',
//     animation: 'rotate'
//   },

// ];

// // const productsBlock = document.querySelector('.popular');



// // class Products {

// //   render() {

// //     let htmlcatalog = '';


// //     CATALOG.forEach(({ id, img, name, description, price, size, unit }) => {
// //       htmlcatalog += `
// //       <li class="popular__item">
// //                 <article class="product-card">
// //                   <a class="product-card__link animation" href="#">
// //                     <img class="product-card__img product-card__img--rotate" src="${img}"
// //                       alt="Фото ${name}">
// //                   </a>

// //                   <div class="product-card__inner">
// //                     <a class="product-card__name animation" href="#">
// //                       <h3 class="product-card__title">
// //                       ${name}
// //                       </h3>
// //                     </a>
// //                   </div>

// //                   <div class="product-card__description">
// //                     <p>
// //                     ${description}
// //                     </p>
// //                   </div>

// //                   <div class="product-card__row">
// //                     <span class="product-card__price">${price}
// //                       <span class="product-card__currency">грн.</span>
// //                     </span>

// //                     <span class="product-card__weight">${size}
// //                       <span>${unit}</span>
// //                     </span>
// //                   </div>

// //                   <button class="product-card__btn button" type="button">Выбрать</button>
// //                 </article>
// //               </li>
// //       `;

// // const html = `
// // <ul class="popular__list">
// // ${htmlcatalog}
// // </ul>
// // `;

// // productsBlock.innerHTML = html;

// //     });

// //   }
// // }

// // const productPage = new  Products();
// // productPage.render();


// let categories = [];

// CATALOG.forEach(item => categories.push(item.category));

// let categoriesArr = [...new Set(categories)];

// categoriesArr = categoriesArr.map(item => {
//   let btn = `<li class="kitchen__item">
// <button class="kitchen__btn category-btn animation" data-category="${item}">${item}</button></li>`;
//   return btn;
// });

// const kitchenBtn = document.querySelector('.kitchen__list');
// const productsBox = document.querySelector('.popular__list');

// function init() {

//   // kitchenBtn.innerHTML = categoriesArr;
//   // productsBox.innerHTML = showProducts ();

//   categoriesArr.forEach(item => {
//     kitchenBtn.insertAdjacentHTML('beforeend', item);
//   });

//   kitchenBtn.addEventListener('click', (e) => {
//     let target = e.target;
//     if (target && target.classList.contains('category-btn')) {
//       console.log(target.getAttribute('data-category'));
//       showProducts(target.getAttribute('data-category'));
//     }
//   });

//   showProducts();
  
// }

// init();

// function showProducts(currentCat = 'Пицца') {
//   products = CATALOG.filter(item => {
//     if (item.category === currentCat) {
//       return item;
//     }
//   });

//   let cards = products.map(item => {
//     let { id, name, img, description, price, size, unit, animation, resize } = item;

//     return `
//     <li class="popular__item">
//     <article class="product-card ${resize}">
//       <a class="product-card__link animation" href="#">
//         <img class="product-card__img product-card__img--${animation}" src="${img}"
//           alt="Фото ${name}">
//       </a>

//       <div class="product-card__inner">
//         <a class="product-card__name animation" href="#">
//           <h3 class="product-card__title">
//           ${name}
//           </h3>
//         </a>
//       </div>

//       <div class="product-card__description">
//         <p>
//         ${description}
//         </p>
//       </div>

//       <div class="product-card__row">
//         <span class="product-card__price">${price}
//           <span class="product-card__currency">грн.</span>
//         </span>

//         <span class="product-card__weight">${size}
//           <span>${unit}</span>
//         </span>
//       </div>

//       <button class="product-card__btn button" type="button">Выбрать</button>
//     </article>
//   </li>
//     `;
//   });

//   productsBox.innerHTML = '';

//   cards.forEach(item => {
//     productsBox.insertAdjacentHTML('beforeend', item);
//   });
// }
