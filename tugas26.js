var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
var pjg = angka.length;

function cekFinite(){
    for(var i = 0; i<pjg ;i++){
      var x = isFinite(angka[i])
      if (x = true) {
    		console.log("Angka : ", angka[i], "Not Infinity");
      }else{
        console.log("Angka : ", angka[i], "Infinity");
      }
    }
  }
cekFinite();
