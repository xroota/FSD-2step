import Button from '../button/button';
import TextField from '../text-field/text-field';

class DropDown {
  constructor($elem) {
    this.$dropDown = $elem;
    this.$inputs = this.$dropDown.find('.js-drop-down__item-input');
    this.$itemButtons = this.$dropDown.find('.js-drop-down__item-button');
    this.textField = new TextField(this.$dropDown.find('.js-text-field'));
    this.sumTypes = JSON.parse(this.$dropDown.attr('data-sumTypes'));

    this.defaultPlaceholder = $(this.$dropDown).attr(
      'data-defaultPlaceholdrer',
    );
    this.clearButton = new Button(this.$dropDown.find('.js-button__clear'));
    this.applyButton = new Button(this.$dropDown.find('.js-button__apply'));

    this.initInputs();
    this.sumOptions();

    this.bindEventListeners();
  }

  sumOptions() {
    const sumCount = [];
    let sum = 0;
    this.$inputs.each(function () {
      const symType = $(this).attr('data-sumtype');
      const num = parseInt($(this).val());
      sum += num;

      sumCount[symType] = sumCount[symType] === undefined ? 0 + num : sumCount[symType] + num;
    });
    if (sum > 0) {
      let text = '';
      let numKeys = 0;
      for (const key in sumCount) {
        const num = sumCount[key];
        let tmp = 0;
        if (num > 1) {
          tmp = 1;
        }
        if (num > 4) {
          tmp = 2;
        }

        if (num > 0) {
          numKeys += 1;
          if (numKeys === 2) {
            text += ' , ';
          }
          if (numKeys <= 2) {
            text = `${text + sumCount[key]} ${this.sumTypes[key][tmp]}`;
          }
        }

        if (numKeys === 3) {
          text += '...';
        }
      }
      this.textField.setText(text);
      this.clearButton.show();
    } else {
      {
        this.textField.setText(this.defaultPlaceholder);
        this.clearButton.hide();
      }
    }
  }

  initInputs() {
    this.$inputs
      .filter(function () {
        if (this.value === '0') return true;
      })
      .siblings('.js-drop-down__item-button')
      .filter(function () {
        if ($(this).text() == '-') return true;
      })
      .addClass('drop-down__item-button--disabled');
  }

  toggleMenu() {
    this.$dropDown.toggleClass('drop-down--menu-visible');
  }

  bindEventListeners() {
    this.textField.bindEventMenuButtonClick(() => {
      this.toggleMenu();
      this.textField.toggleMenu();
    });

    this.clearButton.bindEventListener('click', () => {
      this.$inputs.val('0');

      this.initInputs();
      this.sumOptions();
    });

    this.applyButton.bindEventListener('click', () => {
      this.toggleMenu();
    });
    this.$itemButtons.each((index, elem) => {
      $(elem).on('click', () => {
        const $input = $(elem).siblings('.js-drop-down__item-input');
        const buttonText = $(elem).text();

        const val = parseInt($input.val());
        if (buttonText === '-') {
          $input.val(val - 1);
          $input.attr('value', val - 1);
          if (val - 1 === 0) {
            $(elem).addClass('drop-down__item-button--disabled');
          }
        } else {
          $input.val(val + 1);
          $input.attr('value', val + 1);
          $input
            .siblings('.js-drop-down__item-button')
            .removeClass('drop-down__item-button--disabled');
        }

        $input.change();
        this.sumOptions();

        return false;
      });
    });
  }
}

export default DropDown;
