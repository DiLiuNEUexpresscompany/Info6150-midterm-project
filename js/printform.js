function printFormData() {
    // 获取表单元素
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var streetAddress = document.getElementById('street-address').value;
    var city = document.getElementById('city').value;
    var region = document.getElementById('region').value;
    var postalCode = document.getElementById('postal-code').value;
    var travelDate = document.getElementById('travel-date').value;
  
    // 创建用于展示数据的 HTML 元素
    var dataContainer = document.createElement('div');
    dataContainer.innerHTML = `
      <h2>Form Data:</h2>
      <table>
        <tr>
          <td><strong>First Name:</strong></td>
          <td>${firstName}</td>
        </tr>
        <tr>
          <td><strong>Last Name:</strong></td>
          <td>${lastName}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Country:</strong></td>
          <td>${country}</td>
        </tr>
        <tr>
          <td><strong>Street Address:</strong></td>
          <td>${streetAddress}</td>
        </tr>
        <tr>
          <td><strong>City:</strong></td>
          <td>${city}</td>
        </tr>
        <tr>
          <td><strong>State / Province:</strong></td>
          <td>${region}</td>
        </tr>
        <tr>
          <td><strong>ZIP / Postal Code:</strong></td>
          <td>${postalCode}</td>
        </tr>
        <tr>
          <td><strong>Preferred Travel Date:</strong></td>
          <td>${travelDate}</td>
        </tr>
      </table>
    `;
  
    // 将数据插入到网页中
    var outputContainer = document.getElementById('output');
    outputContainer.appendChild(dataContainer);
  }
  