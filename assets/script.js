let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    start: function() {
        money = +prompt("Ваш бюджет на месяц?");
        time = prompt("Введите дату в формате YYYY-MM-DD");
        
        while(isNaN(money)|| money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?");
        }
    },
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш ежедневный бюджет ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Уже лучше!");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Вот теперь, то что надо!");
        } else {
            console.log("Что-то пошло не так :(");
        } 
    },
    checkSavings: function() {
        if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений, МММ?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 4;) {
            let a = prompt("Статья необязательных расходов?");
    
            if((typeof(a)) != null && a != '') {
                appData.optionalExpenses[i] = a;
                i++;
            } else {
                alert("Пожалуйста, заполните данные");
            }
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1;) {
            let items = prompt("Что принесёт доп.доход? (Через запятую) ", '');

            if(typeof(items) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может, что-то ещё?'));
                appData.income.sort();

                alert('Способы доп.зароботка: ');
                appData.income.forEach(function(item, i) {
                    alert(`${++i}: ${item}`);
                });

                i++;
            } else {
                alert('Пожалуйста, заполните данные');
            }
        }        
    }
};

// appData.start();

appData.chooseIncome();

alert('Наша программа включает в себя: ');

for(key in appData) {
    alert(key);
}

// appData.chooseExpenses();

// appData.detectLevel();

// appData.checkSavings();
// appData.detectDayBudget();

// appData.chooseOptExpenses();