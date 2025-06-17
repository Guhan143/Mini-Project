
const btn = document.getElementById('button');
    const res = document.getElementById("result");

    btn.addEventListener('click', displayStats);

    function displayStats() {
      const input1 = document.getElementById("inp1").value;
      const input2 = document.getElementById("inp2").value;
      const operation = document.getElementById("input").value;

      let a = parseFloat(input1);
      let b = parseFloat(input2);
      let c = 0;

      if (isNaN(a) || isNaN(b)) {
        res.innerHTML = "Please enter valid numbers.";
        return;
      }

      switch (operation) {
        case 'Add':
          c = a + b;
          break;
        case 'Subtract':  
          c = a - b;
          break;
        case 'Multiply':
          c = a * b;
          break;
        case 'Divide':
          c = b !== 0 ? a / b : "Cannot divide by zero";
          break;
      }

      res.innerHTML = "Result: " + c;
}