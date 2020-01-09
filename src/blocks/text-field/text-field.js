import 'inputmask/dist/jquery.inputmask.min';

$(document).ready(function() {
    $(".text-field--mask").find("input").inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
      });

}); 