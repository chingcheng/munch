import { useToken } from "./Auth";

function Logout() {
  const { logout } = useToken();
  logout();

}

export default Logout;
