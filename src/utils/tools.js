const transferTree = (data) => {
    if (!Array.isArray(data)) {
      return [];
    }
    for (let i = 0; i < data.length; i++) {
      data[i].title = data[i].label;
      data[i].key = data[i].value;
      if (data[i].children) {
        transferTree(data[i].children);
      }
    }
    return data;
  };
  
  const transferCustomTreeList = (data, value, label) => {
    if (!Array.isArray(data)) {
      return [];
    }
    for (let i = 0; i < data.length; i++) {
      data[i].value = data[i][value];
      data[i].label = data[i][label];
  
      if (data[i].children) {
        transferTreeList(data[i].children, data[i].categoryCode);
      }
    }
    return data;
  };
  
  const transferTreeList = (data, parentValue) => {
    if (!Array.isArray(data)) {
      return [];
    }
    for (let i = 0; i < data.length; i++) {
      data[i].title = data[i].categoryName;
      data[i].key = data[i].categoryCode;
  
      if (data[i].children) {
        transferTreeList(data[i].children, data[i].categoryCode);
      }
    }
    return data;
  };
  
  const transferList = (data, value, label) => {
    let list = [];
    if (!Array.isArray(data)) {
      return list;
    }
    list = data.map((item) => {
      return { ...item, value: item[value], label: item[label] };
    });
  
    return list;
  };
  
  const transferSimpleList = (data, value, label) => {
    let list = [];
    if (!Array.isArray(data)) {
      return list;
    }
    list = data.map((item) => {
      return { value: item[value], label: item[label] };
    });
  
    return list;
  };

  const ReceiveMessage = (event, that) => {
    // 我们能相信信息的发送者吗?  (也许这个发送者和我们最初打开的不是同一个页面).
    console.log("收到")
    if (event.origin !== "http://localhost:8080") return;
    console.log("通过校验")
    const { dispatch } = that.props
    dispatch({
        type: "homePage/changeBreadData",
        payload: {
            ...event.data.message
        }
    })
    // event.source 是我们通过window.open打开的弹出页面 popup
    // event.data 是 popup发送给当前页面的消息 "hi there yourself!  the secret response is: rheeeeet!"
  }
  
  export {
    transferTree,
    transferTreeList,
    transferList,
    transferSimpleList,
    transferCustomTreeList,
    ReceiveMessage,
  };
  