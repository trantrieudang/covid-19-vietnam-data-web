fetch("https://emag.thanhnien.vn/covid19/home/getAllPatientProvinces", {
  method: "POST",
  body: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => {
    if (data != null || data != undefined) {
      const { list } = data;

      let newArr = list.map((obj) => Object.values(obj));

      let firstInjectionAccumulated = 0;
      let fullInjectionAccumulated = 0;
      for (let i = 0; i < newArr.length; i++) {
        firstInjectionAccumulated += Number(newArr[i][9]);
        document.getElementById("first_injection_num").innerHTML =
          firstInjectionAccumulated
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        fullInjectionAccumulated += Number(newArr[i][10]);
        document.getElementById("done_injection_num").innerHTML =
          fullInjectionAccumulated
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const contentHTML = `
        <tr>
            
           
            <td>
                ${newArr[i][1]}
            </td>
            <td >
                ${newArr[i][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td >
                ${newArr[i][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            
            
        </tr>
      `;

        document.getElementById("covid_data_body").innerHTML += contentHTML;

        const contentHTML2 = `
        <tr>
            
           
            <td>
                ${newArr[i][1]}
            </td>
            <td >
                ${newArr[i][9].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td >
            ${
              newArr[i][11].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              "%"
            }
            </td>
            <td >
                ${newArr[i][10]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td >
                ${
                  newArr[i][12]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "%"
                }
            </td>
            
        </tr>
      `;

        document.getElementById("covid_data_table_hcm_sub_vacxin").innerHTML +=
          contentHTML2;
      }
    }
  })
  .catch((err) => console.log(err));

fetch(
  "https://bando.tphcm.gov.vn/service/ogis/dashboard/data?path=data/baocaocovid19/baocaodieutriquanhuyen",
  {
    headers: {
      Authorization:
        "bearer 9QZctbLajaMJtONgg9I9_tlMdphZ7Tpq1swVdUuCTiMOKq_dLrxututTS-bF0VdBDGoPZ-H3-x8KqVL-GrQCMhGRDyQdtvrFujX7i5Z6oFmMyC3sUAgpWbUA4hcz1IYYxzGOBhVYG_vOZjbDv8lHHhqJhpdU5hH_1FcYNw3xjkp07EInwpdtZQlfrXOc2AYdVgo1jVhmUTXCNfevnFCug7p4cc53pRf4onk6uZRifsGD_RFcy7Qmq4uci6CI1qF62pvnMqxqOkPa0oavPwBhZBnesQ30NKZM9ctBO1xzoCv3ph-dT91LIH7I2cgF2hcD_9OXKRa7ZFvH682A-Py9sfdpiCYR_jZkWlKmX0FVkiSMn-IOyt8HX53-5MJUrk568XQXghqPORlC0vVvhUSgGfIgN8D1GywtsZUBhXxXn7jFo50HvAZxVJoLnV_Judb-uF0KlQ",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    if (data !== undefined || data !== null) {
      console.log(data);
      let arr = data.map((obj) => Object.values(obj));
      console.log(arr);
      let arr2 = arr.sort((a, b) => b[24] - a[24]);
      for (let i = 0; i < arr2.length; i++) {
        const contentHTML = `<tr>
        
        <td>
           ${arr2[i][10]
             .toString()
             .trim()
             .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
             .replaceAll('"', "")
             .replaceAll("[", "")
             .replaceAll("]", "")}
        </td>
        <td>
        ${arr2[i][27]
          .toString()
          .trim()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td >
        ${arr2[i][26]
          .toString()
          .trim()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
       
       
        
    </tr>`;

        document.getElementById("covid_data_body_hcm").innerHTML += contentHTML;
      }
    }
  })
  .catch((err) => console.log(err));

fetch(
  "https://bando.tphcm.gov.vn/service/ogis/dashboard/data?path=data/baocaocovid19/thanhphohochiminh",
  {
    headers: {
      Authorization:
        "bearer 9QZctbLajaMJtONgg9I9_tlMdphZ7Tpq1swVdUuCTiMOKq_dLrxututTS-bF0VdBDGoPZ-H3-x8KqVL-GrQCMhGRDyQdtvrFujX7i5Z6oFmMyC3sUAgpWbUA4hcz1IYYxzGOBhVYG_vOZjbDv8lHHhqJhpdU5hH_1FcYNw3xjkp07EInwpdtZQlfrXOc2AYdVgo1jVhmUTXCNfevnFCug7p4cc53pRf4onk6uZRifsGD_RFcy7Qmq4uci6CI1qF62pvnMqxqOkPa0oavPwBhZBnesQ30NKZM9ctBO1xzoCv3ph-dT91LIH7I2cgF2hcD_9OXKRa7ZFvH682A-Py9sfdpiCYR_jZkWlKmX0FVkiSMn-IOyt8HX53-5MJUrk568XQXghqPORlC0vVvhUSgGfIgN8D1GywtsZUBhXxXn7jFo50HvAZxVJoLnV_Judb-uF0KlQ",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    if (data !== undefined || data !== null) {
      console.log(data);
      let arr = data.map((obj) => Object.values(obj));
      console.log(arr);
      const newArr = arr.sort((a, b) => new Date(a[11]) - new Date(b[11]));
      // console.log(newArr);
      let index = newArr.length - 1;
      let sumHCMBYDAY = 0;
      let sumHCM = 0;
      sumHCMBYDAY = arr[index][24];
      document.getElementById("new_effect_num_hcm").innerHTML = sumHCMBYDAY
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      sumHCM = arr[index][25];
      document.getElementById("total_effect_num_hcm").innerHTML = sumHCM
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const labelArr = newArr.map((item) => {
        return new Date(item[11]).toLocaleDateString("vi-VN", {
          month: "short",
          day: "numeric",
        });
      });
      const dataArr = newArr.map((item) => item[28]);

      let ctx = document.getElementById("myChart");
      ctx.height = 200;
      Chart.defaults.font.family = "Nunito Sans";
      let myChart = new Chart(ctx, {
        // plugins: [ChartDataLabels],
        type: "bar",
        data: {
          labels: labelArr,
          datasets: [
            {
              label: "số ca",
              data: dataArr,
              backgroundColor: ["rgba(209, 99, 71,1)"],
              borderColor: ["rgba(255, 99, 132, 0)"],
              borderWidth: 0.5,

              datalabels: {
                color: "black",
                display: "auto",
                align: "start",
                // backgroundColor: ["rgba(255, 255, 255,1)"],
                clip: true,
                offset: 2,

                padding: "0",
                font: {
                  size: 9,
                  weight: "bold",
                  family: "Nunito Sans",
                },
              },
            },
          ],
        },

        options: {
          plugins: {
            title: {
              display: true,
              text: "Số ca nhiễm theo ngày",
              font: {
                size: 12,
              },
            },
          },

          scales: {
            y: {
              beginAtZero: true,
            },

            x: {
              ticks: {
                maxTicksLimit: 10,
              },
              min: dataArr.length - 100,
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
      });
      const dataArr2 = newArr.map((item) => item[29]);
      let ctx2 = document.getElementById("myChart2");
      ctx2.height = 200;
      Chart.defaults.font.family = "Nunito Sans";
      let myChart2 = new Chart(ctx2, {
        // plugins: [ChartDataLabels],
        type: "line",
        data: {
          labels: labelArr,

          datasets: [
            {
              label: "số ca",
              data: dataArr2,
              backgroundColor: ["rgba(75, 192, 192,1)"],

              datalabels: {
                // color: "black",
                // display: "auto",
                // align: "start",
                // // backgroundColor: ["rgba(255, 255, 255,1)"],
                // clip: true,
                // offset: 2,
                // padding: "0",
                // font: {
                //   size: 9,
                //   weight: "bold",
                //   family: "Nunito Sans",
                // },
              },
            },
          ],
        },

        options: {
          elements: {
            line: {
              backgroundColor: "rgba(75, 192, 192,0.5)",
              fill: true,
            },
            point: {
              radius: 0,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Số ca nhiễm lũy kế",
              font: {
                size: 12,
              },
            },
          },

          scales: {
            y: {
              beginAtZero: true,
            },

            x: {
              ticks: {
                maxTicksLimit: 10,
              },
              min: dataArr2.length - 100,
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
      });
      const newArrDesc = arr.sort((a, b) => new Date(b[11]) - new Date(a[11]));
      // console.log(newArrDesc);
      for (let i = 0; i < newArrDesc.length; i++) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const selectChosen = `
            
            <option>
                ${new Date(newArrDesc[i][11]).toLocaleDateString(
                  "en-US",
                  options
                )}
            </option>
           
        `;
        document.getElementById("myInputHCMSub").innerHTML += selectChosen;
      }

      for (let i = 0; i < newArrDesc.length; i++) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const y = `
            <tr>
            <td >
                ${new Date(newArrDesc[i][11]).toLocaleDateString(
                  "en-US",
                  options
                )}
            </td>
            <td > 
                ${newArrDesc[i][29]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td > 
                ${newArrDesc[i][28]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            
       
            </tr>
        `;
        document.getElementById("covid_data_body_hcm_sub").innerHTML += y;
      }
    }
  })
  .catch((err) => console.log(err));

const options1 = {
  method: "POST",
  body: JSON.stringify(),
};

fetch("https://emag.thanhnien.vn/covid19/home/getSummPatient", options1)
  .then((response) => response.json())
  .then((item) => {
    if (item != null || item != undefined) {
      // console.log(item);
      const { data } = item;
      // console.log(data);
      let sumAcc = 0,
        deathAcc = 0,
        recoverAcc = 0,
        treatingAcc = 0;
      sumAcc = data.Confirmed;
      document.getElementById("total_effect_num").innerHTML = sumAcc
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      deathAcc = data.Death;
      document.getElementById("death_num").innerHTML = deathAcc
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      recoverAcc = data.Recovered;
      document.getElementById("total_recovered_num").innerHTML = recoverAcc
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      treatingAcc = sumAcc - deathAcc - recoverAcc;
      document.getElementById("total_treating_num").innerHTML = treatingAcc
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  })
  .catch((err) => console.log(err));

const options2 = {
  method: "POST",
  body: JSON.stringify(),
};

fetch("https://emag.thanhnien.vn/covid19/home/GetChartCovid", options2)
  .then((response) => response.json())
  .then((item) => {
    if (item != null || item != undefined) {
      // console.log(item);
      const { list } = item;
      // console.log(list);
      let arr = list.map((obj) => Object.values(obj));
      // console.log(arr);
      const newArrDesc = arr.sort((a, b) => new Date(b[0]) - new Date(a[0]));
      // console.log(newArrDesc);
      for (let i = 0; i < newArrDesc.length; i++) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const selectChosen = `
            
            <option>
                ${new Date(newArrDesc[i][0]).toLocaleDateString(
                  "en-US",
                  options
                )}
            </option>
            
        `;
        document.getElementById("myInputSubAll").innerHTML += selectChosen;
      }

      let sumNew = newArrDesc[0][2];

      document.getElementById("new_effect_num").innerHTML = sumNew
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      for (let i = 0; i < newArrDesc.length; i++) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const y = `
            <tr>
            <td >
                ${new Date(newArrDesc[i][0]).toLocaleDateString(
                  "en-US",
                  options
                )}
            </td>
            <td > 
                ${newArrDesc[i][2]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td > 
            ${newArrDesc[i][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td > 
        ${newArrDesc[i][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </td>
            </tr>
        `;
        document.getElementById("covid_data_body_all").innerHTML += y;
      }
    }
  })
  .catch((err) => console.log(err));

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("covid_data_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunctionHCM() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputHCM");
  filter = input.value.toUpperCase();
  table = document.getElementById("covid_data_table_hcm");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunctionHCMSub() {
  // Variables
  let dropdown, table, rows, cells, dateChosen, filter;
  dropdown = document.getElementById("myInputHCMSub");
  table = document.getElementById("covid_data_table_hcm_sub");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) {
    // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    dateChosen = cells[0] || null; // gets the 2nd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (
      filter == "All" ||
      !dateChosen ||
      dateChosen.textContent.indexOf(filter) > -1
    ) {
      row.style.display = ""; // shows this row
    } else {
      row.style.display = "none"; // hides this row
    }
  }
}

function myInputSubAll() {
  // Variables
  let dropdown, table, rows, cells, dateChosen, filter;
  dropdown = document.getElementById("myInputSubAll");
  table = document.getElementById("covid_data_table_all");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) {
    // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    dateChosen = cells[0] || null; // gets the 2nd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (
      filter == "All" ||
      !dateChosen ||
      dateChosen.textContent.indexOf(filter) > -1
    ) {
      row.style.display = ""; // shows this row
    } else {
      row.style.display = "none"; // hides this row
    }
  }
}

function myFunctionHCMSubVac() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputHCMSubVac");
  filter = input.value.toUpperCase();
  table = document.getElementById("covid_data_table_hcm_sub_vacxin");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTableAlphabet(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNum(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) >
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) <
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableAlphabetHCM(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableAlphabetHCMVac(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm_sub_vacxin");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumHCM(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) >
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) <
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumHCMVacPercentage(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm_sub_vacxin");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace("%", "")) >
          Number(y.innerHTML.replace("%", ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace("%", "")) <
          Number(y.innerHTML.replace("%", ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumHCMVac(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm_sub_vacxin");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) >
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) <
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumHCMSub(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm_sub");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) >
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) <
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableNumAll(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_all");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) >
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (
          Number(x.innerHTML.replace(/,/g, "")) <
          Number(y.innerHTML.replace(/,/g, ""))
        ) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableTimeAll(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_all");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML > y.innerHTML) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML < y.innerHTML) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableTimeHCMAll(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("covid_data_table_hcm_sub");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (Date.parse(x.innerHTML.trim()) > Date.parse(y.innerHTML.trim())) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Date.parse(x.innerHTML.trim()) < Date.parse(y.innerHTML.trim())) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

(function ($, window, document) {
  const defaults = {
    fill: "yellow",
    stroke: "red",
    size: 20,
    delay: 0,
    duration: 1500,
    pause: 1000,
  };
  const optionsKeys = ["fill", "stroke", "size", "delay", "duration", "pause"];

  const optionsStrToObj = function (optionsStr) {
    const optionsArr = !!optionsStr ? optionsStr.split(" ") : [];
    var optionsObj = {};

    for (var i = 0; i < optionsArr.length; ++i) {
      optionsObj[optionsKeys[i]] = optionsArr[i];
    }

    return optionsObj;
  };

  $.fn.sparkle = function (options) {
    $.destroySparkle = $.destroySparkle || {};

    const $this = this;
    const id = this.data("sparkle-id") || new Date().getTime() + Math.random();

    if (options === "destroy" && this.find("svg").length > 0) {
      $.destroySparkle[id] = true;
      this.data("sparkle-id", null);
    }

    var settings;

    if (options instanceof Array) {
      for (var i = 0; i < options.length; ++i) {
        $this.sparkle(optionsStrToObj(options[i]));
      }

      return;
    } else if (options instanceof Object) {
      settings = $.extend({}, defaults, options);
    } else {
      settings = defaults;
    }

    const cssAnimationAttr =
      "my-sparkle " + settings.duration + "ms infinite linear";

    const $star = $(
      '<svg class="my-sparkle" version="1.1" viewBox="0.0 0.0 50.0 50.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="p.0"><path d="m0 0l50.0 0l0 50.0l-50.0 0l0 -50.0z" clip-rule="nonzero"></path></clipPath><g clip-path="url(#p.0)"><path fill="' +
        settings.stroke +
        '" fill-opacity="0.0" d="m0 0l50.0 0l0 50.0l-50.0 0z" fill-rule="nonzero"></path><path fill="' +
        settings.fill +
        '" d="m0.62204725 25.0l20.068499 -4.323374l4.309454 -20.13332l4.309454 20.13332l20.068499 4.323374l-20.068499 4.323374l-4.309454 20.133318l-4.309454 -20.133318z" fill-rule="nonzero"></path><path stroke="' +
        settings.stroke +
        '" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m0.62204725 25.0l20.068499 -4.323374l4.309454 -20.13332l4.309454 20.13332l20.068499 4.323374l-20.068499 4.323374l-4.309454 20.133318l-4.309454 -20.133318z" fill-rule="nonzero"></path></g></svg>'
    ).css({
      position: "absolute",
      width: settings.size,
      height: settings.size,
      zIndex: 9999,
    });

    const w = this.width();
    const h = this.height();

    const getCoordinates = function () {
      return {
        left: Math.random() * w,
        top: Math.random() * h,
      };
    };

    const placeStar = function (init) {
      const coords = getCoordinates();

      if (init) {
        $this.append($star);
      }

      $star.css({
        "-moz-animation": cssAnimationAttr,
        "-webkit-animation": cssAnimationAttr,
        animation: cssAnimationAttr,
        display: "block",
        left: coords.left,
        top: coords.top,
      });

      window.setTimeout(function () {
        $star.css({
          "-moz-animation": null,
          "-webkit-animation": null,
          animation: null,
          display: "none",
        });

        if (!$.destroySparkle[id]) {
          window.setTimeout(function () {
            placeStar(false);
          }, settings.pause);
        } else {
          $star.remove();
        }
      }, settings.duration);
    };

    if (this.css("position") === "static") {
      this.css("position", "relative");
    }

    if (!$.destroySparkle[id] && options !== "destroy") {
      window.setTimeout(function () {
        placeStar(true);
      }, settings.delay);

      this.data("sparkle-id", id);
    }

    return this;
  };

  $("#special")
    .sparkle({
      size: 25,
    })
    .sparkle({
      delay: 1000,
      pause: 750,
      size: 10,
    });
})(jQuery, window, document);

const toTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
