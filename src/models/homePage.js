export default {
  namespace: "homePage",

  state: {
    text: "hello world",
    menuList: [
      { key: "home", title: "首页", id: "home", path: "/home" },
      { key: "list", title: "列表", id: "list", path: "/list" },
      { key: "person", title: "人员", id: "person" },
      {
        key: "grade",
        title: "成绩",
        id: "grade",
        children: [
          { key: "grade1", title: "成绩1", id: "grade1" },
          {
            key: "grade2",
            title: "成绩2",
            id: "grade2",
            children: [
              { key: "grade21", title: "成绩21", id: "grade21" },
              { key: "grade22", title: "成绩22", id: "grade22" },
              { key: "grade23", title: "成绩23", id: "grade23" },
              { key: "grade24", title: "成绩24", id: "grade24" },
              { key: "grade25", title: "成绩25", id: "grade25" },
            ],
          },
          { key: "grade3", title: "成绩3" },
          { key: "grade4", title: "成绩4" },
          { key: "grade5", title: "成绩5" },
        ],
      },
      {
        key: "detail",
        title: "详情",
        children: [
          { key: "detail1", title: "详情1" },
          { key: "detail2", title: "详情2" },
          { key: "detail3", title: "详情3" },
          { key: "detail4", title: "详情4" },
          { key: "detail5", title: "详情5" },
        ],
      },
    ],
    breadData: [],
    iframeRouter: ""
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },

    *changeBreadData({ payload }, { select, put }) {
      const { breadData } = yield select((state) => state.homePage);
      const { id } = payload;
      var hasIndex;
      breadData.map((item, index) => {
        if (item.id === id) {
          hasIndex = index;
        }
        return null;
      });

      if (!hasIndex && hasIndex !== 0) {
        breadData.push({ ...payload });
      } else {
        breadData.splice(hasIndex + 1)
      }
      yield put({
        type: "save",
        payload: {
          breadData,
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
