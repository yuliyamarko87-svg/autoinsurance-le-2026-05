(function () {
  function init() {
    var form = document.querySelector('.cta-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var zip = (form.querySelector('input[name="zip"]') || {}).value || '';
      zip = (zip || '').replace(/[^0-9]/g, '').slice(0, 5);
      if (zip.length !== 5) {
        alert('Please enter a valid 5-digit ZIP code.');
        return;
      }
      // P2V/Lead Economy offer URL placeholder — Юля заменит на реальный трекинг-линк перед запуском
      var target = window.OFFER_URL || 'https://example.com/quote';
      var url = target + (target.indexOf('?') === -1 ? '?' : '&') + 'zip=' + encodeURIComponent(zip);
      window.location.href = url;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
