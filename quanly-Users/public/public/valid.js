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
