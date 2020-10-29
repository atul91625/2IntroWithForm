document.getElementById("formBtn").addEventListener("click", validate);
function validate() {
  var idList = ["firstName", "firstNameImg", "firstNameInput", "LastName", "LastNameImg", "LastNameInput", "E-mail", "emailImg", "emailInput", "password", "passwordImg", "passwordInput"];
  var i;
  for(i=0; i<idList.length; i++){
    if(i == 2 || i == 5 || i == 8 || i == 11){
      document.getElementById(idList[i]).style.border="1px solid var(--light-text-color)";
    }
    else{
      document.getElementById(idList[i]).style.display="none";
    }
  }
  if (document.forms["myForm"]["fname"].value == "") {
    document.getElementById("firstName").style.display="block";
    document.getElementById("firstNameImg").style.display="block";
    document.getElementById("firstNameInput").style.border="1px solid var(--primary-red)";
  }
  if (document.forms["myForm"]["lname"].value == "") {
    document.getElementById("LastName").style.display="block";
    document.getElementById("LastNameImg").style.display="block";
    document.getElementById("LastNameInput").style.border="1px solid var(--primary-red)";
  }
  if (document.forms["myForm"]["pass"].value == "") {
    document.getElementById("password").style.display="block";
    document.getElementById("passwordImg").style.display="block";
    document.getElementById("passwordInput").style.border="1px solid var(--primary-red)";
  }
  if (document.forms["myForm"]["email"].value == "") {
    document.getElementById("E-mail").style.display="block";
    document.getElementById("emailImg").style.display="block";
    document.getElementById("emailInput").style.border="1px solid var(--primary-red)";
  }
  if (document.forms["myForm"]["email"].value != "") {
    var x=document.forms["myForm"]["email"].value;
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
      document.getElementById("emailImg").style.display="block";
      document.getElementById("E-mail-wrong").style.display="block";
      document.getElementById("emailInput").style.color="var(--primary-red)";
      document.getElementById("emailInput").style.border="1px solid var(--primary-red)";
    }
  }
}