import jQuery from "jquery"
window.$ = window.jQuery = jQuery

const typeAnimations = () => {
    let wordList = ['Revolutionizing.', 'Extraordinary.', 'Intriguing.', 'Surpassing.'],
        loopNumber = 0,
        isDeleting = false,
        currentText = '',
        timePeriod = 2000,
        tickPeriod = 150 - Math.random() * 100

    const tick = () => {
        let i = loopNumber % wordList.length
        let word = wordList[i]
        currentText = isDeleting ? word.substring(0, currentText.length - 1) : word.substring(0,
            currentText.length + 1)

        if (isDeleting) tickPeriod / 2
        if (!isDeleting && currentText == word) {
            isDeleting = true;
            tickPeriod = timePeriod
        } else if (isDeleting && currentText == '') {
            isDeleting = false;
            ++loopNumber;
            tickPeriod = 500
        }

        $('.type-animation').text(currentText)
    }

    let ticker = setInterval(() => {
        tick()
    }, tickPeriod);

    return () => clearInterval(ticker)
}

typeAnimations()