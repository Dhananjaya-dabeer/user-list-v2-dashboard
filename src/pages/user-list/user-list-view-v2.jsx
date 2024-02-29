import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { userListFakeData } from "../../page-sections/user-list/fakeData";
import CustomTable from "../../page-sections/admin-ecommerce/CustomTable";
import UserListColumnShape from "../../page-sections/user-list/columnShape";
import ListHeader from "../../page-sections/user-list/ListHeader";
import { searchByName } from "../../utils/utils";

const UserList = () => {

    const handleAddUser = () => console.log('Test');

    const [searchValue, setSearchValue] = useState("");
    const [filteredItem, setFilteredItem] = useState(userListFakeData);
    useEffect(() => {
        const result = searchByName(userListFakeData, searchValue);
        setFilteredItem(result);
    }, [searchValue]);
    return <Box pt={2} pb={4}>
        <ListHeader setSearchValue={setSearchValue} handleClick={handleAddUser} />

        <CustomTable columnShape={UserListColumnShape} data={filteredItem} />
    </Box>;
};

export default UserList;