document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productImage = document.getElementById('productImage');
    const productName= document.getElementById('productName');
    const productPrice= document.getElementById('productPrice');
    const productDiscounte= document.getElementById('productDiscount');
   

    if (urlParams.has('type')) {
      const type = urlParams.get('type');
      if (type === 'iceland') {
        productImage.src = 'img/Iceland.jpg';
        productName.textContent = 'Iceland Tour Package';
        productPrice.textContent = '$6,663';
        productDiscounte.textContent='35% OFF';
      } else if (type === 'hongkong') {
        productImage.src = 'img/hongkong4.webp';
        productName.textContent = 'Hongkong Tour Package';
        productPrice.textContent = '$5,200';
        productDiscounte.textContent='25% OFF';
      }
      else if (type === 'tokyo') {
        productImage.src = 'img/tokyo2.jpg';
        productName.textContent = 'Tokyo Tour Package';
        productPrice.textContent = '$6,663';
        productDiscounte.textContent='15% OFF';
      }
      else if (type === 'italy') {
        productImage.src = 'img/italy.jpg';
        productName.textContent = 'Italy Tour Package';
        productPrice.textContent = '$5,243';
        productDiscounte.textContent='10% OFF';
      }
      
    }
  });