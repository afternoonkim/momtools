const script = `
(function () {
  var DARK_START_HOUR = 21;
  var DARK_END_HOUR = 6;
  function shouldUseDarkMode(date) {
    var hour = date.getHours();
    return hour >= DARK_START_HOUR || hour < DARK_END_HOUR;
  }
  function applyMomToolsTheme() {
    var root = document.documentElement;
    var isDark = shouldUseDarkMode(new Date());
    root.setAttribute("data-momtools-theme", isDark ? "dark" : "light");
    root.style.colorScheme = isDark ? "dark" : "light";
  }
  applyMomToolsTheme();
  window.setInterval(applyMomToolsTheme, 60000);
})();
`;

export default function TimeBasedThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
