import Navigation from "./Navigation";

const Layout = ({children}) => {
    return ( 
<div>
<Navigation></Navigation>
{ children }
</div>


     );
}
 
export default Layout;