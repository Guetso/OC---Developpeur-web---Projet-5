class Camera {
  // Correspond à un modèle de caméra présent dans le catalogue du site
  constructor (Id, Name, Price, Lenses) {
    this.id = Id
    this.name = Name
    this.price = Price
    this.lenses = Lenses
  }
}

export { Camera }
