const API_fake = '/users';
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
  // edit data users
  function updateUser() {
      let myName = document.getElementById("name").value;
      let myYear = document.getElementById("year").value;
      let myEmail = document.getElementById("email").value;
      let myNumber = document.getElementById("number").value;
      axios({
        method: 'put',
        url: API_fake+'/' + usersId,
        data: {
          name: myName,
          year: myYear,
          email: myEmail,
          sodienthoai: myNumber
        }
      })
      .then(function(response){
          window.open("index.html","_self")
        })
  }
  
    axios.get(API_fake+'/' + usersId)
      .then(function (response) {
        // handle success
        updateData(response.data);
      });
