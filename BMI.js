<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI</title>
    
</head>
<body>
    <div id="container">

  <label for="weight-input" id="wlabel">SENİN KİLON(kg)</label><input type="text" id="weight-input">
  <label for="height-input" id="wlabel">SENİN BOYUN(cm)</label><input type="text" id="height-input">
  <button id="btn">HESAP</button>
  <label for="bmi-output" id='bmilabel'>SENİN ENDEKSİN</label><input type="text" id="bmi-output">

    </div>
    <script src="BMI.js"></script>
</body>
</html>



let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    let weight = document.getElementById('weight-input').value
    let height = document.getElementById('height-input').value
    let hesap = ((weight/(height*height)*10000));
    document.getElementById('bmi-output').value = hesap;
})
