class Cartline {
  // Correspond à une ligne du panier
  constructor (Id, Name, Lense, Qte, Price) {
    this.id = Id
    this.name = Name
    this.lense = Lense
    this.qte = Qte
    this.price = Price
    this.subtotal = parseInt(this.qte) * parseInt(this.price)
  }
}

export { Cartline }
