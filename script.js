function calculate() {
    let travel = Number(document.getElementById("travel").value);
    let electricity = Number(document.getElementById("electricity").value);
    let waste = Number(document.getElementById("waste").value);
    let food = Number(document.getElementById("food").value);

    let total =
        (travel * 0.21) +
        (electricity * 0.82) +
        (waste * 0.5) +
        food;

    document.getElementById("result").innerHTML =
        "Estimated CO₂ Footprint: " + total.toFixed(2) + " kg";

    document.getElementById("tips").innerHTML =
        "<h3>Suggestions</h3>" +
        "<p>Use public transport, reduce electricity consumption, recycle waste, and choose sustainable food options.</p>";
}
