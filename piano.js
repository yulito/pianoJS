const ul = "piano.json";

var typeSonido;

const op1=document.createElement('option');
op1.textContent ='Tonos medios';
op1.value='1';
const op2=document.createElement('option');
op2.textContent ='Tonos altos';
op2.value='2';
const slc =document.querySelector('#select');
const frac = document.createDocumentFragment();

frac.appendChild(op1);
frac.appendChild(op2);        
slc.appendChild(frac);

const sine = document.querySelector('.s1');
const square = document.querySelector('.s2');
const triangle = document.querySelector('.s3');
const sawtooth = document.querySelector('.s4');

sine.style.backgroundColor="red";
square.style.backgroundColor="gray";
triangle.style.backgroundColor="gray";
sawtooth.style.backgroundColor="gray";
     
fetch(ul)
    .then(response => response.json())
    .then(data => {
        //llamar a los selectores de los botones de cambio de tipo de sonido.
        const est = data.medios;
        const al = data.alto;   
        const tipo = data.tipos; 
        tipoSonido(tipo);   
        cambioSonido(est, al);
        seleccionSonido(est); //esta la utilizamos para dejar este sonido por defecto.

    }).catch(err => console.log(err));

function tipoSonido(sTipo){
    typeSonido = sTipo[0];
    
    sine.onclick = function(){ 
        typeSonido = sTipo[0];
        sine.style.backgroundColor="red";
        square.style.backgroundColor="gray";
        triangle.style.backgroundColor="gray";
        sawtooth.style.backgroundColor="gray";
    }
    square.onclick = function(){ 
        typeSonido = sTipo[1];
        sine.style.backgroundColor="gray";
        square.style.backgroundColor="red";
        triangle.style.backgroundColor="gray";
        sawtooth.style.backgroundColor="gray";
    }
    triangle.onclick = function(){ 
        typeSonido = sTipo[2];
        sine.style.backgroundColor="gray";
        square.style.backgroundColor="gray";
        triangle.style.backgroundColor="red";
        sawtooth.style.backgroundColor="gray";
    }
    sawtooth.onclick = function(){ 
        typeSonido = sTipo[3];
        sine.style.backgroundColor="gray";
        square.style.backgroundColor="gray";
        triangle.style.backgroundColor="gray";
        sawtooth.style.backgroundColor="red";
    }
}

function cambioSonido(medio, agudo){
    const resp=document.querySelector('#select');
    resp.onchange = function(){
        switch(resp.value){
            case "1":
                seleccionSonido(medio);
                break;
            case "2":
                seleccionSonido(agudo);
                break;
        }
    } 
}
function seleccionSonido(s){
    const c1 = document.querySelector('#c1');
    c1.onclick = (()=>{           
        reproducir(s[0])
    })
    const d1 = document.querySelector('#d1');
    d1.onclick = (()=>{         
        reproducir(s[1])
    })
    const e1 = document.querySelector('#e1');
    e1.onclick = (()=>{         
        reproducir(s[2])
    })
    const f1 = document.querySelector('#f1');
    f1.onclick = (()=>{         
        reproducir(s[3])
    })
    const g1 = document.querySelector('#g1');
    g1.onclick = (()=>{         
        reproducir(s[4])
    })
    const a1 = document.querySelector('#a1');
    a1.onclick = (()=>{         
        reproducir(s[5])
    })
    const b1 = document.querySelector('#b1');
    b1.onclick = (()=>{   
        reproducir(s[6])
    })
    const c2 = document.querySelector('#c2');
    c2.onclick = (()=>{         
        reproducir(s[7])
    })
    const d2 = document.querySelector('#d2');
    d2.onclick = (()=>{         
        reproducir(s[8])
    })
    const e2 = document.querySelector('#e2');
    e2.onclick = (()=>{         
        reproducir(s[9])
    })
    const f2 = document.querySelector('#f2');
    f2.onclick = (()=>{         
        reproducir(s[10])
    })
    const g2 = document.querySelector('#g2');
    g2.onclick = (()=>{         
        reproducir(s[11])
    })
    const a2 = document.querySelector('#a2');
    a2.onclick = (()=>{         
        reproducir(s[12])
    })
    const b2 = document.querySelector('#b2');
    b2.onclick = (()=>{         
        reproducir(s[13])
    })

    const cs1 = document.querySelector('#cs1');
    cs1.onclick = (()=>{         
        reproducir(s[14])
    })
    const ds1 = document.querySelector('#ds1');
    ds1.onclick = (()=>{         
        reproducir(s[15])
    })
    const fs1 = document.querySelector('#fs1');
    fs1.onclick = (()=>{         
        reproducir(s[16])
    })
    const gs1 = document.querySelector('#gs1');
    gs1.onclick = (()=>{         
        reproducir(s[17])
    })
    const as1 = document.querySelector('#as1');
    as1.onclick = (()=>{         
        reproducir(s[18])
    })
    const cs2 = document.querySelector('#cs2');
    cs2.onclick = (()=>{         
        reproducir(s[19])
    })
    const ds2 = document.querySelector('#ds2');
    ds2.onclick = (()=>{         
        reproducir(s[20])
    })
    const fs2 = document.querySelector('#fs2');
    fs2.onclick = (()=>{         
        reproducir(s[21])
    })
    const gs2 = document.querySelector('#gs2');
    gs2.onclick = (()=>{         
        reproducir(s[22])
    })
    const as2 = document.querySelector('#as2');
    as2.onclick = (()=>{         
        reproducir(s[23])
    })
}
var contexto = new AudioContext();
function reproducir(frecuencia){
    var osc = contexto.createOscillator();
    g = contexto.createGain();
    osc.connect(g);
    osc.type=typeSonido; // poner funcion tipoSonido(atributo) que retorne un valor
    //console.log(typoSonido)
    osc.frequency.value= frecuencia;
    g.connect(contexto.destination);
    osc.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, contexto.currentTime + 1.5)
} 
const cuerpo = document.querySelector('body');
const vuno = document.querySelector('.v1');
const vdos = document.querySelector('.v2');
const vtres = document.querySelector('.v3');
vuno.onclick = function(){
    vuno.style.backgroundColor="green";
    vdos.style.backgroundColor="grey";
    vtres.style.backgroundColor="grey";
    cuerpo.style.backgroundImage='url("fondo-uno.jpg")';
}
vdos.onclick = function(){
    vuno.style.backgroundColor="grey";
    vdos.style.backgroundColor="green";
    vtres.style.backgroundColor="grey";
    cuerpo.style.backgroundImage='url("fondo-dos.jpg")';
}
vtres.onclick = function(){
    vuno.style.backgroundColor="grey";
    vdos.style.backgroundColor="grey";
    vtres.style.backgroundColor="green";
    cuerpo.style.backgroundImage='url("fondo.jpg")';
}
