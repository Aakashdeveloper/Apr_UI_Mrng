document.getElementById('one')
    
<div class=​"sameline" id=​"one">​…​</div>​
document.getElementById('one').style.color="royalblue"
    
"royalblue"
document.getElementsByClassName('circletag')
HTMLCollection [div.sameline.topmargin.circletag]
document.getElementsByClassName('circletag')[0]
<div class=​"sameline topmargin circletag">​…​</div>​<h2>​React​</h2>​<p>​…​</p>​</div>​
document.getElementsByClassName('sameline')
HTMLCollection(9) [div.sameline, div.sameline, div#one.sameline, div#two.sameline, div.sameline.topmargin, div.sameline.topmargin, div.sameline.topmargin, div.sameline.topmargin.circletag, div.sameline.topmargin.sumup, one: div#one.sameline, two: div#two.sameline]
document.getElementsByClassName('sameline')[0]
<div class=​"sameline">​…​</div>​
document.getElementsByClassName('sameline')[0].style.background="#fff"
"#fff"
document.getElementsByTagName('h2')
HTMLCollection(10) [h2, h2, h2, h2, h2, h2, h2, h2, h2, h2]
document.getElementsByTagName('h2')[0]
<h2>​About UI​</h2>​
document.getElementsByTagName('h2')[0]="Blog Page"
"Blog Page"
document.getElementsByTagName('h2')[0].innerHTML="Blog Page"
"Blog Page"