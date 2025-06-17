const btn = document.getElementById("btn")
const colortext = document.getElementById('color') //  hexcode value 
const wrap =  document.getElementById("wrap") // full bg
//  hexadecimal code value
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changeBg)

function changeBg() // background ku color aa  change panrathuku
{
    let hexcolor =  '#' // already irukkara value

    for(i=1;i<=6;i++)  // 6 time run  aagum 
    {
        hexcolor += rand()   //  ithula iruthu 6 times run panni value edu nu 
    }
    wrap.style.backgroundColor = hexcolor // bg la place pannu nu mention pannanum
    colortext.innerHTML=hexcolor // hexcode display pannanum 

}

function rand()
{
    let hexvalue = Math.floor(Math.random()*16) //  random value at under 16
    return hex[hexvalue] // pickup a number at  under hex box // return  means send the value to hexvalue to pickup the number to store
}