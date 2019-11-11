
const team_name = document.getElementById("team_name");
const team_content = document.getElementById("team_content");
const category1 = document.getElementById("category_1");
const category2 = document.getElementById("category_2");
const apply_num1 = document.getElementById("apply_num_1");
const apply_num2 = document.getElementById("apply_num_2");
const request_num1 = document.getElementById("request_num_1");
const request_num2 = document.getElementById("request_num_2");

getJsonFromLocalPath(`./test_cjh.json`);

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
        team_name.innerHTML = result.team_name;
        team_content.innerHTML = result.team_content;
        category1.innerHTML = result.category__1;
        category2.innerHTML = result.category__2;
        apply_num1.innerHTML = result.apply_num__1;        apply_num2.innerHTML = result.apply_num__2;        request_num1.innerHTML = result.request_num__1;    request_num2.innerHTML = result.request_num__2;

        return result;
      }, function (err) {
        console.log(err);
      });
}