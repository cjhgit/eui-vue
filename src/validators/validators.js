import { Validator } from 'vee-validate';

// 自定义验证规则 
// 测试
Validator.extend('truthy', {
    getMessage: field => 'The ' + field + ' value is not truthy.',
    validate: value => value > 6
});
Validator.extend('id_card', {
    getMessage: field => '身份证格式错误.',
    validate: value => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value) 
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
});
Validator.extend('phone', {
    getMessage: field => '联系方式格式错误.',
	validate: value => /(^(\d{11})$|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(value)
	//电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
});
Validator.extend('cell_phone', {
    getMessage: field => '手机号格式错误.',
    validate: value => /^1[3|5|7|8|][0-9]{9}$/.test(value)
});
// Validator.extend('license_code', {
//     getMessage: field => '营业执照注册号格式错误.',
//     validate: value => /\d{15}/.test(value)
// });
Validator.extend('password', {
    getMessage: field => '6-16位,至少包含两类字符(大写/小写/数字/符号)',
    validate: value => /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/.test(value)
});


