let cardsList = document.querySelector('.cards-list')
let card = document.createElement('div')
card.classList.add('card')
cardsList.append(card)

let imageWrapper = document.createElement('div')
imageWrapper.classList.add('image-wrapper')
card.append(imageWrapper)

let productImage = document.createElement('img')
productImage.setAttribute('src', 'images/image-product-desktop.jpg')
productImage.setAttribute('alt', '')
productImage.classList.add('product-image')
imageWrapper.append(productImage)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
card.append(contentWrapper)

let productCategory = document.createElement('span')
productCategory.textContent = 'Perfume'
productCategory.classList.add('product-category')
contentWrapper.append(productCategory)

let productTitle = document.createElement('h2')
productCategory.textContent = 'Gabrielle Essence Eau De Parfum'
productTitle.classList.add('product-title')
contentWrapper.append(productTitle)

let productDescription = document.createElement('p')
productDescription.textContent = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
productDescription.classList.add('product-description')
contentWrapper.append(productDescription)

let productPriceWrapper = document.createElement('div')
productPriceWrapper.classList.add('prodduction-price-wrapper')
contentWrapper.append(productPriceWrapper)

let productPrice = document.createElement('span')
productPrice.textContent = '$149.99'
productPrice.classList.add('product-price')
productPriceWrapper.append(productPrice)

let productPriceOld = document.createElement('span')
productPriceOld.textContent = '$169.99'
productPriceOld.classList.add('product-price-old')
productPriceWrapper.append(productPriceOld)

let addToCartButton = document.createElement('button')
addToCartButton.classList.add('add-to-cart-button')
contentWrapper.append(addToCartButton)

let cartImage = document.createElement('img')
cartImage.setAttribute('src', 'images/icon-cart.svg')
addToCartButton.textContent = 'Add To Cart'
addToCartButton.append(cartImage)
