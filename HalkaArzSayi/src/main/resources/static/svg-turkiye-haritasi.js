/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

    let data = null;
let dataFetched = false;

function fetchDataFromAPI(select, cityName) {
    fetch(`http://localhost:8080/companies/byCity/${select}`)
        .then(response => response.json())
        .then(data => {
            // Call createTable function with the new data
            createTable(data);

            // Update city information
            const cityInfoPanel = document.getElementById('city-info');
            cityInfoPanel.innerHTML = 'Seçilen Şehir: ' + cityName;

            // Set dataFetched to true to indicate data has been fetched
            dataFetched = true;
        })
        .catch(error => {
            console.error('Error fetching data from API:', error);
        });
}

function svgturkiyeharitasi() {
    let yenile = true;
    const element = document.querySelector('#svg-turkiye-haritasi');
    const info = document.querySelector('.il-isimleri');

    const id = document
    const cityInfoPanel = document.getElementById('city-info'); // Şehir bilgilerini göstereceğimiz panel
   if (yenile == false){
       window.location.reload(false);
   }
    element.addEventListener(
        'mouseover',
        function (event) {
            // Mevcut mouseover işlevsellikleri...
        }
    );

    element.addEventListener(
        'mousemove',
        function (event) {
            // Mevcut mousemove işlevsellikleri...
        }
    );

    element.addEventListener(
        'mouseout',
        function (event) {
            // Mevcut mouseout işlevsellikleri...
        }
    );

    element.addEventListener(
        'click',
        function (event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');
                 const select = parent.getAttribute("new");
                // Güney Kıbrıs kontrolü
                if (id === 'guney-kibris') {
                    return;
                }

                // Burada, tıklanan şehrin adını ve diğer bilgilerini alıp, yan panelde gösteriyoruz
                const cityName = parent.getAttribute('data-iladi'); // Şehir adını alıyoruz

                   fetchDataFromAPI(select,cityName);

                // Şehirle ilgili daha fazla bilgi buraya eklenebilir

                // Burada, eski yönlendirme işlevselliğini yorum satırına aldım
                // window.location.href = '#' + id + '-' + parent.getAttribute('data-plakakodu');
            }
        }
    );
}
function createTable(data) {
    // Remove existing table if it exists
    const existingTable = document.getElementById('tableContainer');
    // Sürekli boşluk olmasını sağlayan yer
    if (existingTable) {
        existingTable.innerHTML = '';
    }

    // Create a new table
    const table = document.createElement('table');

    // Table headers
    const tableHeaders = ['Numarası', 'İsim'];
    const headerRow = document.createElement('tr');
    tableHeaders.forEach(headerText => {
        const header = document.createElement('th');
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Table data
    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const cell = document.createElement('td');
                const cellText = document.createTextNode(item[key]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        table.appendChild(row);
    });

    // Append the table to the container
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.appendChild(table);
}


// Fonksiyonu çağır
svgturkiyeharitasi();

