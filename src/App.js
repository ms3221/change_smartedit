import { TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import banner from "./src_assets/banner.jpg";

function App() {
  const [cookieValue, setCookieValue] = useState("");
  const [productsNo, setProductsNo] = useState([]);
  useEffect(() => {}, []);
  async function handelLogin() {
    try {
      const { data } = await axios.post(
        "http://localhost:3005/smartstore/login",
        {
          productsNo,
        },
        {
          withCredentials: true,
        }
      );
      // const cookies = new Cookies();
      // const testCookie = cookies.set(data.name, data.value, {
      //   expires: data.expires,
      //   httpOnly: data.httpOnly,
      //   path: data.path,
      //   sameSite: data.sameSite,
      //   secure: true,
      // });
    } catch (e) {
      console.log(e.message);
    }
  }

  async function handelEdit() {
    try {
      const products_no = productsNo.split("\n");

      const { data } = await axios.post(
        "http://localhost:3005/smartstore/edit",
        {
          products_no,
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="App">
      <div className="banner">
        <a href="https://www.fastseller.shop/" target="_blank" rel="noreferrer">
          <img src={banner} className="banner_img"></img>
        </a>
      </div>
      <div className="title">
        <p>스마트에디터 변환 프로그램</p>
      </div>
      <div className="product_no_input">
        <TextareaAutosize
          placeholder="상품번호를 입력해주세요"
          style={{
            width: "100%",
            height: 500,
            fontSize: 20,
            fontWeight: "bold",
          }}
          onChange={(e) => {
            setProductsNo(e.target.value);
          }}
          placeholder="&#13;운영하시는 스마트스토어 상품 번호를 입력해주세요.&#13;&#13;한줄에 하나의 상품 번호가 입력되어야 합니다.&#13;예)&#13;&#10;&#10;&#10;8677445649&#13;&#10;&#10;8677445647&#13;&#10;&#10;8677445648&#13;&#13;현재버전은 건기식(식품) 상품만 변환 가능합니다."
        ></TextareaAutosize>
      </div>
      <div className="edit_btn">
        <button onClick={handelEdit}>변환 시작</button>
      </div>

      {/* <Button color="primary" onClick={handelLogin}>
        naver login
      </Button> */}
    </div>
  );
}

export default App;
