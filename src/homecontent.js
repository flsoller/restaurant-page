const homeContent = () => {

    const content = document.getElementById('content');

    //Create card container
    const card = document.createElement('div');
    card.className = 'items card';
    content.appendChild(card);

    //Create card content
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome to RandomBurgerPlace.';

    const h4 = document.createElement('h4');
    h4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

    card.appendChild(h1);
    card.appendChild(h4);
}

export { homeContent };