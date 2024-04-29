const footer_container= document.querySelector(".footer");
footer_container.classList.add('flex')
const footerBox = `
        <div class="footer_menu">
            <ul>
            <li><a href="#">ALL</a></li>
            <li><a href="#">WOMAN</a></li>
            <li><a href="#">MEN</a></li>
        </ul>
        </div>
        <img src="./img/footer_logo.png" alt="">
        <div class="footer_menu">
            <ul>
            <li><a href="#">WORCOUT</a></li>
            <li><a href="#">RUN</a></li>
            <li><a href="#">FOOTBALL</a></li>
        </ul>
        </div>
`;
footer_container.insertAdjacentHTML("beforeend", footerBox);