import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "antd";
import { actionLogOutRequest } from "../../store/module/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.me.nickname);

  const onLogout = useCallback(() => {
    dispatch(actionLogOutRequest({}));
  }, []);

  return (
    <>
      <h3>welcome {nickname}</h3>
      <Form onFinish={onLogout}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log out
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserProfile;
