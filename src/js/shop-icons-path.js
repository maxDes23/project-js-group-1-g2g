export default function () {
    return {
      // Online stores icons
    
      bookShopIconPath: new URL('../img/book.png', import.meta.url).href,
  
      amazonIconPath: new URL('../img/amazon.png', import.meta.url).href,
  
      /*  // Empty list image
      emptyListStubImage: new URL('../img/books-desk@1x.png', import.meta.url)
        .href,
   */
      // SVG
      svgTrashIcon: new URL('../img/icons.svg', import.meta.url),
    };
  }