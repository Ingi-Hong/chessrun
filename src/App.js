import { Menu } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>

        <Header>
          <Topbar />
        </Header>

        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
        </Layout>
        
      </Layout>
    </div>
  );
}

export default App;
