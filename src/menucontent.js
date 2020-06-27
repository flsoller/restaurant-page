const menuContent = () => {

    const content = document.getElementById('content');

    //Create menuOne container
    const menuOne = document.createElement('div');
    menuOne.className = 'items card';
    content.appendChild(menuOne);

    //Create menuTwo container
    const menueTwo = document.createElement('div');
    menueTwo.className = 'items card';
    content.appendChild(menueTwo);

    //Create menuThree container
    const menueThree = document.createElement('div');
    menueThree.className = 'items card';
    content.appendChild(menueThree);


    //Set menuOne content
    const burgerMenu = document.createElement('h3');
    const burgerDescription = document.createElement('p');
    burgerMenu.innerHTML = 'BACON BURGER';
    burgerDescription.innerHTML = 'Classic burger with melted cheddar, BBQ-sauce and crispy bacon.';
    menuOne.appendChild(burgerMenu);
    menuOne.appendChild(burgerDescription);

    //Set  menuTwo content
    const steakMenu = document.createElement('h3');
    const steakDescription = document.createElement('p');
    steakMenu.innerHTML = 'STRIPES BURGER';
    steakDescription.innerHTML = 'Burger with marinated beef stripes, Lettuce, Fried Onions, Chili-Mayo.';
    menueTwo.appendChild(steakMenu);
    menueTwo.appendChild(steakDescription);

    //Set menuThree content
    const veggiMenu = document.createElement('h3');
    const veggiDescription = document.createElement('p');
    veggiMenu.innerHTML = 'VEGGI BURGER';
    veggiDescription.innerHTML = 'Burger with Portobello Mushroom, Blue Cheese, Lettuce, Tomato, Red Onion.';
    menueThree.appendChild(veggiMenu);
    menueThree.appendChild(veggiDescription);
}

export { menuContent }