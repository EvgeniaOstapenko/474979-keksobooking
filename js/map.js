

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

var arr = [];

for (i = 1; i <= 8; i++) {
  var index = random(1,8);
  var obj = {
    "author": {
      "avatar": 'img/avatars/user0' + i + '.png'
    },

	"location":{
	 "x":random(300, 900),
	 "y":random(100, 500)
   },
   
    "offer": {
      "title":title[index],
      "address": function() {
		  return location.x.toString()+', '+location.y.toString()
	  },
      "price": random(1000, 1000000),
      "type":type[index] ,
      "rooms": random(1, 5),
      "guests": random(1, 8),
      "checkin":checkin[index],
      "checkout":checkout[index],
      "features":features[index],
      "description":'',
      "photos":[],
   }
   
  };
  
  arr.push(obj);
};


var el = document.querySelector(".map--faded");
el.classList.remove("map--faded");

var fragment = document.createDocumentFragment();

for (i = 0; i < 8; i++){	
	
	var button = document.createElement("button");
	button.className = "map__pin";
	button.setAttribute("style", "left:" + arr[i].location.x + 'px' + ", top:" + arr[i].location.y + 'px');

	var img = document.createElement("img");
	img.setAttribute("scr", arr[i].author.avatar);
	img.setAttribute("width", "40");
	img.setAttribute("height", "40");
	img.setAttribute("draggable","false");
	
	button.appendChild(img);
	
	fragment.appendChild(button);
};

var insertEl = document.querySelector(".map__pins");
insertEl.appendChild(fragment); 















