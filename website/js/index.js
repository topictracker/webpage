const displayChart = () => {
  var candidate = document.querySelector('#candidate').value;
  if (candidate == "-- Choose a Candidate --") {
    document.querySelector('.output').innerHTML = '<p>-- Results will display here --</p>';
  }
  else {
    var lastname = candidate.split(" ")[1].replace("\'", "").toLowerCase();
    var uniPath = "./images/uni-"+lastname+"2020.png";
    var biPath = "./images/bi-"+lastname+"2020.png";
    const template = `
                      <img src="${uniPath}" width="900px">
                      <img src="${biPath}" width="1300px">
                    `
    document.querySelector('.output').innerHTML = template;
  }
};

document.querySelector('#candidate').onchange = displayChart;
