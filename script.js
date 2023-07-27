function createelement(tagname,attrname1,attrvalue1,attrname2, attrvalue2, attrname3, attrvalue3, attrname4, attrvalue4,attrname5, attrvalue5, attrname6, attrvalue6, attrname7, attrvalue7){
  var element = document.createElement(tagname);
  element.setAttribute(attrname1,attrvalue1);
  element.setAttribute(attrname2,attrvalue2);
  element.setAttribute(attrname3,attrvalue3);
  element.setAttribute(attrname4,attrvalue4);
  element.setAttribute(attrname5,attrvalue5);
  element.setAttribute(attrname6,attrvalue6);
  element.setAttribute(attrname7,attrvalue7);

  return element;
}

function country(){
  var res = fetch("https://restcountries.com/v3.1/all");
  res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length;i++){

      var box = createelement("div","class","box")
    var con = createelement("div","class","container text-center");
var row = createelement("div","class","row");
var col = createelement("div","class","col col-lg-4 col-sm-12");
var card = createelement("div","class","card");

var cardheader = createelement("div","class","card-header");
var h4 = createelement("h4","class","country");
h4.innerHTML = `${data1[i].name.common}`

var cardbody = createelement("div","class","card-body");
var img = createelement("img","src",`${data1[i].flags.png}`);

var cap = createelement("p","class","capital");
cap.innerHTML = `Capital: ${data1[i].capital}`

var reg = createelement("p","class","region");
reg.innerHTML = `Region: ${data1[i].region}`

var concode = createelement("p","class","concode");
concode.innerHTML = `Country Codes: ${data1[i].cca2} , ${data1[i].cca3} , ${data1[i].ccn3} & ${data1[i].cioc}`

var latlng = createelement("p","class","latlng");
latlng.innerHTML =`Lat&Lng: ${data1[i].latlng}`

var cardfoot = createelement("div","class","card-foot")

var button = createelement("button","type","button","onclick",`weather(${data1[i].latlng})`,"class","btn btn-primary");
button.innerHTML = "Click for Weather";



box.append(con)
con.append(row);
row.append(col);
col.append(card);
card.append(cardheader);


cardheader.append(h4);

card.append(cardbody);

cardbody.append(img);
cardbody.append(cap);
cardbody.append(reg);
cardbody.append(concode);
cardbody.append(latlng);

card.append(cardfoot)
cardfoot.append(button);


document.body.append(box);

    }
  })
  .catch(error=>{
    console.log(error);
  })
}
country();


function weather(lat,lon){
  var wthr = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20bf4bd158e253e914576847478e37ed`);

  wthr.then((ele)=>ele.json()).then((ele1)=>{ 
 
    var temp= `Temperature: ${ele1.main.temp}`
    var feelslike= `Feels_like: ${ele1.main.feels_like}`
    var tempmin= `Temp_min: ${ele1.main.temp_min}`
    var tempmax= `Temp_max: ${ele1.main.temp_max}`
    var pressure= `Pressure: ${ele1.main.pressure}`
    var humidity= `Humidity: ${ele1.main.humidity}`
    var sealevel= `Sea_level: ${ele1.main.sea_level}`
    var groundlevel= `Ground_level: ${ele1.main.grnd_level}`

    var weatherinfo = `${temp}\n${feelslike}\n${tempmin}\n${tempmax}\n${pressure}\n${humidity}\n${sealevel}\n${groundlevel}`
       alert(weatherinfo);
     })
     .catch(error=>{
      console.log("Fetching Weather data error: ",error);
     });
}
