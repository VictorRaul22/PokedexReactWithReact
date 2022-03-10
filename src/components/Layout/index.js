import React from "react";
import Menu from "@components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { cleanError } from "../../actions";
import "./styles.css";

function Layout({ children }) {
  const errorMessage = useSelector((state) => state.ui.get("error")).toJS();
  // console.log(errorMessage, "layout")
  // console.log(errorMessage)
  // window.console.log(errorMessage, "sss")
  const dispatch = useDispatch();
  const handleDismiss = () => {
    dispatch(cleanError());
  };
  return (
    <div className="Layout-content">
      <Menu />
      {errorMessage?.content ? (
        <div className="wrapper">
          <Message
            onDismiss={handleDismiss}
            header={`Error: ${errorMessage.header || null}`}
            content={errorMessage.content || null}
            color="red"
          />
        </div>
      ) : null}
      <div>{children}</div>
    </div>
  );
}

export default Layout;
