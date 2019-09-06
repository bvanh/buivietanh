let API_fake = '/users';
//lấy id url để đổi thông tin
function getId() {
  let getId = new URLSearchParams(window.location.search).get('id')
  return getId;
}
let usersId = getId();
///checkbox
let el = document.getElementById("checkall"); //let for ES6 aficionados 
el.onclick = checkAll; //again, function reference, no ()
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
  if ($checked.length > 0) {
    $checked.each(function () {
      axios({
        method: 'DELETE',
        url: API_fake + '/' + this.value
      })
      $(this).parent().parent().parent().hide(400);


    })
  }
}
// end delete checkbox
//search
$(document).ready(function(){
  $("#myFilter").on("keyup", function() {
    var value = $("#myFilter").val().toLowerCase();
    $("#tb tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//end
//get data
axios.get(API_fake)
  .then(function (response) {
    // handle success
    myFunction(response.data);
  })
function myFunction(arr) {
  let print = '';
  for (i = 0; i < arr.length; i++) {
    print += `<tr">
        <td>`+ arr[i].name + `</td>
        <td>`+ arr[i].year + `</td>
        <td>` + arr[i].email + `</td>
        <td>` + arr[i].sodienthoai + `</td>
        <td>
        <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input check"value="`+ arr[i].id + `">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">Check this!</span>
        </label>
        </td>
        <td>
        <button type='button' class='btn btn-primary btn-sm'><a href=form-edit.html?id=` + arr[i].id + `>Chỉnh sửa</a></button>
        </td>
        </tr>`;
  }
  document.getElementById("tb").innerHTML = print;
}
// end get data
//edit data
function updateUser() {
  let myName = document.getElementById("name").value;
  let myYear = document.getElementById("year").value;
  let myEmail = document.getElementById("email").value;
  let myNumber = document.getElementById("number").value;
  axios({
    method: 'put',
    url: API_fake + '/' + usersId,
    data: {
      name: myName,
      year: myYear,
      email: myEmail,
      sodienthoai: myNumber
    }
  })
    .then(function (response) {
      window.open("index.html", "_self")
      console.log("da them")
    })
}

axios.get(API_fake + usersId)
  .then(function (response) {
    // handle success
    updateData(response.data);
  });
//end edit data
//api lưu đăng ký
function saveData() {
  if (validForm()) {
    let myName = document.getElementById("names").value;
    let myYear = document.getElementById("years").value;
    let myEmail = document.getElementById("mail").value;
    let myNumber = document.getElementById("phone").value;
    axios({
      method: 'post',
      url: API_fake,
      data: {
        name: myName,
        year: myYear,
        email: myEmail,
        sodienthoai: myNumber
      }
    })
      .then(function (response) {
        window.open("index.html", "_self")
        console.log("da them")
      })
  }
}
//end