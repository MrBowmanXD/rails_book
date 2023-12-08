import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="close-button"
export default class extends Controller {
  close() {
    this.element.parentNode.style.display = "none";
  }
}
