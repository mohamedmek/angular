import { Component } from "@angular/core";

@Component({
    selector: "app-second",
    templateUrl: "./second.component.html",
    styleUrls: ["./second.component.css"],
})
export class SecondComponent {
    public images = [
      "assets/images/1.jpg",
      "assets/images/2.jpg",
      "assets/images/3.jpg",
      "assets/images/4.jpg"
          ];

    public img = this.images[0];
    public slideInterval: any;
    public startSlider() {
        const that = this;
        this.slideInterval = setInterval(
            function (that: any) {
                const index = that.images.indexOf(that.img);
                if (index === that.images.length - 1) {
                    that.img = that.images[0];
                } else {
                    that.img = that.images[index + 1];
                }
            },
            1000,
            that
        );
    }

    public stopSlider() {
        clearInterval(this.slideInterval );
    }

    public slideNext() {
        this.img = this.images[this.images.indexOf(this.img) + 1] ?? this.images[this.images.length - 1];
    }

    public slidePrev() {
        this.img = this.images[this.images.indexOf(this.img) - 1] ?? this.images[0];
    }
}
