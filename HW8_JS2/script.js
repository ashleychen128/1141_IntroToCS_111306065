// 獨立的運算函數 [cite: 50, 56, 57, 58, 59]
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error (Div by 0)"; // 處理除以零 [cite: 51, 59]
    return a / b; 
}

function calculate() {
    // 使用 getElementById 獲取輸入值 [cite: 49]
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');

    // 檢查是否為有效數字
    if (isNaN(n1) || isNaN(n2)) {
        resultDisplay.innerText = "Please enter numbers";
        return;
    }

    let res;
    switch (op) {
        case 'add': res = add(n1, n2); break;
        case 'subtract': res = subtract(n1, n2); break;
        case 'multiply': res = multiply(n1, n2); break;
        case 'divide': res = divide(n1, n2); break;
    }

    // 顯示結果並保留兩位小數 [cite: 52]
    if (typeof res === 'string') {
        resultDisplay.innerText = res;
    } else {
        resultDisplay.innerText = "Result = " + res.toFixed(2);
    }
}