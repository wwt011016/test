import axios from 'axios'
// 局部混合
export const rejtel = {
  methods: {
    rejtel() {
      this.$bus.$emit("zdy", 111);
    },
  },
};
export const get_moreinfo = {
  methods: {
    get_moreinfo() {
      axios({
        method: "get",
        url: "http://localhost:3001/get_moreinfo",
      }).then((data) => {
        this.moreData = data.data;
      });
    },
  },
};
export const get_classfiy = {
  methods: {
    get_classfiy() {
      let classfiy_type = localStorage.getItem('classfiy_type')
      this.class_type = classfiy_type
      axios({
        method: 'get',
        url: 'http://localhost:3001/get_classfiy',
        params: {
          classfiy_type: classfiy_type,
        },
      }).then((data) => {
        this.moreData = data.data
      })
    },
  },
};