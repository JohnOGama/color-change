let count = 0;
const btns = document.querySelectorAll(".btn");
const valueEl = document.querySelector(".value");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
            valueEl.textContent = count;
        }
        if (styles.contains('increase') ){
            count++;
            valueEl.textContent = count;
        }
        if (styles.contains('reset')) {
            count = 0;
            valueEl.textContent = count;
        }
        if (count > 0) {
            valueEl.style.color = 'green'
        }
        else if (count < 0) {
            valueEl.style.color = 'red'
        }
        else {
            valueEl.style.color = 'black'
        }
    });
});
