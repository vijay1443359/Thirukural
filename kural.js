br=document.createElement("br")

var div2=document.createElement('div')
div2.classList.add('maindiv')
div2.classList.add('container')
document.body.appendChild(div2)

fname=document.createElement("input");
fname.setAttribute('type','text');
fname.setAttribute('id','first-name');
fname.setAttribute('class','text-center mt-4');
fname.setAttribute('placeholder','Enter Number(1-1330)');

div2.append(br)


div2.append(fname)

button=document.createElement("button")
button.setAttribute("id","submit")
button.setAttribute("name","Enter")
button.setAttribute("class","btn mt-3 btn-primary")
button.innerText="Enter"

div2.append(br)


div2.append(button)

let btn=document.getElementById("submit").addEventListener("click",validate)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)

var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)



function validate(event){
    event.preventDefault()

    fa=document.getElementById("first-name").value;
    var a = "https://api-thirukkural.vercel.app/api?num="
    var b = fa;

    var c = a.concat(b)

    fetch(c)
    .then((d)=>d.json())
    .then((data)=>{
        console.log(data)
        row.innerHTML += `
        <div class="incls text-center text-light fw-bolder pt-1">
        <div class="kural">
        ${data.line1} <br>
        ${data.line2}<br><br>
        </div>
        Section: ${data.sect_tam}<br><br>
        Explanation: ${data.tam_exp}<br><br>
        <input type="button" value="Read About Writer" onclick="window.open('https://ta.wikipedia.org/wiki/%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AF%81%E0%AE%B5%E0%AE%B0%E0%AF%8D')" id="btn" class="fw-bold"/>
        </div>` 
    })
    .catch((er)=>{
        console.log("Error")
    })




}