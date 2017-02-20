export const getRelativeTime = function (time) {
    var endDate = new Date();
    var end = endDate.getTime();
    var startDate = new Date(time);
    var start = startDate.getTime();

    var time = end - start;
    if (time < 10 * 1000) {
        return '刚刚';
    } else if (time < 60 * 1000) {
        return Math.floor(time / 1000) + '秒前';
    } else if (time < 60 * 60 * 1000) {
        return Math.floor(time / 1000 / 60) + '分钟前';
    } else if (time < 60 * 60 * 24 * 1000) {
        return Math.floor(time / 1000 / 60 / 60) + '小时前';
    } else if (time < 60 * 60 * 24 * 1000 * 30) {
        return Math.floor(time / 1000 / 60 / 60 / 24) + '天前';
    } else if (startDate.getFullYear() === endDate.getFullYear()) { //今年并且大于30天显示具体月日
        return startDate.getMonth() + '月' + startDate.getDate() + '日';
    } else { //大于今年显示年月日
        return startDate.getFullYear() + '年' + startDate.getMonth() + '月' + startDate.getDay() + '日';
    }
};