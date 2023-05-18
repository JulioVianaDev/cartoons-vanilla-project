const navbar = document.getElementById("navbar")
navbar.innerHTML= ` 
    <div style="display: inline-block;">
    <a class="links-navbar" href="./index.html">Home</a>
    <a class="links-navbar" href="./cartoons.html">Cartoons</a>
    </div>
    <div id="info-navbar">
        <div id="nome-navbar"></div>
        <img onclick="logar()" src="./images/navbar/logo.jpeg" id="navbar-image">
    </div>
`
function logar(){
    var userName = prompt('Please enter your name:');
    const userNameCampo = document.getElementById('nome-navbar');
    userNameCampo.innerHTML =  `<p id="nome-na-nav">${userName}</p>`
}