interface Icon {
  getIconWidth(): number;
  getIconHeight(): number;
  paintIcon(): void;
}

class ImageProxy implements Icon {
  private realImage: Image;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  getIconWidth(): number {
    if (this.realImage) {
      return this.realImage.getIconWidth();
    } else {
      return 800;
    }
  }

  getIconHeight(): number {
    if (this.realImage) {
      return this.realImage.getIconHeight();
    } else {
      return 600;
    }
  }

  paintIcon(): void {
    if (!this.realImage) {
      this.realImage = new Image(this.url);
    }
    this.realImage.paintIcon();
  }
}

export {};
