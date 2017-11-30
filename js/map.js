

var random = function(min, max) {
  return Math.random() * (max - min) + min;
};

var title = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец",
  "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var type = ["flat", "house", "bungalo"];
var checkin = ["12:00", "13:00", "14:00"];
var checkout = ["12:00", "13:00", "14:00"];
var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

for (i = 1, i <= 8, i++) {
  var index = random(1,8);
  var obj = {
    "author": {
      "avatar": 'img/avatars/user0' + i + '.png'
    },

    "offer": {
      "title":title[index],
      "address": location.x.toString()+', '+location.y.toString(),
      "price": random(1000, 1000000),
    "type":type[index] ,
    "rooms": random(1, 5),
  "guests": random(1, 8),
  "checkin":checkin[index],
    "checkout":checkout[index],
    "features":features[index],
    "description":'',
    "photos":[],
   },

  "location":{
    "x":random(300, 900),
    "y":random(100, 500)
  }
 };
};

.map.classList.remove('map--faded');


