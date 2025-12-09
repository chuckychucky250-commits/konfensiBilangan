// // Utility helpers
// function isDigits(str){ return /^\d+$/.test(str); }
// function to4bit(n){ return (n >>> 0).toString(2).padStart(4,'0'); }


// // KONVERSI DASAR

// document.getElementById('btnConvertBasic').addEventListener('click', ()=>{
//   const v = document.getElementById('decInput').value.trim();
//   const out = document.getElementById('basicResult');
//   if (v===''){ out.innerText = 'Masukkan angka desimal terlebih dahulu.'; return; }
//   const n = Number(v);
//   if (!Number.isInteger(n) || n<0){ out.innerText = 'Masukkan bilangan bulat non-negatif.'; return; }

//   let steps = [];
//   let q = n;
//   if (q===0) steps.push('0 / 2 = 0 sisa 0');
//   while(q>0){
//     const div = Math.floor(q/2);
//     const rem = q%2;
//     steps.push(`${q} / 2 = ${div} sisa ${rem}`);
//     q = div;
//   }

//   const binary = n.toString(2);
//   const octal = n.toString(8);
//   const hexa = n.toString(16).toUpperCase();

//   out.innerText =
//     'Langkah pembagian:\n' + steps.join('\n') +
//     '\n\nHasil:\nBiner: ' + binary +
//     '\nOktal: ' + octal +
//     '\nHexa: ' + hexa;
// });


// // BCD

// document.getElementById('btnBCD').addEventListener('click', ()=>{
//   const s = document.getElementById('bcdInput').value.trim();
//   const out = document.getElementById('bcdResult');
//   if (!isDigits(s)){ out.innerText = 'Masukkan hanya digit 0-9.'; return; }

//   const manual = [];
//   const parts = [];
//   for (let ch of s){
//     const d = Number(ch);
//     const bits = to4bit(d);
//     manual.push(`${d} → ${bits}`);
//     parts.push(bits);
//   }

//   out.innerText =
//     'Langkah:\n' + manual.join('\n') +
//     '\n\nBCD: ' + parts.join(' ');
// });


// // EXCESS-3

// document.getElementById('btnEX3').addEventListener('click', ()=>{
//   const s = document.getElementById('exInput').value.trim();
//   const out = document.getElementById('exResult');
//   if (!isDigits(s)){ out.innerText = 'Masukkan hanya digit 0-9.'; return; }

//   const manual = [];
//   const parts = [];
//   for (let ch of s){
//     const d = Number(ch);
//     const add = d + 3;
//     manual.push(`${d} + 3 = ${add} → ${to4bit(add)}`);
//     parts.push(to4bit(add));
//   }

//   out.innerText =
//     'Langkah:\n' + manual.join('\n') +
//     '\n\nExcess-3: ' + parts.join(' ');
// });


// // GRAY CODE

// document.getElementById('btnGray').addEventListener('click', ()=>{
//   const b = document.getElementById('grayInput').value.trim();
//   const out = document.getElementById('grayResult');
//   if (!/^[01]+$/.test(b)){ out.innerText = 'Masukkan hanya biner.'; return; }

//   let g = b[0];
//   const steps = [`G1 = B1 = ${b[0]}`];

//   for (let i=1;i<b.length;i++){
//     const bi = Number(b[i]);
//     const bip = Number(b[i-1]);
//     const gi = bi ^ bip;
//     g += gi;
//     steps.push(`G${i+1} = ${bi} XOR ${bip} = ${gi}`);
//   }

//   out.innerText = 'Langkah:\n' + steps.join('\n') + '\n\nGray = ' + g;
// });


// // ASCII MULTI-KARAKTER

// document.getElementById('btnASCII').addEventListener('click', ()=>{
//   const text = document.getElementById('asciiInput').value;
//   const out = document.getElementById('asciiResult');
//   if (!text){ out.innerText = 'Masukkan teks terlebih dahulu.'; return; }

//   const lines = [];
//   lines.push('Char | Dec | Biner | Oktal | Hex');
//   lines.push('---------------------------------');

//   for (let ch of text){
//     const code = ch.charCodeAt(0);
//     lines.push(
//       `${ch} | ${code} | ${code.toString(2)} | ${code.toString(8)} | ${code.toString(16).toUpperCase()}`
//     );
//   }

//   out.innerText = lines.join('\n');
// });




// =====================================================
//    VERSI PEMULA — PALING MUDAH DIBACA
// =====================================================

// Mengecek apakah string hanya berisi angka 0–9
function isDigits(str){
  if (str.length === 0) return false;
  for (let i = 0; i < str.length; i++){
    if (str[i] < '0' || str[i] > '9'){
      return false;
    }
  }
  return true;
}

// Mengubah angka menjadi biner 4-bit
function to4bit(n){
  let b = n.toString(2);
  while (b.length < 4){
    b = "0" + b;
  }
  return b;
}

// =====================================================
// KONVERSI DASAR (Desimal → Biner, Oktal, Hexa)
// =====================================================
document.getElementById('btnConvertBasic').addEventListener('click', function(){

  const value = document.getElementById('decInput').value.trim();
  const output = document.getElementById('basicResult');

  if (value === ""){
    output.innerText = "Masukkan angka desimal terlebih dahulu.";
    return;
  }

  const num = Number(value);

  if (!Number.isInteger(num) || num < 0){
    output.innerText = "Masukkan bilangan bulat non-negatif.";
    return;
  }

  let steps = [];
  let q = num;

  if (q === 0){
    steps.push("0 / 2 = 0 sisa 0");
  } else {
    while (q > 0){
      let division = Math.floor(q / 2);
      let remainder = q % 2;
      steps.push(q + " / 2 = " + division + " sisa " + remainder);
      q = division;
    }
  }

  const binary = num.toString(2);
  const octal = num.toString(8);
  const hexa = num.toString(16).toUpperCase();

  output.innerText =
    "Langkah pembagian:\n" +
    steps.join("\n") +
    "\n\nHasil:\n" +
    "Biner: " + binary + "\n" +
    "Oktal: " + octal + "\n" +
    "Hexa: " + hexa;
});

// =====================================================
// BCD (Binary Coded Decimal)
// =====================================================
document.getElementById('btnBCD').addEventListener('click', function(){

  const value = document.getElementById('bcdInput').value.trim();
  const output = document.getElementById('bcdResult');

  if (!isDigits(value)){
    output.innerText = "Masukkan hanya digit 0-9.";
    return;
  }

  let steps = [];
  let result = [];

  for (let i = 0; i < value.length; i++){
    let digit = Number(value[i]);
    let bcd = to4bit(digit);
    steps.push(digit + " → " + bcd);
    result.push(bcd);
  }

  output.innerText =
    "Langkah:\n" +
    steps.join("\n") +
    "\n\nBCD: " +
    result.join(" ");
});

// =====================================================
// EXCESS-3
// =====================================================
document.getElementById('btnEX3').addEventListener('click', function(){

  const value = document.getElementById('exInput').value.trim();
  const output = document.getElementById('exResult');

  if (!isDigits(value)){
    output.innerText = "Masukkan hanya digit 0-9.";
    return;
  }

  let steps = [];
  let result = [];

  for (let i = 0; i < value.length; i++){
    let digit = Number(value[i]);
    let added = digit + 3;
    let ex3 = to4bit(added);

    steps.push(digit + " + 3 = " + added + " → " + ex3);
    result.push(ex3);
  }

  output.innerText =
    "Langkah:\n" +
    steps.join("\n") +
    "\n\nExcess-3: " +
    result.join(" ");
});

// =====================================================
// GRAY CODE
// =====================================================
document.getElementById('btnGray').addEventListener('click', function(){

  const bin = document.getElementById('grayInput').value.trim();
  const output = document.getElementById('grayResult');

  // validasi manual
  for (let i = 0; i < bin.length; i++){
    if (bin[i] !== "0" && bin[i] !== "1"){
      output.innerText = "Masukkan hanya biner (0 dan 1).";
      return;
    }
  }

  let gray = "";
  let steps = [];

  gray = bin[0];
  steps.push("G1 = B1 = " + bin[0]);

  for (let i = 1; i < bin.length; i++){
    let current = Number(bin[i]);
    let previous = Number(bin[i - 1]);
    let xor = current ^ previous;

    gray += xor;

    steps.push(
      "G" + (i+1) + " = " + current + " XOR " + previous + " = " + xor
    );
  }

  output.innerText =
    "Langkah:\n" +
    steps.join("\n") +
    "\n\nGray = " +
    gray;
});

// =====================================================
// ASCII MULTI-KARAKTER
// =====================================================
document.getElementById('btnASCII').addEventListener('click', function(){

  const text = document.getElementById('asciiInput').value;
  const output = document.getElementById('asciiResult');

  if (text.length === 0){
    output.innerText = "Masukkan teks terlebih dahulu.";
    return;
  }

  let lines = [];

  lines.push("Char | Dec | Biner | Oktal | Hex");
  lines.push("---------------------------------");

  for (let i = 0; i < text.length; i++){
    let ch = text[i];
    let code = ch.charCodeAt(0);

    lines.push(
      ch + " | " +
      code + " | " +
      code.toString(2) + " | " +
      code.toString(8) + " | " +
      code.toString(16).toUpperCase()
    );
  }

  output.innerText = lines.join("\n");
});

