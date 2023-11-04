// Navbar scroll animations
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scrollDown", this.window.scrollY > 0);
})


// Mobile Menu
const toggleMenu = () => {
    if (menuItems.classList.contains('menuItemsOpen')) {
        menuItems.classList.remove('menuItemsOpen')
        hamburgerMenuIcon.classList.remove('hamburgerMenuOpen')
    } else {
        menuItems.classList.add('menuItemsOpen')
        hamburgerMenuIcon.classList.add('hamburgerMenuOpen')
    }
}
const menuItems = document.querySelector('.menuItems')
const hamburgerMenuIcon = document.querySelector('.hamburgerMenuIcon')
hamburgerMenuIcon.addEventListener('click', toggleMenu)


// Statistics Counter
const statisticsCounters = document.querySelectorAll('.statisticCount')
setTimeout(() => {
    statisticsCounters.forEach((counter) => {
        const updateCounter = () => {
            const target = Number(counter.getAttribute('data-target'))
            const currentCount = Number(counter.innerHTML)
            if (currentCount < target) {
                counter.innerHTML = Math.ceil(currentCount + target / 100)
                setTimeout(updateCounter, 10)
            }
        }
        updateCounter()
    })
}, 900)


// Dropdown FAQ
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrowFAQ');

        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.classList.remove('rotateArrowFAQ');

        } else {
            questions.forEach(function (question) {
                const answer2 = question.nextElementSibling;
                const arrow2 = question.querySelector('.arrowFAQ');
                answer2.style.display = "none";
                arrow2.classList.remove('rotateArrowFAQ');
            })

            answer.style.display = "block";
            arrow.classList.add('rotateArrowFAQ');
        }
    });
});


// CountDown
const updateCountdown = () => {
    const targetDate = new Date("2023-11-20").getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

}

updateCountdown()
const timeInterval = setInterval(updateCountdown, 1000); 