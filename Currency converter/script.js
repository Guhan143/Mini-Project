let select = document.querySelectorAll(".currency")// convert the html to js
let btn =document.getElementById("btn")
let input = document.getElementById('input')


fetch('https://api.frankfurter.app/currencies') //  get the api id to the broswer
.then(res=>(res.json())) // to convet the value to json format
.then(res=>displayDropDown(res)) // create the method to display the value

function displayDropDown(res) // function to display method
{
 //  console.log(Object.entries(res)[0][0]) // object to convert the aray format
     curr = Object.entries(res)

    for(let i=0;i<curr.length;i++) // loop mood to run the array to get the curr values
    {
        let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option>` // get the 1 name to the curr
        select[0].innerHTML +=opt // show the all value of the currency
        select[1].innerHTML+=opt
    }
}

btn.addEventListener('click',()=>{ // btn to click the value 
    curr1 = select[0].value //store the first value
    curr2 = select[1].value // store the sec value 
    let inputVal = input.value // input value to  the store the value

    if(curr1 ===curr2) // check the same currency 
        alert("same currency")

    else
    convert(curr1,curr2,inputVal) // do the function values

});


function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app'; // api link to the browser
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });

}
