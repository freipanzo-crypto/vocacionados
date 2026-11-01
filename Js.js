(function() {
    var btn = document.getElementById("menuBtn"),
        menu = document.getElementById("menu");
    btn.addEventListener("click", function() {
        var o = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", o)
    });
    menu.addEventListener("click", function(e) {
        if (e.target.tagName === "A") {
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false")
        }
    });

    function segundoDomingo(ano, mes) {
        var d = new Date(ano, mes, 1),
            primeiro = 1 + ((7 - d.getDay()) % 7);
        return new Date(ano, mes, primeiro + 7);
    }
    var hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    ver
    alvo = segundoDomingo(hoje.getFullYear(), hoje.getMonth());
    if (alvo < hoje) { alvo = segundoDomingo(hoje.getFullYear(), hoje.getMonth() + 1) }
    var dias = Math.round((alvo - hoje) / 86400000);
    document.getElementById("proxData").textContent = alvo.toLocaleDateString("pt-PT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    document.getElementById("proxFalta").textContent = dias === 0 ? "É hoje! Esperamos por ti." : dias === 1 ? "É amanhã!" : "Faltam " + dias + " dias.";
    document.getElementById("ano").textContent = hoje.getFullYear();

    var els = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function(es) {
            es.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add("in");
                    io.unobserve(e.target)
                }
            })
        }, { threshold: .12 });
        els.forEach(function(el) { io.observe(el) });
    } else { els.forEach(function(el) { el.classList.add("in") }) }
})();