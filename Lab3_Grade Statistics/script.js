// 獲取 DOM 元素 [cite: 18]
const mathInput = document.getElementById('mathInput');
const englishInput = document.getElementById('englishInput');
const submitBtn = document.getElementById('submitBtn');
const tableBody = document.getElementById('gradeTableBody');

// 顯示平均值的欄位
const mathAvgCell = document.getElementById('mathAvg');
const englishAvgCell = document.getElementById('englishAvg');
const overallAvgCell = document.getElementById('overallAvg');

// 儲存所有成績以便計算欄位平均
let gradesList = [];
let rowCount = 0;

// 監聽按鈕點擊事件 [cite: 21]
submitBtn.addEventListener("click", function () {
    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    // 簡單的驗證：確保輸入的是數字
    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("Please enter valid numbers for both Math and English.");
        return;
    }

    // 計算該列的平均 
    const rowAverage = (mathScore + englishScore) / 2;

    // 更新計數器作為 ID (#)
    rowCount++;

    // 將數據存入陣列
    gradesList.push({
        math: mathScore,
        english: englishScore,
        avg: rowAverage
    });

    // 新增一列到表格 [cite: 12]
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAverage.toFixed(2)}</td>
    `;
    tableBody.appendChild(newRow);

    // 清空輸入框
    mathInput.value = '';
    englishInput.value = '';

    // 更新底部欄位平均 
    updateColumnAverages();
});

function updateColumnAverages() {
    if (gradesList.length === 0) return;

    let totalMath = 0;
    let totalEnglish = 0;
    let totalOverall = 0;

    // 加總所有成績
    gradesList.forEach(grade => {
        totalMath += grade.math;
        totalEnglish += grade.english;
        totalOverall += grade.avg;
    });

    // 計算平均
    const count = gradesList.length;
    const avgMath = totalMath / count;
    const avgEnglish = totalEnglish / count;
    
    // 講義截圖中的 Average 欄位 (70.00) 似乎是所有 Row Average 的平均，
    // 或者 (Math Avg + English Avg) / 2。數學上兩者通常相等。
    const avgOverall = totalOverall / count; 

    // 更新 HTML 顯示，保留兩位小數
    mathAvgCell.textContent = avgMath.toFixed(2);
    englishAvgCell.textContent = avgEnglish.toFixed(2);
    overallAvgCell.textContent = avgOverall.toFixed(2);
}