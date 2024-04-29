const header_container = document.querySelector('.header');
header_container.classList.add("flex")
const headerBox = `
<div class = "header_container flex">
    <ul class="nav flex">
        <li><a href="#">WOMAN</li></a>
        <li><a href="#">MEN</li></a>
        <li><a href="#">ALL</li></a>
    </ul>
    <p class="logo">your<span>SNEAKER</span></p>
    <ul class="header_icon flex">
        <li>
                <a href="#"><img src="./img/login.png" alt=""></a
        </li>
        <li>
                <a href="#"><img src="./img/search.png" alt=""></a
        </li>
        <li>
             <a href="#"><img src="./img/cart.png" alt=""></a
        </li>
    </ul>
</div>`;
header_container.insertAdjacentHTML('beforeend', headerBox);