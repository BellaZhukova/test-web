$(document).ready(function () {

    $('.calculator__input').each(function () {
        let $input = $(this).find('.input__input');

        $input.prop('disabled', 'true');

        $('#input-square').val(10)
        $('#input-angles').val(4);

        $(this).find('.input__decrement').on('click', function () {
            let currentValue = parseInt($input.val() || 0);
            if ($input.is('#input-square')) {
                if (currentValue > 10) {
                    $input.val(currentValue - 1);

                }
            }
            else if ($input.is('#input-angles')){
                if (currentValue > 0) {
                    $input.val(currentValue - 1);
                }
            }
            getInputValue();
        });

        $(this).find('.input__increment').on('click', function () {
            let currentValue = parseInt($input.val() || 0);
            $input.val(currentValue + 1);
            getInputValue();
        });

    });

    $('.calculator__label').each(function () {
        let $selectOptions = $(this).find('.select__options');
        let $selectOption = $(this).find('.select__option');
        let $selectContent = $(this).find('.select__main');

        let defaultOptionText = $selectOption.first().text();
        let defaultOptionValue = $selectOption.first().attr('value');

        $selectContent.text(defaultOptionText);
        $selectContent.attr('value', defaultOptionValue);

        $(this).find('.select__button').on('click', function () {
            if ($selectOptions.css('display') === 'flex') {
                $selectOptions.css('display', 'none');
            } else {
                $selectOptions.css('display', 'flex');
            }
        })

        $(this).find('.select__option').on('click', function () {
            let textValue = $(this).text();
            let valueValue = $(this).attr('value');

            $selectContent.text(textValue);
            $selectContent.attr('value', valueValue);
            $selectOptions.css('display', 'none')

            getInputValue();
        })

    })

    function getInputValue() {
        let squareValue = $('#input-square').val();
        let anglesValue = $('#input-angles').val();
        let selectMaterial = $('#select__material').attr('value');
        let selectColor = $('#select__color').attr('value');
        const angelesPrice = 100;

        let count;

        if (selectMaterial === 'ПВХ') {
            if (selectColor === 'Белый') {
                count = 1390;
            } else if (selectColor === 'Цветной') {
                count = 1600;
            }
        } else if (selectMaterial === 'Тканевый') {
            if (selectColor === 'Белый') {
                count = 2250;
            } else if (selectColor === 'Цветной') {
                count = 0;
            }
        }

        let currentPrice = (count * squareValue) + (angelesPrice * anglesValue);

        $('.cost__cost').text(currentPrice);

    }

    getInputValue();

    $('.block__button').on('click', function () {

        let $newButton = $('<button class="block__button--disable">Комната №' + ($('.block__button--active').length + 1 + $('.block__button--disable').length) + '</button>')

        $('.block__buttons').append($newButton);
    })
});
