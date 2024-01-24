import React from "react";
import RouteCompo from "./Routes/RouteCompo";
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "30%", fontSize: "16px", marginTop: '225px' }}
        toastStyle={{ backgroundColor: "#ff3380", color: "#ffffff" }}
        bodyStyle={{ fontSize: "16px" }}
      />
      <Provider store={store}>
        <RouteCompo />
      </Provider>
    </div>
  );
}

export default App;
