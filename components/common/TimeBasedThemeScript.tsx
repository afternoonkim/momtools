const script = `
(function () {
  function applyMomToolsLightTheme() {
    var root = document.documentElement;
    root.setAttribute("data-momtools-theme", "light");
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
  applyMomToolsLightTheme();
})();
`;

export default function TimeBasedThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
