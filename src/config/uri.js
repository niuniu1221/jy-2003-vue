// 指定代理的前缀
let prefix = "/api/";
// 导出
export default {
    // 城市信息获取
    getCity: prefix + "getCitiesInfo",
    // 正在热映数据获取
    getNowPlaying: prefix + "getNowPlayingFilmList",
    // 即将上映数据获取
    getComingSoon: prefix + "getComingSoonFilmList",
    // ...
};
