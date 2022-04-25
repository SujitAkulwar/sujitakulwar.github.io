<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            text-align: center;

        }


        a {
            text-decoration: none;

        }

        a:hover {
            color: black;
        }


        body {
            font-family: Mochiy Pop P One;
            margin: 5% 10% 5% 5%;
            font-size: 17px;
            padding: 8px;
            background-color: rgb(173, 212, 230);
        }

        .parent {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        .container1{
            border-right: 2px solid black;
            padding-right: 100px;
        }

        .container {
            text-align: center;
            background-color: #f2f2f2;
            width: 400px;
            height: 550px;
            padding: 50px 20px 0px 20px;
            border: 1px solid lightgray;
            border-radius: 30px;
            



        }

        .container2 {
            padding-left: 2 0px;
            /* padding */
        }







        input[type="password"],
        input[type="email"],input[type="date"],
        input[type="text"] {
            font-family: Mochiy Pop P One;
            width: 100%;
            padding: 15px;
            border: 10px;
            border: 1px solid grey;
            border-radius: 30px;
            color: rgb(88, 45, 138);
            font-weight: bolder;

            /* background: linear-gradient(145deg, #2149cc, #b44747); */
            box-shadow: 8px 8px 16px #aaaaaa,
                -8px -8px 16px #ffffff;


        }





        input[type="email"] {
            background-color: rgb(207, 210, 231);
            margin-top: 10px;
            margin-bottom: 10px;

        }

        input[type="password"] {
            background-color: rgb(190, 194, 224);
            margin-bottom: 10px;
        }

        input[type="date"] {
            background-color: rgb(190, 194, 224);
            margin-bottom: 10px;
        }

        input[type="text"] {
            background-color: rgb(190, 194, 224);
            margin-bottom: 10px;
        }


        ::placeholder {
            color: rgb(57, 17, 97);
            font-weight: bolder;
            font-family: Mochiy Pop P One;
        }




        input[type="email"]:hover,
        input[type="password"]:hover,
        input[type="date"]:hover,
        input[type="text"]:hover {
            background-color: rgba(78, 79, 80, 0.322);
        }

        .cta {
            position: relative;
            margin: auto;
            padding: 12px 18px;
            transition: all 0.2s ease;
            border: none;
            background: none;
        }

        .cta:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            border-radius: 50px;
            background: #b1dae7;
            width: 45px;
            height: 45px;
            transition: all 0.3s ease;
        }

        .cta span {
            position: relative;
            font-family: "Ubuntu", sans-serif;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: #234567;
        }

        .cta svg {
            position: relative;
            top: 0;
            margin-left: 10px;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: #234567;
            stroke-width: 2;
            transform: translateX(-5px);
            transition: all 0.3s ease;
        }

        .cta:hover:before {
            width: 100%;
            background: #b1dae7;
        }

        .cta:hover svg {
            transform: translateX(0);
        }

        .cta:active {
            transform: scale(0.95);
        }
    </style>
</head>

<body>

    <div class="parent">
        <div class="container1">
            <div>
                <img src="./image/loginimg.png" alt="">
            </div>
        </div>
        <div class="container2">



            <div class="container">

                <form action="registration.php"></form>
                <h1 class="Heading">signup</h1>

                <hr>
                <input type="email" name="email" placeholder="Email">
                <br>
                <input type="password" name="password" placeholder="password">
                <br>
                


                <br><br><br>



                <button class="cta" type="submit" >
                    <span><a>Signup</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
 
                <br>

                <a style="color: black;" href="./login.php"><p>already an user? login</p></a>
                </form>
            </div>
        </div>

    </div>
    <?php
?>

</body>


</html>