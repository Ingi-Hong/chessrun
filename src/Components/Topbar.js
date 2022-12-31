import { Menu } from "antd";

function Topbar() {
  return (
    <div>
      <div
        className="logo"
        style={{
          float: "left",
          width: "120px",
          height: "31px",
          margin: "16px 24px 16px 0",
        }}
      >
        <img></img>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
      </Menu>
    </div>
  );
}

export default Topbar;
