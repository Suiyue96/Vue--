    /*
*包含n个接口请求函数的模块
*接口实例化
*把接口列出来，一个个写
*函数的返回值：promise
*/
import ajax from './ajax'
//1、根据经纬度获取位置详情<br/>
//http://localhost:3000/position/40.10038,116.36867
//我需要geohash（经度和纬度）值传给ajax函数
// export function reqAddress(latitude,longtitude){}
//query 问号后面的参数这么传值
// export const reqAddress = (geohash) => ajax(`/position/`,{geohash},);
//param 传参的方式
//后面用的时候直接调用这个函数并传参就好了（不需要单独传递data参数）
export const reqAddress = (geohash) => ajax(`api/position/${geohash}`);
//相当于
/*export const reqAddress = function(geohash){
    //返回的是ajax请求之后的结果
    return ajax();
}*/

//2、获取食品分类列表<br/>
export const reqCategorys = () => ajax(`api/index_category`);

//3、根据经纬度获取商铺列表<br/>
// 因为这里是需要传query参数的请求，需要传递data值让ajax方法去拼接参数
export const reqShops = ({latitude,longtitude}) => ajax(`api/shops`,{latitude,longtitude});

//4、根据经纬度和关键字搜索商铺列表<br/>
export const reqSearchShops= ({geohash,keyword}) => ajax(`api/search_shops`,{geohash,keyword});

//5、获取一次性验证码，无参数请求<br/>
export const reqCaptcha = ({latitude,longtitude}) => ajax(`api/captcha`);

//6、用户名密码登陆<br/>*****检查是否正确******
// 封装请求体，需要用query参数进行封装，而不是直接塞进url中
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(`api/login_pwd`,{name,pwd,captcha},"POST");

//7、发送短信验证码<br/>
export const reqSendCode = ({phone}) => ajax(`api/sendcode`,{phone});

//8、手机号验证码登陆<br/>
export const reqSmsLogin = ({phone,code}) => ajax(`api/login_sms`,{phone,code},"POST");

//9、根据会话获取用户信息<br/>
export const reqUser = () => ajax(`api/userinfo`);

//10、用户登出<br/>
export const reqLogout = () => ajax(`api/logout`);
