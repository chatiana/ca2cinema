
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

//-----------------------CONTACT US - VALIDATIONS  --------------------------
 
  function funcValidateFields(){

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
//Javascript Validation of Message empty field --------------------------
      var x, text;
      x = document.getElementById("messagearea").value;
      if (isNaN(x)==''){
        document.getElementById("messageEmpty").innerHTML="Please enter a message";
        document.getElementById("messageEmpty").style.color="red";
      }else{
        document.getElementById("messageEmpty").style.visibility="hidden";
      }

//Javascript Validation of Name empty field --------------------------
      var x, text;
      x = document.getElementById("name1").value;
      if (isNaN(x)==''){
        document.getElementById("nameEmpty").innerHTML="Please enter a name";
        document.getElementById("nameEmpty").style.color="red";
      }else{
        document.getElementById("nameEmpty").style.visibility="hidden";
      }
  }

//Javascript Validation of input - Calculation --------------------------
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

