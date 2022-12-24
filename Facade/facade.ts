/**
 * adapter와는 다르게 인터페이스를 단순한게 만드는 것에 목적이 있다.
 */
class HomeTheaterFacade {
    constructor(
        private amp: Amplifier,
        private tuner: Tuner,
        private dvd: DvdPlayer,
        private cd: CdPlayer,
        private projector: Projector,
        private screen: Screen,
        private lights: TheaterLights,
        private popper: PopcornPopper
    ) {}
    
    watchMovie(movie: string) {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd();
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }
    
    endMovie() {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }
}

function HomeTheaterTestDrive {
    const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
        new Amplifier(),
        new Tuner(),
        new DvdPlayer(),
        new CdPlayer(),
        new Projector(),
        new Screen(),
        new TheaterLights(),
        new PopcornPopper()
    )

    homeTheater.watchMovie("Raiders of the Lost Ark");
}