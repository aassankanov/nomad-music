/* Add any JavaScript you need to this file. */
window.onload = function() {
  load();
  document.getElementById('1st').onclick = button1;
  document.getElementById('2nd').onclick = button2;
  document.getElementById('3rd').onclick = button3;
};
//hides accessories content and shows guitars content
function button1() {
  document.getElementById('accessories').setAttribute('hidden', true);
  document.getElementById('guitars').removeAttribute('hidden');
}
//hides guitars content and shows accessories content
function button2() {
  document.getElementById('guitars').setAttribute('hidden', true);
  document.getElementById('accessories').removeAttribute('hidden');
}
function button3() {
  document.getElementById('guitars').removeAttribute('hidden');
  document.getElementById('accessories').removeAttribute('hidden');
}
function load() {
  document.getElementById('guitars').setAttribute('hidden', true);
  document.getElementById('accessories').setAttribute('hidden', true);
}
