const sms_btn = document.getElementById("sms_button");
const name = document.getElementById("sms_name");
let pivot = false;

document.querySelector('#sms_button').addEventListener('click', function () {
  console.log(`hihi`);
  if(pivot === false)
  {
    sms_btn.innerHTML = "hihi";
    pivot = true;
  }
  else
  {
    sms_btn.innerHTML = "byebye";
    pivot = false;
  }

  const result = getJsonFromLocalPath(`./test.json`);

  name.innerHTML = result.name;
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

        return result;
      }, function (err) {
        console.log(err);
      });
}