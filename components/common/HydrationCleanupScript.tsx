export default function HydrationCleanupScript() {
  const cleanupScript = `
(function () {
  function cleanUserSelectStyle() {
    try {
      var nodes = document.querySelectorAll('div[hidden][style], template[style], script[style]');
      for (var i = 0; i < nodes.length; i += 1) {
        var node = nodes[i];
        if (!node || !node.style) continue;
        var inlineStyle = node.getAttribute('style') || '';
        var onlyUserSelectAuto = inlineStyle.replace(/\s/g, '').toLowerCase() === 'user-select:auto;'
          || inlineStyle.replace(/\s/g, '').toLowerCase() === 'user-select:auto';
        if (node.style.userSelect === 'auto') {
          node.style.removeProperty('user-select');
        }
        if (onlyUserSelectAuto || !(node.getAttribute('style') || '').trim()) {
          node.removeAttribute('style');
        }
      }
    } catch (error) {
      // Ignore cleanup errors. This script only prevents extension-added style attributes
      // from creating a hydration warning in the Next.js development overlay.
    }
  }

  cleanUserSelectStyle();

  try {
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var mutation = mutations[i];
        if (mutation.type !== 'attributes') continue;
        var target = mutation.target;
        if (!target || !target.style) continue;
        var tagName = target.tagName ? target.tagName.toLowerCase() : '';
        var isNextHiddenNode = tagName === 'div' && target.hasAttribute('hidden');
        if ((isNextHiddenNode || tagName === 'template' || tagName === 'script') && target.style.userSelect === 'auto') {
          target.style.removeProperty('user-select');
          if (!(target.getAttribute('style') || '').trim()) {
            target.removeAttribute('style');
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ['style']
    });
  } catch (error) {
    // No-op for older browsers.
  }
})();`;

  return <script dangerouslySetInnerHTML={{ __html: cleanupScript }} />;
}
