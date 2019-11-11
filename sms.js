
const sms_a = document.getElementById("sms_a");
const sms_b = document.getElementById("sms_b");
const sms_c = document.getElementById("sms_c");
const sms_d = document.getElementById("sms_d");
const sms_e = document.getElementById("sms_e");

const sms_json = document.getElementById("sms_json");

getJsonFromLocalPath(`./sms.json`);

document.querySelector('#sms_complete').addEventListener('click', function () {
//   getJsonFromLocalPath(`./test.json`);
  console.log(`sms_complete`);
  const json = JSON.stringify(
    {a:sms_a.innerHTML,
    b:sms_b.value,
    c:sms_c.value,
    d:sms_d.value,
    e:sms_e.value}
    );

    console.log(json);

    sms_json.innerHTML = json;
});

document.querySelector('#sms_back').addEventListener('click', function () {
  //;
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
        sms_a.innerHTML = result.a;
        sms_b.innerHTML = result.b;
        sms_c.innerHTML = result.c;
        sms_d.innerHTML = result.d;
        sms_e.innerHTML = result.e;
      }, function (err) {
        console.log(err);
      });
}