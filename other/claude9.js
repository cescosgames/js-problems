// ShoppingCart Class
// Build a ShoppingCart class that manages a list of items.
//
// The class should have:
// - A constructor that starts with an empty items array
// - addItem(name, price, qty) — adds an item to the cart
//     - If an item with the same name already exists, just increase its qty
// - removeItem(name) — removes an item from the cart entirely
//     - If the item doesn't exist, log "Item not found"
// - get total() — a getter that returns the total cost of all items (price * qty each)
// - applyDiscount(percent) — reduces every item's price by that percentage (e.g. 10 → 10% off)
// - printReceipt() — logs each item as "  ItemName x2 — $10.00"
//                    then logs "Total: $20.00" at the end
//
// Test cases:
// const cart = new ShoppingCart()
// cart.addItem("Apple", 1.50, 4)
// cart.addItem("Bread", 3.00, 1)
// cart.addItem("Apple", 1.50, 2)  // Apple qty should now be 6, not a duplicate entry
// cart.removeItem("Milk")         // "Item not found"
// console.log(cart.total)         // → 12  (Apple: 1.50*6=9, Bread: 3.00*1=3)
// cart.applyDiscount(10)          // 10% off everything
// cart.printReceipt()
// Expected receipt:
//   Apple x6 — $8.10
//   Bread x2.70 — wait, qty stays int, price changes
//   Total: $10.80

class ShoppingCart {
    constructor(items = []) {
        this.items = items;
    }

    addItem(name, price, qty) {
        if (this.items.some(obj => obj.name === name)) {
            const item = this.items.find(obj => obj.name === name);
            item.qty += qty
        } else {
            this.items.push({ name: name, price: price, qty: qty });
        }
    }

    removeItem(name) {
        // this can be cleaned up
        if (this.items.some(obj => obj.name === name)) {
            const item = this.items.find(obj => obj.name === name);
            const index = this.items.indexOf(item);
            this.items.splice(index, 1)
        } else {
            console.log(`Item not found`)
        }
    }

    get total() {
        let total = 0;
        this.items.forEach((item) => {
            let cost = item.price * item.qty;
            total += cost;
        })
        return total
    }

    applyDiscount(percent) {
        this.items.forEach((item) => {
            item.price = (item.price - (item.price * (percent / 100)))
        })
    }

    printReceipt() {
        this.items.forEach((item) => {
            console.log(`${item.name} x ${item.qty} - $${(item.price * item.qty).toFixed(2)}`)
        })
        console.log(`Total: $${this.total.toFixed(2)}`)
    }
}

const cart = new ShoppingCart();
cart.addItem("Apple", 1.50, 4);
cart.addItem("Bread", 3.00, 1);
cart.addItem("Apple", 1.50, 2);  // should merge, not duplicate
// cart.removeItem("Bread");        
cart.removeItem("Milk");         // "Item not found"
console.log(cart.total);         // → 12
cart.applyDiscount(10);
cart.printReceipt();
// Apple x6 — $8.10
// Bread x1 — $2.70
// Total: $10.80
