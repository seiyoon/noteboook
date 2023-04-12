const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080', // 접속하려는 서버의 루트 url
            changeOrigin: true,
        })
    )
}

// 이렇게 하면 로컬 환경에서 /api로 시작하는 url로 보내는 요청에 대해
// 브라우저는 http://localhost:3000/api로 요청을 보낸 것으로 알고 있지만
// 사실 뒤에서 웹팩이 http:localhost:8080으로 요청을 프록시해줘서 cors 정책 지킨것처럼 속임
// -> 프록싱으로 cors 정책을 우회할 수 있게 됨..!
// axios.get("/api/add-board") = axios.get("http://localhost:8080/api/add-board")