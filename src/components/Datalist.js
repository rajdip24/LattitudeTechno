import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

function Datalist({ handleCheck }) {
  const [userList, setUserList] = useState([]);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "username", text: "Username" },
    { dataField: "email", text: "Email" },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function(page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <BootstrapTable
        keyField="id"
        columns={columns}
        data={userList}
        pagination={pagination}
        filter={filterFactory()}
      />
      {/* <table>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
          </tr>
          {
            userList.map(user=>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
                
                )

          }
      </table> */}
    </div>
  );
}

export default Datalist;
