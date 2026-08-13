// URL 净化：清理外部来源附带的脏路径、跟踪参数与冗余哈希（如 /foo?spm=...、#work）。
// 说明：#work 是默认路由（无哈希即作品页），保留只会弄脏分享链接；仅 #about 作为有效深链保留。
// 必须是外部文件而非内联脚本：站点的 CSP(script-src 'self') 会阻止内联脚本执行。
(function () {
  var h = window.location.hash;
  var target = "/" + (h === "#about" ? "#about" : "");
  if (
    window.location.pathname !== "/" ||
    window.location.search ||
    window.location.hash !== target
  ) {
    window.history.replaceState(null, "", target);
  }
})();
