fetch('http://api.openweathermap.org/data/2.5/weather?id=542420&appid=38b7b42d3a3767d1618fd582ddb56e01')
    .then( resp => { return resp.json() })
    .then( data => {
        console.log(data);
        document.querySelector('.conteiner__name').textContent = data.name;
        document.querySelector('.conteiner__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.conteiner__weather').textContent = data.weather[0].main;
    })
    .catch( () => {
        console.log('ERROR');
    })
    
    document.querySelector('button').onclick = () => {
        let temp = document.querySelector('.conteiner__temp').textContent + '\n';
        let weather = document.querySelector('.conteiner__weather').textContent;
        let city = document.querySelector('.conteiner__name').textContent + '\n';
        const token = '2095883850:AAE1o0jb5aoPTR7zLl-eb-nTX9ftVesbKJ4';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=217841813&text=
        Город: ${city}
        Температура: ${temp}
        Погода: ${weather}`;
        fetch(url);
    }
    
    setInterval(() => {
        let temp = document.querySelector('.conteiner__temp').textContent;
        let weather = document.querySelector('.conteiner__weather').textContent;
        let city = document.querySelector('.conteiner__name').textContent;
        const token = '2095883850:AAE1o0jb5aoPTR7zLl-eb-nTX9ftVesbKJ4';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=217841813&text=\n
        Город: \n${city}\n
        Температура: ${temp}\n
        Погода: ${weather}`;
        fetch(url);
    }, 3600000);
        
    
        //     let temp = document.querySelector('.conteiner__temp').textContent;
        //     const token = '2095883850:AAE1o0jb5aoPTR7zLl-eb-nTX9ftVesbKJ4';
        //     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=217841813&text=`;
        //     let xhttp = new XMLHttpRequest();
        //     xhttp.open('GET', url + temp);
        //     xhttp.send();