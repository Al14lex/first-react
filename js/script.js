// Отримуємо елемент кореня для відображення
// const rootElement = document.getElementById('root');

// Відмальовуємо нашу розмітку
// ReactDOM.render(<h1>Мій перший React застосунок</h1>, rootElement);


// використання js

// let someLayout = `<h1>Синтаксис</h1>`;
// rootElement.insertAdjacentHTML("beforeend", someLayout);

// jsx + react
// let someLayout = (
//     <>
//         <h1 className="title">Синтаксис</h1>
//         <div>
//             Контейнер з текстом <br /> чи компонентами
//         </div>
//         <img src="" alt="" />
//     </>
//     );
// ReactDOM.render(someLayout, rootElement);
// console.log(someLayout);

// class = className
// for = htmlFor
// onclick = onClick
// ===================================

// let someSum = 2 * 100;

// function returnSum(a, b) {
//     return a + b;
// }

// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         <h1 className="title">Синтаксис</h1>
//         <div className="text">
//             Зарплатня 1 розробника (ці): {someSum}$ <br />
//             Зарплатня 2 розробника (ці): {returnSum(1000, 500)}$
//         </div>
//     </>
//     );
// ReactDOM.render(someLayout, rootElement);
// console.log(someLayout);

// ======================================
// МАСИВИ, ОБ"ЄКТИ, ЦИКЛИ

// const someArr = [
//     "Привітність",
//     "Комунікабельність",
//     "Англійська"
// ];

// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         <h1 className="title">Синтаксис</h1>
//         <div className="text">
//             Зарплатня 1 розробника (ці): 2000$
//         </div>
//         <h2>Вимоги:</h2>
//         <ul>
//             {someArr.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     </>
// );
//     ReactDOM.render(someLayout, rootElement);

// =================================================
//  УМОВИ
// {true or false && data}

// дані
// const isTitle = true; //відобразиться наш тайтл, якщо буде в умові фолс - тайтл не відображується

// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         {isTitle && <h1 className="title">Синтаксис</h1>}
//         <div className="text">
//             Зарплатня розробника: 2000$
//         </div>
//     </>
// );

//  ReactDOM.render(someLayout, rootElement);

//===========================================================
// УМОВИ
// якщо в масиві немає данних - не показуємо частину компонентів де ці данні використовуються

// const someArr = []; // пустий масив

// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         <h1 className="title">Синтаксис</h1>
//         <div className="text">
//             Зарплатня розробника: 2000$
//         </div>
//         {Boolean(someArr.length) &&
//             <>
//         <h2>Вимоги:</h2>
//         <ul>
//             {someArr.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//             </>
//         }
//     </>
// );

/*
ми огорнули частину коду із заголовком "вимоги" та списком у фігурні дужки
додали умову - повернути булеве значення якщо довжина someArr = 0
додали тег без тегу, щоб був один елемент вищої вкладенностиі, а потім заголовок і список в ньому
*/

// ReactDOM.render(someLayout, rootElement);

// ===================================================
// ІНТЕГРАЦІЯ ПОДІЙ

//подія - при кліку на дів виводиться в консоль
// function divAction() {
//     console.log('Click');
// }
// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         <h1 className="title">Синтаксис</h1>
//         <div onClick={divAction} className="text">
//             Зарплатня розробника: 2000$
//         </div>
//     </>
// );
// //на дів перед класом додаємо подію onClick і передаємо у фігурних лапках функцію - що має відбуватись при події
// ReactDOM.render(someLayout, rootElement);

//===================================================
/*ВИВІД СТИЛІВ
звичайний вивід стилів: <h1 style="color:red; font-size: 20px;">Синтаксис</h1>
Змінений                <h1 style={{ color: "red", fontSize: "20px"}}>Синтаксис</h1>
*/

// const rootElement = document.getElementById('root');

// let someLayout = (
//     <>
//         <h1 style={{ color: "red", fontSize: "20px"}}>Синтаксис</h1>
//         <div className="text">
//             Зарплатня розробника: 2000$
//         </div>
//     </>
// );

// ReactDOM.render(someLayout, rootElement);

//ДОМАШКА
/* написати за допомогою jsx вивід конструкції де є:
заголовок
текст
зображення
нумерований список в якому вводяться данні з масиву (якщо вони є)
кнопка, при кліку на яку з"являється повідомлення (alert)
*/

//==========================ДЗ===================

const rootElement = document.getElementById('root');
//дані
let hWorkArr = ["масиви", "умови", "інтеграція подій", "стилізація"];
function clickBtn() {
    alert ("і навіть кнопка працює!!");
}
let styleDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px"
};

let homeWork = (
    <div style={styleDiv}>
        <img src="../img/1 (2).png" alt="react" width="100px" height="100px"/>
        <h1>ДЗ React</h1>
        <p>Моє перше домашнє завдання по темі React. <br/> Я вивчила:</p>
        <ol>
            {hWorkArr.map((item, index) => (
                <li key={index}>{item}</li>
            ))  
            }
        </ol>
        <button onClick={clickBtn} type="button">Кнопка</button>
    </div>
)

ReactDOM.render(homeWork, rootElement);
// ВСЕ ПРАЦЮЄ! Я АГОНЬ
//============================================================