## Furniture Web Site

---

### 💻 가구 판매 웹 사이트 제작을 주제로 Javascript를 사용해 장바구니 기능을 구현

### 사용 기술

- HTML
- CSS
- Javascript

### 데모 링크 : https://leenawon.github.io/furniture-web-js/

---

### **웹 사이트** 모습

- Main 화면

  - Modern이라는 컨셉으로 사이트를 제작하였다
  - 약간의 설명과 버튼들 그리고 이미지로 구성하였다

  ![image](https://user-images.githubusercontent.com/76942087/147961506-81d27816-1e51-4bba-a4c2-4f61b64e78de.png)

  - 상단에는 네비게이션 바가 위치해 클릭하면 메뉴들을 볼 수 있다

  ![image](https://user-images.githubusercontent.com/76942087/147961579-50e9c264-915a-4bf8-a719-3aa2f8303213.png)

  - 장바구니 아이콘을 클릭 시 현재 자신이 담은 상품의 이미지와 이름, 카테고리, 가격과 함께 삭제 버튼 및 총 합산 금액이 표시된다

  ![image](https://user-images.githubusercontent.com/76942087/147962142-ad0f6758-b625-4c15-8b4e-b48ed947d41c.png)

  **Advanced Feature**

  - localStorage에 저장된 장바구니에 담긴 상품 정보를 가져와서 그 상품의 총 합산된 가격을 계산한 뒤 반환해주는 과정이 담긴 코드이다

  ```js
  // localStorage로부터 저장된 정보를 받아옴
  function getProductItem() {
    return localStorage.getItem("productItem")
      ? JSON.parse(localStorage.getItem("productItem"))
      : [];
  }

  // 장바구니에 담긴 상품의 총 가격과 개수를 리턴함
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

- All Products 모습

  - 상품들을 이름, 카테고리, 가격 정보와 함께 나열해 두었고, 마우스를 올리면 장바구니에 추가 버튼이 나타난다

  ![image](https://user-images.githubusercontent.com/76942087/147961728-d80872b7-7946-4d68-b353-87ca70d6f17a.png)

  ![image](https://user-images.githubusercontent.com/76942087/147961837-cf2204e0-8cb1-4a42-a364-fdec5074eaaf.png)

- Footer section

  - 이미지와 글을 포함해서 하단에는 소셜 아이콘들을 배치하여 구성하였다

  ![image](https://user-images.githubusercontent.com/76942087/147961902-c4f0ad89-efe8-4b41-81e7-d1e31d6a5ebe.png)

- 모바일 반응형

  ![image](https://user-images.githubusercontent.com/76942087/147963795-5002c8a6-5041-4b3f-8743-17b198c958b0.png)

---
