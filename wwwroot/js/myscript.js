console.log("myscript.js is loaded");



function togglePassword() {
  var passwordInput = document.getElementById("pass");
  var confirmPasswordInput = document.getElementById("conpass");
  var toggleCheckbox = document.getElementById("check");
  var toggleCheckbox1 = document.getElementById("check1");

  // Check if the checkbox is checked
  if (toggleCheckbox.checked) {
    // If checked, change the type attribute to "text" for both password fields
    passwordInput.type = "text";
  } else {
    // If not checked, change it back to "password" for both password fields
    passwordInput.type = "password";
  }


  if (toggleCheckbox1.checked) {
    // If checked, change the type attribute to "text" for both password fields
    confirmPasswordInput.type = "text";
  } else {
    // If not checked, change it back to "password" for both password fields
    confirmPasswordInput.type = "password";
  }
}


function updateRealTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.toDateString();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;


  document.getElementById("show-time").innerHTML = hours + ":" + minutes + ":" + seconds + " on " + day;
}
setInterval(updateRealTime, 1000);
updateRealTime();






// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById('searchInput');

  // Check if searchInput exists to avoid null reference error
  if (!searchInput) {
    console.error("Search input element not found.");
    return;
  }

  // Add input event listener
  searchInput.addEventListener('input', function () {
      const value = this.value.toLowerCase();
      const cardElements = document.querySelectorAll('.card-body > div');

      // Filter the card elements based on the input
      cardElements.forEach(function (card) {
          if (card.textContent.toLowerCase().indexOf(value) > -1) {
              card.style.display = ""; // Show the card
          } else {
              card.style.display = "none"; // Hide the card
          }
      });
  });
});






$(document).ready(function () {
  // Counter to keep track of the number of products
  let productCount = 0;

  // Function to add a new product row
  function addProductRow(productName, price, stock) {
    productCount++;
    const newRow = `
    <tr>
      <th scope="row">${productCount}</th>
      <td><input type="text" class="form-control product-name" value="${productName}"></td>
      <td><input type="text" class="form-control product-price" value="${price}"></td>
      <td><input type="text" class="form-control product-stock" value="${stock}"></td>
      <td>
        <!-- Add and Remove buttons -->
        <button type="button" class="btn btn-success btn-sm update-product-btn">Update</button>
        <button type="button" class="btn btn-danger btn-sm remove-product-btn">Remove</button>
      </td>
    </tr>`;
    $('#product-list').append(newRow);
  }

  // Event listener for Add Product button click
  $('#add-product-btn').click(function () {
    // Example: Add a new product with some default values
    addProductRow('New Product', '$0.00', '0');
  });

  // Event listener for Remove Product button click
  $(document).on('click', '.remove-product-btn', function () {
    $(this).closest('tr').remove();
  });

  // Event listener for Update Product button click
  $(document).on('click', '.update-product-btn', function () {
    const row = $(this).closest('tr');
    const productName = row.find('.product-name').val();
    const price = row.find('.product-price').val();
    const stock = row.find('.product-stock').val();

    // You can perform further actions with the updated product data here
    console.log('Updated Product Name:', productName);
    console.log('Updated Price:', price);
    console.log('Updated Stock:', stock);
  });
});





// jQuery script to toggle visibility of additional details section for From Location
$(document).ready(function () {
  $("#fromLocation").on("click", function () {
    $("#fromLocationDetails").toggle();
  });
});

// jQuery script to toggle visibility of additional details section for To Location
$(document).ready(function () {
  $("#toLocation").on("click", function () {
    $("#toLocationDetails").toggle();
  });
});





$(document).ready(function () {
  let customerCount = 0;

  // Function to add a new customer row
  function addCustomerRow(name, email, phone) {
    customerCount++;
    const newRow = `
    <tr>
      <th scope="row">${customerCount}</th>
      <td><input type="text" class="form-control customer-name" value="${name}"></td>
      <td><input type="text" class="form-control customer-email" value="${email}"></td>
      <td><input type="text" class="form-control customer-phone" value="${phone}"></td>
      <td>
        <button type="button" class="btn btn-success btn-sm update-customer-btn">Update</button>
        <button type="button" class="btn btn-danger btn-sm remove-customer-btn">Remove</button>
      </td>
    </tr>
  `;
    $("#customer-list").append(newRow);
  }

  // Event listener for Add Customer button click
  $("#add-customer-btn").click(function () {
    addCustomerRow("New Customer", "", "");
  });

  // Event listener for Remove Customer button click
  $(document).on("click", ".remove-customer-btn", function () {
    $(this).closest("tr").remove();
  });

  // Event listener for Update Customer button click
  $(document).on("click", ".update-customer-btn", function () {
    const row = $(this).closest("tr");
    const name = row.find(".customer-name").val();
    const email = row.find(".customer-email").val();
    const phone = row.find(".customer-phone").val();

    // You can perform further actions with the updated customer data here
    console.log("Updated Name:", name);
    console.log("Updated Email:", email);
    console.log("Updated Phone:", phone);
  });
});





// Sample invoice data for demonstration
var invoicesData = [
  {
    invoiceNumber: "INV123456",
    invoiceDate: "January 1, 2024",
    items: [
      { description: "MILK", quantity: 2, unitPrice: 47.0 },
      { description: "BREAD", quantity: 1, unitPrice: 40.0 },
      // Add more items as needed
    ],
  },
  // Add similar data for other members
];



function generateInvoice(data, index) {
  console.log("Generating invoice for index:", index);
  console.log("Invoice Number Element:", document.getElementById("invoiceNumber" + index));
  console.log("Invoice Date Element:", document.getElementById("invoiceDate" + index));
  console.log("Invoice Items Element:", document.getElementById("invoiceItems" + index));
  console.log("Invoice Total Element:", document.getElementById("invoiceTotal" + index));
  
  // Populate invoice details
  document.getElementById("invoiceNumber" + index).textContent = data.invoiceNumber;
  document.getElementById("invoiceDate" + index).textContent = data.invoiceDate;

  // Populate invoice items
  var itemsHtml = "";
  var total = 0;
  data.items.forEach(function (item) {
      var itemTotal = item.quantity * item.unitPrice;
      total += itemTotal;
      itemsHtml += "<tr><td>" + item.description + "</td><td>" + item.quantity + "</td><td>Rs." + item.unitPrice.toFixed(2) + "</td><td>Rs." + itemTotal.toFixed(2) + "</td></tr>";
  });
  document.getElementById("invoiceItems" + index).innerHTML = itemsHtml;

  // Populate invoice total
  document.getElementById("invoiceTotal" + index).textContent = total.toFixed(2);
}



// Sample expense data for demonstration
var expensesData = [
  { description: "Office Supplies", amount: 5000.0, date: "2024-01-15" },
  { description: "Internet Bill", amount: 8499.0, date: "2024-01-20" },
  { description: "Electricity Bill", amount: 39089.0, date: "2024-01-20" },
  // Add more expenses as needed
];

// Function to generate expenses
function generateExpenses(data) {
  // Populate expense items
  var itemsHtml = "";
  data.forEach(function (expense) {
    itemsHtml +=
      "<tr><td>" +
      expense.description +
      "</td><td>Rs." +
      expense.amount.toFixed(2) +
      "</td><td>" +
      expense.date +
      "</td></tr>";
  });
  document.getElementById("expenseItems").innerHTML = itemsHtml;
}





$(document).ready(function () {
  // Check if there's an item stored in localStorage
  var activeLink = localStorage.getItem("activeLink");

  // If there's an active link in storage, apply the style
  if (activeLink) {
      $(".list-group-item[href='" + activeLink + "']").addClass("custom-style");
  }

  // Handle click event for navigation items
  $(".list-group-item").click(function () {
      // Remove the custom-style class from all nav items
      $(".list-group-item").removeClass("custom-style");

      // Add the custom-style class to the clicked item
      $(this).addClass("custom-style");

      // Store the clicked link's href in localStorage
      var clickedHref = $(this).attr("href");
      localStorage.setItem("activeLink", clickedHref);
  });
});







document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas elements
  var salesChart = document.getElementById('salesChart');
  var revenueExpensesChart = document.getElementById('revenueExpensesChart');

  // Check if the canvas elements exist before trying to get context
  if (salesChart && revenueExpensesChart) {
      var salesCtx = salesChart.getContext('2d');
      var revenueExpensesCtx = revenueExpensesChart.getContext('2d');

      // Your chart logic here (e.g., using Chart.js)
      // Example (using Chart.js):
      // new Chart(salesCtx, { ... });
      // new Chart(revenueExpensesCtx, { ... });
  } else {
      console.error("Canvas elements not found.");
  }
});





//sales_chart
document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element by ID
  var salesCtx = document.getElementById('salesChart').getContext('2d');

  // Check if the element exists to avoid null reference
  if (!salesCtx) {
      console.error("Canvas element #salesChart not found.");
      return;
  }

  // Sales Trend Chart
  var salesChart = new Chart(salesCtx, {
      type: 'line', // Line chart type
      data: {
          labels: ['January', 'February', 'March', 'April', 'May'], // Example labels for x-axis
          datasets: [{
              label: 'Sales',
              data: [1000, 2000, 1500, 3000, 2500], // Example sales data
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true // Ensure y-axis starts from zero
              }
          }
      }
  });
});


//expenditure_ chart
document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element by ID
  var revenueExpensesCtx = document.getElementById('revenueExpensesChart').getContext('2d');

  // Revenue vs Expenses Chart
  var revenueExpensesChart = new Chart(revenueExpensesCtx, {
      type: 'bar', // Bar chart type
      data: {
          labels: ['January', 'February', 'March', 'April', 'May'], // Example months (x-axis labels)
          datasets: [{
              label: 'Revenue',
              data: [5000, 6000, 7000, 8000, 9000], // Example revenue data
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
              borderColor: 'rgba(54, 162, 235, 1)', // Dark blue
              borderWidth: 1
          }, {
              label: 'Expenses',
              data: [3000, 3500, 4000, 4500, 5000], // Example expenses data
              backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
              borderColor: 'rgba(255, 99, 132, 1)', // Dark red
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true // Ensures the y-axis starts from 0
              }
          }
      }
  });
});
