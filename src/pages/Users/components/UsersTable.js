import React from "react";
import { Table, Icon, Button, Avatar, Tooltip } from "antd";

export default function UsersTable(props) {
  const column = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id"
    },
    {
      title: "Avatar",
      key: "avatar",
      render: (text, row) => {
        return <Avatar src={row.avatar} />;
      }
    },
    {
      title: "Name",
      key: "name",
      render: (text, row) => {
        return <p>{`${row.first_name} ${row.last_name}`}</p>;
      }
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email"
    },
    {
      title: "Action",
      key: "action",
      render: (text, row) => {
        return (
          <span className="actions">
            <Tooltip title="Update">
              <Icon
                title="Update"
                className="action-icon"
                onClick={() => openModal("Update", row.id)}
                type="edit"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Icon
                title="Delete"
                onClick={() => props.deleteUser(row.id)}
                className="action-icon"
                type="delete"
              />
            </Tooltip>
          </span>
        );
      }
    },
    {
      key: "createUser",
      title: () => {
        return (
          <Button onClick={() => openModal("Create")} icon="plus">
            Add User
          </Button>
        );
      }
    }
  ];

  const openModal = (type, id = null) => {
    props.setModalType(type);
    props.setUserId(id);
    props.setModal(true);
  };

  const paginationConfig = {
    pageSize: props.users.per_page,
    total: props.users.total,
    onChange: page => {
      props.getAllUsers(page);
    }
  };

  return (
    <Table
      pagination={paginationConfig}
      dataSource={props.users.users}
      columns={column}
    />
  );
}
