## Furniture Web Site

---

### ๐ป ๊ฐ๊ตฌ ํ๋งค ์น ์ฌ์ดํธ ์ ์์ ์ฃผ์ ๋ก Javascript๋ฅผ ์ฌ์ฉํด ์ฅ๋ฐ๊ตฌ๋ ๊ธฐ๋ฅ์ ๊ตฌํ

### ์ฌ์ฉ ๊ธฐ์ 

- HTML
- CSS
- Javascript

### ๋ฐ๋ชจ ๋งํฌ : https://leenawon.github.io/furniture-web-js/

---

### **์น ์ฌ์ดํธ** ๋ชจ์ต

- Main ํ๋ฉด

  - Modern์ด๋ผ๋ ์ปจ์์ผ๋ก ์ฌ์ดํธ๋ฅผ ์ ์ํ์๋ค
  - ์ฝ๊ฐ์ ์ค๋ช๊ณผ ๋ฒํผ๋ค ๊ทธ๋ฆฌ๊ณ  ์ด๋ฏธ์ง๋ก ๊ตฌ์ฑํ์๋ค

  ![image](https://user-images.githubusercontent.com/76942087/147961506-81d27816-1e51-4bba-a4c2-4f61b64e78de.png)

  - ์๋จ์๋ ๋ค๋น๊ฒ์ด์ ๋ฐ๊ฐ ์์นํด ํด๋ฆญํ๋ฉด ๋ฉ๋ด๋ค์ ๋ณผ ์ ์๋ค

  ![image](https://user-images.githubusercontent.com/76942087/147961579-50e9c264-915a-4bf8-a719-3aa2f8303213.png)

  - ์ฅ๋ฐ๊ตฌ๋ ์์ด์ฝ์ ํด๋ฆญ ์ ํ์ฌ ์์ ์ด ๋ด์ ์ํ์ ์ด๋ฏธ์ง์ ์ด๋ฆ, ์นดํ๊ณ ๋ฆฌ, ๊ฐ๊ฒฉ๊ณผ ํจ๊ป ์ญ์  ๋ฒํผ ๋ฐ ์ด ํฉ์ฐ ๊ธ์ก์ด ํ์๋๋ค

  ![image](https://user-images.githubusercontent.com/76942087/147962142-ad0f6758-b625-4c15-8b4e-b48ed947d41c.png)

  **Advanced Feature**

  - localStorage์ ์ ์ฅ๋ ์ฅ๋ฐ๊ตฌ๋์ ๋ด๊ธด ์ํ ์ ๋ณด๋ฅผ ๊ฐ์ ธ์์ ๊ทธ ์ํ์ ์ด ํฉ์ฐ๋ ๊ฐ๊ฒฉ์ ๊ณ์ฐํ ๋ค ๋ฐํํด์ฃผ๋ ๊ณผ์ ์ด ๋ด๊ธด ์ฝ๋์ด๋ค

  ```js
  // localStorage๋ก๋ถํฐ ์ ์ฅ๋ ์ ๋ณด๋ฅผ ๋ฐ์์ด
  function getProductItem() {
    return localStorage.getItem("productItem")
      ? JSON.parse(localStorage.getItem("productItem"))
      : [];
  }

  // ์ฅ๋ฐ๊ตฌ๋์ ๋ด๊ธด ์ํ์ ์ด ๊ฐ๊ฒฉ๊ณผ ๊ฐ์๋ฅผ ๋ฆฌํดํจ
  function findCartInfo() {
    let productItem = getProductItem();
    let totalPrice = productItem.reduce((acc, product) => {
      let price = parseInt(product.price.substr(1));
      return (acc += price);
    }, 0);

    return {
      totalPrice: totalPrice,
      countProduct: productItem.length,
    };
  }
  ```

---

- All Products ๋ชจ์ต

  - ์ํ๋ค์ ์ด๋ฆ, ์นดํ๊ณ ๋ฆฌ, ๊ฐ๊ฒฉ ์ ๋ณด์ ํจ๊ป ๋์ดํด ๋์๊ณ , ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆฌ๋ฉด ์ฅ๋ฐ๊ตฌ๋์ ์ถ๊ฐ ๋ฒํผ์ด ๋ํ๋๋ค

  ![image](https://user-images.githubusercontent.com/76942087/147961728-d80872b7-7946-4d68-b353-87ca70d6f17a.png)

  ![image](https://user-images.githubusercontent.com/76942087/147961837-cf2204e0-8cb1-4a42-a364-fdec5074eaaf.png)

- Footer section

  - ์ด๋ฏธ์ง์ ๊ธ์ ํฌํจํด์ ํ๋จ์๋ ์์ ์์ด์ฝ๋ค์ ๋ฐฐ์นํ์ฌ ๊ตฌ์ฑํ์๋ค

  ![image](https://user-images.githubusercontent.com/76942087/147961902-c4f0ad89-efe8-4b41-81e7-d1e31d6a5ebe.png)

- ๋ชจ๋ฐ์ผ ๋ฐ์ํ

  ![image](https://user-images.githubusercontent.com/76942087/147963795-5002c8a6-5041-4b3f-8743-17b198c958b0.png)

---
