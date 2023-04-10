const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}


const selectData = document.querySelector('.select__data');
const selectData_title = selectData.querySelector('.select__data--title');
const selectData_labels = selectData.querySelectorAll('.select__label--data');

selectData_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-calender')) {
    selectData.setAttribute('data-calender');
  } else {
    selectData.setAttribute('data-calender', 'active');
  }
});


for (let i = 0; i < selectData_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectData_title.textContent = evt.target.textContent;
    selectData.setAttribute('data-calender', '');
  });
}
