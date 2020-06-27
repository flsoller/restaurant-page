import { createSidebar } from './defaultpage'
import { homeContent } from './homecontent'
import { menuContent } from './menucontent'
import { removeContent } from './helper'
import { contactContent } from './contactcontent';

// Load sidebar
createSidebar();

// Load home content by default
homeContent();

// Add event listeners to buttons
const btnHome = document.getElementById('btnHome');
const btnMenu = document.getElementById('btnMenu');
const btnContact = document.getElementById('btnContact');

btnHome.addEventListener('click', () => {removeContent('content'), homeContent() });
btnMenu.addEventListener('click', () => {removeContent('content'), menuContent() });
btnContact.addEventListener('click', () => {removeContent('content'), contactContent() });