window.onload = function() {
  var addressBookObj = {
    storage: window.localStorage,
    addressBookTable: document.getElementById('addressBookTable'),
    userName: document.getElementById('userName'),
    userPhone: document.getElementById('userPhone'),
    init: function() {
      this.initTableData();
      this.addUser();
      this.deleteUserInfo();
    },
    /* 初始化表格数据 */
    initTableData: function() {
      var docFragment = document.createDocumentFragment();
      for (var i = 0; i < this.storage.length; i++) {
        var key = this.storage.key(i);
        if (this.validateTelphone(key)) {
          var phone = key,
            name = this.storage.getItem(phone),
            user = {
              name: name,
              phone: phone
            },
            tr = this.createTrHtml(user);
          docFragment.appendChild(tr);
        }
      }
      this.addressBookTable.appendChild(docFragment);
    },
    /* 添加用户 */
    addUser: function() {
      var btnAdd = document.getElementById('btnAdd'),
        that = this;
      btnAdd.addEventListener('click', function() {
        var name = userName.value,
          phone = userPhone.value;
        if (name && phone) {
          if (that.validateTelphone(phone)) {
            if (!that.storage.getItem(phone)) {
              that.storage.setItem(phone, name);
              var user = {
                  name: name,
                  phone: phone
                },
                tr = that.createTrHtml(user);
              that.addressBookTable.appendChild(tr);
              that.clearUserInfo();
            } else {
              window.alert('该手机号已经存在,请勿重复添加!');
            }
          } else {
            window.alert('手机号码格式不正确,请重新输入!');
          }
        } else {
          window.alert('姓名和手机号都不能为空!');
        }
      }, false);
    },
    /* 创建Tr */
    createTrHtml: function(user) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + user.name + '</td>' +
        '<td>' + user.phone + '</td>' +
        '<td>' +
        '<input phone=' + user.phone + '' + ' type="button" value="删除"/>' +
        '</td>';
      return tr;
    },
    /* 清空用户信息 */
    clearUserInfo: function() {
      userName.value = '';
      userPhone.value = '';
    },
    /* 删除用户信息 */
    deleteUserInfo: function() {
      var that = this;
      this.addressBookTable.addEventListener('click', function(e) {
        if (e.target.type === 'button' && e.target.value === '删除') {
          var btnDelete = e.target,
            tr = btnDelete.parentNode.parentNode,
            phone = btnDelete.getAttribute('phone'),
            name = that.storage.getItem(phone);
          var optional = window.confirm('您确定要删除用户<' + name + '>吗？');
          if (optional) {
            that.storage.removeItem(phone);
            that.addressBookTable.removeChild(tr);
          }
        }
      }, false);
    },
    /* 校验手机号格式 */
    validateTelphone: function(phone) {
      var regPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      return regPhone.test(phone);
    }
  };
  addressBookObj.init();
};
