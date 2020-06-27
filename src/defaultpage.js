const createSidebar = () => {

    const container = document.getElementById('container');

    //Create div that holds sidebar
    const sidebar = document.createElement('div');  
    sidebar.className = 'sidebar';
    container.appendChild(sidebar);

    //Create div that holds buttons
    const itemContainer = document.createElement('div');
    itemContainer.className = 'items';
    itemContainer.id = 'itemContainer';
    sidebar.appendChild(itemContainer);

    //Create buttons
    for (let i = 0; i < 3; i++) {
        const button = document.createElement('button')
        itemContainer.appendChild(button);
    }

    //Add innter HTML and IDs to buttons
    const buttons = itemContainer.childNodes;
    buttons[0].innerHTML = 'Home';
    buttons[0].id = 'btnHome'
    buttons[1].innerHTML = 'Menu';
    buttons[1].id = 'btnMenu';
    buttons[2].innerHTML = 'Contact';
    buttons[2].id = 'btnContact';

    //Create div that holds content
    const content = document.createElement('div');
    content.className = 'content';
    content.id = 'content';
    container.appendChild(content);
}

export { createSidebar }


