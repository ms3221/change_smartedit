import { Button, TextareaAutosize } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

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

      //const option = delete data['name']
      console.log(data);
      localStorage.setItem("loginCookie", JSON.string);
      console.log(localStorage.getItem("loginCookie"));

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
        },
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="App">
      <div className="editor">
        <div>
          <p>smartEditor 변환기</p>
        </div>
        <div>
          <Button
            color="warning"
            size="large"
            variant="contained"
            onClick={handelEdit}
            style={{ margin: 20 }}
          >
            EDIT
          </Button>
          <TextareaAutosize
            placeholder="상품번호를 입력해주세요"
            style={{
              width: 500,
              height: 500,
              fontSize: 20,
              fontWeight: "bold",
            }}
            onChange={(e) => {
              setProductsNo(e.target.value);
            }}
          ></TextareaAutosize>
        </div>
      </div>
      {/* <Button color="primary" onClick={handelLogin}>
        naver login
      </Button> */}
    </div>
  );
}

export default App;
