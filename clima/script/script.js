document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        clearInfo();
        showWarnirg('carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=596c2d687b47af4f9e22ccbcebc2dd0d&units=metric&pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            clearInfo();
            showWarning('Não encontramos esta localização.');
        }
    } else {
        clearInfo();
    }
});

function showInfo(json){
    showWarnirg('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${obj.name}, ${obj.country}`;
    document.querySelector('.tempInfo').innerHTML = `${obj.temp}  <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${obj.windSpeed}<span>km/h</span>`
    document.querySelector('ventoPonto').style.transform = `rotate(${obj.windAngle-90}deg)`;
    document.querySelector('.temp img').setAttribute('src', 
    `http://openweathermap.org/img/wn/${obj.tempIcon}@2x.png`);

}

function showWarnirg(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showWarnirg('');
    document.querySelector('.resultado').style.display = 'none';

}