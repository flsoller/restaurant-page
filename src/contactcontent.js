const contactContent = () => {

    const content = document.getElementById('content');

    //Create card container
    const card = document.createElement('div');
    card.className = 'items card';
    content.appendChild(card);

    //Create card content
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Get in touch with us';

    const h4 = document.createElement('h4');
    h4.innerHTML = 'If you\'d\ like to leave a message you can actually not contact us since this is not a real place. Sorry.'

    card.appendChild(h1);
    card.appendChild(h4);
}

export { contactContent }