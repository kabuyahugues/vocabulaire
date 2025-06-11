// console.log('helloWorld');

///// variable  //////

let btnSend = document.querySelector('.send');
let btnDelete = document.querySelector('.erase');
let btnTest = document.querySelector('.lets-go')

let inputOriginal = document.querySelector('.from');
let inputTranslate = document.querySelector('.to');
const divError = document.querySelector('.error');
const divNumberWords = document.querySelector('.nombre-de-mots');

///// class  //////

class Data {
  constructor() {
    this.data = this.loadDataFromLocalStorage();
  }

  loadDataFromLocalStorage() {
    const obj = localStorage.getItem("data");
    const json = JSON.parse(obj);
    return json || [];
  }

  saveDataToLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  setData(){
    divError.textContent = '';

    let orignalValue = inputOriginal.value.trim();
    let translateValue = inputTranslate.value.trim();

    if (orignalValue === '' && translateValue === '') {
      divError.textContent = "tu n'as pas remplie les cases"
      return;
    } ;

    this.data.push({
      'original' : orignalValue,
      'translate' : translateValue
    })

    this.saveDataToLocalStorage();
  }


  getData(){
    return this.data
  }
}

class Display{
  constructor()
  {

  }

  static Displaynombre(nombreData){
    if (!nombreData && !divNumberWords) return;
    console.log(nombreData);
    divNumberWords.textContent = nombreData;
    if (nombreData) {
      btnTest.classList.remove('remove')
    }
  };

}

let data = new Data();

///// function  //////



///// event  //////

if (btnSend) {
  btnSend.addEventListener('click', (e) =>{

    data.setData();
    Display.Displaynombre(data.getData().length);

  })
}

document.addEventListener('DOMContentLoaded', () => {
  if (data.getData()) {
    Display.Displaynombre(data.getData().length);
  }
});

// localStorage.clear()



