// let sp1 = {
//   tensp: "Rolex Submariner",
//   hinhanh: "../images/watch1.avif",
//   soluong: 2,
//   dongia: 5000,
// };
// let sp2 = {
//   tensp: "Rolex Daytona",
//   hinhanh: "../images/watch2.avif",
//   soluong: 1,
//   dongia: 9000,
// };
// let sp3 = {
//   tensp: "Rolex Milgauss",
//   hinhanh: "../images/watch8.avif",
//   soluong: 1,
//   dongia: 20000,
// };
// let sp4 = {
//   tensp: "Rolex Yacht-Master",
//   hinhanh: "../images/watch7.avif",
//   soluong: 2,
//   dongia: 18000,
// };

// let dssp = [sp1, sp2, sp3, sp4];

// let i = 0;

// function napDSSP(dssp) {
//   dssp.forEach((sp) => {
//     let row =
//       "<tr><td class='text-center'>" +
//       ++i +
//       "</td><td>" +
//       sp.tensp +
//       "</td><td><img src='" +
//       sp.hinhanh +
//       "' width='100'></td><td contenteditable='true' onkeyup='getTongtien()'>" +
//       sp.soluong +
//       "</td><td class='text-right'>" +
//       sp.dongia +
//       "</td></tr>";

//     let myTable = document.getElementById("tbl");
//     let newRow = myTable.insertRow(myTable.rows.length);
//     newRow.innerHTML = row;
//   });
// }

// function getTongtien() {
//   let tongtien = 0;
//   let myTable = document.getElementById("tbl");
//   let rows = myTable.rows.length;
//   for (let i = 0; i < rows; i++) {
//     let soluong = parseInt(myTable.rows[i].cells[3].textContent);
//     let dongia = parseFloat(myTable.rows[i].cells[4].textContent);
//     let thanhtien = soluong * dongia;

//     tongtien += thanhtien;
//   }

//   document.getElementById("total").innerHTML = tongtien;
// }

// window.onload = function () {
//   napDSSP(dssp);
//   getTongtien();
// };

let sp1 = {
  tensp: "Rolex Submariner",
  hinhanh: "../images/watch1.avif",
  soluong: 2,
  dongia: 5000,
};
let sp2 = {
  tensp: "Rolex Daytona",
  hinhanh: "../images/watch2.avif",
  soluong: 1,
  dongia: 9000,
};
let sp3 = {
  tensp: "Rolex Milgauss",
  hinhanh: "../images/watch8.avif",
  soluong: 1,
  dongia: 20000,
};
let sp4 = {
  tensp: "Rolex Yacht-Master",
  hinhanh: "../images/watch7.avif",
  soluong: 2,
  dongia: 18000,
};

let dssp = [sp1, sp2, sp3, sp4];

function napDSSP(dssp) {
  let myTable = document.getElementById("tbl");
  dssp.forEach((sp, index) => {
    let row = myTable.insertRow();
    row.innerHTML = `<td class='text-center'>${index + 1}</td>
       <td>${sp.tensp}</td>
       <td><img src='${sp.hinhanh}' width='100'></td>
       <td contenteditable='true' onkeyup='getTongtien()'>${sp.soluong}</td>
       <td class='text-right'>${sp.dongia}</td>`;
  });
}

function getTongtien() {
  let tongtien = 0;
  let myTable = document.getElementById("tbl");

  for (let i = 0; i < myTable.rows.length; i++) {
    let soluong = parseInt(myTable.rows[i].cells[3].textContent);
    let dongia = parseFloat(myTable.rows[i].cells[4].textContent);
    if (isNaN(soluong) || isNaN(dongia)) continue;

    tongtien += soluong * dongia;
  }

  document.getElementById("total").innerHTML =
    tongtien.toLocaleString() + " USD";
}

window.onload = function () {
  napDSSP(dssp);
  getTongtien();
};
