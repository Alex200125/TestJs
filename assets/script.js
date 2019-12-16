let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for( let i = 0; i < 2;) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

        if((typeof(a)) != null  && (typeof(b)) != null && a != '' && b != '') {
            if(a.length < 50) {
                console.log("Всё окей :)");
                appData.expenses[a] = b;
                i++;
            }
            
        } else {
            console.log("Пожалуйста, введите данные");
        }

    
}

appData.moneyPerDay = appData.budget / 30;

alert('Ваш ежедневный бюджет ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Уже лучше!");
} else if(appData.moneyPerDay > 2000) {
    console.log("Вот теперь, то что надо!");
} else {
    console.log("Что-то пошло не так :(");
}