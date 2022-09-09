let ans = true;
document.querySelector('.toggle-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    let front = [90, 135, 225, 575];
    let back = [81, 122, 203, 518];
    if(ans) {
        let plan = document.querySelectorAll('.planPrice');
        for(let i = plan.length-1; i >= 0; i--) {
            plan[i].innerText = `$${back[i]}`
        }
        ans = false;
    }
    else {
        let plan = document.querySelectorAll('.planPrice');
        for(let i = plan.length-1; i >= 0; i--) {
            plan[i].innerText = `$${front[i]}`
        }
        ans = true;
    }
})

let payment = document.querySelectorAll('.btn-outline-primary');
for(let i=0; i < payment.length; i++) {
    payment[i].addEventListener('click', () => {
        location.href="./payment/payment.html"
    })
}