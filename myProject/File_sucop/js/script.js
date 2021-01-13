'use strict';

const SibReceiver = document.querySelector('.SibReceiver'),
      Sucop = document.querySelector('.Sucop'),
      dateInc = document.querySelector('.date'),
      timeInc = document.querySelector('.time');

function readFile(input) {
    let file = input.files[0],
        reader = new FileReader(),
        string;

    reader.readAsText(file);

    reader.onload = () => {
        string = reader.result;

        let length = string.length,
            space = '-0123456789.',
            arr = [],
            arrSort = [],
            arrSucop = [],
            item = 0,
            number = '';

            for (let i = 0; i < (length - 1); i++) {
            if (space.indexOf(string.charAt(i)) !== -1) {
                number += string.charAt(i);
            } else if (number !== '') {
                arr.push(number);
                number = '';
            } 

            
        }

        console.log(arr);

        const list = [3, 4, 5, 0, 1, 2];

        for (let n = 14; n > 2; n -= 2) {
            arrSort[list[item]] = arr[(arr.length - n)];
            item++;
        }

        arrSucop[0] = +(arrSort[1]/1000).toFixed(4);
        arrSucop[1] = +(arrSort[2]/1000).toFixed(4);
        arrSucop[2] = +(arrSort[0]/1000).toFixed(4);
        arrSucop[3] = +(arrSort[4]/1917.3).toFixed(4);
        arrSucop[4] = +(arrSort[5]/1917.3).toFixed(4);
        arrSucop[5] = +(arrSort[3]/1917.3).toFixed(4);

        SibReceiver.innerHTML = '';
        Sucop.innerHTML = '';

        for (let n = 0; n <= 5; n++) {
            SibReceiver.innerHTML += `<td>${arrSort[n]}</td>`;
            Sucop.innerHTML += `<td>${arrSucop[n]}</td>`;
        }

        dateInc.textContent = `Дата замера: ${arr[(arr.length - 27)]}`;
        timeInc.textContent = `Время замера: ${arr[(arr.length - 26)]}:${arr[(arr.length - 25)]}:${arr[(arr.length - 24)]}`;
    };

    reader.onerror = () => {
        console.log(reader.error);
    };

}