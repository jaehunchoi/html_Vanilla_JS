
const name1 = document.getElementById("names");
const ability1 = document.getElementById("abilities");
const region1 = document.getElementById("regions");
const sms_name = document.getElementById("sms_name");

document.querySelector('#getProfileButton').addEventListener('click', function () {
  getJsonFromLocalPath(`./test.json`);
});

document.querySelector('#getProfileButton2').addEventListener('click', function () {
  getJsonFromLocalPath(`./test2.json`);
});

function getJsonFromLocalPath(path) {
  const promise = function () {
    return fetch(path
    ).then(function (data) {
      const json = data.json();
      console.log(`data.json() : ${json}`);
      return json;
    });
  }

  promise()
    .then(
      function (result) {
        console.log(result.name);
        // document.querySelector('#name').value = result.name;
        name1.innerHTML = result.name;
        ability1.innerHTML = result.ability;
        region1.innerHTML = result.region;


        sms_name.innerHTML = result.name;
      }, function (err) {
        console.log(err);
      });
}