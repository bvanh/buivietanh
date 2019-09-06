function getId() {
  let getId = new URLSearchParams(window.location.search).get('id')
  return getId;
}
let usersId = getId();
function updateData(obj) {
  document.getElementById("name").value = obj.name;
  document.getElementById("year").value = obj.year;
  document.getElementById("email").value = obj.email;
  document.getElementById("number").value = obj.sodienthoai
}
function validForm() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const birthYearRegex = /^\d{4}$/;
  let validValue = true;
  let myName = document.getElementById("names").value;
  let myYear = document.getElementById("years").value;
  let myEmail = document.getElementById("mail").value;
  let myNumber = document.getElementById("phone").value;
  if (myName == "" || emailRegex.test(myEmail) === false || birthYearRegex.test(myYear) === false || myNumber == "") {
    alert("Hãy đảm bảo rằng bạn đã điền đủ Họ-tên, Số điện thoại, 4 số năm sinh và đúng định dạng Email. Xin cảm ơn!");
    validValue = false;
  } else {
    return validValue;
  }
}
///checkbox
let el = document.getElementById("checkall"); //let for ES6 aficionados 
el.onclick = checkAll; //again, function reference, no ()
// v1
function checkAll() {

  var inputs = document.querySelectorAll('.check');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll;
}

function uncheckAll() {
  var inputs = document.querySelectorAll('.check');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll; //function reference to original function
}
//delete checkbox
function deleteCheckbox() {
  let $checked = $('input[type="checkbox"]:checked');
  let r = confirm("Xóa phần đã chọn!");
  if (r == true) {
    if ($checked.length > 0) {
      $checked.each(function () {
        axios({
          method: 'DELETE',
          url: 'https://my-json-server.typicode.com/bvanh/bvanh.github.io/users/' + this.value
        })
        $(this).parent().parent().parent().hide(400);


      })
    }
  }
}