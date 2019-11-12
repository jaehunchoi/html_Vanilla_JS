
const sms_a = document.getElementById("sms_a");
const sms_b = document.getElementById("sms_b");
const sms_c = document.getElementById("sms_c");
const sms_d = document.getElementById("sms_d");
const sms_e = document.getElementById("sms_e");
const sms_f = document.getElementById("sms_f");
const sms_g = document.getElementById("sms_g");

const sms_json = document.getElementById("sms_json");

getJsonFromLocalPath(`https://raw.githubusercontent.com/swiits/jsontest/master/profile.json`);

document.querySelector('#sms_complete').addEventListener('click', function () {
//   getJsonFromLocalPath(`./test.json`);
  console.log(`sms_complete`);
  const json = JSON.stringify(
    {name:sms_a.value,
    type:sms_b.value,
    region:sms_c.value,
    description:sms_d.value,
    // e:sms_e.value,
    i:sms_e.src,
    myteam:sms_f.value,
    owned:sms_g.value}
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
        const profilesLength = result.profiles.length;
        const random = Math.floor(Math.random() * profilesLength);
        console.log(`random : ${random}`);
        const profile = result.profiles[random];
        // document.querySelector('#name').value = result.name;
        // sms_a.innerHTML = profile.name;
        sms_a.value = profile.name;
        sms_b.value = profile.type;
        sms_c.value = profile.region;
        sms_d.value = profile.description;
        // sms_e.value = profile.img;
        sms_e.src = profile.img;
        sms_f.value = profile.myteam;
        sms_g.value = profile.owned;
      }, function (err) {
        console.log(err);
      });
}