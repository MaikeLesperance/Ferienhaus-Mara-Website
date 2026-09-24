/* =====================================================================
   INHALTE VON FERIENHAUS MARA
   Geaendert mit dem Werkzeug "Fotoverwaltung" am 24.9.2026
   Nur die Zahlen zwischen den Anfuehrungszeichen aendern.
   ===================================================================== */

window.INHALTE = {
  preisProNacht: "90",
  preisWeiterePerson: "15",
  maxGaeste: "6",
  wohnflaeche: "80",
  preisHinweis: ""
};

/* Ab hier nichts aendern - traegt die Werte in die Seiten ein. */
(function () {
  function werteEintragen() {
    var werte = window.INHALTE || {};
    var stellen = document.querySelectorAll('[data-wert]');
    for (var i = 0; i < stellen.length; i++) {
      var name = stellen[i].getAttribute('data-wert');
      if (Object.prototype.hasOwnProperty.call(werte, name)) {
        if (stellen[i].textContent !== werte[name]) stellen[i].textContent = werte[name];
      }
    }
  }
  werteEintragen();
  var beobachter = null;
  if (window.MutationObserver && document.documentElement) {
    beobachter = new MutationObserver(werteEintragen);
    beobachter.observe(document.documentElement, { childList: true, subtree: true });
  }
  function abschliessen() {
    werteEintragen();
    if (beobachter) { beobachter.disconnect(); beobachter = null; }
  }
  document.addEventListener('DOMContentLoaded', abschliessen);
  window.addEventListener('load', abschliessen);
})();
