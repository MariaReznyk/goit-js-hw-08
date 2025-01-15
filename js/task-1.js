const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(el => { 
    const itemListTitle = el.querySelector('h2');
    console.log(`Category: ${itemListTitle.textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);   
});
