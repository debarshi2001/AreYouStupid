var no=document.getElementById("btnno");
var yes=document.getElementById("btnyes");
var text=document.getElementById("text")
var x=Math.floor(Math.random()*600)+400;
var y=Math.floor(Math.random()*900)+400;
function PressNO(){
    var arr1=[200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600]
    var arr2=[200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,800,820,840,860,880,900,920,940,960,980,1000,1020,1040,1060,1080,1100,1120,1130,1140,1150,1160,1170]
    no.style.top= arr1[Math.floor(Math.random() * arr1.length)]+'px';
    no.style.left = arr2[Math.floor(Math.random() * arr2.length)]+'px';
}
function PressYES(){
    text.innerHTML="I KNEW IT!";
    no.parentNode.removeChild(no);
    yes.parentNode.removeChild(yes);
    document.getElementById("img").style.opacity='1';
}
