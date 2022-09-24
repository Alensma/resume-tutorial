
const Form =  document.querySelector('.resume-form')
const submitBtn = document.querySelector('#Save');
const nameBox = document.querySelector('#name-box');
const firstName = document.querySelector('#firstname')


Form.addEventListener('submit', getForm)

function getForm(e) {
    e.preventDefault();
    console.log('hello world');
    // nameBox.innerText = firstName.value;
    console.log(firstName.value)
}
// submitBtn.addEventListener('click', () => console.log('hi'));
