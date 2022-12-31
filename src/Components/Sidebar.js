import { Menu } from "antd";

function Sidebar(){
    
    return (
            <Menu
            mode="inline"
            >
                <Menu.Item key="1">
                    <span>Creator</span>
                </Menu.Item>

                <Menu.Item key="2">
                    <span>Plays as</span>
                </Menu.Item>
            </Menu>
    )
}

export default Sidebar; 