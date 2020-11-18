const ratingMIN = 1;
const ratingMAX = 5;

const offersQantity = 100;

const Time = {
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
  YEAR: 365 * 24 * 60 * 60 * 1000,
};


const PEOPLE = [
  `Tim Macoveev`,
  `John Doe`,
  `Ivan Ivanov`,
  `Sergey Petrov`,
  `Nikolai Sergeev`,
  `Quentin Tarantino`,
  `Penelopa Cruz`,
  `Anthony Mann`,
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Mary Beth`,
  `Dan Duryea`,
];

const sentences = [
  `Lovely place, really quiet and relaxing.`,
  `The place is good!`,
  `The terrace looks better than in pictures.`,
  `Perfect view for breakfast.`,
  `A few supermarkets near by, easy to park if you come by car, easy walk to beach - around 20 min.`,
  `The apartment was first class and we had a wonderful time there.`,
  `Such a perfect apartment, very clean and well equipped, really good WiFi.`,
  `A new spacious apartment in a mics area with shared pool.`,
  `This place is amazing, nice and clean room, fantastic pool and view to the city, we really enjoy it there, thanks Silke.`,
  `Lovely place with a beautiful pool 2 metres from the house :) `,
  `The place was nice, clean and on a great location.`,
];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (min = 0, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getReview = () => ({
  avatar: `img/avatar-max.jpg`,
  rating: getRandomNumber(ratingMIN, ratingMAX),
  comment: getRandomItem(sentences),
  author: getRandomItem(PEOPLE),
  date: Date.now() - getRandomNumber(0, Time.MONTH),
});

const loadReviews = (num = 5) => Array.from({length: num}, getReview);

const loadReviewsArray = (leng) => {
  const arr = [];
  for (let i = 0; i < leng; i++) {
    arr.push({
      id: i + 1,
      reviews: loadReviews()
    });
  }
  return arr;
};

export default loadReviewsArray(offersQantity);
