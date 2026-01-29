function nav(id){
    document.getElementById('menu').style.display = id==='menu'?'grid':'none';
    document.querySelectorAll('.card').forEach(c=>c.style.display='none');
    if(id!=='menu') document.getElementById(id).style.display='block';
}

/* TEMA 1 */
let cara=0,cruz=0;
function simularMoneda(){
    let r=Math.random()<0.5?'Cara':'Cruz';
    r==='Cara'?cara++:cruz++;
    let p=(cara/(cara+cruz))*100;
    grafT1.style.display='block';
    barT1.style.width=p+'%';
    resT1.innerHTML=
        `Resultado: ${r}
Espacio muestral: {CC, CX, XC, XX}
Frecuencia relativa: ${p.toFixed(2)}%`;
}

/* TEMA 2 */
function identificarVariable(){
    let v=vInput.value.toLowerCase();
    let c=v.includes("peso")||v.includes("estatura");
    grafT2.style.display='block';
    barT2.style.width=c?'100%':'40%';
    resT2.innerHTML=
        `Variable ${c?'continua':'discreta'}
Paso: se analiza si puede tomar infinitos valores`;
}

/* TEMA 3 */
function calcProb(){
    let f=+f1.value,n=+n1.value,p=f/n*100;
    grafT3.style.display='block';
    barT3.style.width=p+'%';
    resT3.innerHTML=
        `P = ${f}/${n}
Probabilidad = ${p.toFixed(2)}%`;
}

/* TEMA 4 */
function calcStats(){
    let d=dataInput.value.split(/\s+/).map(Number).sort((a,b)=>a-b);
    let media=d.reduce((a,b)=>a+b)/d.length;
    grafT4.style.display='block';
    barT4.style.width=(media/Math.max(...d))*100+'%';
    resT4.innerHTML=
        `Datos ordenados: ${d}
Media=${media.toFixed(2)}
Mediana=${d[Math.floor(d.length/2)]}`;
}

/* TEMA 5 */
function fact(n){return n<=1?1:n*fact(n-1);}
function calcComb(){
    let n=+cn.value,r=+cr.value;
    let p=fact(n)/fact(n-r);
    let c=p/fact(r);
    grafT5.style.display='block';
    barT5.style.width=(c/p*100)+'%';
    resT5.innerHTML=
        `Permutaciones=${p}
Combinaciones=${c}`;
}

/* TEMA 6 */
function interpretarG(){
    const t={
        b:"Barras: comparación entre categorías.",
        p:"Pastel: proporciones del total.",
        h:"Histograma: frecuencias por intervalos."
    };
    resT6.innerHTML=t[tipoG.value]||"Selecciona una opción";
}
