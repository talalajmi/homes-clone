import { ArrowLeft, MoreVertical, User } from "react-feather";
import styles from "./Header.module.css";
import sharedStyles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={sharedStyles.row}>
        <div className={`${sharedStyles.row} p-3 mx-3`}>
          <ArrowLeft />
          <p className="hidden md:flex">Search</p>
        </div>
        <div className="hidden md:block w-[1px] h-full border" />
        <p className="p-3 hidden md:flex">Find An Agent</p>
      </div>
      <div className="w-36 h-10">
        <img
          alt="logo"
          className="w-full h-full object-fill overflow-clip"
          src="https://www.homes.com/assets/images/homes-logo-default.svg"
        />
      </div>
      <div>
        <div className={`${sharedStyles.row} items-center`}>
          <p className="text-primary p-3 hidden md:flex">Register / Sign In</p>
          <div className={`flex p-1 mx-3 border rounded-lg`}>
            <User color="#4c4c4c" />
            <MoreVertical color="#4c4c4c" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
