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
// let uName = prompt('Как зовут?', 'Никак');
// if(uName==null){
//     alert('Пока!');
// }
// else{
//     document.write('Привет' + uName);
// }
// let a = 1;
// let b = '1';

// let sr = document.write(b+a);
// let ir = document.write(a+b);
// let a = '1';
// let b = document.write(parseInt(a) + 1);

// let c = '5.1';
// let d = document.write(parseFloat(c)+ 5);

// let e = '2+2';
// let f = document.write(eval(e));
// let a;
// let b = 1;
// let c = 2;
// document.write(a = c<<b);
// let a = 10;
// let b = 5;
// if(!(a==b)){
//     document.write('a!=b');
// } else{
//     document.write('a=b');
// }
// let command = prompt('D','');

// if(command== null){
//     document.write('Ля');
// } else{
//     switch(command){ //parseInt как вариант проверки
//         case 1: alert('Тут 1 ');break;
//         case 2:alert('Тут 2');break;
//         default: alert('А тут не то');break;
//     }
// }
// let i = 10;
// while(i<19){
//     document.write(i + "<br>");
//     i++;
// }
// for(i=1;i<21;i++){
//     if(i%2 ==0) continue;
//     else{document.write(i+'=');}
// }

// let mass = [1,5,6,8];
// document.write(mass);
// mass[7] = 11;
// document.write(mass);
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + '<br>');
        
	}
}

let mass = [0,0,0];
mass[0] = [1,2,3];
mass[1] = [4,5,6];
mass[3] = [11,8,9];

let ind = [0, 0];
let max = mass[0][0];

for(i=0;i<mass.length;i++){
    for(j=0;j<mass[i].length;j++){
        if(mass[i][j]>max){
            max = mass[i][j];
            ind[0] = i;
            ind[1] = j;
        }
    }
}
document.write(max);


// let mass =[[1,2,3,7],[4,5,6]];
// let max = mass[0][0];

// for(let i=0;i<mass.length;i++){
//     for(let j=0;j<mass[i].length;j++){
//         if(mass[i][j]>max){
//             max = mass[i][j];
//         }
//     }
// }
// document.write('<h1>' + max + '</h1>');