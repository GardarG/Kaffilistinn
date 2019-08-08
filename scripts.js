var df = []
var parseDate = d3.timeParse("%d. %m %Y");
var Names = [];
var Dates = [];
var DateDiff = [];
var posX = 0;

df.forEach(function(d) {
  d.Dagur = parseDate(d.Dagur);
  // d.Dagur = formatTime(d.Dagur);
});



var today = new Date();
today.setHours(0, 0, 0, 0)

d3.csv("Kaffilisti.csv").then(function(data) {
  df = data;

  df.forEach(function(d) {
    Dates.push(parseDate(d.Dagur));
    Names.push(d.Nafn);
    DateDiff.push(parseDate(d.Dagur) - today);
  });

  function findFirstPos(x) {
    return x >= 0
  };


  posX = DateDiff.findIndex(findFirstPos)
  // document.getElementById("Nafn").innerHTML = Names[posX];
  // document.getElementById("Dagur").innerHTML = Dagsetning(Dates[posX]);

  document.getElementById("now").innerHTML = Dagsetning(Dates[posX]) + ': ' + Names[posX];
  document.getElementById("next").innerHTML = Dagsetning_frid(Dates[posX+1]) + ': ' + Names[posX+1] + ' <br /> <br />' +
    Dagsetning_frid(Dates[posX+2]) + ': ' + Names[posX+2];



});

function Dagsetning(d) {
  switch (d.getMonth() + 1) {
    case 1:
      return 'Föstudagurinn, ' + d.getDate() + '. Janúar, ' + d.getFullYear();
      break;
    case 2:
      return 'Föstudagurinn, ' + d.getDate() + '. Febrúar, ' + d.getFullYear();
      break;
    case 3:
      return 'Föstudagurinn, ' + d.getDate() + '. Mars, ' + d.getFullYear();
      break;
    case 4:
      return 'Föstudagurinn, ' + d.getDate() + '. Apríl, ' + d.getFullYear();
      break;
    case 5:
      return 'Föstudagurinn, ' + d.getDate() + '. Maí, ' + d.getFullYear();
      break;
    case 6:
      return 'Föstudagurinn, ' + d.getDate() + '. Júní, ' + d.getFullYear();
      break;
    case 7:
      return 'Föstudagurinn, ' + d.getDate() + '. Júlí, ' + d.getFullYear();
      break;
    case 8:
      return 'Föstudagurinn, ' + d.getDate() + '. Ágúst, ' + d.getFullYear();
      break;
    case 9:
      return 'Föstudagurinn, ' + d.getDate() + '. September, ' + d.getFullYear();
      break;
    case 10:
      return 'Föstudagurinn, ' + d.getDate() + '. Október, ' + d.getFullYear();
      break;
    case 11:
      return 'Föstudagurinn, ' + d.getDate() + '. Nóvember, ' + d.getFullYear();
      break;
    case 12:
      return 'Föstudagurinn, ' + d.getDate() + '. Desember, ' + d.getFullYear();
      break;
  }
};


function Dagsetning_frid(d) {
  switch (d.getMonth() + 1) {
    case 1:
      return d.getDate() + '. Janúar, ' + d.getFullYear();
      break;
    case 2:
      return d.getDate() + '. Febrúar, ' + d.getFullYear();
      break;
    case 3:
      return d.getDate() + '. Mars, ' + d.getFullYear();
      break;
    case 4:
      return d.getDate() + '. Apríl, ' + d.getFullYear();
      break;
    case 5:
      return d.getDate() + '. Maí, ' + d.getFullYear();
      break;
    case 6:
      return d.getDate() + '. Júní, ' + d.getFullYear();
      break;
    case 7:
      return d.getDate() + '. Júlí, ' + d.getFullYear();
      break;
    case 8:
      return d.getDate() + '. Ágúst, ' + d.getFullYear();
      break;
    case 9:
      return d.getDate() + '. September, ' + d.getFullYear();
      break;
    case 10:
      return d.getDate() + '. Október, ' + d.getFullYear();
      break;
    case 11:
      return d.getDate() + '. Nóvember, ' + d.getFullYear();
      break;
    case 12:
      return d.getDate() + '. Desember, ' + d.getFullYear();
      break;
  }
};
