

window.onload = function() {
    document.getElementById('customRadio1').onclick = question;
    document.getElementById('customRadio2').onclick = comment;
    document.getElementById('customRadio3').onclick = orderProblem;
  };

  function comment() {
    subscribe-form.getElementById('orderNumber').setAttribute('hidden', true);
    subscribe-form.getElementById('orderNumber').removeAttribute('required');
  }
  
  function question() {
    subscribe-form.getElementById('orderNumber').setAttribute('hidden', true);
    subscribe-form.getElementById('orderNumber').removeAttribute('required');
  }
  function orderProblem() {
    subscribe-form.getElementById('orderNumber').setAttribute('hidden', false);
    subscribe-form.getElementById('orderNumber').setAttribute('required');
  }