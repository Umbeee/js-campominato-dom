const btnGioca = document.getElementById('gioca')
const selectDifficolta = document.getElementById('difficolta')
const htmlMain = document.querySelector('main')
const r = document.querySelector(':root')

let contatore= 0;
console.log(contatore)

btnGioca.addEventListener('click', function(){

    campoMinato();
})

function campoMinato(){

    let valoreDifficolta = parseInt(selectDifficolta.value);

    let bombe = generoBombe( valoreDifficolta);

    myFunction_set(valoreDifficolta);
    

    htmlMain.innerHTML = '';


    let divGriglia = document.createElement('div');
    divGriglia.classList.add('griglia', 'rounded');
    htmlMain.append(divGriglia);


   

    for(let i= 1; i<=valoreDifficolta; i++){

        contatore=0;

        let divCella= document.createElement('div');
        divCella.classList.add('item');
        divCella.innerText = i;

        document.querySelector('.griglia').append(divCella);

        divCella.addEventListener('click', function(){
            console.log(this.innerText)
            
            contatore = contatore + 1;

            if( !bombe.includes(i)){
                this.classList.add('clicked')
            }else{
                this.classList.add('clicked-bomb')
                let banner = document.createElement('div');
                banner.classList.add('banner', 'rounded');
                htmlMain.append(banner);
                banner.innerText = `Score: ${contatore}`
                

                let btnRestart = document.createElement('button')
                btnRestart.classList.add('btn',  'btn-light')
                btnRestart.innerText= 'Riprova'
                btnRestart.addEventListener('click', function(){

                    htmlMain.innerHTML = '';
                    
                })

                banner.append(btnRestart);

                let btnAltraVita = document.createElement('button')
                btnAltraVita.classList.add('btn', 'btn-success')
                btnAltraVita.innerText = 'Vita Bonus'
                btnAltraVita.addEventListener('click', function(){

                    banner.remove();
                })

                banner.append(btnAltraVita)
            }
        })
    }



    
}

function myFunction_set(x) {

    x = Math.sqrt(x);
    r.style.setProperty('--numCelle', x);
}

function generoBombe(difficoltaParam){
    const arrayBombe = [];

   

    while (arrayBombe.length <16){

        let bomb = numRandom( 1, difficoltaParam);

        if( !arrayBombe.includes(bomb) ){
            arrayBombe.push(bomb)
        }

    }

    console.log(arrayBombe)
    return arrayBombe;
}

function numRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

              
// function  resetHtml(){
//     htmlMain.innerHTML = '';
// }