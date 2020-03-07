
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
