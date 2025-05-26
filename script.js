function min(a, b)
{
    if (a<b)
        return a;
    else
        return b;
}
function max(a, b)
{
    if (a>b)
        return a;
    else
        return b;
}
function equal(a, b)
{
    return a===b;
}

function Task1()
{
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1))
    {
        document.getElementById('task1-result').textContent = 'Введите первое число';
        return;
    }
    
    if (isNaN(num2))
    {
        document.getElementById('task1-result').textContent = 'Введите второе число';
        return;
    }
    
    const result = `
        ${min(num1, num2)}<br>
    `;
    
    document.getElementById('task1-result').innerHTML = result;
}
function Task2()
{
    if (confirm('Здравствуйте!')) {
        var admin;
        var name;
        while (true) {
            name = prompt('Введите сюда ваше имя:');
            if (name === null || name.trim() === '') {
                continue;
            }
            admin = name;
            alert("Ваше имя - " + admin)
            break;
        }
    }
    alert("Спасибо!")
}
function Task3()
{
    var age;
    while (true) {
        age = prompt('Сколько вам лет?');
        if (age === null || age.trim() === '') {
            continue;
        }
        if (confirm('Ваш возраст - ' + age + ' лет?')) break;
    }
    
    document.getElementById('task3-result').textContent = `Ваш возраст: ${age}`;
    alert('Спасибо, пока.')
}
function changeLastName()
{
    const newLastName = document.getElementById("newLastName").value;
    if (newLastName)
    {
        document.getElementById("lastName").textContent = newLastName;
        alert('Фамилия изменена!');
    }
}
function changeBackground() {
    // Массив возможных градиентов
    const gradients = [
        "linear-gradient(135deg, #0a192f 0%, #172a45 100%)", // исходный градиент
        "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
        "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
        "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)",
        "linear-gradient(135deg, #614385 0%, #516395 100%)",
        "linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)",
        "linear-gradient(135deg, #16222A 0%, #3A6073 100%)",
        "linear-gradient(135deg, #1D2B64 0%, #F8CDDA 100%)",
        "linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)",
        "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)"
    ];

    // Выбираем случайный градиент (кроме текущего)
    let currentBg = document.body.style.backgroundImage || gradients[0];
    let newBg;
    do {
        newBg = gradients[Math.floor(Math.random() * gradients.length)];
    } while (newBg === currentBg && gradients.length > 1);

    // Применяем новый фон с анимацией
    document.body.style.transition = 'background 0.8s ease';
    document.body.style.backgroundImage = newBg;

    // Убираем transition после завершения анимации
    setTimeout(() => {
        document.body.style.transition = '';
    }, 800);
}
function validateForm() {
    // Проверка имени
    const name = document.getElementById('user-name').value;
    if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
        alert('Имя должно содержать только буквы');
        return;
    }
    
    // Проверка возраста
    const age = document.getElementById('user-age').value;
    if (!/^\d+$/.test(age) || parseInt(age) <= 0) {
        alert('Возраст должен быть положительным числом');
        return;
    }
    
    // Проверка пола
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Укажите ваш пол');
        return;
    }
    
    // Проверка навыков
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    if (skills.length === 0) {
        alert('Укажите хотя бы один навык');
        return;
    }
    
    // Проверка образования
    const education = document.getElementById('education').value;
    
    // Проверка условий для принятия
    let isAccepted = false;
    const mathChecked = document.getElementById('math').checked;
    const programmingChecked = document.getElementById('programming').checked;
    const lateCheked = document.getElementById('late').checked;
    
    // Условие 1: знание математики и программирования
    if (mathChecked && programmingChecked) {
        isAccepted = true;
    }
    
    // Условие 2: высшее образование и 2 любых навыка
    if ((education === 'university' || 'space') && ((skills.length >= 2) || lateCheked === 'late')) {
        isAccepted = true;
    }
    
    // Показать результат
    const resultText = isAccepted 
        ? 'Поздравляем! Вас приняли.' 
        : 'К сожалению, вы не подходите по критериям.';
    
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('form-result').style.display = 'block';
    
    // Блокировка чекбоксов после отправки
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
}
