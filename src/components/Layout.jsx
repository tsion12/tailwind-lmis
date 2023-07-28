import Header from "./common/Header";
import LeftSidebar from "./common/LeftSidebar";

const Layout = ({children}) => {
  return (
    <div>
      <Header className="p-8"/>
      <div className="flex h-screen bg-bgcolor"><LeftSidebar />
      {children}</div>
      
    </div>
  )
}
export default Layout;