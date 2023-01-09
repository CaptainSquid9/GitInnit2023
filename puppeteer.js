
const puppeteer = require('puppeteer-extra');

const {executablePath} = require('puppeteer');
const fs = require("fs");
var express = require('express');
var app = express()
var axios = require("axios")

const { spawn } = require('child_process');

app.use(express.urlencoded({ extended: true }))

app.post('/result.html/submit', (request, response) => {
    const data = request.body;
    console.log(data.name);

puppeteer.launch({headless:false, executablePath: executablePath()}).then(async browser =>{
var arrayData = new Array();
var Keyword = "Wendy's mac and cheese"
var CurrentVal = 0;
Keyword = Keyword.replaceAll(" ", "+")
console.log(Keyword)
const page = await browser.newPage();
await page.goto(`https://www.google.com/search?q=${data.name}+ingredients+-site%3Awikipedia.com`);
await page.waitForSelector('.yuRUbf');

await page.evaluate((CurrentVal) => {
    var Containers = document.querySelectorAll(".yuRUbf");
    Containers[CurrentVal].firstChild.click();
}, CurrentVal);

await page.waitForNavigation();
var Data = await page.evaluate(() => {
  
    var Text = document.querySelector('*').innerText;
    return Text
});
CurrentVal++;

const pythonScript = await spawn('python', ['main.py', Data.toString()]);

pythonScript.stdout.on('data', (data) => {
  arrayData = processData(data, arrayData);
});

pythonScript.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

pythonScript.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
function processData(data, arrayData){
  var Info = `${data}`
  var InfoSim = Info.replace(/[\[\]']+/g,'')
  var InfoLn =  InfoSim.split(/\r?\n|\r|\n/g);

  for(i = 0; i < InfoLn.length - 1; i++){
     arrayData.push(InfoLn[i].split(", "))
  }
console.log(arrayData)
response.send(`
<!doctype html>
<html lang="en">

<head>
  <title>Response</title>
  <link rel="stylesheet" type="text/css" href="/style.css">
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

      <style>
        .special {
        font-size: 32px;
        background: -webkit-linear-gradient(rgb(0, 0, 0), rgb(255, 255, 255));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
        .background-2{
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  border:5px solid black;
  }
      </style>

      
</head>

<body>
  <main>
    <div class="container-fluid">
      <div class="row p-5 text-center">
        <div class="col bg-info background-2">
          <div class="m-5">
            <h1 class="" id="Product"> So you want to eat a ${data.name} from ${data.company}?</h3>
            <h3 class="special" id="Warning">${arrayData[2][0]}</h3>
          </div>
        </div>
        <div class="col">
          <h2>Ingredients</h2>
           ${arrayData[0]}
        </div>
        <div class="col">
          <h2>Calories</h2>
          ${arrayData[1].filter(a => a !== '0')}
        </div>
      </div>
    </div>
  </main>
  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
  </script>
</body>

</html>"
`);
}
});
}) 
app.listen(4000, () => {
    console.log('Server listening on port 4000');
  });