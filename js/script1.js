// document.write('<h1>ХТО Я?</h1>')
// let openWindow = () =>{
//     msgWindow = open('index.html')
// }
// if(confirm('Нажмите')){
//     alert('Ля а тут ок');
// }
// else{
//     alert('Отмена');
// }
let uName = prompt('Как зовут?', 'Никак');
if(uName==null){
    alert('Пока!');
}
else{
    document.write('Привет' + uName);
}