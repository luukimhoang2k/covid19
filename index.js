let elementDom = document.getElementById('header');

let tableElement = document.querySelector('table');
elementDom.onclick = function (e) {
    fetch(`https://api.covid19api.com/summary`)
        .then(function (response) {
            return response.json();
        }).then(function (result) {
            let html = '';
            for (let i = 0; i < 192; i++) {
                html += `<tr>
                <th>STT</th>
                <th>Country</th> 
                <th>NewConfirmed</th>
                <th>TotalConfirmed</th>
                <th>NewDeaths</th>
                <th>TotalDeaths</th><
                <th>NewRecovered</th>
                <th>TotalRecovered</th>
                </tr>
                <tr> 
                <td>${i}</td>
                <td>${result.Countries[i].Country}</td>
                 <td>${result.Countries[i].NewConfirmed}</td>
                 <td> ${result.Countries[i].TotalConfirmed}</td>
                 <td>${result.Countries[i].NewDeaths}</td>
                 <td>${result.Countries[i].TotalDeaths}</td>
                 <td>${result.Countries[i].NewRecovered}</td>
                 <td>${result.Countries[i].TotalRecovered}</td>
                 </tr >`
            }
            tableElement.innerHTML = html
        })
}
