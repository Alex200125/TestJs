let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpenses();

detectLevel();

checkSavings();
detectDayBudget();

chooseOptExpenses()

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
    while(isNaN(money)|| money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

function chooseExpenses() {
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
}

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений, МММ?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ваш ежедневный бюджет ' + appData.moneyPerDay);
}

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Уже лучше!");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Вот теперь, то что надо!");
    } else {
        console.log("Что-то пошло не так :(");
    }
}

function chooseOptExpenses() {
    for(let i = 1; i < 4;) {
        let a = prompt("Статья необязательных расходов?");

        if((typeof(a)) != null && a != '') {
            appData.optionalExpenses[i] = a;
            i++;
        } else {
            alert("Пожалуйста, заполните данные");
        }
    }
}