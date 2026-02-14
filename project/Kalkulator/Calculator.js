const add = document.getElementById("input");
const clik = document.querySelector(".tombol");
function tombolAdd(r) {
    add.value += r;
}


function calculate(r) {
  console.log("Tombol ditekan:", r);

  // KASUS: Tombol "=" (r undefined)
  if (r === undefined) {
    console.log("Menghitung...");

    // SEBELUM menghitung, cek dulu apakah ada "--"
    let expression = add.value;
    console.log("Ekspresi awal:", expression);

    // GANTI "--" DENGAN "+"
    expression = expression.replace(/--/g, "+");
    console.log("Setelah replace:", expression);
    expression = expression.replace(/\+-/g, '-')
    console.log("Setelah replace:", expression);
    // Baru hitung
    try {
      let hasil = eval(expression);
      add.value = hasil;
    } catch (error) {
      add.value = "error";
    }
    return;
  }

  // KASUS: Tombol operator/angka biasa
  add.value += r;
}

// function calculate(r) {
//     try {
//         if (r === "-" && r[-1]=== '-' ){
//             add.value += input
//         }
//         add.value = eval(add.value);
//     } catch (error) {
//         add.value = "error";
//     }
// }
function Delete() {
    add.value = "";
}
