const getColor = () =>{
    const radomnumber = Math.floor(Math.random() * 16777215);
    const radomCode = "#" + radomnumber.toString(16);
    document.body.style.backgroundColor = radomCode;
    document.getElementById("color-code").innerText = radomCode;
    navigator.clipboard.writeText(radomCode)

}
document.getElementById("btn").addEventListener(
    "click",getColor
)



getColor();