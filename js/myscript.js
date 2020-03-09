
  $(document).ready(function() {
    ReadFileForXml ();
    $('#DAY').change(function(){
        ReadFileForXmlForAttributeValue( this.value );
      });
  });

 //Read file to populate dropdown
 function ReadFileForXml(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status==200) {
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
          createDropDown(xmlDoc);
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/chatiana/ca2cinema/master/data.xml", true);
    xhttp.send();
  }
  //Create dropdown for Day
  function createDropDown(xml){
    var txt = "";
    path = "/Movies/Movie/@DAY";
    select = document.getElementById('DAY');
  
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            var opt = document.createElement('option');
            opt.value = result.value;
            opt.innerHTML = result.value;
            select.appendChild(opt);
            result = nodes.iterateNext();
        }
    }
  }

//Read XML file for Day drop down
  function ReadFileForXmlForAttributeValue(dayName, timeTime){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status==200) {
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
          ReadTitleWithDay(xmlDoc , dayName);
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/chatiana/ca2cinema/master/data.xml", true);
    xhttp.send();
  }
    //Read Title after drowpdown selected
  function ReadTitleWithDay(xml , dayName){
    var path = "/Movies/Movie[@DAY='$input_day']/title".replace('$input_day', dayName);
    var txt ="";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
          txt += result.childNodes[0].nodeValue
          result = nodes.iterateNext();
            result = nodes.iterateNext();
        }
    }
    document.getElementById("title_for_day").innerHTML = txt;
  }
//------------------------MOVIES -INFO Display from XML ----------------

function showMovieDetails(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status==200) {
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
          showResult(xhttp.responseText);
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/chatiana/ca2cinema/master/data.xml", true);
    xhttp.send();
  }

  function showResult(xml) {

    //show movie title
    var txt = "";
    path = "/Movies/Movie/title[1]";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }
    } 
    document.getElementById("movie_title").innerHTML = txt;

    //show movie genre
    var txt = "";
    path = "/Movies/Movie/@genre";
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.value + "<br>";
            result = nodes.iterateNext();
        }
    }
    document.getElementById("movie_genre").innerHTML = txt;


  }
//Jquery mouseover out
function changeImage() {
    document.getElementById("imagemov").style.outlineColor = "#00ff00";
  
//-----------------------CONTACT US - VALIDATIONS  --------------------------


//function funcValidateFields(){
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name (Min: 5 characters)";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject (Min: 10 characters)";
      error_message.innerHTML = text;
      return false;
    }
    //if the input is not a number and has less or more than 10 digits
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number (10 digits)";
      error_message.innerHTML = text;
      return false;
    }
     //if @ is not pressent will return error and has a min length of 6
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 80){
      text = "Please Enter a message of more than 80 characters";
      error_message.innerHTML = text;
      return false;
    }

    alert("Form Submitted Successfully!");
    return true;
  }






  /*function funcValidateFields(){

 //Javascript Validation of EMAIL --------------------------
      var text =document.getElementById("email1").value;
      var regx = /^([a-z 0-9\.-]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
      if(regx.test(text)){
          document.getElementById("lbltext").innerHTML="Valid";
          document.getElementById("lbltext").style.visibility="visible";
          document.getElementById("lbltext").style.color="green";
      }
      else{
        document.getElementById("lbltext").innerHTML="Invalid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red";
      }
*/

//--------Javascript Validation of input - Calculation --------------------------

  function myCalcFunction() {
    var x, text;

    // Get the value of the input field with id="result"
    x = document.getElementById("result").value;
  
    // If x is Not a Number or less than five or greater than 10
    if (isNaN(x) ||  x < 5 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("robotmessage").innerHTML = text;
  }

//-----------------------FOOTER - VALIDATIONS - NEWSLETTER EMAIL --------------------------
 
function funcValidateNewsLetter(){
    //Javascript Validation of EMAIL --------------------------
         var text =document.getElementById("email2").value;
         var regx = /^([a-z 0-9\.-]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
         if(regx.test(text)){
             document.getElementById("lbltext2").innerHTML="Valid";
             document.getElementById("lbltext2").style.visibility="visible";
             document.getElementById("lbltext2").style.color="green";
         }
         else{
           document.getElementById("lbltext2").innerHTML="Invalid";
           document.getElementById("lbltext2").style.visibility="visible";
           document.getElementById("lbltext2").style.color="red";
         }
        }