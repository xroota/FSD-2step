import Button from '../button/button';
import TextField from '../text-field/text-field';
import '../calendar/calendar';

class DropDownDate {
  constructor($elem) {
    this.$dropDownDate = $elem;
    this.textField = new TextField(
      this.$dropDownDate.find('.js-text-field:first'),
    );
    this.textField2 = new TextField(
      this.$dropDownDate.find('.js-text-field:nth(1)'),
    );
    this.$calendar = this.$dropDownDate.find('.js-calendar__datepicker');
    this.clearButton = new Button(this.$dropDownDate.find('.js-button__clear'));
    this.applyButton = new Button(this.$dropDownDate.find('.js-button__apply'));

    if (this.$dropDownDate.hasClass('js-drop-down-date--single')) {
      this.$calendar.datepicker({
        dateFormat: 'dd M',
        onSelect: (formattedDate, date, inst) => {
          const val = formattedDate.toLowerCase();
          this.textField.setText(val);
        },
      });
    } else {
      this.$calendar.datepicker({
        onSelect: (formattedDate, date, inst) => {
          const val = formattedDate.split('-');
          this.textField.setText(val[0]);
          this.textField2.setText(val[1]);
        },
      });
    }
    this.bindEventListeners();
  }

  toggleMenu() {
    this.$dropDownDate.toggleClass('drop-down-date--menu-visible');
  }

  bindEventListeners() {
    this.textField.bindEventMenuButtonClick(() => {
      this.toggleMenu();
      this.textField.toggleMenu();
    });
    if (this.textField2) {
      this.textField2.bindEventMenuButtonClick(() => {
        this.toggleMenu();
        this.textField2.toggleMenu();
      });
    }

    this.clearButton.bindEventListener('click', () => {
      this.textField.setText('');
    });

    this.applyButton.bindEventListener('click', () => {
      this.toggleMenu();
    });
  }
}
export default DropDownDate;
