const btn = document.getElementById('btn');
const form = document.getElementById('form');
const dni = document.getElementById('dni');
const output = document.getElementById('output');
const reg = new RegExp('[0-9]{8}$');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const overlay = document.getElementById('overlay');

const letterArray=["T","R","W","A","G","M","Y","F","P","D","X","B","N",
                    "J","Z","S","Q","V","H","L","C","K","E"];

form.addEventListener('submit', function(e){
    e.preventDefault();
    calculateLetter();
});

function calculateLetter(){
   let rest = dni.value % 23;
   let dniMatch = reg.test(dni.value);

   if (dniMatch){
    for (let i = 0; i < letterArray.length; i++){
        let dniLetter = letterArray[rest];
        output.textContent = dniLetter;
        }
   }else{
        let elementP = document.createElement('p');
        let textModal = modal.appendChild(elementP)
        textModal.innerHTML=`<h3>Formato incorrecto</h3>
        <p>recuerda: son los 8 dígitos de tu dni sin letra</p><span id="close">X</span>`;
        modal.style.display = 'block';
        overlay.style.display = 'block';
        closeModal();
   }
}

function closeModal(){
    document.addEventListener('click', function(e){
        modal.style.display = 'none';
        modal.removeChild(modal.firstElementChild);
        overlay.style.display = 'none';
    })
    
}














