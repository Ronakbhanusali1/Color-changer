
const btn = document.getElementById('button');
const div = document.getElementById('canvas');
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexValue = document.getElementById('hexholder');
const copycode = document.getElementById('Copy');

div.style.backgroundColor = '#000000';
hexValue.innerHTML = '#000000';
btn.addEventListener('click', function(){
    let hexKey = '#';
    for (let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hexKey = hexKey + hex[index];

    }
    hexValue.innerHTML = hexKey;
    document.getElementById('myhex').value = hexKey;
    div.style.backgroundColor = hexKey;

});

copycode.addEventListener('click', function(){
    let hex = document.getElementById('myhex');
    hex.select();
    hex.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(hex.value);
})