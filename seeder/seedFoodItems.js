const mongoose = require('mongoose')
const FoodItem = require('../models/foodItem')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const foodItems = [
  {
    name: 'Arepas',
    price: 8.99,
    picture:
      'https://cdn.vox-cdn.com/thumbor/2pllrrWb0RBDkxpUeDBFoPN__kE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22872590/VICTA_EATER_AT_HOME_VENEZUELAN_AREPAS__1.jpg',
    description:
      'An Arepa is a corn griddle cake made from pre-cooked cornmeal, it is very popular in Venezuela and Colombia, where it is served daily with a variety of toppings to complement them. They were traditionally prepared in a pan known as a budare. However, they can be grilled, fried, or baked as well.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Empanadas',
    price: 4.99,
    picture:
      'https://i0.wp.com/nextpittsburgh.com/wp-content/uploads/2019/04/empanadas-at-Pabellon_used-by-permission.jpg?fit=750%2C658&ssl=1',
    description:
      'Basically, a Venezuelan Empanada is made with corn dough, then stuffed with anything you can imagine (chicken, meat, cheeses, cazón (shark), black beans, ham, etc.), and then deep-fried.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Cachapas',
    price: 15.99,
    picture:
      'https://www.thefoodwonder.com/wp-content/uploads/2020/08/cachapa_vs_arepa.jpg',
    description:
      'Crispy on the outside and tender on the inside, Cachapas are savory-sweet corn pancakes, a traditional street food in Venezuela. They are typically eaten with queso de mano (a popular Venezuelan fresh cheese which origin dates from approximately the 16th century), fried pork chops, or just butter.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Hallacas',
    price: 8.99,
    picture:
      'https://imgmedia.larepublica.pe/640x377/larepublica/migration/images/7F5UWCI26ZCPVLRVODF622BPYA.webp',
    description:
      'Hallaca is a traditional dish from Venezuela that is served during Christmastime. It is one of the many types of tamal that exist throughout America, although different in flavor, texture, ingredients, and cultural significance than the other ones. It consists of a corn flour dough seasoned with chicken or chicken broth and pigmented with onoto or achiote, stuffed with beef, pork and chicken stew, to which olives, raisins, capers, paprika and onion are added. Hallacas are wrapped in banana leaves instead of corn husks.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Pabellón Criollo',
    price: 16.99,
    picture:
      'https://www.goya.com/media/4098/venezuelan-shredded-beef.jpg?quality=80',
    description:
      "Pabellón Criollo is a traditional Venezuelan recipe and Venezuela's national dish made with shredded beef that is typically served with white rice, black beans and fried plantains. It's basically the local version of the rice and beans combination found throughout the Caribbean.",
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Asado Negro',
    price: 16.99,
    picture:
      'https://4.bp.blogspot.com/-wEzJ85pVkI4/WkUNbBkBzBI/AAAAAAAAG10/_8-Jc_BU-9ISZ_iUDCy2IZ9W650azP5oQCLcBGAs/s1600/sado-negro-venezolano-muchacho.jpg',
    description:
      "Asado Negro is one of the most traditional dishes in Venezuela. It’s an eye-round roast slow cooked in a slightly sweet and super flavorful dark sauce. Each Venezuelan family has their own version, but it's usually served with white rice and fried plantains. It's perfect for a Holiday party or Sunday family dinner.",
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Sancocho',
    price: 12.99,
    picture:
      'https://hispanickitchen.com/wp-content/uploads/2023/03/Sancocho-Venezolano.jpg',
    description:
      'The Venezuelan Sancocho is a soup made with short beef ribs, big fat carrots, potatoes, pumpkin, corn, and yuca (cassava), adding lots of cilantro and lime. You often eat Sancocho with Arepas. And this soup will warm your insides, cure what ails you, and definitely take care of a hangover.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Pan de Jamón',
    price: 13.99,
    picture:
      'https://media.istockphoto.com/id/636078920/photo/christmas-loaf-pan-de-jamon-close-up-horizontal.jpg?s=612x612&w=0&k=20&c=naCVnBR-bPbKeudpscQdasip5Se7ZEO-z3Imx7_NUOk=',
    description:
      'Pan de Jamón (Venezuelan Ham Bread) is a savory rolled bread that is a staple on Venezuelan tables during the December holiday season. A simple filling of ham, raisins, and olives. That’s all that is traditionally rolled into this soft and slightly sweet dough. Its robust flavors are a unique tribute to Venezuelan culture.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Patacón',
    price: 10.99,
    picture:
      'https://assets.change.org/photos/5/ok/fx/bCOkfXIkUoiLjkl-800x450-noPad.jpg?1589312495',
    description:
      '"Patacón Maracucho" or simply "Patacón" (Fried Plantain Sandwich) is a Venezuelan specialty that consists of layers of meat, vegetables, and different sauces sandwiched between fried, flattened, and refried plantains. Its full name identifies its birthplace as the Venezuelan city of Maracaibo.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Pasticho',
    price: 10.99,
    picture:
      'https://cocina-casera.com/wp-content/uploads/2018/04/Pasticho-o-lasa%C3%B1a-al-estilo-venezolano.jpg',
    description:
      'Pasticho is the Venezuelan version of Italian lasagna or Greek pastitsio. Layers of pasta, bolognese sauce, bechamel, mozzarella cheese, ham and topped with a lot of parmesan cheese. A scrumptious, indulgent and filling dinner.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Pisca Andina',
    price: 9.99,
    picture:
      'https://images.squarespace-cdn.com/content/v1/55e1863be4b00445ea1a172c/1571953931005-1V6G9VX5IWNJZC68G0H3/IMG_8228.jpeg',
    description:
      'The Andean Soup called “Pisca Andina” is usually eaten as part of breakfast or dinner in the Andean Region of Venezuela. It consists of potatoes, milk, eggs, fresh cheese and is flavored with cilantro; it can be accompanied with an arepa or saltines and black coffee or milk.',
    meal: 'Entree',
    reviews: []
  },
  {
    name: 'Golfeados',
    price: 5.99,
    picture:
      'https://www.seriouseats.com/thmb/bKNO2_fq5pQbWbSwbN9mjSw_OpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2011__11__20111118-127677-Dulces-Golfeados-PRIMARY-dc857b42a0f94047b79d8dcb5807db41.jpg',
    description:
      "Golfeados are a Venezuelan pastry. It's in effect our version of sticky buns but with a couple of distinct twists. The filling is not just butter and sugar, there's also cheese in there, and they're made with panela (raw hardened unrefined cane sugar juice) instead of regular sugar. Plus, these sweet rolls are usually flavored with anise.",
    meal: 'Dessert',
    reviews: []
  },
  {
    name: 'Quesillo',
    price: 15.99,
    picture:
      'https://www.recetasjudias.com/wp-content/uploads/2015/12/Flan-Quesillo.jpg',
    description:
      'Quesillo is a very popular flan in Venezuela. This traditional Venezuelan dessert consists mainly of eggs, milk, condensed milk, caramelized sugar and vanilla extract. It is usually prepared in a large tin, at the bottom of which a thin layer of caramel has been placed beforehand. It is often eaten for birthdays and traditional celebrations. Traditionally, it is cooked in the oven in a bain-marie for an hour.',
    meal: 'Dessert',
    reviews: []
  },
  {
    name: 'Dulce de Lechosa',
    price: 4.99,
    picture:
      'https://www.laylita.com/recetas/wp-content/uploads/2021/03/Receta-del-dulce-de-lechosa-o-papaya.jpg',
    description:
      'Dulce de Lechosa (Candied Papaya) is a very delicious sweet made with green Papaya and a rich spiced syrup, an it is part of our Venezuelan Christmas traditions.',
    meal: 'Dessert',
    reviews: []
  },
  {
    name: 'Palmeritas',
    price: 5.99,
    picture:
      'https://honestcooking.com/wp-content/uploads/2013/01/Palmeritas-de-Papel%C3%B3n-Recipe1.jpg',
    description:
      'Palmeritas are a very popular sweet in all bakeries and pastry shops in Venezuela. The base of this sweet is puff pastry, a dough of flour and butter (margarine or lard) made by layering many thin sheets. The palmerita was originally a French specialty (in French, palmier). Palmeritas are usually around an inch thick and have a specific heart shape.',
    meal: 'Dessert',
    reviews: []
  },
  {
    name: 'Majarete',
    price: 5.99,
    picture:
      'https://ultimasnoticias.com.ve/wp-content/uploads/2020/07/PAGMajarete.jpg',
    description:
      'In Venezuela, Majarete is like a corn-coconut pudding made with cornflour and coconut milk. It also has a little bit of papelon (brown sugar cane), which adds a unique flavor. The Venezuelan Majarete custard is so creamy, and the cinnamon and nutmeg added to it make the dessert so aromatic.',
    meal: 'Dessert',
    reviews: []
  },
  {
    name: 'Cocada',
    price: 2.99,
    picture:
      'https://cdn.shopify.com/s/files/1/0606/8113/files/COCADA03.jpg?v=1491588957',
    description:
      'Cocada (Frozen Coconut Smoothie) is a traditional Venezuelan frozen drink that is made with fresh coconut meat, milk, and sweetened condensed milk, then sprinkled with cinnamon and drizzled with more sweetened condensed milk.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Tizana',
    price: 2.99,
    picture: 'https://titicrafty.com/wp-content/uploads/2014/02/DSC_4227.jpg',
    description:
      'The Venezuelan tizana is a super-flex fruit punch for any kind of gathering. It is beautiful, colorful, fruit filled and loved by all ages. As you may or may not know, in Venezuela we have summer-like weather all year long, so this drink is very popular.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Chicha',
    price: 2.99,
    picture:
      'https://hispanickitchen.com/wp-content/uploads/2016/06/ChichaVenezolanaDef_2848-e1465910415905.jpg',
    description:
      'A Venezuelan Chicha is a super thick drink made with rice and milk. It is dense and if you add a lot of ice you get a refreshing and fulfilling drink that tastes like heaven. This popular drink is loved by people of all ages; some like to liven up their chicha by adding condensed milk or cinnamon once it’s ready.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Malta',
    price: 3.99,
    picture:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/28077122/3404908380.jpg',
    description:
      'Malta is a kind of soda drink. It is a carbonated malt drink, that is, it is prepared from barley, hops and water like beer; it can also carry corn and caramel color. However, malt does not contain alcohol and is consumed in the same way as soda or cola in its original carbonated form and, to some extent, as iced tea in non-carbonated form.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Frescolita',
    price: 3.99,
    picture:
      'https://www.etniassaboresdelmundo.com/wp-content/uploads/2020/09/frescolita-lata.jpg',
    description:
      'Frescolita is a carbonated drink, it has a reddish color and is sweet. Its taste is like a combination of cream soda and gum flavor. Well-known among the Venezuelan community.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Papelón con Limón',
    price: 2.99,
    picture:
      'https://comidasvenezolanas.org/wp-content/uploads/2021/02/papelon-con-limon_700x466.jpg',
    description:
      'Papelón con Limón (Panela with Lemon) is a refreshing Venezuelan beverage made with panela (raw hardened sugar cane juice), water and lemon or lime juice. It is usually served during the hottest hours of the day, and commonly offered with traditional Venezuelan food.',
    meal: 'Drink',
    reviews: []
  },
  {
    name: 'Pastelitos',
    price: 4.99,
    picture:
      'https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/c/3b/c3b8a95e-7fa4-11ec-b235-bf7f8183f711/61f2ee5b37dd1.image.jpg?resize=1200%2C800',
    description:
      'Venezuelan Fried Pastries best called "Pastelitos", are among the most beloved street food options in Venezuela. Venezuelans eat these flaky wheat-based pastries for breakfast, dinner, or as a snack or as "pasapalos" (appetizers) at parties. They are super versatile and can be filled with almost anything, (cheese, beef, chicken, rice and meat or seafood stews).',
    meal: 'Appetizer',
    reviews: []
  },
  {
    name: 'Tequeños',
    price: 5.99,
    picture:
      'https://travelfoodatlas.com/wp-content/uploads/2022/11/Venezuelan-Tequeno-735x509.jpg',
    description:
      "Tequeños are a popular meal or snack in Venezuela. They are basically white cheese sticks wrapped with a crunchy and slightly sweet dough. And as most delicious things, Tequeños are fried. Most Venezuelans might feel offended when somebody compares this deliciousness with 'Cheese Sticks' or 'Mozzarella Sticks' because Tequeños are somehow unique.",
    meal: 'Appetizer',
    reviews: []
  },
  {
    name: 'Tostones',
    price: 3.99,
    picture:
      'https://www.sidechef.com/recipe/dfa88c56-4832-4102-b52e-24bc56178be6.jpg?d=1408x1120',
    description:
      'Tostones are made with green plantain slices fried in oil, then flattened and fried again. You can have them just seasoned with salt and fresh garlic, and also you can put on the top coleslaw salad, and they are also traditional ly eaten in the Venezuelan coast with fried fish.',
    meal: 'Appetizer',
    reviews: []
  },
  {
    name: 'Mandocas',
    price: 3.99,
    picture:
      'https://i0.wp.com/guavabykeyma.com/wp-content/uploads/2021/07/20210627_011726709_iOS-scaled.jpg?fit=2560%2C1920&ssl=1',
    description:
      'Mandocas are flavored corn fritters that are deep-fried cornmeal rings. These tasty treats are usually served at breakfast and eaten with butter and cheese while still hot. They are made with papelon or brown sugar cane, allspice, cinnamon, anise seeds, white cornmeal, and plantains.',
    meal: 'Appetizer',
    reviews: []
  }
]

async function seedDB() {
  await FoodItem.deleteMany({})
  await FoodItem.insertMany(foodItems)
}

seedDB().then(function () {
  mongoose.connection.close()
})
