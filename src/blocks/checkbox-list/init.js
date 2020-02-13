import CheckboxList from './checkbox-list';

document.addEventListener('DOMContentLoaded', () => {
  const checkboxLists = document.querySelectorAll('.js-checkbox-list');
  // console.log(checkboxLists);
  checkboxLists.forEach((val) => new CheckboxList(val));
});
