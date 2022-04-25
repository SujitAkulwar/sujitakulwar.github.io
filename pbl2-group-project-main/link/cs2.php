<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>PBL project</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fredoka+One&display=swap"
        rel="stylesheet">

</head>

<body>

    <header>

        <div class="top">
            <nav class="item item1"><img src="sppu.png" alt=""></nav>
            <nav class="item item2">
                <a id="name1">PES's Modern College of Engineering, Pune</h3><a>
                        <br>
                        <a id="name2">E-BOOK MANAGEMENT SYSTEM</a>
            </nav>
            <nav class="item item3"><img src="mcoe.png" alt="">
        </div>
        </div>

        <div class="nav_bar">
            <nav class="nava">
                <a class="navi"><img src=""></a>
                <a class="navi1" href="index.php">HOME</a>
                <a class="navi2" href="login.php">LOGIN</a>
                <a class="navi2" href="about.html">ABOUT</a>
                <a class="navi2" href="help.html">HELP</a>
            </nav>
        </div>

    </header>

    <!-- adding list-->
    <div class="box">

        <!-- btn for filter books -->
        <div id="main" class="box1">
            <div>Select Subject</div>
            <form id="addform" class="form-inline"></form>
            <div class="btnforsub">
                <div class="btnforsubul">
                    <button class="btn btn-select flaot" id="btnppl" onclick="ppl_fun">ppl</button>
                    <button class="btn btn-select flaot" id="btnse" onclick="se_fun">se</button>
                </div>
            </div>
            
        </div>

        <div class="pdf">
                <div class="se" id="se">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            software engineering book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
                <div class="se" id="se">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            software engineering book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
                <div class="ppl" id="ppl">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            ppl book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
                <div  class="ppl" id="ppl">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            ppl book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
                <div  class="ppl" id="ppl">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            ppl book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
                <div  class="ppl" id="ppl">
                    <ul class="subpdful">
                        <li class="subpdfli1">
                            ppl book
                        </li>
                        <li class="subpdfli2">
                            author : name
                        </li>
                        <li class="subpdfli4">
                            type : book
                        </li>
                        <li class="subpdfli5">
                            size of pdf : x MB
                        </li>
                        <li class="subpdfli6">
                            <a href="sppu.png">download</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    </div>

    <script>
    

    // document.getElementById("btnse").onclick = function(o) {
    //     document.getElementById("ppl").style.display = "block";
    // }

    // document.getElementById("btnppl").onclick = function(o) {
    //     document.getElementById("ppl").style.display = "none";
    // }
function ppl_fun (){
    var ppl = document.getElementById("btnppl");
    var se = document.getElementById("btnse");
    ppl.style.display = "block";
    se.style.display = "none";
}

function se_fun(){
    var ppl = document.getElementById("btnppl");
    var se = document.getElementById("btnse");
    ppl.style.display = "none";
    se.style.display = "block";
}
    
    



</script>
</body>
</html>