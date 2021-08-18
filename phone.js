<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html lang="en">
<head>
<script> 
function phoneNumberCheck(phoneNumber)
{
   var regEx = ^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4};
   if(phoneNumber.value.match(regEx))
     {
      alert("valid");
     }
   else
     {
     alert("Please enter a valid phone number.");
     return false;
     }
}    
</script> 
</head>
<body>
    <%
    # import libraries
from bs4 import BeautifulSoup
import mechanize


mc = mechanize.Browser()
mc.set_handle_robots(False)

url = 'https://www.findandtrace.com/trace-mobile-number-location'
mc.open(url)

mc.select_form(name='trace')
mc['mobilenumber'] = '' # Enter a mobile number
res = mc.submit().read()

soup = BeautifulSoup(res,'html.parser')
tbl = soup.find_all('table',class_='shop_table')
#print(tbl)


data = tbl[0].find('tfoot')
c=0
for i in data:
    c+=1
    if c in (1,4,6,8):
        continue
    th = i.find('th')
    td = i.find('td')
    print(th.text,td.text)


data = tbl[1].find('tfoot')
c=0
for i in data:
    c+=1
    if c in (2,20,22,26): 
        th = i.find('th')
        td = i.find('td')
        print(th.text,td.text)
    %>
<div class="mail">
<h2>JavaScript Phone Number Validation</h2>
<form name="index" action="#"> 
Phone Number: <input type='text' name='phone'/></br></br>
<input type="submit" name="submit" value="Submit" 
onclick="phoneNumberCheck(document.index.phone)"/>
</form>
</div>
</body>
</html>
