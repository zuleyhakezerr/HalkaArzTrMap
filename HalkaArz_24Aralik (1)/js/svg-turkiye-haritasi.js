
function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const cityInfoPanel = document.getElementById('city-info'); // Şehir bilgilerini göstereceğimiz panel

  element.addEventListener(
    'mouseover',
    function (event) {
   
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

       
        if (id === 'guney-kibris') {
          return;
        }

        // Burada, tıklanan şehrin adını ve diğer bilgilerini alıp, yan panelde gösteriyoruz
        const cityName = parent.getAttribute('data-iladi'); 
        cityInfoPanel.innerHTML = 'Seçilen Şehir: ' + cityName;
        
      }
    }
  );
}


svgturkiyeharitasi();


async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('Veri yüklenemedi: ' + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error('Veri yüklenirken bir hata oluştu:', error);
  }
}


async function displayCompanyInfo(city) {
  const data = await loadData();
  if (data && data[city]) {
    const companies = data[city];
   
    const cityInfoPanel = document.getElementById('city-info');
    cityInfoPanel.innerHTML = '';
    companies.forEach(company => {
      cityInfoPanel.innerHTML += `<div class="company-info">
        <h4>${company.firmaAdi}</h4>
    
      </div>`;
    });
  }
}


document.getElementById('ankara').addEventListener('click', () => displayCompanyInfo('Ankara'));
document.getElementById('istanbul').addEventListener('click', () => displayCompanyInfo('Istanbul'));
document.getElementById('izmir').addEventListener('click', () => displayCompanyInfo('Izmir'));
document.getElementById('antalya').addEventListener('click', () => displayCompanyInfo('Antalya'));
document.getElementById('bursa').addEventListener('click', () => displayCompanyInfo('Bursa'));
document.getElementById('adana').addEventListener('click', () => displayCompanyInfo('Adana'));
document.getElementById('konya').addEventListener('click', () => displayCompanyInfo('Konya'));
document.getElementById('gaziantep').addEventListener('click', () => displayCompanyInfo('Gaziantep'));
document.getElementById('mersin').addEventListener('click', () => displayCompanyInfo('Mersin'));
document.getElementById('kayseri').addEventListener('click', () => displayCompanyInfo('Kayseri'));
document.getElementById('eskisehir').addEventListener('click', () => displayCompanyInfo('Eskisehir'));
document.getElementById('diyarbakir').addEventListener('click', () => displayCompanyInfo('Diyarbakir'));
document.getElementById('samsun').addEventListener('click', () => displayCompanyInfo('Samsun'));
document.getElementById('denizli').addEventListener('click', () => displayCompanyInfo('Denizli'));
document.getElementById('sanliurfa').addEventListener('click', () => displayCompanyInfo('Sanliurfa'));
document.getElementById('malatya').addEventListener('click', () => displayCompanyInfo('Malatya'));
document.getElementById('trabzon').addEventListener('click', () => displayCompanyInfo('Trabzon'));
document.getElementById('manisa').addEventListener('click', () => displayCompanyInfo('Manisa'));
document.getElementById('kahramanmaras').addEventListener('click', () => displayCompanyInfo('Kahramanmaras'));
document.getElementById('van').addEventListener('click', () => displayCompanyInfo('Van'));
document.getElementById('aydin').addEventListener('click', () => displayCompanyInfo('Aydin'));
document.getElementById('balikesir').addEventListener('click', () => displayCompanyInfo('Balikesir'));
document.getElementById('sakarya').addEventListener('click', () => displayCompanyInfo('Sakarya'));
document.getElementById('tekirdag').addEventListener('click', () => displayCompanyInfo('Tekirdag'));
document.getElementById('kutahya').addEventListener('click', () => displayCompanyInfo('Kutahya'));
document.getElementById('muğla').addEventListener('click', () => displayCompanyInfo('Muğla'));
document.getElementById('hatay').addEventListener('click', () => displayCompanyInfo('Hatay'));
document.getElementById('osmaniye').addEventListener('click', () => displayCompanyInfo('Osmaniye'));
document.getElementById('kirikkale').addEventListener('click', () => displayCompanyInfo('Kirikkale'));
document.getElementById('afyonkarahisar').addEventListener('click', () => displayCompanyInfo('Afyonkarahisar'));
document.getElementById('zonguldak').addEventListener('click', () => displayCompanyInfo('Zonguldak'));
document.getElementById('kocaeli').addEventListener('click', () => displayCompanyInfo('Kocaeli'));
document.getElementById('nevsehir').addEventListener('click', () => displayCompanyInfo('Nevsehir'));
document.getElementById('nigde').addEventListener('click', () => displayCompanyInfo('Nigde'));
document.getElementById('sivas').addEventListener('click', () => displayCompanyInfo('Sivas'));
document.getElementById('erzurum').addEventListener('click', () => displayCompanyInfo('Erzurum'));
document.getElementById('kars').addEventListener('click', () => displayCompanyInfo('Kars'));
document.getElementById('agri').addEventListener('click', () => displayCompanyInfo('Agri'));
document.getElementById('mardin').addEventListener('click', () => displayCompanyInfo('Mardin'));
document.getElementById('batman').addEventListener('click', () => displayCompanyInfo('Batman'));
document.getElementById('sirnak').addEventListener('click', () => displayCompanyInfo('Sirnak'));
document.getElementById('tunceli').addEventListener('click', () => displayCompanyInfo('Tunceli'));
document.getElementById('hakkari').addEventListener('click', () => displayCompanyInfo('Hakkari'));
document.getElementById('yozgat').addEventListener('click', () => displayCompanyInfo('Yozgat'));
document.getElementById('bolu').addEventListener('click', () => displayCompanyInfo('Bolu'));
document.getElementById('karabuk').addEventListener('click', () => displayCompanyInfo('Karabuk'));
document.getElementById('duzce').addEventListener('click', () => displayCompanyInfo('Duzce'));
document.getElementById('canakkale').addEventListener('click', () => displayCompanyInfo('Canakkale'));
document.getElementById('edirne').addEventListener('click', () => displayCompanyInfo('Edirne'));
document.getElementById('kirklareli').addEventListener('click', () => displayCompanyInfo('Kirklareli'));
document.getElementById('bilecik').addEventListener('click', () => displayCompanyInfo('Bilecik'));
document.getElementById('bartin').addEventListener('click', () => displayCompanyInfo('Bartin'));
document.getElementById('ardahan').addEventListener('click', () => displayCompanyInfo('Ardahan'));
document.getElementById('igdir').addEventListener('click', () => displayCompanyInfo('Igdir'));
document.getElementById('yalova').addEventListener('click', () => displayCompanyInfo('Yalova'));
document.getElementById('sinop').addEventListener('click', () => displayCompanyInfo('Sinop'));
document.getElementById('amasya').addEventListener('click', () => displayCompanyInfo('Amasya'));
document.getElementById('tokat').addEventListener('click', () => displayCompanyInfo('Tokat'));
document.getElementById('corum').addEventListener('click', () => displayCompanyInfo('Corum'));
document.getElementById('kastamonu').addEventListener('click', () => displayCompanyInfo('Kastamonu'));
document.getElementById('bayburt').addEventListener('click', () => displayCompanyInfo('Bayburt'));
document.getElementById('giresun').addEventListener('click', () => displayCompanyInfo('Giresun'));
document.getElementById('ordu').addEventListener('click', () => displayCompanyInfo('Ordu'));
document.getElementById('rize').addEventListener('click', () => displayCompanyInfo('Rize'));
document.getElementById('artvin').addEventListener('click', () => displayCompanyInfo('Artvin'));
document.getElementById('gumushane').addEventListener('click', () => displayCompanyInfo('Gumushane'));
document.getElementById('mus').addEventListener('click', () => displayCompanyInfo('Mus'));
document.getElementById('bitlis').addEventListener('click', () => displayCompanyInfo('Bitlis'));
document.getElementById('bingol').addEventListener('click', () => displayCompanyInfo('Bingol'));
document.getElementById('elazig').addEventListener('click', () => displayCompanyInfo('Elazig'));
document.getElementById('karaman').addEventListener('click', () => displayCompanyInfo('Karaman'));
document.getElementById('kilis').addEventListener('click', () => displayCompanyInfo('Kilis'));
document.getElementById('adıyaman').addEventListener('click', () => displayCompanyInfo('Adıyaman'));
document.getElementById('usak').addEventListener('click', () => displayCompanyInfo('Usak'));
document.getElementById('kirşehir').addEventListener('click', () => displayCompanyInfo('Kirşehir'));
document.getElementById('aksaray').addEventListener('click', () => displayCompanyInfo('Aksaray'));
document.getElementById('kırıkkale').addEventListener('click', () => displayCompanyInfo('Kırıkkale'));
document.getElementById('isparta').addEventListener('click', () => displayCompanyInfo('Isparta'));
document.getElementById('burdur').addEventListener('click', () => displayCompanyInfo('Burdur'));
document.getElementById('antalya').addEventListener('click', () => displayCompanyInfo('Antalya'));
