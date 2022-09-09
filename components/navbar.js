export const navbar = () => {
    document.querySelector(".navbar").innerHTML = `
    <div>
            <div class="n-imageDiv"><a href="./index.html"><img id="n-logo" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon.svg?v=1" alt=""></a></div>
            <div class="n-products">
                <a href="">
                    <div class="n-products_click" >Products</div>
                    <div><i class="fa-solid fa-angle-down"></i></div>
                </a>
            </div>
            <div class="n-solutions">
                <a href="">
                    <div class="n-solutions_click">Solutions</div>
                    <div><i class="fa-solid fa-angle-down"></i></div>
                </a>
            </div>
            <div class="n-pricing">
                <a href="./pricing.html">Pricing</a>
            </div>
            <div class="n-learn">
                <a href="">
                    <div class="n-learn_click">Learn</div>
                    <div><i class="fa-solid fa-angle-down"></i></div>
                </a>
            </div>
            <div class="n-contact">
                <a href="">Contact</a>
            </div>
            <div class="n-searchDiv">
                <div id="n-searchLogo"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div><input id="n-input" type="search" placeholder="Search..."></div>
            </div>
            <div class="n-login">
                <div>
                    <a href="./FirstPage.html">Log In</a>
                </div>
            </div>
            <div class="n-freeTrial">
                <div>
                    <a href="">Start My Free Trial</a>
                </div>
            </div>
            <div class="n-small_screen">
                <div>
                    <div class="small_screen_search"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <div class="n-menu">
                        <div id="n-menu_click">
                            <div class="menudiv"></div>
                            <div class="menudiv"></div>
                            <div class="menudiv"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}