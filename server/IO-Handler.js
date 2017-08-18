/**
 * Created by Administrator on 2017/8/18.
 */
module.exports = exports = function (socket, req) {
  SocketExtender(socket, req);//将要导出的方法，也就是当前js文件中最大的方法，socket为方法所需要的参数
};
function SocketExtender(socket) {
  console.log("你是猪吗？这是怼上了connection的节奏")
}
