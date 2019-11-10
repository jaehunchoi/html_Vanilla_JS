
const name = document.getElementById("name");

console.log(`name : ${name}`);
//getElementById('name').


const promise1 = function(){
  return fetch(`./test.json` 
).then(function(data) { 
  const json = data.json();
  console.log(`data.json() : ${json}`);
  return json;
});
}


promise1()
.then(
  function(result)
  {
    console.log(result.name);
    // document.querySelector('#name').value = result.name;
    name.innerHTML = result.name;
    
  },function(err)
  {
    console.log(err);
  });