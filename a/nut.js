data.forEach(function(item){
   var option = document.createElement('option');
   option.value = item.id;
   option.innerHTML = item.name;
   selector.appendChild(option)
})

function hu(){
  var x = document.getElementById("selector").value;
  var b = data[x].img
  document.getElementById("ola").innerHTML = b;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

function chaptruoc(){
  var x = document.getElementById("selector").value;
  var b = Number(x)-1;
  if (b > -1) {
  var z = data[b].img
  var $select = document.querySelector('#selector');
  $select.value = b;
  document.getElementById("ola").innerHTML = z;
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
};};

function chapsau(){
  var x = document.getElementById("selector").value;
  var b = Number(x)+ 1;
  var z = data[b].img
  var $select = document.querySelector('#selector');
  $select.value = b;
  document.getElementById("ola").innerHTML = z;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
};
