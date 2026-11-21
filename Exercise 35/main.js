
function changeImage() {
    const image = document.querySelector('#myImage');
    const url = prompt ('Enter the URL of the new image:');
    image.setAttribute('src', url);
    const padding = prompt('Enter the padding value');
    image.style.padding = padding;
    const borderColor = prompt('Enter the border color');
    image.style.borderColor = borderColor;
    const width = prompt('Enter the width value');
    image.style.width = `${width}`;
    const height = prompt('Enter the height value');
    image.style.height = `${height}`;
    const borderRadius = prompt('Enter the border radius value');
    image.style.borderRadius = `${borderRadius}px`;
    const backgroundColor = prompt('Enter the background color');
    image.style.backgroundColor = blue;
}
