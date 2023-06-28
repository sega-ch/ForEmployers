import Portfolio from "./Components/Portfolio/Portfolio";


function App() {

  // const item = {
  //   brand: 'Tiger of Sweden',
  //   title: 'Leonard coat',
  //   description: 'Minimalistic coat in cotton-blend',
  //   descriptionFull: "Men\\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  //   price: 399,
  //   currency: '£'
  // }

  // const messages = [{
  //   id: 'chat-5-1090',
  //   from: { name: 'Ольга' },
  //   type: 'response',
  //   time: '10:10',
  //   text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  // }, {
  //   id: 'chat-5-1091',
  //   from: { name: 'Виктор' },
  //   type: 'message',
  //   time: '10:12',
  //   text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  // }, {
  //   id: 'chat-5-1092',
  //   from: { name: 'Ольга' },
  //   type: 'response',
  //   time: '10:14',
  //   text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  // }, {
  //   id: 'chat-5-1093',
  //   from: { name: 'Виктор' },
  //   type: 'message',
  //   time: '10:20',
  //   text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
  // }, {
  //   id: 'chat-5-1094',
  //   from: { name: 'Виктор' },
  //   type: 'typing',
  //   time: '10:31'
  // }];


  
  const objects = [
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
    },
  ];

  return (
    <div className="App">
     
     <Portfolio portfolio={objects}/>

    </div>
  );
}

export default App;
