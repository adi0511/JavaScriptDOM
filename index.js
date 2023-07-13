console.log(document.querySelector('.between').textContent);
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 20;

document.querySelector('.check').addEventListener('click', a);
var number = 10;

function a() {
  let num = document.querySelector('.guess').value;
  if (num < number) {
    document.querySelector('.number').textContent = 'try some bigger number';
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
  } else if (num > number) {
    document.querySelector('.number').textContent = 'try some smaller number';
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
  } else {
    document.querySelector('.number').textContent = 'congrats you won';
  }
}
