export interface ProductI {
  name: string;
  englishName: string;
  price: number;
  image: string;
  id: string;  // Add product ID
  market: string;
  marketImage: string;
  category: string;
  description: string;
}

const ProductsData = [
  {
    "id": "ori-nabiji-dachrili-puri",
    "name": "პური",
    "englishName": "puri",
    "price": 2.5,
    "image": "/productImages/tsomeuli/dachriliPuri.webp",
    "description": "ცხელი თონის პური",
    "market": "ორი ნაბიჯი",
    "category": "ცომეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-bageti",
    "name": "ბაგეტი",
    "englishName": "bageti",
    "price": 1.8,
    "image": "/productImages/tsomeuli/franguliBageti.jpg",
    "description": "ფრანგული ბაგეტი",
    "market": "ორი ნაბიჯი",
    "category": "ცომეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-kruasani",
    "name": "კრუასანი",
    "englishName": "kruasani",
    "price": 3.0,
    "image": "/productImages/tsomeuli/kruasani.jpg",
    "description": "კარაქის კრუასანი",
    "market": "ორი ნაბიჯი",
    "category": "ცომეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "libre-tsomeuli-puri",
    "name": "პური",
    "englishName": "puri",
    "price": 2.5,
    "image": "/productImages/tsomeuli/dachriliPuri.webp",
    "description": "ცხელი თონის პური",
    "market": "ლიბრე",
    "category": "ცომეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  {
    "id": "libre-bageti",
    "name": "ბაგეტი",
    "englishName": "bageti",
    "price": 1.8,
    "image": "/productImages/tsomeuli/franguliBageti.jpg",
    "description": "ფრანგული ბაგეტი",
    "market": "ლიბრე",
    "category": "ცომეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  {
    "id": "libre-kruasani",
    "name": "კრუასანი",
    "englishName": "kruasani",
    "price": 3.0,
    "image": "/productImages/tsomeuli/kruasani.jpg",
    "description": "კარაქის კრუასანი",
    "market": "ლიბრე",
    "category": "ცომეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  //ტკბილეული
  {
    "id": "ori-nabiji-biskviti",
    "name": "ბისკვიტი",
    "englishName": "biskviti",
    "price": 5.0,
    "image": "/productImages/tkbileuli/biskviti.webp",
    "description": "გემრიელი ბისკვიტი",
    "market": "ორი ნაბიჯი",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-shokoladis-fila",
    "name": "შოკოლადის ფილა",
    "englishName": "shokoladis fila",
    "price": 2.2,
    "image": "/productImages/tkbileuli/shokoladi.webp",
    "description": "შოკოლადის ფილა",
    "market": "ორი ნაბიჯი",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-namcxvari",
    "name": "ნამცხვარი",
    "englishName": "namcxvari",
    "price": 12.0,
    "image": "/productImages/tkbileuli/namtskhvari.webp",
    "description": "გემრიელი ნამცხვარი",
    "market": "ორი ნაბიჯი",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },

  {
    "id": "libre-biskviti",
    "name": "ბისკვიტი",
    "englishName": "biskviti",
    "price": 5.0,
    "image": "/productImages/tkbileuli/biskviti.webp",
    "description": "ბისკვიტი",
    "market": "ლიბრე",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  {
    "id": "libre-shokoladis-fila",
    "name": "შოკოლადის ფილა",
    "englishName": "shokoladis fila",
    "price": 2.2,
    "image": "/productImages/tkbileuli/shokoladi.webp",
    "description": "შოკოლადის ფილა",
    "market": "ლიბრე",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  {
    "id": "libre-namcxvari",
    "name": "ნამცხვარი",
    "englishName": "namcxvari",
    "price": 12.0,
    "image": "/productImages/tkbileuli/namtskhvari.webp",
    "description": "გემრიელი ნამცხვარი",
    "market": "ლიბრე",
    "category": "ტკბილეული",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  // რძის ნაწარმი Products
  {
    "id": "ori-nabiji-rdze",
    "name": "რძე",
    "englishName": "rdze",
    "price": 3.0,
    "image": "/productImages/rdzisNatsarmi/rdze.jpg",
    "description": "ნატურალური რძე",
    "market": "ორი ნაბიჯი",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-karaki",
    "name": "კარაქი",
    "englishName": "karaqi",
    "price": 1.5,
    "image": "/productImages/rdzisNatsarmi/karaki.jpg",
    "description": "გემრიელი კარაქი",
    "market": "ორი ნაბიჯი",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },
  {
    "id": "ori-nabiji-yveli",
    "name": "ყველი",
    "englishName": "yveli",
    "price": 6.0,
    "image": "/productImages/rdzisNatsarmi/kveli.jpg",
    "description": "ქართული ყველი",
    "market": "ორი ნაბიჯი",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/oriNabijiImg.png"
  },

  {
    "id": "libre-rdze",
    "name": "რძე",
    "englishName": "rdze",
    "price": 3.0,
    "image": "/productImages/rdzisNatsarmi/rdze.jpg",
    "description": "ნატურალური რძე",
    "market": "ლიბრე",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/libreImg.jpg"
  },
  {
    "id": "libre-karaqi",
    "name": "კარაქი",
    "englishName": "karaqi",
    "price": 1.5,
    "image": "/productImages/rdzisNatsarmi/karaki.jpg",
    "description": "ბუნებრივი იოგურტი",
    "market": "ლიბრე",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/libreImg.jpg"
  }, 
  {
    "id": "libre-yveli",
    "name": "ყველი",
    "englishName": "yveli",
    "price": 6.0,
    "image": "/productImages/rdzisNatsarmi/kveli.jpg",
    "description": "ქართული ყველი",
    "market": "ლიბრე",
    "category": "რძის ნაწარმი",
    "marketImage": "/marketImgs/libreImg.jpg"
  }
]

export default ProductsData;