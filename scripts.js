var list = [];
var num = 0;
var r = false;
window.onload = function (){
loader();
}
function starter()
{
    alert();
}

function loader()
{
    list = [["ZzzQuil","Meletonin",false], ["Game of Thrones","Sopranos",false],["BBQ","Mayonnaise",false], ["Coffee", "Alcohol",false]];
    next(num);
}

function next(i)
{
    if (num >= 4)
        return Ender();
    document.getElementById("Q").innerHTML = list[i][0] + " or " + list[i][1] + "?";
    document.getElementById("A1").innerHTML = list[i][0];
    document.getElementById("A2").innerHTML = list[i][1];
}

function Choice(c)
{
    list[num][2] = c;
    num++;
    console.log(list[2][2] + " " + num);
    next(num);
}

function Ender()
{
    var flag = list[2][2];
    document.getElementById("popup").style.background="rgba(255, 255, 255, .7)";
    document.getElementById("pupupWindow").style.display = "block";

    document.getElementById("Q1").innerHTML = "1) "+ list[0][0] + " or " + list[0][1] + "?";
    document.getElementById("Q2").innerHTML ="2) "+ list[1][0] + " or " + list[1][1] + "?";
    document.getElementById("Q3").innerHTML ="3) "+ list[2][0] + " or " + list[2][1] + "?";
    document.getElementById("Q4").innerHTML ="4) "+ list[3][0] + " or " + list[3][1] + "?";

    document.getElementById("Q1A").innerHTML = (list[0][2])?list[0][1] +"&#9989":list[0][0]+"&#9989";
    document.getElementById("Q2A").innerHTML =(list[1][2])?list[1][1]+"&#9989":list[1][0]+"&#9989";
    document.getElementById("Q3A").innerHTML =(list[2][2])? list[2][1] +"&#10060" :list[2][0]+"&#9989";
    document.getElementById("Q4A").innerHTML =(list[3][2])?list[3][1]+"&#9989":list[3][0]+"&#9989";

    var s = "";

    if (!flag)
    {   
        s = "Great Job You Scored 4/4 100%!";
        alert("100%!");
    }
    else
    {
        s = "Good Try You Scored 4/3 75%!";
        alert("75%!");
    }
    document.getElementById("Result").innerHTML = s;
    r = true;
}

function restart()
{
    document.respon
    if(r == true)
        var flag = confirm("Restart The Quiz?");
    if (flag)
    {
        num = 0;
        document.getElementById("popup").style.background="rgba(255, 255, 255, .0)";
        document.getElementById("pupupWindow").style.display = "none";
        r = false;
        loader();
    }
}