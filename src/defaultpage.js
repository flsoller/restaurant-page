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

    //Add innter HTML to buttons
    const buttons = itemContainer.childNodes;
    buttons[0].innerHTML = 'Home';
    buttons[1].innerHTML = 'Menu';
    buttons[2].innerHTML = 'Contact';
}

export { createSidebar }


