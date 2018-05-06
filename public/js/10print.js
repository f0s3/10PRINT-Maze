let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight - 30;
let rowIndex = 1;
function randomValue() {return (Math.random() < 0.7) ? 1 : 0;}
$(() => {
    for (let i = 0; i < screenHeight; i += 20) {
        let row = '<div class="row-"></div>';
        $('body').append(row);
        $('.row-').attr('class', 'row-' + rowIndex);
        for (let j = 0; j < screenWidth; j += 20) {
            createDivAndPush(randomValue());
        }
        rowIndex++;
    }
});
function createDivAndPush(isSlash) {
    let slashOrBackslash = $("<div></div>");
    switch (isSlash) {
        case 0:
            slashOrBackslash.attr('class', 'slash');
            break;
        case 1:
            slashOrBackslash.attr('class', 'backslash');
            break;
    }
    $('.row-' + rowIndex).append(slashOrBackslash);
}