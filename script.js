
const name = document.getElementById("name");
const ability = document.getElementById("ability");
const region = document.getElementById("region");

console.log(`name : ${name}`);
//getElementById('name').

document.querySelector('#getProfileButton').addEventListener('click', function () {
  const promise1 = function () {
    return fetch(`./test.json`
    ).then(function (data) {
      const json = data.json();
      console.log(`data.json() : ${json}`);
      return json;
    });
  }

  promise1()
    .then(
      function (result) {
        console.log(result.name);
        // document.querySelector('#name').value = result.name;
        name.innerHTML = result.name;
        ability.innerHTML = result.ability;
        region.innerHTML = result.region;

      }, function (err) {
        console.log(err);
      });
});

document.querySelector('#getProfileButton2').addEventListener('click', function () {
    console.log(`name : ${name}`);
    //getElementById('name').

    const promise1 = function () {
      return fetch(`./test2.json`
      ).then(function (data) {
        const json = data.json();
        console.log(`data.json() : ${json}`);
        return json;
      });
    }

    promise1()
      .then(
        function (result) {
          console.log(result.name);
          // document.querySelector('#name').value = result.name;
          name.innerHTML = result.name;
          ability.innerHTML = result.ability;
          region.innerHTML = result.region;

        }, function (err) {
          console.log(err);
        });
  });