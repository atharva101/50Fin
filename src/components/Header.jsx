import React, {useState} from "react";
import SearchBox from "./SearchBox";
import Modal from "./Modal";
const Header = ({ setSearchQuery , setFilteredUsers, filteredUsers}) => {

const [isOpen,setIsOpen] = useState(false)



  return (
    <React.Fragment>
      <SearchBox setSearchQuery={setSearchQuery} />
      <button onClick = {() => setIsOpen(true)}>Add User</button>
     { isOpen && <Modal isOpen={isOpen} setIsOpen = {setIsOpen} setFilteredUsers = {setFilteredUsers} filteredUsers = {filteredUsers}/>}
    </React.Fragment>
  );
};

export default Header;
