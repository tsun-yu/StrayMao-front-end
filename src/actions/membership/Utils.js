const ConfirmDialog = (title , contect , OkGo , NoGo ) => {
  confirm({
    title: "喵嗚~",
    content: "我們很重視您的評價，真的要刪除嗎?",
    footer: dispatch => (
      <Fragment>
        <Button onClick={() => dispatch("cancel")}>取 消</Button>
        <Button onClick={() => dispatch("ok")} styleType="danger">
          請幫我刪除
        </Button>
      </Fragment>
    ),
    on
    closeBefore: (action, close) => {
      if (action === "ok") {
        okGo
      } else {
        close();
      }
    }
  });
};

const AlertDialog = async cb => {
  const instance = await alert(<span>这是 Alert ，支持ReactNode</span>);
  console.log(instance);
  if (cb instanceof Function) cb();
};