console.log("🔵 Payback Extension Loaded");

function deepQuerySelectorAll(root, selector) {
    let elements = [];
    let nodes = root.querySelectorAll('*');
    
    nodes.forEach(node => {
        if (node.shadowRoot) {
            elements = elements.concat(deepQuerySelectorAll(node.shadowRoot, selector));
        }
    });
    
    elements = elements.concat([...root.querySelectorAll(selector)]);
    return elements;
}

function activateCoupons() {
    const buttons = deepQuerySelectorAll(document, "button");

    let count = 0;

    buttons.forEach(btn => {
        const t = btn.innerText.trim().toLowerCase();

        if (t.includes("jetzt aktivieren")) {
            if (!btn.disabled) {
                btn.click();
                count++;
                console.log("🟢 Activated coupon:", btn.innerText);
            }
        }
    });

    if (count === 0) {
        console.log("⚠️ No 'Jetzt aktivieren' buttons found.");
    } else {
        console.log(`✅ Activated ${count} coupon(s).`);
    }
}

setTimeout(() => {
    console.log("🔵 Running activator…");
    activateCoupons();
}, 3000);
