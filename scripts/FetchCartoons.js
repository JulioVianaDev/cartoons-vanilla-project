var urlCartoon = 'https://api.sampleapis.com/cartoons/cartoons2D'

fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .catch(erro =>console.log(erro))

function PopularATela(data){
    const div = document.getElementById('cartoonsList');
    const allCards = data.map(item=>`
        <div>
            <h1>${item.title}</h1>
            <img 
                class="imagensCard" 
                src="${item.image}" 
                onerror="handleError(this)"
                alt="não foi possivel achar a imagem do ${item.title}"
            />
            <h2>${item.episodes} episódios</h2>
        </div>
    `).join('');
    div.innerHTML = allCards;
}
function handleError(img) {
    img.src = './images/erroImage.png';
    img.onerror = null;  // Remove the onerror event to prevent an infinite loop
}