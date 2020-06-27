const removeContent = (containerName) => {
    
    const container = document.getElementById(containerName);

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

export { removeContent }