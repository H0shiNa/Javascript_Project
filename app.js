const form = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 

    const bmi = weight / (height * height);

    let bmiCategory = "";
    let groupSuggestion = "";

    if (bmi < 18.5) {
        bmiCategory = "น้ำหนักน้อย";
        groupSuggestion = "คุณอาจพิจารณาเข้าร่วมกลุ่มเพิ่มน้ำหนัก หรือปรึกษาแพทย์หรือนักโภชนาการเพื่อขอคำแนะนำ";
    } else if (bmi < 23) {
        bmiCategory = "น้ำหนักปกติ";
        groupSuggestion = "คุณมีน้ำหนักตัวที่เหมาะสมแล้ว  รักษาวิถีชีวิตสุขภาพดีนี้ไว้ต่อไป!";
    } else if (bmi < 25) {
        bmiCategory = "น้ำหนักเกิน";
        groupSuggestion = "คุณอาจพิจารณาเข้าร่วมกลุ่มควบคุมน้ำหนัก หรือกลุ่มออกกำลังกายเพื่อสุขภาพ";
    } else if (bmi < 30) {
        bmiCategory = "อ้วนระดับ 1";
        groupSuggestion = "คุณควรเข้าร่วมกลุ่มควบคุมน้ำหนัก  ออกกำลังกายสม่ำเสมอ และปรึกษาแพทย์หรือนักโภชนาการ";
    } else {
        bmiCategory = "อ้วนระดับ 2";
        groupSuggestion = "คุณควรเข้าร่วมกลุ่มควบคุมน้ำหนัก  ออกกำลังกายสม่ำเสมอ และปรึกษาแพทย์หรือนักโภชนาการอย่างเร่งด่วน";
    }

    resultDiv.innerHTML = `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)} (${bmiCategory})<br><br>คำแนะนำ: ${groupSuggestion}`;
});